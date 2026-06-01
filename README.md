# Next-Gen Learning Dashboard

A futuristic learning dashboard built with **Next.js App Router**, **Supabase**, **Tailwind CSS**, and **Framer Motion**. The application demonstrates modern React architecture using Server Components, responsive Bento Grid layouts, and performant animations.

---

## Tech Stack

* **Framework:** Next.js 14 (App Router)
* **Language:** TypeScript
* **Database:** Supabase (PostgreSQL)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** Lucide React

---

## Features

* Bento Grid dashboard layout
* Server-side data fetching from Supabase
* Dynamic course cards loaded from the database
* Dynamic Lucide icon rendering based on database values
* Animated progress bars
* Framer Motion staggered page-load animations
* Spring-based hover interactions
* Sidebar layout animations using `layoutId`
* Responsive desktop, tablet, and mobile layouts
* Loading skeletons with pulse animation
* Error boundaries with retry functionality
* Dark futuristic UI with gradient accents

---

## Architecture

### Server / Client Component Split

| File                          | Type             | Reason                                                   |
| ----------------------------- | ---------------- | -------------------------------------------------------- |
| `app/page.tsx`                | Server Component | Fetches course data from Supabase securely on the server |
| `components/BentoGrid.tsx`    | Client Component | Uses Framer Motion animations                            |
| `components/CourseCard.tsx`   | Client Component | Hover animations and progress interactions               |
| `components/Sidebar.tsx`      | Client Component | Active navigation state and layout animations            |
| `components/MobileNav.tsx`    | Client Component | Mobile navigation interactions                           |
| `components/HeroTile.tsx`     | Client Component | Framer Motion entrance animation                         |
| `components/ActivityTile.tsx` | Client Component | Animated activity chart                                  |
| `components/ProgressBar.tsx`  | Client Component | Animated progress bar                                    |
| `components/SkeletonCard.tsx` | Server Component | Static loading skeleton using Tailwind                   |

---

## Data Fetching

Course data is fetched inside `app/page.tsx` using a Supabase server-side client.

The dashboard is rendered using Next.js Server Components, ensuring database operations remain on the server and are not exposed to the client.

If data fetching fails, the error is handled by `app/error.tsx`.

Loading states are implemented through `app/loading.tsx`, which displays animated skeleton cards while data is loading.

---

## Animations

### Staggered Page Load

The Bento Grid uses Framer Motion's `staggerChildren` to animate tiles sequentially during page load.

### Hover States

Course cards use:

```tsx
whileHover={{ scale: 1.02 }}
```

with:

```tsx
transition={{
  type: "spring",
  stiffness: 300,
  damping: 20,
}}
```

to create smooth, natural interactions.

### Sidebar Micro-interactions

The active navigation indicator uses Framer Motion's `layoutId` to smoothly animate between selected items.

### Performance

To prevent layout shifts:

* Animations use only `transform`
* Animations use only `opacity`
* No animations modify layout dimensions
* No hover interactions trigger browser reflows

---

## Responsive Design

### Desktop (>1024px)

* Sidebar fully visible
* Multi-column Bento Grid layout

### Tablet (768px–1024px)

* Sidebar collapses to icons only
* Bento Grid adjusts to two columns

### Mobile (<768px)

* Bottom navigation replaces sidebar
* Bento Grid stacks vertically
* Optimized for touch interactions

---

## Error Handling

Database failures are handled using Next.js Error Boundaries.

Users can retry loading the dashboard using the provided retry button without refreshing the page.

---

## Supabase Setup

Create a free Supabase project and run the following SQL:

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

---

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

See `.env.example` for reference.

---

## Getting Started

Install dependencies:

```bash
npm install
```

Create environment variables:

```bash
cp .env.example .env.local
```

Fill in your Supabase credentials inside `.env.local`.

Run the development server:

```bash
npm run dev
```

---

## Deployment

The application is deployed using Vercel.

Add the following environment variables inside the Vercel Project Settings:

```env
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

After deployment, the dashboard will automatically connect to the Supabase database.

---

## Challenges Faced

* Implementing Framer Motion animations without causing layout shifts.
* Rendering Lucide icons dynamically from database values.
* Maintaining a clean Server/Client Component separation.
* Building a responsive Bento Grid layout for desktop, tablet, and mobile devices.
* Creating loading states that match the dashboard's visual design.

---

## Author

Abhishek Tyagi
