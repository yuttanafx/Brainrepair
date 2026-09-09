import type { Lang } from "@/app/providers/language-provider";

export type UiText = {
  brand: string;
  enterCourse: string;
  enterNow: string;
  tagline: string;
  heroDescription: (instructor: string, count: number, minutes: number) => string;
  courseContentHeading: string;
  lessonsCountLabel: (count: number) => string;
  backToCourse: string;
  logout: string;
  taughtBy: string;
  duration: string;
  chapterOf: (current: number, total: number) => string;
  nextLesson: string;
  courseComplete: string;
  takeaways: string;
  progressLabel: (done: number, total: number, pct: number) => string;
  loginHeading: string;
  loginSubtitle: string;
  passwordLabel: string;
  loginButton: string;
  loginButtonLoading: string;
  loginGenericError: string;
  loginConnError: string;
  invalidPassword: string;
  serverNotConfigured: string;
  themeToLight: string;
  themeToDark: string;
  downloadHandout: string;
};

export const uiText: Record<Lang, UiText> = {
  th: {
    brand: "เรียนรู้",
    enterCourse: "เข้าเรียน",
    enterNow: "เข้าเรียนตอนนี้",
    tagline: "ซ่อมสมอง · เดินสู่ความสุข",
    heroDescription: (instructor, count, minutes) =>
      `คอร์สนี้เปิดให้เฉพาะผู้ที่ได้รับรหัสผ่านเข้าเรียนเท่านั้น สอนโดย ${instructor} รวม ${count} บทเรียน ความยาวรวมประมาณ ${minutes} นาที`,
    courseContentHeading: "เนื้อหาในคอร์ส",
    lessonsCountLabel: (count) => `${count} บทเรียน`,
    backToCourse: "← กลับหน้าคอร์ส",
    logout: "ออกจากระบบ",
    taughtBy: "สอนโดย",
    duration: "ความยาว",
    chapterOf: (current, total) => `บทที่ ${current} จาก ${total}`,
    nextLesson: "บทถัดไป →",
    courseComplete: "เรียนจบคอร์สแล้ว 🎉",
    takeaways: "สิ่งที่จะได้เรียนรู้:",
    progressLabel: (done, total, pct) => `เรียนไปแล้ว ${done} จาก ${total} บท (${pct}%)`,
    loginHeading: "เข้าเรียน",
    loginSubtitle: "คอร์สนี้เปิดให้เฉพาะผู้ที่ได้รับรหัสผ่าน กรอกรหัสผ่านที่ได้รับเพื่อเข้าเรียน",
    passwordLabel: "รหัสผ่าน",
    loginButton: "เข้าเรียน",
    loginButtonLoading: "กำลังตรวจสอบ...",
    loginGenericError: "เกิดข้อผิดพลาด",
    loginConnError: "เชื่อมต่อเซิร์ฟเวอร์ไม่ได้ ลองใหม่อีกครั้ง",
    invalidPassword: "รหัสผ่านไม่ถูกต้อง",
    serverNotConfigured: "ยังไม่ได้ตั้งค่า COURSE_PASSWORD บนเซิร์ฟเวอร์",
    themeToLight: "สลับเป็นโหมดสว่าง",
    themeToDark: "สลับเป็นโหมดมืด",
    downloadHandout: "ดาวน์โหลดเนื้อหาบทนี้",
  },
  en: {
    brand: "Learn",
    enterCourse: "Enter Course",
    enterNow: "Start Learning Now",
    tagline: "Rewire Your Mind · Walk Toward Happiness",
    heroDescription: (instructor, count, minutes) =>
      `This course is available only to those with an access password. Taught by ${instructor}, with ${count} lessons totaling about ${minutes} minutes.`,
    courseContentHeading: "Course Content",
    lessonsCountLabel: (count) => `${count} lessons`,
    backToCourse: "← Back to course",
    logout: "Log out",
    taughtBy: "Taught by",
    duration: "Duration",
    chapterOf: (current, total) => `Lesson ${current} of ${total}`,
    nextLesson: "Next lesson →",
    courseComplete: "Course complete 🎉",
    takeaways: "What you'll learn:",
    progressLabel: (done, total, pct) => `${done} of ${total} lessons completed (${pct}%)`,
    loginHeading: "Sign in",
    loginSubtitle: "This course is available only to those with an access password. Enter your password to continue.",
    passwordLabel: "Password",
    loginButton: "Enter",
    loginButtonLoading: "Checking...",
    loginGenericError: "Something went wrong",
    loginConnError: "Couldn't reach the server. Please try again.",
    invalidPassword: "Incorrect password",
    serverNotConfigured: "COURSE_PASSWORD hasn't been configured on the server",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    downloadHandout: "Download lesson notes",
  },
  zh: {
    brand: "学习",
    enterCourse: "进入课程",
    enterNow: "立即开始学习",
    tagline: "重塑心灵 · 走向幸福",
    heroDescription: (instructor, count, minutes) =>
      `本课程仅向持有访问密码的学员开放。由 ${instructor} 授课，共 ${count} 节课，总时长约 ${minutes} 分钟。`,
    courseContentHeading: "课程内容",
    lessonsCountLabel: (count) => `${count} 节课`,
    backToCourse: "← 返回课程首页",
    logout: "退出登录",
    taughtBy: "讲师",
    duration: "时长",
    chapterOf: (current, total) => `第 ${current} 课，共 ${total} 课`,
    nextLesson: "下一课 →",
    courseComplete: "课程已完成 🎉",
    takeaways: "本课要点：",
    progressLabel: (done, total, pct) => `已完成 ${done} / ${total} 课（${pct}%）`,
    loginHeading: "登录",
    loginSubtitle: "本课程仅向持有访问密码的学员开放，请输入密码以继续。",
    passwordLabel: "密码",
    loginButton: "登录",
    loginButtonLoading: "验证中...",
    loginGenericError: "出现错误",
    loginConnError: "无法连接服务器，请重试。",
    invalidPassword: "密码不正确",
    serverNotConfigured: "服务器尚未配置 COURSE_PASSWORD",
    themeToLight: "切换到浅色模式",
    themeToDark: "切换到深色模式",
    downloadHandout: "下载本课内容",
  },
};
