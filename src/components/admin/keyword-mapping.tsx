"use client";

import { useEffect, useState, useCallback } from "react";
import { Search, TrendingUp, TrendingDown, Minus, Plus, Trash2, RefreshCw,
         Filter, AlertTriangle, CheckCircle, Clock, BookOpen, BarChart2 } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────────
interface KwRow {
  id: string;
  keyword: string;
  page_url: string;
  page_type: string;
  is_primary: boolean;
  intent: string;
  current_position: number | null;
  current_clicks: number;
  current_impressions: number;
  current_ctr: number | null;
  position_delta: number | null;
  updated_at: string;
}

interface OpportunityRow {
  keyword: string;
  url: string;
  title_hi: string | null;
  avg_position: number;
  total_clicks: number;
  total_impressions: number;
  avg_ctr_pct: number;
  days_tracked: number;
}

// ── Static Content Plan (full keyword universe from Phase 3 authority plan) ────
type KwPlanEntry = {
  keyword:  string;
  url:      string;
  category: string;
  type:     "page"|"blog"|"cost-guide"|"diet"|"location"|"faq";
  status:   "live"|"planned";
  intent:   "info"|"transactional"|"local"|"navigational";
  priority: "High"|"Medium"|"Low";
  vol?:     "High"|"Medium"|"Low";  // estimated monthly search volume
};

// Live blogs from blog-data.ts
const LIVE_BLOG_SLUGS = new Set([
  "fatty-liver-diet-hindi",
  "jaundice-symptoms-causes",
  "endoscopy-kya-hota-hai",
  "fatty-liver-reversal-ranchi",
  "painless-endoscopy-ranchi",
  "gallstones-dissolve-myths-india",
  "ibs-stress-indian-diet",
  "gerd-acid-reflux-cure-ranchi",
  "painless-colonoscopy-ranchi-cost-preparation",
  "chronic-constipation-cure-indian-diet",
  "liver-cirrhosis-stages-treatment-india",
  "acute-chronic-pancreatitis-diet-causes",
  "ulcerative-colitis-ibd-diet-management",
  "ercp-procedure-cbd-stones-ranchi",
]);

function blogStatus(slug: string): "live"|"planned" {
  return LIVE_BLOG_SLUGS.has(slug) ? "live" : "planned";
}

const CONTENT_PLAN: KwPlanEntry[] = [
  // ── LIVE WEBSITE PAGES ────────────────────────────────────────────────────
  { keyword: "best gastroenterologist in Ranchi",   url: "/",               category: "Core",       type: "page",     status: "live", intent: "navigational", priority: "High", vol: "High" },
  { keyword: "gastroenterologist near me Ranchi",   url: "/about",          category: "Core",       type: "page",     status: "live", intent: "navigational", priority: "High", vol: "High" },
  { keyword: "book gastro appointment Ranchi",       url: "/book",           category: "Core",       type: "page",     status: "live", intent: "transactional", priority: "High", vol: "Medium" },
  { keyword: "gastro conditions treatment Ranchi",  url: "/conditions",     category: "Core",       type: "page",     status: "live", intent: "local",        priority: "High", vol: "Medium" },
  { keyword: "stomach symptoms Hindi guide",         url: "/symptoms",       category: "Core",       type: "page",     status: "live", intent: "info",         priority: "High", vol: "Medium" },
  { keyword: "health blog Hindi Ranchi gastro",      url: "/blog",           category: "Core",       type: "page",     status: "live", intent: "info",         priority: "Medium", vol: "Low" },
  // Conditions (all live)
  { keyword: "fatty liver treatment Ranchi",         url: "/conditions/fatty-liver",        category: "Conditions", type: "page", status: "live", intent: "local",        priority: "High", vol: "High" },
  { keyword: "jaundice (piliya) doctor Ranchi",      url: "/conditions/jaundice",           category: "Conditions", type: "page", status: "live", intent: "local",        priority: "High", vol: "High" },
  { keyword: "liver cirrhosis specialist Ranchi",   url: "/conditions/liver-cirrhosis",    category: "Conditions", type: "page", status: "live", intent: "local",        priority: "High", vol: "Medium" },
  { keyword: "hepatitis B C treatment Jharkhand",   url: "/conditions/hepatitis",          category: "Conditions", type: "page", status: "live", intent: "local",        priority: "High", vol: "Medium" },
  { keyword: "IBS treatment specialist Ranchi",     url: "/conditions/ibs",                category: "Conditions", type: "page", status: "live", intent: "local",        priority: "High", vol: "Medium" },
  { keyword: "acidity GERD specialist Ranchi",      url: "/conditions/acid-reflux",        category: "Conditions", type: "page", status: "live", intent: "local",        priority: "High", vol: "High" },
  { keyword: "gallstone (pittashay) doctor Ranchi", url: "/conditions/gallstone",          category: "Conditions", type: "page", status: "live", intent: "local",        priority: "High", vol: "High" },
  { keyword: "pancreatitis treatment Ranchi",        url: "/conditions/pancreatitis",       category: "Conditions", type: "page", status: "live", intent: "local",        priority: "Medium", vol: "Medium" },
  { keyword: "liver cancer specialist Jharkhand",   url: "/conditions/liver-cancer",       category: "Conditions", type: "page", status: "live", intent: "local",        priority: "High", vol: "Medium" },
  { keyword: "ulcerative colitis treatment Ranchi", url: "/conditions/ulcerative-colitis", category: "Conditions", type: "page", status: "live", intent: "local",        priority: "Medium", vol: "Low" },
  { keyword: "pet dard specialist Ranchi",           url: "/conditions/abdominal-pain",     category: "Conditions", type: "page", status: "live", intent: "local",        priority: "High", vol: "High" },
  { keyword: "peptic ulcer treatment Ranchi",        url: "/conditions/peptic-ulcer",       category: "Conditions", type: "page", status: "live", intent: "local",        priority: "Medium", vol: "Medium" },
  { keyword: "GI bleeding specialist Ranchi",        url: "/conditions/gi-bleeding",        category: "Conditions", type: "page", status: "live", intent: "local",        priority: "High", vol: "Low" },
  { keyword: "H pylori dyspepsia Ranchi",            url: "/conditions/h-pylori-dyspepsia", category: "Conditions", type: "page", status: "live", intent: "local",        priority: "Medium", vol: "Medium" },
  { keyword: "liver transplant consultation Ranchi", url: "/conditions/liver-transplant",   category: "Conditions", type: "page", status: "live", intent: "transactional", priority: "High", vol: "Low" },
  // Procedures (3 live)
  { keyword: "endoscopy doctor Ranchi",              url: "/procedures/endoscopy",    category: "Procedures", type: "page", status: "live", intent: "local",         priority: "High", vol: "High" },
  { keyword: "colonoscopy specialist Ranchi",        url: "/procedures/colonoscopy",  category: "Procedures", type: "page", status: "live", intent: "local",         priority: "High", vol: "Medium" },
  { keyword: "ERCP specialist Jharkhand",            url: "/procedures/ercp",         category: "Procedures", type: "page", status: "live", intent: "local",         priority: "High", vol: "Low" },
  // Symptoms (10 live)
  { keyword: "stomach pain cause treatment Hindi",   url: "/symptoms/stomach-pain",          category: "Symptoms", type: "page", status: "live", intent: "info", priority: "High", vol: "High" },
  { keyword: "gas bloating treatment Hindi",         url: "/symptoms/gas-bloating",          category: "Symptoms", type: "page", status: "live", intent: "info", priority: "High", vol: "High" },
  { keyword: "acidity heartburn treatment",          url: "/symptoms/acidity",               category: "Symptoms", type: "page", status: "live", intent: "info", priority: "High", vol: "High" },
  { keyword: "constipation (kabj) cure Hindi",       url: "/symptoms/constipation",          category: "Symptoms", type: "page", status: "live", intent: "info", priority: "High", vol: "High" },
  { keyword: "diarrhoea (dast) treatment Hindi",     url: "/symptoms/diarrhoea",             category: "Symptoms", type: "page", status: "live", intent: "info", priority: "High", vol: "High" },
  { keyword: "vomiting nausea treatment Hindi",      url: "/symptoms/vomiting",              category: "Symptoms", type: "page", status: "live", intent: "info", priority: "Medium", vol: "Medium" },
  { keyword: "blood in stool cause doctor",          url: "/symptoms/blood-in-stool",        category: "Symptoms", type: "page", status: "live", intent: "info", priority: "High", vol: "Medium" },
  { keyword: "difficulty swallowing cause Hindi",    url: "/symptoms/difficulty-swallowing", category: "Symptoms", type: "page", status: "live", intent: "info", priority: "Medium", vol: "Low" },
  { keyword: "unexplained weight loss doctor",       url: "/symptoms/weight-loss",           category: "Symptoms", type: "page", status: "live", intent: "info", priority: "High", vol: "Medium" },
  { keyword: "piliya (jaundice) ke lakshan Hindi",   url: "/symptoms/jaundice",              category: "Symptoms", type: "page", status: "live", intent: "info", priority: "High", vol: "High" },
  // Locations (11 live)
  { keyword: "gastroenterologist Jamshedpur",  url: "/locations/jamshedpur", category: "Locations", type: "location", status: "live", intent: "local", priority: "High", vol: "Medium" },
  { keyword: "gastroenterologist Bokaro",      url: "/locations/bokaro",     category: "Locations", type: "location", status: "live", intent: "local", priority: "High", vol: "Medium" },
  { keyword: "gastroenterologist Dhanbad",     url: "/locations/dhanbad",    category: "Locations", type: "location", status: "live", intent: "local", priority: "High", vol: "Medium" },
  { keyword: "gastroenterologist Hazaribagh",  url: "/locations/hazaribagh", category: "Locations", type: "location", status: "live", intent: "local", priority: "High", vol: "Medium" },
  { keyword: "gastroenterologist Giridih",     url: "/locations/giridih",    category: "Locations", type: "location", status: "live", intent: "local", priority: "Medium", vol: "Low" },
  { keyword: "gastroenterologist Deoghar",     url: "/locations/deoghar",    category: "Locations", type: "location", status: "live", intent: "local", priority: "Medium", vol: "Low" },
  { keyword: "gastroenterologist Palamu",      url: "/locations/palamu",     category: "Locations", type: "location", status: "live", intent: "local", priority: "Medium", vol: "Low" },
  { keyword: "gastroenterologist Ramgarh",     url: "/locations/ramgarh",    category: "Locations", type: "location", status: "live", intent: "local", priority: "Medium", vol: "Low" },
  { keyword: "gastroenterologist Chaibasa",    url: "/locations/chaibasa",   category: "Locations", type: "location", status: "live", intent: "local", priority: "Medium", vol: "Low" },
  { keyword: "gastroenterologist Lohardaga",   url: "/locations/lohardaga",  category: "Locations", type: "location", status: "live", intent: "local", priority: "Low",    vol: "Low" },
  { keyword: "gastroenterologist Simdega",     url: "/locations/simdega",    category: "Locations", type: "location", status: "live", intent: "local", priority: "Low",    vol: "Low" },

  // ── LIVE BLOGS ────────────────────────────────────────────────────────────
  { keyword: "fatty liver diet chart Hindi",                url: "/blog/fatty-liver-diet-hindi",                         category: "Blogs–Diet",      type: "blog", status: blogStatus("fatty-liver-diet-hindi"), intent: "info", priority: "High", vol: "High" },
  { keyword: "piliya (jaundice) causes symptoms",           url: "/blog/jaundice-symptoms-causes",                       category: "Blogs–Conditions", type: "blog", status: blogStatus("jaundice-symptoms-causes"), intent: "info", priority: "High", vol: "High" },
  { keyword: "endoscopy kya hota hai Hindi",                url: "/blog/endoscopy-kya-hota-hai",                         category: "Blogs–Procedures", type: "blog", status: blogStatus("endoscopy-kya-hota-hai"), intent: "info", priority: "High", vol: "High" },
  { keyword: "fatty liver reversal Ranchi treatment",       url: "/blog/fatty-liver-reversal-ranchi",                    category: "Blogs–Conditions", type: "blog", status: blogStatus("fatty-liver-reversal-ranchi"), intent: "local", priority: "High", vol: "High" },
  { keyword: "painless endoscopy Ranchi",                   url: "/blog/painless-endoscopy-ranchi",                      category: "Blogs–Procedures", type: "blog", status: blogStatus("painless-endoscopy-ranchi"), intent: "local", priority: "High", vol: "High" },
  { keyword: "gallstones dissolve myth India",              url: "/blog/gallstones-dissolve-myths-india",                category: "Blogs–Myths",      type: "blog", status: blogStatus("gallstones-dissolve-myths-india"), intent: "info", priority: "Medium", vol: "Medium" },
  { keyword: "IBS stress Indian diet",                      url: "/blog/ibs-stress-indian-diet",                         category: "Blogs–Diet",       type: "blog", status: blogStatus("ibs-stress-indian-diet"), intent: "info", priority: "Medium", vol: "Medium" },
  { keyword: "GERD acid reflux cure Ranchi",                url: "/blog/gerd-acid-reflux-cure-ranchi",                   category: "Blogs–Conditions", type: "blog", status: blogStatus("gerd-acid-reflux-cure-ranchi"), intent: "local", priority: "High", vol: "High" },
  { keyword: "painless colonoscopy Ranchi cost",            url: "/blog/painless-colonoscopy-ranchi-cost-preparation",   category: "Blogs–Procedures", type: "blog", status: blogStatus("painless-colonoscopy-ranchi-cost-preparation"), intent: "local", priority: "High", vol: "High" },
  { keyword: "chronic constipation cure Indian diet",       url: "/blog/chronic-constipation-cure-indian-diet",          category: "Blogs–Diet",       type: "blog", status: blogStatus("chronic-constipation-cure-indian-diet"), intent: "info", priority: "High", vol: "High" },
  { keyword: "liver cirrhosis stages treatment India",      url: "/blog/liver-cirrhosis-stages-treatment-india",         category: "Blogs–Conditions", type: "blog", status: blogStatus("liver-cirrhosis-stages-treatment-india"), intent: "info", priority: "High", vol: "Medium" },
  { keyword: "pancreatitis diet causes treatment",          url: "/blog/acute-chronic-pancreatitis-diet-causes",         category: "Blogs–Diet",       type: "blog", status: blogStatus("acute-chronic-pancreatitis-diet-causes"), intent: "info", priority: "Medium", vol: "Medium" },
  { keyword: "ulcerative colitis IBD diet management",      url: "/blog/ulcerative-colitis-ibd-diet-management",         category: "Blogs–Diet",       type: "blog", status: blogStatus("ulcerative-colitis-ibd-diet-management"), intent: "info", priority: "Medium", vol: "Medium" },
  { keyword: "ERCP procedure CBD stones Ranchi",            url: "/blog/ercp-procedure-cbd-stones-ranchi",               category: "Blogs–Procedures", type: "blog", status: blogStatus("ercp-procedure-cbd-stones-ranchi"), intent: "local", priority: "High", vol: "Medium" },

  // ── PLANNED BLOGS — FATTY LIVER ───────────────────────────────────────────
  { keyword: "fatty liver grade 1 2 3 difference Hindi",   url: "/blog/fatty-liver-grades-hindi",               category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "fatty liver symptoms male female Hindi",      url: "/blog/fatty-liver-symptoms-hindi",             category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "fatty liver ka desi ilaj",                    url: "/blog/fatty-liver-desi-ilaj",                  category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "High" },
  { keyword: "fatty liver mein kya nahi khana chahiye",     url: "/blog/fatty-liver-foods-to-avoid-hindi",       category: "Blogs–Diet",       type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "non-alcoholic fatty liver vs alcoholic",      url: "/blog/nafld-vs-alcoholic-fatty-liver",         category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },

  // ── PLANNED BLOGS — LIVER CIRRHOSIS ──────────────────────────────────────
  { keyword: "liver cirrhosis symptoms treatment Hindi",    url: "/blog/liver-cirrhosis-symptoms-hindi",         category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "Medium" },
  { keyword: "liver cirrhosis diet chart Hindi",            url: "/blog/liver-cirrhosis-diet-chart",             category: "Blogs–Diet",       type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "Medium" },
  { keyword: "liver cirrhosis survival time India",         url: "/blog/liver-cirrhosis-prognosis-india",        category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },
  { keyword: "cirrhosis aur liver transplant kab zaroori", url: "/blog/cirrhosis-liver-transplant-decision",    category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "Low" },

  // ── PLANNED BLOGS — JAUNDICE ──────────────────────────────────────────────
  { keyword: "piliya ka gharelu ilaj",                      url: "/blog/piliya-gharelu-ilaj-myths",              category: "Blogs–Myths",      type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "jaundice in newborn vs adult",                url: "/blog/jaundice-newborn-adult-difference",      category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },
  { keyword: "bilirubin level jaundice meaning Hindi",      url: "/blog/bilirubin-levels-jaundice-hindi",        category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },
  { keyword: "piliya mein kya khana chahiye",               url: "/blog/piliya-diet-chart-hindi",                category: "Blogs–Diet",       type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },

  // ── PLANNED BLOGS — HEPATITIS ─────────────────────────────────────────────
  { keyword: "hepatitis B treatment India Hindi",           url: "/blog/hepatitis-b-treatment-india",            category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "hepatitis C kya hai treatment Hindi",         url: "/blog/hepatitis-c-treatment-hindi",            category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "Medium" },
  { keyword: "hepatitis B vaccine family members",          url: "/blog/hepatitis-b-vaccine-family",             category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },
  { keyword: "hepatitis se liver cirrhosis kab hota hai",  url: "/blog/hepatitis-to-cirrhosis-progression",     category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Low" },

  // ── PLANNED BLOGS — IBS ───────────────────────────────────────────────────
  { keyword: "IBS kya hota hai symptoms Hindi",             url: "/blog/ibs-symptoms-causes-hindi",              category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "IBS aur anxiety connection Hindi",            url: "/blog/ibs-anxiety-gut-brain-hindi",            category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },
  { keyword: "IBS me fodmap diet kya hai",                  url: "/blog/ibs-fodmap-diet-hindi",                  category: "Blogs–Diet",       type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },
  { keyword: "IBS vs IBD difference Hindi",                 url: "/blog/ibs-vs-ibd-difference-hindi",            category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "Medium" },

  // ── PLANNED BLOGS — GERD/ACIDITY ─────────────────────────────────────────
  { keyword: "GERD vs acidity difference Hindi",            url: "/blog/gerd-vs-acidity-hindi",                  category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "acidity ka permanent ilaj",                   url: "/blog/acidity-permanent-cure-hindi",           category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "raat mein acidity kyon hoti hai",             url: "/blog/night-acidity-gerd-hindi",               category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "acidity me kya khaye kya na khaye chart",     url: "/blog/acidity-diet-chart-hindi",               category: "Blogs–Diet",       type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },

  // ── PLANNED BLOGS — GALLSTONES ────────────────────────────────────────────
  { keyword: "pittashay ki pathri ka ilaj operation",       url: "/blog/gallstone-operation-alternatives",       category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "gallstone diet plan Hindi Ranchi",            url: "/blog/gallstone-diet-hindi",                   category: "Blogs–Diet",       type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "bile duct stone symptoms treatment Hindi",    url: "/blog/bile-duct-stones-hindi",                 category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },
  { keyword: "gallstone surgery vs ERCP difference",        url: "/blog/gallstone-surgery-vs-ercp",              category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Low" },

  // ── PLANNED BLOGS — PANCREATITIS ──────────────────────────────────────────
  { keyword: "pancreatitis ke symptoms cause Hindi",        url: "/blog/pancreatitis-symptoms-hindi",            category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },
  { keyword: "pancreatitis diet Indian food",               url: "/blog/pancreatitis-diet-indian",               category: "Blogs–Diet",       type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },
  { keyword: "chronic pancreatitis treatment India",        url: "/blog/chronic-pancreatitis-treatment",         category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Low" },

  // ── PLANNED BLOGS — ULCERATIVE COLITIS ───────────────────────────────────
  { keyword: "ulcerative colitis kya hai symptoms Hindi",   url: "/blog/ulcerative-colitis-hindi",               category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },
  { keyword: "colitis mein konse foods nahi khane chahiye", url: "/blog/colitis-diet-foods-avoid-hindi",         category: "Blogs–Diet",       type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },
  { keyword: "IBD flare up management Hindi",               url: "/blog/ibd-flare-management-hindi",             category: "Blogs–Conditions", type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Low" },

  // ── PLANNED BLOGS — SYMPTOMS ──────────────────────────────────────────────
  { keyword: "blood in vomit causes treatment",             url: "/blog/blood-vomiting-causes-hindi",            category: "Blogs–Symptoms",   type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "black stool cause meaning",                   url: "/blog/black-stool-causes-hindi",               category: "Blogs–Symptoms",   type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "Medium" },
  { keyword: "liver swelling symptoms treatment Hindi",     url: "/blog/liver-swelling-symptoms-hindi",          category: "Blogs–Symptoms",   type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "Medium" },
  { keyword: "aankhon ka peela kyon hota hai",              url: "/blog/yellow-eyes-causes-hindi",               category: "Blogs–Symptoms",   type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "bahut thakaan liver ki bimari",               url: "/blog/fatigue-liver-disease-hindi",            category: "Blogs–Symptoms",   type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "skin ki khujli liver disease",                url: "/blog/skin-itching-liver-disease-hindi",       category: "Blogs–Symptoms",   type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },
  { keyword: "pet mein sujan (ascites) kya hai",            url: "/blog/ascites-abdominal-swelling-hindi",       category: "Blogs–Symptoms",   type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "Medium" },
  { keyword: "zyada dakar aana treatment Hindi",            url: "/blog/excessive-belching-treatment-hindi",     category: "Blogs–Symptoms",   type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },
  { keyword: "dark yellow urine cause liver",               url: "/blog/dark-urine-liver-disease-hindi",         category: "Blogs–Symptoms",   type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "Medium" },
  { keyword: "bhuk na lagna (loss of appetite) cause",      url: "/blog/loss-of-appetite-causes-hindi",          category: "Blogs–Symptoms",   type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },

  // ── PLANNED BLOGS — PROCEDURES ────────────────────────────────────────────
  { keyword: "endoscopy preparation fasting rules Hindi",   url: "/blog/endoscopy-preparation-guide-hindi",      category: "Blogs–Procedures", type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "colonoscopy preparation diet rules Hindi",    url: "/blog/colonoscopy-preparation-hindi",          category: "Blogs–Procedures", type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "FibroScan liver test kya hota hai",           url: "/blog/fibroscan-liver-test-hindi",             category: "Blogs–Procedures", type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "Medium" },
  { keyword: "liver biopsy procedure risks Hindi",          url: "/blog/liver-biopsy-guide-hindi",               category: "Blogs–Procedures", type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },
  { keyword: "EUS endoscopic ultrasound kya hota hai",      url: "/blog/eus-procedure-hindi",                    category: "Blogs–Procedures", type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Low" },
  { keyword: "endoscopy ke baad kya khana chahiye",         url: "/blog/endoscopy-post-diet-hindi",              category: "Blogs–Diet",       type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },

  // ── PLANNED BLOGS — MYTH-BUSTING ──────────────────────────────────────────
  { keyword: "liver detox drink myth truth",                url: "/blog/liver-detox-myths-hindi",                category: "Blogs–Myths",      type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "acidity antacid side effects truth",          url: "/blog/antacid-long-term-risks",                category: "Blogs–Myths",      type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "Medium" },
  { keyword: "desi nuskhe pet ke liye sach jhooth",         url: "/blog/desi-nuskhe-gastro-myths-hindi",         category: "Blogs–Myths",      type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "turmeric haldi liver benefit myth",           url: "/blog/haldi-liver-benefit-myth",               category: "Blogs–Myths",      type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },
  { keyword: "alcohol and fatty liver myth fact Hindi",     url: "/blog/alcohol-fatty-liver-myth-fact",          category: "Blogs–Myths",      type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },

  // ── PLANNED BLOGS — SEASONAL ──────────────────────────────────────────────
  { keyword: "summer mein pet ki bimari prevention",        url: "/blog/summer-stomach-disease-prevention",      category: "Blogs–Seasonal",   type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },
  { keyword: "monsoon mein piliya prevention Hindi",        url: "/blog/monsoon-jaundice-prevention-hindi",      category: "Blogs–Seasonal",   type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "winter mein acidity kyon badhti hai",         url: "/blog/winter-acidity-increase-hindi",          category: "Blogs–Seasonal",   type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },
  { keyword: "navratri fast aur acidity prevention",        url: "/blog/navratri-fast-acidity-prevention",       category: "Blogs–Seasonal",   type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "High" },
  { keyword: "ramzan mein pet ki dekhbhal",                 url: "/blog/ramzan-fasting-stomach-care-hindi",      category: "Blogs–Seasonal",   type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },

  // ── PLANNED BLOGS — PATIENT EDUCATION ────────────────────────────────────
  { keyword: "gastroenterologist se pehli baar milne tips", url: "/blog/first-gastro-visit-tips-hindi",          category: "Blogs–Patient Ed", type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "Medium" },
  { keyword: "endoscopy ke baad kya expect karein",         url: "/blog/after-endoscopy-recovery-hindi",         category: "Blogs–Patient Ed", type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "liver function test LFT results meaning",     url: "/blog/liver-function-test-interpretation",     category: "Blogs–Patient Ed", type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "ultrasound abdomen report kaise samjhe",      url: "/blog/abdominal-ultrasound-report-hindi",      category: "Blogs–Patient Ed", type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "High" },
  { keyword: "gastro medicines side effects kya kare",      url: "/blog/gastro-medicines-side-effects-hindi",    category: "Blogs–Patient Ed", type: "blog", status: "planned", intent: "info",         priority: "Medium", vol: "Medium" },
  { keyword: "colonoscopy ke baad recovery tips",           url: "/blog/colonoscopy-recovery-hindi",             category: "Blogs–Patient Ed", type: "blog", status: "planned", intent: "info",         priority: "High",   vol: "Medium" },

  // ── PLANNED COST GUIDE PAGES ──────────────────────────────────────────────
  { keyword: "endoscopy cost Ranchi Jharkhand",             url: "/blog/endoscopy-cost-ranchi",                  category: "Cost Guides",      type: "cost-guide", status: "planned", intent: "transactional", priority: "High",   vol: "High" },
  { keyword: "colonoscopy cost Ranchi 2025",                url: "/blog/colonoscopy-cost-ranchi",                category: "Cost Guides",      type: "cost-guide", status: "planned", intent: "transactional", priority: "High",   vol: "High" },
  { keyword: "ERCP procedure cost India Jharkhand",         url: "/blog/ercp-cost-india",                        category: "Cost Guides",      type: "cost-guide", status: "planned", intent: "transactional", priority: "High",   vol: "Medium" },
  { keyword: "FibroScan cost India 2025",                   url: "/blog/fibroscan-cost-india",                   category: "Cost Guides",      type: "cost-guide", status: "planned", intent: "transactional", priority: "High",   vol: "Medium" },
  { keyword: "liver biopsy cost Ranchi",                    url: "/blog/liver-biopsy-cost-ranchi",               category: "Cost Guides",      type: "cost-guide", status: "planned", intent: "transactional", priority: "Medium", vol: "Medium" },
  { keyword: "fatty liver treatment cost Ranchi",           url: "/blog/fatty-liver-treatment-cost-ranchi",      category: "Cost Guides",      type: "cost-guide", status: "planned", intent: "transactional", priority: "High",   vol: "Medium" },
  { keyword: "hepatitis B treatment cost India",            url: "/blog/hepatitis-treatment-cost-india",         category: "Cost Guides",      type: "cost-guide", status: "planned", intent: "transactional", priority: "High",   vol: "Medium" },
  { keyword: "gastroenterologist consultation fee Ranchi",  url: "/blog/gastro-consultation-fee-ranchi",         category: "Cost Guides",      type: "cost-guide", status: "planned", intent: "transactional", priority: "High",   vol: "High" },
  { keyword: "piliya treatment cost Ranchi",                url: "/blog/jaundice-treatment-cost-ranchi",         category: "Cost Guides",      type: "cost-guide", status: "planned", intent: "transactional", priority: "High",   vol: "Medium" },
  { keyword: "video capsule endoscopy cost India",          url: "/blog/capsule-endoscopy-cost-india",           category: "Cost Guides",      type: "cost-guide", status: "planned", intent: "transactional", priority: "Medium", vol: "Low" },

  // ── PLANNED DIET PAGES (lead magnet) ─────────────────────────────────────
  { keyword: "fatty liver diet chart download Hindi PDF",   url: "/diet/fatty-liver",          category: "Diet Pages",       type: "diet", status: "planned", intent: "transactional", priority: "High",   vol: "High" },
  { keyword: "jaundice (piliya) diet chart Hindi PDF",      url: "/diet/jaundice",             category: "Diet Pages",       type: "diet", status: "planned", intent: "transactional", priority: "High",   vol: "High" },
  { keyword: "IBS diet chart Indian food Hindi",            url: "/diet/ibs",                  category: "Diet Pages",       type: "diet", status: "planned", intent: "info",           priority: "High",   vol: "High" },
  { keyword: "acidity GERD diet chart Hindi",               url: "/diet/gerd",                 category: "Diet Pages",       type: "diet", status: "planned", intent: "info",           priority: "High",   vol: "High" },
  { keyword: "liver cirrhosis diet plan Hindi",             url: "/diet/liver-cirrhosis",      category: "Diet Pages",       type: "diet", status: "planned", intent: "info",           priority: "High",   vol: "Medium" },
  { keyword: "endoscopy ke baad kya khayen chart",          url: "/diet/post-endoscopy",       category: "Diet Pages",       type: "diet", status: "planned", intent: "info",           priority: "High",   vol: "High" },
  { keyword: "pancreatitis diet chart Hindi PDF",           url: "/diet/pancreatitis",         category: "Diet Pages",       type: "diet", status: "planned", intent: "info",           priority: "Medium", vol: "Medium" },
  { keyword: "ulcerative colitis diet chart Hindi",         url: "/diet/ulcerative-colitis",   category: "Diet Pages",       type: "diet", status: "planned", intent: "info",           priority: "Medium", vol: "Medium" },
  { keyword: "gallstone (pittashay) diet chart Hindi",      url: "/diet/gallstone",            category: "Diet Pages",       type: "diet", status: "planned", intent: "info",           priority: "High",   vol: "Medium" },
  { keyword: "liver detox foods tips Hindi",                url: "/diet/liver-detox",          category: "Diet Pages",       type: "diet", status: "planned", intent: "info",           priority: "High",   vol: "High" },

  // ── PLANNED LOCATION BLOGS ────────────────────────────────────────────────
  { keyword: "gastro doctor Ranchi best review",            url: "/blog/gastroenterologist-ranchi",               category: "Blogs–Local",      type: "blog", status: "planned", intent: "local",          priority: "High",   vol: "High" },
  { keyword: "liver specialist Ranchi Orchid Medical",      url: "/blog/liver-specialist-ranchi",                 category: "Blogs–Local",      type: "blog", status: "planned", intent: "local",          priority: "High",   vol: "High" },
  { keyword: "endoscopy center Ranchi best",                url: "/blog/endoscopy-center-ranchi",                 category: "Blogs–Local",      type: "blog", status: "planned", intent: "local",          priority: "High",   vol: "High" },
  { keyword: "gastroenterologist Jamshedpur appointment",   url: "/blog/gastro-jamshedpur",                       category: "Blogs–Local",      type: "blog", status: "planned", intent: "local",          priority: "High",   vol: "Medium" },
  { keyword: "liver disease doctor Dhanbad referral",       url: "/blog/gastro-dhanbad",                          category: "Blogs–Local",      type: "blog", status: "planned", intent: "local",          priority: "Medium", vol: "Medium" },
  { keyword: "best gastro doctor Bokaro Jharkhand",         url: "/blog/gastro-bokaro",                           category: "Blogs–Local",      type: "blog", status: "planned", intent: "local",          priority: "Medium", vol: "Medium" },
  { keyword: "gastroenterologist Hazaribagh Ranchi visit",  url: "/blog/gastro-hazaribagh",                       category: "Blogs–Local",      type: "blog", status: "planned", intent: "local",          priority: "Medium", vol: "Low" },

  // ── PLANNED FAQs / HINDI GLOSSARY ─────────────────────────────────────────
  { keyword: "gastroenterologist aur hepatologist mein fark", url: "/blog/gastroenterologist-vs-hepatologist",   category: "Blogs–FAQ",        type: "faq",  status: "planned", intent: "info",           priority: "High",   vol: "Medium" },
  { keyword: "liver ke liye best fruits sabzi",             url: "/blog/liver-healthy-foods-hindi",              category: "Blogs–Diet",       type: "blog", status: "planned", intent: "info",           priority: "High",   vol: "High" },
  { keyword: "pet mein gas kyon banta hai treatment",       url: "/blog/gas-formation-cause-treatment-hindi",    category: "Blogs–FAQ",        type: "faq",  status: "planned", intent: "info",           priority: "High",   vol: "High" },
  { keyword: "H pylori test treatment Hindi",               url: "/blog/h-pylori-test-treatment-hindi",          category: "Blogs–FAQ",        type: "faq",  status: "planned", intent: "info",           priority: "High",   vol: "High" },
  { keyword: "ultrasound se kya pata chalta hai",           url: "/blog/ultrasound-tests-meaning-hindi",         category: "Blogs–FAQ",        type: "faq",  status: "planned", intent: "info",           priority: "Medium", vol: "Medium" },
  { keyword: "SGOT SGPT high means liver",                  url: "/blog/sgot-sgpt-high-liver-hindi",             category: "Blogs–FAQ",        type: "faq",  status: "planned", intent: "info",           priority: "High",   vol: "High" },
  { keyword: "constipation se liver damage hota hai",       url: "/blog/constipation-liver-connection-hindi",    category: "Blogs–FAQ",        type: "faq",  status: "planned", intent: "info",           priority: "Medium", vol: "Medium" },
  { keyword: "Indian food good for liver",                  url: "/blog/indian-food-liver-health",               category: "Blogs–Diet",       type: "blog", status: "planned", intent: "info",           priority: "High",   vol: "High" },
];

const CATEGORIES = [...new Set(CONTENT_PLAN.map(k => k.category))].sort();
const LIVE_COUNT  = CONTENT_PLAN.filter(k => k.status === "live").length;
const PLAN_COUNT  = CONTENT_PLAN.filter(k => k.status === "planned").length;

// ── Sub-components ─────────────────────────────────────────────────────────────
function DeltaBadge({ delta }: { delta: number | null }) {
  if (delta === null) return <span style={{ color: "#94a3b8", fontSize: 10 }}>—</span>;
  if (Math.abs(delta) < 0.5) return <Minus size={12} style={{ color: "#94a3b8" }} />;
  if (delta < 0) return <span style={{ display: "flex", alignItems: "center", gap: 2, color: "#22c55e", fontSize: 10, fontWeight: 700 }}><TrendingUp size={11} /> {Math.abs(delta).toFixed(1)}</span>;
  return <span style={{ display: "flex", alignItems: "center", gap: 2, color: "#f87171", fontSize: 10, fontWeight: 700 }}><TrendingDown size={11} /> {delta.toFixed(1)}</span>;
}

function PositionBadge({ pos }: { pos: number | null }) {
  if (pos === null) return <span style={{ color: "#94a3b8", fontSize: 11 }}>—</span>;
  const color = pos <= 3 ? "#22c55e" : pos <= 10 ? "#f59e0b" : pos <= 20 ? "#f97316" : "#f87171";
  return <span style={{ color, fontWeight: 700, fontSize: 12, fontFamily: "monospace" }}>#{Math.round(pos)}</span>;
}

function IntentBadge({ intent }: { intent: KwPlanEntry["intent"] }) {
  const cfg = {
    info:          { bg: "#eff6ff", color: "#3b82f6" },
    transactional: { bg: "#f0fdf4", color: "#22c55e" },
    local:         { bg: "#fef3c7", color: "#d97706" },
    navigational:  { bg: "#f5f3ff", color: "#8b5cf6" },
  }[intent];
  return <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 99, background: cfg.bg, color: cfg.color }}>{intent}</span>;
}

function VolBadge({ vol }: { vol?: KwPlanEntry["vol"] }) {
  if (!vol) return null;
  const cfg = { High: { bg: "#fef2f2", color: "#ef4444" }, Medium: { bg: "#fff7ed", color: "#f97316" }, Low: { bg: "#f8fafc", color: "#94a3b8" } }[vol];
  return <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 99, background: cfg.bg, color: cfg.color }}>{vol}</span>;
}

function AddKeywordForm({ onAdd }: { onAdd: () => void }) {
  const [open, setOpen]     = useState(false);
  const [kw, setKw]         = useState("");
  const [url, setUrl]       = useState("");
  const [type, setType]     = useState("blog");
  const [saving, setSaving] = useState(false);
  const [err, setErr]       = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!kw.trim() || !url.trim()) return;
    setSaving(true); setErr("");
    try {
      const r = await fetch("/api/admin/keywords", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword: kw.trim(), page_url: url.trim(), page_type: type }),
      });
      const j = await r.json();
      if (!j.success) { setErr(j.error ?? "Failed"); return; }
      setKw(""); setUrl(""); setOpen(false);
      onAdd();
    } catch { setErr("Network error"); }
    finally { setSaving(false); }
  }

  if (!open) return (
    <button onClick={() => setOpen(true)}
      style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "#27AE60", color: "#fff", border: 0, borderRadius: 10, fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
      <Plus size={13} /> Add Keyword
    </button>
  );
  return (
    <form onSubmit={submit} style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", padding: "12px", background: "#f8fafc", borderRadius: 12, border: "1px solid #e2e8f0", marginTop: 8 }}>
      <input value={kw} onChange={e => setKw(e.target.value)} placeholder="Keyword" required
        style={{ flex: "1 1 200px", padding: "7px 10px", borderRadius: 8, border: "1px solid #cbd5e1", fontSize: 12 }} />
      <input value={url} onChange={e => setUrl(e.target.value)} placeholder="/blog/slug or /conditions/fatty-liver" required
        style={{ flex: "2 1 280px", padding: "7px 10px", borderRadius: 8, border: "1px solid #cbd5e1", fontSize: 12 }} />
      <select value={type} onChange={e => setType(e.target.value)}
        style={{ padding: "7px 10px", borderRadius: 8, border: "1px solid #cbd5e1", fontSize: 12, background: "#fff" }}>
        {["blog","condition","procedure","symptom","location","diet","faq","cost-guide"].map(t =>
          <option key={t} value={t}>{t}</option>
        )}
      </select>
      <button type="submit" disabled={saving}
        style={{ padding: "7px 14px", background: "#27AE60", color: "#fff", border: 0, borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: "pointer", opacity: saving ? 0.6 : 1 }}>
        {saving ? "Saving…" : "Save"}
      </button>
      <button type="button" onClick={() => setOpen(false)}
        style={{ padding: "7px 10px", background: "#f1f5f9", color: "#64748b", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 12, cursor: "pointer" }}>
        Cancel
      </button>
      {err && <p style={{ color: "#ef4444", fontSize: 11, width: "100%" }}>{err}</p>}
    </form>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function KeywordMapping() {
  const [rows, setRows]         = useState<KwRow[]>([]);
  const [opps, setOpps]         = useState<OpportunityRow[]>([]);
  const [view, setView]         = useState<"map"|"opportunities"|"plan">("map");
  const [loading, setLoading]   = useState(true);
  const [search, setSearch]     = useState("");
  const [typeFilter, setFilter] = useState("all");

  // Plan tab filters
  const [planSearch, setPlanSearch]   = useState("");
  const [planCat, setPlanCat]         = useState("all");
  const [planStatus, setPlanStatus]   = useState<"all"|"live"|"planned">("all");
  const [planIntent, setPlanIntent]   = useState("all");
  const [planPriority, setPlanPriority] = useState("all");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [mapRes, oppRes] = await Promise.all([
        fetch("/api/admin/keywords?limit=500"),
        fetch("/api/admin/keywords?view=opportunities&limit=100"),
      ]);
      const mapJson = await mapRes.json();
      const oppJson = await oppRes.json();
      if (mapJson.success) setRows(mapJson.data ?? []);
      if (oppJson.success) setOpps(oppJson.data ?? []);
    } catch { /* ignore */ }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { load(); }, [load]);

  async function deleteKw(id: string) {
    if (!confirm("Remove this keyword mapping?")) return;
    await fetch(`/api/admin/keywords?id=${id}`, { method: "DELETE" });
    setRows(r => r.filter(x => x.id !== id));
  }

  const filtered = rows.filter(r => {
    const matchSearch = !search || r.keyword.toLowerCase().includes(search.toLowerCase()) || r.page_url.toLowerCase().includes(search.toLowerCase());
    const matchType   = typeFilter === "all" || r.page_type === typeFilter;
    return matchSearch && matchType;
  });

  const planFiltered = CONTENT_PLAN.filter(k => {
    const matchSearch   = !planSearch   || k.keyword.toLowerCase().includes(planSearch.toLowerCase()) || k.url.includes(planSearch);
    const matchCat      = planCat === "all"      || k.category === planCat;
    const matchStatus   = planStatus === "all"   || k.status   === planStatus;
    const matchIntent   = planIntent === "all"   || k.intent   === planIntent;
    const matchPriority = planPriority === "all" || k.priority === planPriority;
    return matchSearch && matchCat && matchStatus && matchIntent && matchPriority;
  });

  const top10      = filtered.filter(r => r.current_position && r.current_position <= 10).length;
  const pos4to20   = filtered.filter(r => r.current_position && r.current_position > 3 && r.current_position <= 20).length;
  const noData     = filtered.filter(r => !r.current_position).length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>
          <h2 style={{ fontWeight: 800, fontSize: 18, color: "#0f172a", margin: 0 }}>Keyword Mapping</h2>
          <p style={{ color: "#64748b", fontSize: 12, marginTop: 3 }}>
            {LIVE_COUNT} live · {PLAN_COUNT} planned · {CONTENT_PLAN.length} total in content plan
          </p>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button onClick={load}
            style={{ display: "flex", alignItems: "center", gap: 5, padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: 10, background: "#fff", fontSize: 12, cursor: "pointer", color: "#64748b" }}>
            <RefreshCw size={13} /> Refresh GSC
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
        {[
          { label: "Live Pages/Blogs", value: LIVE_COUNT,  color: "#27AE60" },
          { label: "Planned Content",  value: PLAN_COUNT,  color: "#f59e0b", badge: "Build next" },
          { label: "Top 10 (GSC)",     value: top10,       color: "#22c55e" },
          { label: "Quick Wins 4–20",  value: pos4to20,    color: "#f97316", badge: "Optimize" },
        ].map(s => (
          <div key={s.label} style={{ background: "#fff", borderRadius: 14, border: "1px solid #e2e8f0", padding: "14px 16px" }}>
            <p style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600, marginBottom: 4 }}>{s.label}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 22, fontWeight: 800, color: s.color }}>{s.value}</span>
              {s.badge && <span style={{ fontSize: 9, background: "#fef3c7", color: "#d97706", padding: "2px 6px", borderRadius: 99, fontWeight: 700 }}>{s.badge}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* View tabs */}
      <div style={{ display: "flex", gap: 0, borderBottom: "1px solid #e2e8f0" }}>
        {([
          { key: "map",          icon: <BarChart2 size={13} />,  label: `Keyword Map (${rows.length})` },
          { key: "opportunities",icon: <TrendingUp size={13} />, label: `Quick Wins (${opps.length})` },
          { key: "plan",         icon: <BookOpen size={13} />,   label: `Content Plan (${CONTENT_PLAN.length})` },
        ] as const).map(t => (
          <button key={t.key} onClick={() => setView(t.key)}
            style={{ display: "flex", alignItems: "center", gap: 5, padding: "8px 14px", border: 0, background: "none", fontWeight: 700, fontSize: 12, cursor: "pointer", borderBottom: view === t.key ? "2px solid #27AE60" : "2px solid transparent", color: view === t.key ? "#27AE60" : "#64748b", marginBottom: -1 }}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* ── TAB: Keyword Map ───────────────────────────────────────────────────── */}
      {view === "map" && (
        <>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ position: "relative", flex: "1 1 200px" }}>
              <Search size={13} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search keyword or URL…"
                style={{ width: "100%", paddingLeft: 30, paddingRight: 10, paddingTop: 8, paddingBottom: 8, border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 12, background: "#fff", boxSizing: "border-box" }} />
            </div>
            <select value={typeFilter} onChange={e => setFilter(e.target.value)}
              style={{ padding: "8px 10px", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 12, background: "#fff" }}>
              <option value="all">All Types</option>
              {["blog","condition","procedure","symptom","location","diet","faq","cost-guide"].map(t =>
                <option key={t} value={t}>{t}</option>
              )}
            </select>
            <AddKeywordForm onAdd={load} />
          </div>

          {loading ? (
            <div style={{ textAlign: "center", padding: 40, color: "#94a3b8", fontSize: 13 }}>Loading keyword data…</div>
          ) : filtered.length === 0 ? (
            <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 32, textAlign: "center" }}>
              <AlertTriangle size={24} style={{ color: "#f59e0b", margin: "0 auto 8px" }} />
              <p style={{ color: "#64748b", fontSize: 13 }}>
                {rows.length === 0
                  ? "No keywords tracked yet. Add your first keyword above, or run the GSC sync cron."
                  : "No keywords match your filter."}
              </p>
            </div>
          ) : (
            <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden" }}>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                  <thead>
                    <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                      {["Keyword","Page URL","Type","Position","Δ 7d","Clicks","CTR","Primary?",""].map(h => (
                        <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700, color: "#64748b", fontSize: 11, whiteSpace: "nowrap" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((row, i) => (
                      <tr key={row.id} style={{ borderBottom: i < filtered.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                        <td style={{ padding: "10px 12px", color: "#0f172a", fontWeight: 600, maxWidth: 200 }}>
                          <span style={{ display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{row.keyword}</span>
                        </td>
                        <td style={{ padding: "10px 12px", fontFamily: "monospace", fontSize: 11 }}>
                          <a href={row.page_url} target="_blank" rel="noreferrer" style={{ color: "#27AE60", textDecoration: "none" }}>{row.page_url}</a>
                        </td>
                        <td style={{ padding: "10px 12px" }}>
                          <span style={{ fontSize: 10, background: "#f1f5f9", color: "#64748b", padding: "2px 7px", borderRadius: 99, fontWeight: 700 }}>{row.page_type}</span>
                        </td>
                        <td style={{ padding: "10px 12px" }}><PositionBadge pos={row.current_position} /></td>
                        <td style={{ padding: "10px 12px" }}><DeltaBadge delta={row.position_delta} /></td>
                        <td style={{ padding: "10px 12px", color: "#374151", fontWeight: 700 }}>{row.current_clicks.toLocaleString()}</td>
                        <td style={{ padding: "10px 12px", color: "#94a3b8", fontFamily: "monospace" }}>
                          {row.current_ctr !== null ? `${(row.current_ctr * 100).toFixed(1)}%` : "—"}
                        </td>
                        <td style={{ padding: "10px 12px" }}>
                          {row.is_primary
                            ? <span style={{ color: "#27AE60", fontSize: 10, fontWeight: 700 }}>✓ Primary</span>
                            : <span style={{ color: "#94a3b8", fontSize: 10 }}>Secondary</span>}
                        </td>
                        <td style={{ padding: "10px 12px" }}>
                          <button onClick={() => deleteKw(row.id)} style={{ background: "none", border: 0, cursor: "pointer", color: "#fca5a5", padding: 4 }}>
                            <Trash2 size={13} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}

      {/* ── TAB: Quick Wins ───────────────────────────────────────────────────── */}
      {view === "opportunities" && (
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden" }}>
          <div style={{ padding: "14px 16px", borderBottom: "1px solid #f1f5f9", background: "#fffbeb" }}>
            <p style={{ fontSize: 12, color: "#92400e", fontWeight: 600, margin: 0 }}>
              ⚡ These keywords rank at positions 4–20 — optimize these pages to move into top 3 and 3× the clicks.
            </p>
          </div>
          {loading ? (
            <div style={{ padding: 32, textAlign: "center", color: "#94a3b8" }}>Loading…</div>
          ) : opps.length === 0 ? (
            <div style={{ padding: 32, textAlign: "center", color: "#94a3b8", fontSize: 13 }}>
              No GSC data yet — run the GSC sync cron first (add GOOGLE_SERVICE_ACCOUNT_KEY env var).
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                <thead>
                  <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                    {["Keyword","Page","Avg Position","Impressions","Clicks","CTR","Days"].map(h => (
                      <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700, color: "#64748b", fontSize: 11 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {opps.map((o, i) => (
                    <tr key={`${o.keyword}-${o.url}`} style={{ borderBottom: i < opps.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                      <td style={{ padding: "10px 12px", color: "#0f172a", fontWeight: 600 }}>{o.keyword}</td>
                      <td style={{ padding: "10px 12px", fontFamily: "monospace", fontSize: 11 }}>
                        <a href={o.url} target="_blank" rel="noreferrer" style={{ color: "#27AE60", textDecoration: "none" }}>{o.url}</a>
                      </td>
                      <td style={{ padding: "10px 12px" }}><PositionBadge pos={o.avg_position} /></td>
                      <td style={{ padding: "10px 12px", color: "#374151", fontWeight: 700 }}>{o.total_impressions.toLocaleString()}</td>
                      <td style={{ padding: "10px 12px", color: "#374151" }}>{o.total_clicks.toLocaleString()}</td>
                      <td style={{ padding: "10px 12px", color: "#94a3b8" }}>{o.avg_ctr_pct.toFixed(1)}%</td>
                      <td style={{ padding: "10px 12px", color: "#94a3b8" }}>{o.days_tracked}d</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ── TAB: Content Plan ─────────────────────────────────────────────────── */}
      {view === "plan" && (
        <>
          {/* Filters */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ position: "relative", flex: "1 1 200px" }}>
              <Search size={13} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
              <input value={planSearch} onChange={e => setPlanSearch(e.target.value)} placeholder="Search keywords, URLs…"
                style={{ width: "100%", paddingLeft: 30, paddingRight: 10, paddingTop: 8, paddingBottom: 8, border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 12, background: "#fff", boxSizing: "border-box" }} />
            </div>
            <select value={planCat} onChange={e => setPlanCat(e.target.value)}
              style={{ padding: "8px 10px", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 12, background: "#fff" }}>
              <option value="all">All Categories</option>
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={planStatus} onChange={e => setPlanStatus(e.target.value as "all"|"live"|"planned")}
              style={{ padding: "8px 10px", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 12, background: "#fff" }}>
              <option value="all">All Status</option>
              <option value="live">✅ Live</option>
              <option value="planned">📋 Planned</option>
            </select>
            <select value={planIntent} onChange={e => setPlanIntent(e.target.value)}
              style={{ padding: "8px 10px", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 12, background: "#fff" }}>
              <option value="all">All Intent</option>
              <option value="info">Informational</option>
              <option value="transactional">Transactional</option>
              <option value="local">Local</option>
            </select>
            <select value={planPriority} onChange={e => setPlanPriority(e.target.value)}
              style={{ padding: "8px 10px", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 12, background: "#fff" }}>
              <option value="all">All Priority</option>
              <option value="High">High Priority</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <span style={{ fontSize: 11, color: "#94a3b8" }}>{planFiltered.length} shown</span>
          </div>

          <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                <thead>
                  <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                    {["Status","Keyword","Planned URL","Category","Intent","Volume","Priority"].map(h => (
                      <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700, color: "#64748b", fontSize: 10, whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {planFiltered.map((k, i) => (
                    <tr key={`${k.keyword}-${i}`} style={{ borderBottom: i < planFiltered.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                      <td style={{ padding: "8px 12px" }}>
                        {k.status === "live"
                          ? <span style={{ display: "flex", alignItems: "center", gap: 4, color: "#22c55e", fontSize: 10, fontWeight: 700 }}><CheckCircle size={11} /> Live</span>
                          : <span style={{ display: "flex", alignItems: "center", gap: 4, color: "#f59e0b", fontSize: 10, fontWeight: 700 }}><Clock size={11} /> Planned</span>}
                      </td>
                      <td style={{ padding: "8px 12px", color: "#0f172a", fontWeight: 600, maxWidth: 240 }}>
                        <span style={{ display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{k.keyword}</span>
                      </td>
                      <td style={{ padding: "8px 12px", fontFamily: "monospace", fontSize: 10 }}>
                        {k.status === "live"
                          ? <a href={k.url} target="_blank" rel="noreferrer" style={{ color: "#27AE60", textDecoration: "none" }}>{k.url}</a>
                          : <span style={{ color: "#94a3b8" }}>{k.url}</span>}
                      </td>
                      <td style={{ padding: "8px 12px" }}>
                        <span style={{ fontSize: 9, background: "#f1f5f9", color: "#374151", padding: "2px 6px", borderRadius: 99, fontWeight: 700 }}>{k.category}</span>
                      </td>
                      <td style={{ padding: "8px 12px" }}><IntentBadge intent={k.intent} /></td>
                      <td style={{ padding: "8px 12px" }}><VolBadge vol={k.vol} /></td>
                      <td style={{ padding: "8px 12px" }}>
                        <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 99,
                          background: k.priority === "High" ? "#fef2f2" : k.priority === "Medium" ? "#fff7ed" : "#f8fafc",
                          color: k.priority === "High" ? "#dc2626" : k.priority === "Medium" ? "#f97316" : "#94a3b8" }}>
                          {k.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Category summary */}
          <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: "16px 18px" }}>
            <h3 style={{ fontWeight: 800, fontSize: 13, color: "#0f172a", margin: "0 0 12px" }}>Content Plan by Category</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 8 }}>
              {CATEGORIES.map(cat => {
                const catItems  = CONTENT_PLAN.filter(k => k.category === cat);
                const catLive   = catItems.filter(k => k.status === "live").length;
                const catHigh   = catItems.filter(k => k.priority === "High").length;
                return (
                  <div key={cat}
                    style={{ padding: "10px 12px", background: "#f8fafc", borderRadius: 10, border: "1px solid #e2e8f0", cursor: "pointer" }}
                    onClick={() => { setPlanCat(cat); setPlanStatus("all"); }}>
                    <p style={{ fontWeight: 700, fontSize: 11, color: "#0f172a", margin: 0 }}>{cat}</p>
                    <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                      <span style={{ fontSize: 10, color: "#22c55e" }}>{catLive} live</span>
                      <span style={{ fontSize: 10, color: "#94a3b8" }}>{catItems.length - catLive} planned</span>
                      {catHigh > 0 && <span style={{ fontSize: 10, color: "#ef4444" }}>{catHigh} high-pri</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
