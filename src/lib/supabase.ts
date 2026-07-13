import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type LeadSource =
  | "Website Form"
  | "Chatbot"
  | "WhatsApp"
  | "Google Ads"
  | "Facebook"
  | "Walk-in"
  | "Referral";

export type LeadStatus =
  | "New"
  | "Called"
  | "Confirmed"
  | "Visited"
  | "No-answer"
  | "Cancelled"
  | "Follow-up";

export interface Lead {
  lead_id: string;
  patient_name: string;
  patient_phone: string;
  patient_city: string;
  condition: string;
  preferred_date?: string;
  preferred_time?: string;
  source: LeadSource;
  status: LeadStatus;
  assigned_to?: string;
  notes?: string;
  follow_up_date?: string;
  confirmed_datetime?: string;
  acknowledgement_sent: boolean;
  confirmation_sent?: boolean;
  created_at: string;
  visit_count: number;
}

export interface CreateLeadInput {
  patient_name: string;
  patient_phone: string;
  patient_city: string;
  condition: string;
  preferred_date?: string;
  preferred_time?: string;
  source: LeadSource;
}

export async function createLead(
  data: CreateLeadInput
): Promise<{ success: boolean; lead_id?: string; error?: string }> {
  const insertData: Record<string, unknown> = {
    patient_name: data.patient_name,
    patient_phone: data.patient_phone,
    patient_city: data.patient_city,
    condition: data.condition,
    source: data.source,
    status: "New",
    acknowledgement_sent: false,
    visit_count: 0,
  };

  if (data.preferred_date) insertData.preferred_date = data.preferred_date;
  if (data.preferred_time) insertData.preferred_time = data.preferred_time;

  const { data: lead, error } = await supabase
    .from("gastro_leads")
    .insert([insertData])
    .select("lead_id")
    .single();

  if (error) {
    // Column doesn't exist yet (migration not run) — retry without new columns
    if (error.code === "42703" || error.message?.includes("column")) {
      const safeData = {
        patient_name: data.patient_name,
        patient_phone: data.patient_phone,
        patient_city: data.patient_city,
        condition: data.condition,
        source: data.source,
        status: "New",
        acknowledgement_sent: false,
        visit_count: 0,
        ...(data.preferred_date && { preferred_date: data.preferred_date }),
      };
      const { data: lead2, error: error2 } = await supabase
        .from("gastro_leads")
        .insert([safeData])
        .select("lead_id")
        .single();
      if (error2) return { success: false, error: error2.message };
      return { success: true, lead_id: lead2.lead_id };
    }
    return { success: false, error: error.message };
  }
  return { success: true, lead_id: lead.lead_id };
}
