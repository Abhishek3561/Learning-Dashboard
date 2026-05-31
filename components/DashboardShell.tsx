"use client";

import BentoGrid from "./BentoGrid";
import HeroTile from "./HeroTile";
import ActivityTile from "./ActivityTile";
import CourseCard from "./CourseCard";
import { Course } from "@/types/course";

export default function DashboardShell({ courses }: { courses: Course[] }) {
  return (
    <BentoGrid>
      <HeroTile />
      <ActivityTile />
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </BentoGrid>
  );
}