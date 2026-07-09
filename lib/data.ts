// lib/data.ts — All Supabase data fetching functions
import { supabase } from "./supabase";
import type { Profile, Project, Skill, Experience, Certification, Education } from "@/types";

export async function getProfile(): Promise<Profile | null> {
  const { data, error } = await supabase
    .from("profile")
    .select("*")
    .single();
  if (error) { console.error("getProfile:", error.message); return null; }
  return data;
}

export async function getProjects(featuredOnly = false): Promise<Project[]> {
  let query = supabase.from("projects").select("*").order("order");
  if (featuredOnly) query = query.eq("featured", true);
  const { data, error } = await query;
  if (error) { console.error("getProjects:", error.message); return []; }
  return data ?? [];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error) { console.error("getProjectBySlug:", error.message); return null; }
  return data;
}

export async function getSkills(): Promise<Skill[]> {
  const { data, error } = await supabase
    .from("skills")
    .select("*")
    .order("order");
  if (error) { console.error("getSkills:", error.message); return []; }
  return data ?? [];
}

export async function getExperience(): Promise<Experience[]> {
  const { data, error } = await supabase
    .from("experience")
    .select("*")
    .order("order");
  if (error) { console.error("getExperience:", error.message); return []; }
  return data ?? [];
}

export async function getCertifications(): Promise<Certification[]> {
  const { data, error } = await supabase
    .from("certifications")
    .select("*");
  if (error) { console.error("getCertifications:", error.message); return []; }
  return data ?? [];
}

export async function getEducation(): Promise<Education[]> {
  const { data, error } = await supabase
    .from("education")
    .select("*")
    .order("order");
  if (error) { console.error("getEducation:", error.message); return []; }
  return data ?? [];
}
