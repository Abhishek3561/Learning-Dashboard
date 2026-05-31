# Next-Gen Learning Dashboard

A futuristic student dashboard built with Next.js App Router, Supabase, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Architecture

### Server / Client Component Split

| File | Type | Reason |
|---|---|---|
| `app/page.tsx` | Server Component | Fetches courses from Supabase on the server — no API key exposed to the browser |
| `components/BentoGrid.tsx` | Client Component | Uses Framer Motion `motion` elements which require the browser |
| `components/CourseCard.tsx` | Client Component | Framer Motion hover/entrance animations |
| `components/Sidebar.tsx` | Client Component | `useState` for active tab tracking |
| `components/MobileNav.tsx` | Client Component | `useState` for active tab tracking |
| `components/HeroTile.tsx` | Client Component | Framer Motion animations |
| `components/ActivityTile.tsx` | Client Component | Framer Motion bar chart animations |
| `components/ProgressBar.tsx` | Client Component | Framer Motion width animation |
| `components/SkeletonCard.tsx` | Server Component | Pure CSS `animate-pulse`, no interactivity needed |

### Data Fetching

Course data is fetched in `app/page.tsx` using a server-side Supabase client (`createServerSupabaseClient`). This runs at request time on the server, keeping credentials out of the client bundle. If the fetch fails, the error is thrown and caught by `app/error.tsx`.

`app/loading.tsx` provides a full-page skeleton UI shown by Next.js automatically via Suspense while `page.tsx` is streaming.

### Animations

- **Staggered entrance**: `BentoGrid` uses Framer Motion's `staggerChildren: 0.12` so tiles appear sequentially
- **Spring physics**: All hover and entrance transitions use `type: "spring", stiffness: 300, damping: 20`
- **No layout shifts**: All animations use only `transform` (scale, y, scaleY) and `opacity` — never width/height of parent elements
- **layoutId**: Sidebar and MobileNav use `layoutId` for the active highlight so it slides between items

## Supabase Setup

1. Create a free project at [supabase.com](https://supabase.com)
2. Run this SQL in the Supabase SQL editor:

```sql
create table courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null default 0,
  icon_name text not null default 'BookOpen',
  created_at timestamp with time zone default now()
);

insert into courses (title, progress, icon_name) values
  ('Advanced React Patterns', 75, 'Code2'),
  ('TypeScript Deep Dive', 40, 'FileCode'),
  ('System Design', 60, 'Network'),
  ('Node.js & REST APIs', 90, 'Server');
```

3. Copy your project URL and anon key from **Settings → API**
4. Add them to `.env.local` (see `.env.example`)

## Getting Started

```bash
npm install
cp .env.example .env.local
# fill in your Supabase credentials in .env.local
npm run dev
```

## Deployment

Deploy to Vercel and add the two environment variables (`NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`) in the Vercel project settings.
