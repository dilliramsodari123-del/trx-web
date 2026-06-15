-- TrX Web Database Schema
-- Run this in your Supabase SQL editor

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- =====================
-- PORTFOLIO
-- =====================
create table if not exists portfolio_items (
  id          uuid primary key default uuid_generate_v4(),
  title       text not null,
  category    text not null,
  description text,
  thumbnail_url text,
  live_url    text,
  is_featured boolean default false,
  sort_order  integer default 0,
  created_at  timestamptz default now()
);

-- =====================
-- LEADS / ORDERS
-- =====================
create table if not exists leads (
  id                  uuid primary key default uuid_generate_v4(),
  full_name           text not null,
  business_name       text,
  phone               text not null,
  whatsapp            text,
  email               text not null,
  website_type        text not null,
  business_category   text,
  preferred_color     text,
  pages_needed        text,
  features_required   text,
  reference_websites  text,
  deadline            text,
  budget              text,
  additional_notes    text,
  status              text default 'new' check (status in ('new','contacted','in_progress','delivered','cancelled')),
  created_at          timestamptz default now()
);

-- =====================
-- TESTIMONIALS
-- =====================
create table if not exists testimonials (
  id            uuid primary key default uuid_generate_v4(),
  client_name   text not null,
  business_name text,
  review        text not null,
  rating        integer default 5 check (rating between 1 and 5),
  photo_url     text,
  website_type  text,
  is_published  boolean default false,
  created_at    timestamptz default now()
);

-- =====================
-- BLOG POSTS
-- =====================
create table if not exists blog_posts (
  id           uuid primary key default uuid_generate_v4(),
  title        text not null,
  slug         text unique not null,
  excerpt      text,
  content      text,
  cover_image  text,
  author       text default 'TrX Web Team',
  tags         text[] default '{}',
  is_published boolean default false,
  published_at timestamptz,
  created_at   timestamptz default now()
);

-- =====================
-- DEMO SITES
-- =====================
create table if not exists demo_sites (
  id           uuid primary key default uuid_generate_v4(),
  title        text not null,
  category     text not null,
  description  text,
  thumbnail_url text,
  demo_url     text not null,
  template_id  text,
  is_active    boolean default true,
  created_at   timestamptz default now()
);

-- =====================
-- PROJECT TRACKING
-- =====================
create table if not exists project_tracks (
  id                  uuid primary key default uuid_generate_v4(),
  project_id          text unique not null,
  client_name         text not null,
  status              text default 'received' check (status in ('received','designing','developing','review','delivered')),
  progress            integer default 0 check (progress between 0 and 100),
  started_at          timestamptz default now(),
  estimated_delivery  timestamptz,
  updates             jsonb default '[]',
  created_at          timestamptz default now()
);

-- =====================
-- ROW LEVEL SECURITY
-- =====================

-- Portfolio: public read, admin write
alter table portfolio_items enable row level security;
create policy "Public can view portfolio" on portfolio_items for select using (true);
create policy "Admin can manage portfolio" on portfolio_items for all using (auth.role() = 'authenticated');

-- Leads: public insert, admin read
alter table leads enable row level security;
create policy "Anyone can submit lead" on leads for insert with check (true);
create policy "Admin can view leads" on leads for select using (auth.role() = 'authenticated');
create policy "Admin can update leads" on leads for update using (auth.role() = 'authenticated');

-- Testimonials: public read published, admin all
alter table testimonials enable row level security;
create policy "Public can view published testimonials" on testimonials for select using (is_published = true);
create policy "Admin can manage testimonials" on testimonials for all using (auth.role() = 'authenticated');

-- Blog posts: public read published, admin all
alter table blog_posts enable row level security;
create policy "Public can view published posts" on blog_posts for select using (is_published = true);
create policy "Admin can manage blog" on blog_posts for all using (auth.role() = 'authenticated');

-- Demo sites: public read active, admin all
alter table demo_sites enable row level security;
create policy "Public can view active demos" on demo_sites for select using (is_active = true);
create policy "Admin can manage demos" on demo_sites for all using (auth.role() = 'authenticated');

-- Project tracks: public read by project_id
alter table project_tracks enable row level security;
create policy "Anyone can view their project" on project_tracks for select using (true);
create policy "Admin can manage projects" on project_tracks for all using (auth.role() = 'authenticated');

-- =====================
-- SEED DATA
-- =====================

insert into testimonials (client_name, business_name, review, rating, website_type, is_published) values
('Ramesh Shrestha', 'Shrestha Traders', 'TrX Web delivered our business website in exactly 48 hours. The quality is outstanding and our sales have already increased!', 5, 'Business Website', true),
('Priya Tamang', 'Himalayan Cafe', 'I was skeptical at first but they delivered a beautiful restaurant website on time. Highly recommended!', 5, 'Restaurant Website', true),
('Bikash Gurung', 'TechNepal Startup', 'Got our MVP website ready in 48 hours. The team was responsive and the result exceeded our expectations.', 5, 'Startup MVP', true),
('Sita Rai', 'Rai Photography', 'My portfolio website looks stunning. The animations and design are world-class. Worth every paisa!', 5, 'Portfolio Website', true);

insert into portfolio_items (title, category, description, thumbnail_url, live_url, is_featured, sort_order) values
('Shrestha Traders', 'Business', 'Modern business website for a trading company in Kathmandu', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', '#', true, 1),
('Himalayan Eats', 'Restaurant', 'Restaurant website with online ordering and menu management', 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800', '#', true, 2),
('Gurung Photography', 'Portfolio', 'Stunning portfolio website for a Kathmandu-based photographer', 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800', '#', true, 3),
('TechLearn Nepal', 'Education', 'Online course platform for Nepali students', 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800', '#', false, 4),
('Pashmina Boutique', 'Ecommerce', 'E-commerce store selling Nepali pashmina products worldwide', 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800', '#', false, 5),
('Mountain Events', 'Events', 'Event website for trekking and adventure events in Nepal', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800', '#', false, 6);
