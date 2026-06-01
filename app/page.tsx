import Sidebar from "@/components/Sidebar";
import DashboardShell from "@/components/DashboardShell";
import MobileNav from "@/components/MobileNav";
import { createServerSupabaseClient } from "@/lib/supabase";
import { Course } from "@/types/course";

export default async function Home() {
  const supabase = createServerSupabaseClient();

  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true })
    .returns<Course[]>();

  if (error) {
    console.error("Supabase error:", error);
    throw new Error(error.message);
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr]">
        <Sidebar />
        <main className="p-6 pb-24 md:pb-6">
          <DashboardShell courses={courses ?? []} />
        </main>
      </div>
      <MobileNav />
    </div>
  );
}