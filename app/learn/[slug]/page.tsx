import { notFound } from "next/navigation";
import { lessons, getLessonBySlug } from "@/lib/lessons";
import LessonClient from "./lesson-client";

export function generateStaticParams() {
  return lessons.map((l) => ({ slug: l.slug }));
}

export default function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = getLessonBySlug(params.slug);
  if (!lesson) return notFound();

  const index = lessons.findIndex((l) => l.slug === lesson.slug);
  const next = lessons[index + 1];
  const doneCount = index; // everything before current counts as watched, for demo purposes
  const progressPct = Math.round((doneCount / lessons.length) * 100);

  const sections = Array.from(new Set(lessons.map((l) => l.section)));

  return (
    <LessonClient
      lesson={lesson}
      lessons={lessons}
      index={index}
      next={next}
      doneCount={doneCount}
      progressPct={progressPct}
      sections={sections}
    />
  );
}
