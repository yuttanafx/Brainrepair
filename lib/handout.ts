import type { Lang } from "@/app/providers/language-provider";
import { courseTitle as courseTitleTh, instructor, lessons, type Lesson } from "./lessons";
import { courseTitleTranslations, getLocalizedLesson, getLocalizedSection } from "./lessons-i18n";

const LABELS: Record<Lang, {
  course: string;
  section: string;
  lesson: string;
  duration: string;
  instructor: string;
  summary: string;
  keyPoints: string;
  footer: string;
}> = {
  th: {
    course: "คอร์ส",
    section: "หมวด",
    lesson: "บทที่",
    duration: "ความยาว",
    instructor: "สอนโดย",
    summary: "สรุปเนื้อหา",
    keyPoints: "สิ่งที่จะได้เรียนรู้",
    footer: "เอกสารนี้สร้างขึ้นเพื่อประกอบการเรียนของคุณเท่านั้น",
  },
  en: {
    course: "Course",
    section: "Section",
    lesson: "Lesson",
    duration: "Duration",
    instructor: "Instructor",
    summary: "Summary",
    keyPoints: "What you'll learn",
    footer: "This handout is provided for your personal study use only.",
  },
  zh: {
    course: "课程",
    section: "章节",
    lesson: "第几课",
    duration: "时长",
    instructor: "讲师",
    summary: "内容摘要",
    keyPoints: "本课要点",
    footer: "本资料仅供个人学习使用。",
  },
};

export function buildHandoutText(lesson: Lesson, lang: Lang): string {
  const l = LABELS[lang];
  const localized = getLocalizedLesson(lesson, lang);
  const courseTitle = courseTitleTranslations[lang] ?? courseTitleTh;
  const section = getLocalizedSection(lesson.section, lang);
  const index = lessons.findIndex((x) => x.slug === lesson.slug);

  const divider = "─".repeat(44);

  const lines: string[] = [
    courseTitle,
    divider,
    `${l.course}: ${courseTitle}`,
    `${l.section}: ${section}`,
    `${l.lesson}: ${index + 1} / ${lessons.length} — ${localized.title}`,
    `${l.duration}: ${lesson.duration}`,
    `${l.instructor}: ${instructor}`,
    "",
    `${l.summary}`,
    divider,
    localized.description,
    "",
    `${l.keyPoints}`,
    divider,
    ...localized.points.map((p) => `• ${p}`),
    "",
    divider,
    l.footer,
    "",
  ];

  return lines.join("\n");
}
