-- ══════════════════════════════════════════════════════
--  PORTFOLIO SUPABASE SCHEMA
--  Run this in: Supabase Dashboard → SQL Editor → New Query
-- ══════════════════════════════════════════════════════

-- 1. PROFILE (single row)
create table if not exists profile (
  id                 uuid primary key default gen_random_uuid(),
  name               text not null,
  title              text not null,
  tagline            text not null,
  location           text not null,
  email              text not null,
  phone              text,
  linkedin           text not null,
  github             text not null,
  portfolio_url      text not null,
  resume_url         text not null,
  years_learning     int default 3,
  projects_count     int default 10,
  certificates_count int default 5,
  bio                text not null,
  currently_learning text[] default '{}',
  created_at         timestamptz default now()
);

-- 2. PROJECTS
create table if not exists projects (
  id               uuid primary key default gen_random_uuid(),
  slug             text not null unique,
  "order"          int not null default 0,
  name             text not null,
  subtitle         text not null,
  description      text not null,
  long_description text,
  features         text[] not null default '{}',
  challenges       text[] default '{}',
  tech_stack       text[] not null default '{}',
  live_url         text,
  github_url       text,
  accent           text not null default 'yellow', -- yellow|teal|pink|blue
  featured         boolean not null default true,
  cover_emoji      text default '🚀',
  role             text default 'Solo Developer',
  duration         text default '4 weeks',
  created_at       timestamptz default now()
);

-- 3. SKILLS
create table if not exists skills (
  id         uuid primary key default gen_random_uuid(),
  "order"    int not null default 0,
  category   text not null,
  items      text[] not null default '{}',
  color      text not null default 'white', -- yellow|teal|pink|blue|white|black
  created_at timestamptz default now()
);

-- 4. EXPERIENCE
create table if not exists experience (
  id          uuid primary key default gen_random_uuid(),
  "order"     int not null default 0,
  title       text not null,
  company     text not null,
  type        text not null, -- Internship|Freelance|Full-time|Part-time
  period      text not null,
  bullets     text[] not null default '{}',
  badge_color text not null default 'yellow', -- yellow|teal|pink
  created_at  timestamptz default now()
);

-- 5. CERTIFICATIONS
create table if not exists certifications (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  issuer     text not null,
  year       text not null,
  icon       text not null default '🏆',
  url        text,
  created_at timestamptz default now()
);

-- 6. EDUCATION
create table if not exists education (
  id               uuid primary key default gen_random_uuid(),
  "order"          int not null default 0,
  degree           text not null,
  college          text not null,
  location         text not null,
  period           text not null,
  gpa_or_percent   text not null,
  status           text not null default 'COMPLETED', -- CURRENT|COMPLETED
  created_at       timestamptz default now()
);

-- 7. CONTACT MESSAGES (form submissions)
create table if not exists contact_messages (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  email      text not null,
  message    text not null,
  read       boolean default false,
  created_at timestamptz default now()
);

-- ── ENABLE READ ACCESS (public) ──────────────────────
alter table profile            enable row level security;
alter table projects           enable row level security;
alter table skills             enable row level security;
alter table experience         enable row level security;
alter table certifications     enable row level security;
alter table education          enable row level security;
alter table contact_messages   enable row level security;

create policy "Public read profile"          on profile            for select using (true);
create policy "Public read projects"         on projects           for select using (true);
create policy "Public read skills"           on skills             for select using (true);
create policy "Public read experience"       on experience         for select using (true);
create policy "Public read certifications"   on certifications     for select using (true);
create policy "Public read education"        on education          for select using (true);
create policy "Public insert contact"        on contact_messages   for insert with check (true);

-- ── SEED: SAMPLE PROJECT (add more rows like this) ──
insert into projects (slug, "order", name, subtitle, description, long_description, features, challenges, tech_stack, live_url, github_url, accent, featured, cover_emoji, role, duration)
values (
  'foodzzz', 1, 'FoodZzz 🍔', 'Food Ordering System',
  'A full-featured online food ordering platform with real-time cart management, Google login, and secure payment flow.',
  'FoodZzz is an end-to-end food ordering platform built to handle everything from browsing a restaurant menu to completing checkout.',
  array['Google OAuth + session-based cart', 'Admin dashboard for menu & orders', 'Real-time order tracking', 'Mobile-responsive design'],
  array['Keeping cart state in sync across tabs', 'Handling concurrent order updates', 'Minimal-friction checkout flow'],
  array['Django', 'TailwindCSS', 'MySQL', 'OAuth2'],
  '#', '#', 'yellow', true, '🍔', 'Solo Developer', '6 weeks'
);

-- ── SEED: PROFILE ROW ────────────────────────────────
insert into profile (name, title, tagline, location, email, phone, linkedin, github, portfolio_url, resume_url, years_learning, projects_count, certificates_count, bio, currently_learning)
values (
  'Sahil Panchal',
  'Software Engineer | Full-Stack & AI 🤖',
  'Building scalable software, AI-powered applications, and secure backend systems with clean architecture, modern technologies, and real-world impact.',
  'Ahmedabad, Gujarat, India · Open to Remote & Relocate',
  'sahilpanchal1818@gmail.com',
  '+91 95586 47711',
  'https://linkedin.com/in/sahilpanchal2004/',
  'https://github.com/S1A8H3I4L',
  'https://sahil-panchal.vercel.app/',
  '/Sahil_Resume.pdf',
  3, 16, 6,
  'I''m a Software Engineer passionate about designing and developing scalable web applications, intelligent AI-powered systems, and user-centric digital products. My experience spans full-stack development, backend engineering, AI/ML integration, authentication systems, payment workflows, REST APIs, and modern responsive interfaces.',
  array['LangChain', 'Next.js 14', 'Docker', 'Kubernetes', 'Vector Databases', 'System Design', 'Open Source Contribution']
);
