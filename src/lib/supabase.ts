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
  source: LeadSource;
  status: LeadStatus;
  assigned_to?: string;
  notes?: string;
  follow_up_date?: string;
  confirmed_datetime?: string;
  acknowledgement_sent: boolean;
  created_at: string;
  visit_count: number;
}

export interface CreateLeadInput {
  patient_name: string;
  patient_phone: string;
  patient_city: string;
  condition: string;
  preferred_date?: string;
  source: LeadSource;
}

export async function createLead(data: CreateLeadInput): Promise<{ success: boolean; lead_id?: string; error?: string }> {
  const { data: lead, error } = await supabase
    .from("gastro_leads")
    .insert([{ ...data, status: "New", acknowledgement_sent: false, visit_count: 0 }])
    .select("lead_id")
    .single();

  if (error) return { success: false, error: error.message };
  return { success: true, lead_id: lead.lead_id };
}
