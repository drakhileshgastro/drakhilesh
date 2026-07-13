"use client";

import { useEffect, useState, useCallback } from "react";
import { createSupabaseBrowser } from "@/lib/supabase-browser";
import { Plus, CheckCircle2, Circle, Trash2, Flag, User, Calendar, Phone } from "lucide-react";
import { cn } from "@/lib/cn";
import { toast } from "sonner";

const supabase = createSupabaseBrowser();

type Priority = "low" | "medium" | "high" | "urgent";
type TaskStatus = "pending" | "in_progress" | "completed" | "cancelled";

interface Task {
  id: string;
  title: string;
  description?: string;
  lead_id?: string;
  patient_name?: string;
  patient_phone?: string;
  due_date?: string;
  priority: Priority;
  status: TaskStatus;
  assigned_to?: string;
  created_at: string;
  completed_at?: string;
}

const PRIORITY_CONFIG: Record<Priority, { label: string; color: string; bg: string; border: string }> = {
  urgent: { label: "Urgent", color: "text-red-700", bg: "bg-red-50", border: "border-red-200" },
  high: { label: "High", color: "text-orange-700", bg: "bg-orange-50", border: "border-orange-200" },
  medium: { label: "Medium", color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-200" },
  low: { label: "Low", color: "text-gray-600", bg: "bg-gray-50", border: "border-gray-200" },
};

function isOverdue(task: Task) {
  if (!task.due_date || task.status === "completed") return false;
  return new Date(task.due_date) < new Date();
}

function isToday(dateStr: string) {
  const d = new Date(dateStr);
  const today = new Date();
  return d.toDateString() === today.toDateString();
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [filter, setFilter] = useState<"all" | "pending" | "today" | "completed">("pending");
  const [tableReady, setTableReady] = useState(true);

  // New task form state
  const [form, setForm] = useState({
    title: "",
    description: "",
    patient_name: "",
    patient_phone: "",
    due_date: "",
    priority: "medium" as Priority,
  });
  const [saving, setSaving] = useState(false);

  const fetchTasks = useCallback(async () => {
    const { data, error } = await supabase
      .from("crm_tasks")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      if (error.message?.includes("relation") || error.code === "42P01") {
        setTableReady(false);
      }
      setLoading(false);
      return;
    }
    setTasks((data as Task[]) ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  async function addTask() {
    if (!form.title.trim()) { toast.error("Task title is required"); return; }
    setSaving(true);
    const { error } = await supabase.from("crm_tasks").insert([{
      title: form.title,
      description: form.description || null,
      patient_name: form.patient_name || null,
      patient_phone: form.patient_phone || null,
      due_date: form.due_date || null,
      priority: form.priority,
      status: "pending",
    }]);
    if (error) {
      toast.error("Failed to add task");
    } else {
      toast.success("Task added");
      setForm({ title: "", description: "", patient_name: "", patient_phone: "", due_date: "", priority: "medium" });
      setShowAdd(false);
      fetchTasks();
    }
    setSaving(false);
  }

  async function toggleStatus(task: Task) {
    const newStatus: TaskStatus = task.status === "completed" ? "pending" : "completed";
    const update: Partial<Task> = { status: newStatus };
    if (newStatus === "completed") update.completed_at = new Date().toISOString();

    const { error } = await supabase.from("crm_tasks").update(update).eq("id", task.id);
    if (!error) {
      setTasks((prev) => prev.map((t) => t.id === task.id ? { ...t, ...update } : t));
      if (newStatus === "completed") toast.success("Task completed!");
    }
  }

  async function deleteTask(id: string) {
    const { error } = await supabase.from("crm_tasks").delete().eq("id", id);
    if (!error) {
      setTasks((prev) => prev.filter((t) => t.id !== id));
      toast.success("Task deleted");
    }
  }

  const filtered = tasks.filter((t) => {
    if (filter === "pending") return t.status !== "completed" && t.status !== "cancelled";
    if (filter === "today") return t.due_date && isToday(t.due_date) && t.status !== "completed";
    if (filter === "completed") return t.status === "completed";
    return true;
  });

  const pendingCount = tasks.filter((t) => t.status !== "completed" && t.status !== "cancelled").length;
  const overdueCount = tasks.filter(isOverdue).length;
  const todayCount = tasks.filter((t) => t.due_date && isToday(t.due_date) && t.status !== "completed").length;
  const completedCount = tasks.filter((t) => t.status === "completed").length;

  if (!tableReady) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center space-y-3">
        <div className="text-3xl">🗂️</div>
        <h3 className="font-bold text-navy text-lg">Task List Not Set Up Yet</h3>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Run <strong>supabase-migration-002.sql</strong> in your Supabase SQL Editor to enable the task list.
        </p>
        <p className="text-gray-400 text-xs">Supabase Dashboard → SQL Editor → New query</p>
      </div>
    );
  }

  return (
    <div className="space-y-5">

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Pending", value: pendingCount, color: "text-blue-700", bg: "bg-blue-50" },
          { label: "Overdue", value: overdueCount, color: "text-red-700", bg: "bg-red-50" },
          { label: "Due Today", value: todayCount, color: "text-orange-700", bg: "bg-orange-50" },
          { label: "Completed", value: completedCount, color: "text-green-700", bg: "bg-green-50" },
        ].map((stat) => (
          <div key={stat.label} className={cn("rounded-2xl p-4 border border-gray-200", stat.bg)}>
            <p className={cn("text-2xl font-bold font-display", stat.color)}>{stat.value}</p>
            <p className="text-xs text-gray-500 font-sans mt-0.5 uppercase tracking-wider font-semibold">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filter + Add button row */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex gap-2 flex-wrap">
          {([
            { key: "pending", label: "Active" },
            { key: "today", label: "Due Today" },
            { key: "completed", label: "Completed" },
            { key: "all", label: "All" },
          ] as const).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-semibold border transition-colors",
                filter === key
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-gray-600 border-gray-200 hover:border-navy"
              )}
            >
              {label}
            </button>
          ))}
        </div>
        <button
          onClick={() => setShowAdd(!showAdd)}
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary/90 transition-colors"
        >
          <Plus size={14} /> Add Task
        </button>
      </div>

      {/* Add Task Form */}
      {showAdd && (
        <div className="bg-white rounded-2xl border border-primary/30 p-5 space-y-4">
          <h3 className="font-bold text-navy text-sm">New Task</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="sm:col-span-2">
              <input
                type="text"
                placeholder="Task title *"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-4 h-10 border border-gray-200 rounded-xl text-sm text-navy focus:outline-none focus:border-primary"
              />
            </div>
            <input
              type="text"
              placeholder="Patient name (optional)"
              value={form.patient_name}
              onChange={(e) => setForm({ ...form, patient_name: e.target.value })}
              className="px-4 h-10 border border-gray-200 rounded-xl text-sm text-navy focus:outline-none focus:border-primary"
            />
            <input
              type="tel"
              placeholder="Patient phone (optional)"
              value={form.patient_phone}
              onChange={(e) => setForm({ ...form, patient_phone: e.target.value })}
              className="px-4 h-10 border border-gray-200 rounded-xl text-sm text-navy focus:outline-none focus:border-primary"
            />
            <input
              type="date"
              value={form.due_date}
              onChange={(e) => setForm({ ...form, due_date: e.target.value })}
              className="px-4 h-10 border border-gray-200 rounded-xl text-sm text-navy focus:outline-none focus:border-primary"
            />
            <select
              value={form.priority}
              onChange={(e) => setForm({ ...form, priority: e.target.value as Priority })}
              className="px-4 h-10 border border-gray-200 rounded-xl text-sm text-navy focus:outline-none focus:border-primary bg-white"
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
              <option value="urgent">Urgent</option>
            </select>
            <textarea
              placeholder="Notes (optional)"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={2}
              className="sm:col-span-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-navy focus:outline-none focus:border-primary resize-none"
            />
          </div>
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => setShowAdd(false)}
              className="px-4 py-2 text-xs text-gray-500 border border-gray-200 rounded-xl hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={addTask}
              disabled={saving}
              className="px-5 py-2 bg-primary text-white text-xs font-bold rounded-xl disabled:opacity-60"
            >
              {saving ? "Saving..." : "Add Task"}
            </button>
          </div>
        </div>
      )}

      {/* Task list */}
      {loading ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center text-gray-400 text-sm">
          Loading tasks...
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <CheckCircle2 size={32} className="text-gray-200 mx-auto mb-3" />
          <p className="text-gray-500 text-sm font-medium">
            {filter === "completed" ? "No completed tasks yet" : "No tasks here — great work!"}
          </p>
          <button onClick={() => setShowAdd(true)} className="mt-3 text-primary text-xs font-semibold underline">
            + Add a task
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((task) => {
            const pc = PRIORITY_CONFIG[task.priority];
            const done = task.status === "completed";
            const overdue = isOverdue(task);

            return (
              <div
                key={task.id}
                className={cn(
                  "bg-white rounded-2xl border p-4 flex gap-3 items-start transition-opacity",
                  done ? "border-gray-100 opacity-60" : overdue ? "border-red-200" : "border-gray-200"
                )}
              >
                {/* Checkbox */}
                <button onClick={() => toggleStatus(task)} className="mt-0.5 flex-shrink-0">
                  {done
                    ? <CheckCircle2 size={20} className="text-green-500" />
                    : <Circle size={20} className="text-gray-300 hover:text-primary" />
                  }
                </button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 flex-wrap">
                    <p className={cn("text-sm font-semibold", done ? "line-through text-gray-400" : "text-navy")}>
                      {task.title}
                    </p>
                    <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full border", pc.color, pc.bg, pc.border)}>
                      <Flag size={8} className="inline mr-0.5" />
                      {pc.label}
                    </span>
                    {overdue && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200">
                        Overdue
                      </span>
                    )}
                  </div>
                  {task.description && (
                    <p className="text-xs text-gray-500 mt-0.5">{task.description}</p>
                  )}
                  <div className="flex flex-wrap gap-3 mt-1.5">
                    {task.patient_name && (
                      <span className="flex items-center gap-1 text-[11px] text-gray-500">
                        <User size={10} /> {task.patient_name}
                      </span>
                    )}
                    {task.patient_phone && (
                      <a href={`tel:${task.patient_phone}`} className="flex items-center gap-1 text-[11px] text-primary hover:underline">
                        <Phone size={10} /> {task.patient_phone}
                      </a>
                    )}
                    {task.due_date && (
                      <span className={cn("flex items-center gap-1 text-[11px]", overdue ? "text-red-600 font-semibold" : "text-gray-500")}>
                        <Calendar size={10} />
                        {new Date(task.due_date).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                        {isToday(task.due_date) && " · Today"}
                      </span>
                    )}
                  </div>
                </div>

                {/* Delete */}
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-gray-300 hover:text-red-500 transition-colors flex-shrink-0 mt-0.5"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
