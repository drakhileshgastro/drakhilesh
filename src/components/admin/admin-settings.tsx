"use client";

import { useState } from "react";
import { Save, Clock, Phone, MapPin, Users, MessageSquare, CheckCircle } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

export default function AdminSettings() {
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState<{
    phone: string; address: string; timings_morning_open: string; timings_morning_close: string;
    timings_evening_open: string; timings_evening_close: string; sunday_closed: boolean;
    whatsapp_ack_enabled: boolean; whatsapp_reminder_enabled: boolean; whatsapp_review_enabled: boolean;
  }>({
    phone: DOCTOR.phone as string,
    address: `${DOCTOR.hospital}, HB Road, Ranchi, Jharkhand — 834001`,
    timings_morning_open: "10:00",
    timings_morning_close: "14:00",
    timings_evening_open: "17:00",
    timings_evening_close: "20:00",
    sunday_closed: true,
    whatsapp_ack_enabled: true,
    whatsapp_reminder_enabled: true,
    whatsapp_review_enabled: true,
  });

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const WHATSAPP_TEMPLATES = [
    {
      name: "Acknowledgement",
      trigger: "On lead creation (auto)",
      preview: `Namaskar {patient_name} ji,\n\nAapka appointment request mil gaya hai. Hamari team aapko 2 ghante ke andar call karegi.\n\nRequest ID: {lead_id}\nDoctor: Dr. Akhilesh Yadav\nClinic: Orchid Medical Centre, HB Road, Ranchi\n\n— Dr. Akhilesh Yadav Team`,
    },
    {
      name: "Appointment Confirmation",
      trigger: "Telecaller sends after call",
      preview: `Namaskar {patient_name} ji,\n\nAapka appointment confirm ho gaya hai.\nDate: {date} | Time: {time}\nClinic: Orchid Medical Centre, HB Road, Ranchi\n\nKuch badalna ho toh reply karein.`,
    },
    {
      name: "24hr Reminder",
      trigger: "Auto — 24 hours before appointment",
      preview: `Namaskar {name} ji,\n\nKal {date} ko {time} baje aapka appointment hai.\nPata: Orchid Medical Centre, HB Road, Ranchi.`,
    },
    {
      name: "Post-Visit Review",
      trigger: "Auto — 2 hours after Visited status",
      preview: `Namaskar {name} ji,\n\nUmeed hai aap theek hain. Agar hamare service se khush hain toh Google par review dein:\n{review_link}\n\nShukriya! — Dr. Akhilesh Yadav Team`,
    },
  ];

  return (
    <div className="space-y-5 max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-navy font-bold text-lg">Settings</h2>
          <p className="text-slate text-xs mt-0.5">Clinic configuration and WhatsApp templates</p>
        </div>
        <button onClick={handleSave}
          className="flex items-center gap-2 px-4 py-2.5 bg-teal text-white text-sm font-bold rounded-xl hover:bg-teal-dark transition-colors min-h-[44px]">
          {saved ? <><CheckCircle size={15} /> Saved!</> : <><Save size={15} /> Save Settings</>}
        </button>
      </div>

      {/* Clinic info */}
      <div className="bg-white rounded-2xl border border-gray-light p-5">
        <h3 className="text-navy font-bold text-sm mb-4 flex items-center gap-2">
          <Phone size={15} className="text-teal" /> Clinic Information
        </h3>
        <div className="space-y-3">
          <div>
            <label className="text-navy text-xs font-semibold block mb-1.5">Phone Number</label>
            <input value={settings.phone} onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
              className="w-full px-4 py-2.5 text-sm border border-gray-light bg-offwhite rounded-xl focus:outline-none focus:border-teal text-navy" />
          </div>
          <div>
            <label className="text-navy text-xs font-semibold block mb-1.5">
              <MapPin size={12} className="inline mr-1" />Address
            </label>
            <input value={settings.address} onChange={(e) => setSettings({ ...settings, address: e.target.value })}
              className="w-full px-4 py-2.5 text-sm border border-gray-light bg-offwhite rounded-xl focus:outline-none focus:border-teal text-navy" />
          </div>
        </div>
      </div>

      {/* OPD Timings */}
      <div className="bg-white rounded-2xl border border-gray-light p-5">
        <h3 className="text-navy font-bold text-sm mb-4 flex items-center gap-2">
          <Clock size={15} className="text-teal" /> OPD Timings
        </h3>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-navy text-xs font-semibold block mb-1.5">Morning Opens</label>
              <input type="time" value={settings.timings_morning_open}
                onChange={(e) => setSettings({ ...settings, timings_morning_open: e.target.value })}
                className="w-full px-4 py-2.5 text-sm border border-gray-light bg-offwhite rounded-xl focus:outline-none focus:border-teal text-navy" />
            </div>
            <div>
              <label className="text-navy text-xs font-semibold block mb-1.5">Morning Closes</label>
              <input type="time" value={settings.timings_morning_close}
                onChange={(e) => setSettings({ ...settings, timings_morning_close: e.target.value })}
                className="w-full px-4 py-2.5 text-sm border border-gray-light bg-offwhite rounded-xl focus:outline-none focus:border-teal text-navy" />
            </div>
            <div>
              <label className="text-navy text-xs font-semibold block mb-1.5">Evening Opens</label>
              <input type="time" value={settings.timings_evening_open}
                onChange={(e) => setSettings({ ...settings, timings_evening_open: e.target.value })}
                className="w-full px-4 py-2.5 text-sm border border-gray-light bg-offwhite rounded-xl focus:outline-none focus:border-teal text-navy" />
            </div>
            <div>
              <label className="text-navy text-xs font-semibold block mb-1.5">Evening Closes</label>
              <input type="time" value={settings.timings_evening_close}
                onChange={(e) => setSettings({ ...settings, timings_evening_close: e.target.value })}
                className="w-full px-4 py-2.5 text-sm border border-gray-light bg-offwhite rounded-xl focus:outline-none focus:border-teal text-navy" />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {DAYS.map((day) => (
              <span key={day} className="px-3 py-1.5 bg-teal-light text-teal text-xs font-medium rounded-full">{day}</span>
            ))}
            <span className={`px-3 py-1.5 text-xs font-medium rounded-full ${settings.sunday_closed ? "bg-red-100 text-red-600" : "bg-teal-light text-teal"}`}>
              Sunday {settings.sunday_closed ? "(Closed)" : "(Open)"}
            </span>
          </div>
        </div>
      </div>

      {/* WhatsApp Templates */}
      <div className="bg-white rounded-2xl border border-gray-light p-5">
        <h3 className="text-navy font-bold text-sm mb-4 flex items-center gap-2">
          <MessageSquare size={15} className="text-teal" /> WhatsApp Message Templates
        </h3>
        <div className="space-y-3">
          {WHATSAPP_TEMPLATES.map((template) => (
            <div key={template.name} className="bg-offwhite rounded-xl p-4 border border-gray-light">
              <div className="flex items-center justify-between mb-2">
                <p className="text-navy font-bold text-xs">{template.name}</p>
                <span className="text-[10px] bg-teal-light text-teal px-2 py-0.5 rounded-full font-medium">{template.trigger}</span>
              </div>
              <pre className="text-slate text-[11px] leading-relaxed whitespace-pre-wrap font-hindi">{template.preview}</pre>
            </div>
          ))}
        </div>
      </div>

      {/* Automation toggles */}
      <div className="bg-white rounded-2xl border border-gray-light p-5">
        <h3 className="text-navy font-bold text-sm mb-4 flex items-center gap-2">
          <Users size={15} className="text-teal" /> Automation Settings
        </h3>
        <div className="space-y-3">
          {[
            { key: "whatsapp_ack_enabled", label: "Auto WhatsApp Acknowledgement on new lead", desc: "Sends immediately when form is submitted" },
            { key: "whatsapp_reminder_enabled", label: "24hr Appointment Reminder (cron)", desc: "Auto-sent 24 hours before confirmed appointment" },
            { key: "whatsapp_review_enabled", label: "Post-Visit Review Request", desc: "Auto-sent 2 hours after patient is marked Visited" },
          ].map((item) => (
            <div key={item.key} className="flex items-start justify-between gap-4">
              <div>
                <p className="text-navy font-semibold text-sm">{item.label}</p>
                <p className="text-gray-muted text-xs mt-0.5">{item.desc}</p>
              </div>
              <button
                onClick={() => setSettings({ ...settings, [item.key]: !settings[item.key as keyof typeof settings] })}
                className={`w-11 h-6 rounded-full transition-colors flex-shrink-0 relative ${settings[item.key as keyof typeof settings] ? "bg-teal" : "bg-gray-light"}`}
              >
                <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${settings[item.key as keyof typeof settings] ? "translate-x-5" : "translate-x-0.5"}`} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
