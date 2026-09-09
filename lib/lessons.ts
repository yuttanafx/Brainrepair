export type Lesson = {
  slug: string;
  title: string;
  duration: string;
  videoUrl: string; // YouTube/Vimeo embed URL, or your own mp4 link
  description: string;
  points: string[];
  section: string;
};

export const courseTitle = "สร้างภาพพื้นหลังด้วย AI แนวปรัชญาและศาสนา";
export const instructor = "ครูปวีณ์กานต์ ศิลป์เจริญ";

export const lessons: Lesson[] = [
  {
    slug: "intro",
    section: "บทที่ 1–3 · พื้นฐานการสร้างภาพด้วย AI",
    title: "รู้จักเครื่องมือสร้างภาพด้วย AI",
    duration: "12:10",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "แนะนำเครื่องมือสร้างภาพด้วย AI ที่นิยมใช้ และหลักการทำงานเบื้องต้นของการสร้างภาพจากข้อความ",
    points: ["เครื่องมือสร้างภาพ AI ที่เหมาะกับงานภาพพื้นหลัง", "หลักการทำงานของ text-to-image", "ตั้งค่าบัญชีและเริ่มสร้างภาพแรก"],
  },
  {
    slug: "prompting",
    section: "บทที่ 1–3 · พื้นฐานการสร้างภาพด้วย AI",
    title: "เขียนพรอมต์ให้ได้ภาพที่ต้องการ",
    duration: "15:04",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "เทคนิคการเขียนพรอมต์เพื่อควบคุมโทนสี องค์ประกอบ และบรรยากาศของภาพ",
    points: ["โครงสร้างของพรอมต์ที่ดี", "การกำหนดโทนสีและแสงในภาพ", "คำที่ช่วยให้ภาพดูมีมิติและสงบนิ่ง"],
  },
  {
    slug: "symbolism",
    section: "บทที่ 1–3 · พื้นฐานการสร้างภาพด้วย AI",
    title: "การใช้สัญลักษณ์เชิงปรัชญาในภาพ",
    duration: "14:22",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "เรียนรู้การใช้รูปทรง แสง เงา และองค์ประกอบที่สื่อถึงแนวคิดเชิงปรัชญาอย่างสงบและเป็นกลาง",
    points: ["สัญลักษณ์ที่สื่อถึงความสงบและความสมดุล", "การเลือกองค์ประกอบให้เหมาะกับทุกความเชื่อ", "หลีกเลี่ยงสัญลักษณ์ที่เจาะจงศาสนาใดศาสนาหนึ่งมากเกินไป"],
  },
  {
    slug: "composition",
    section: "บทที่ 4–7 · การจัดองค์ประกอบภาพพื้นหลัง",
    title: "จัดองค์ประกอบภาพให้เหมาะกับหน้าจอ",
    duration: "18:42",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "เทคนิคจัดองค์ประกอบภาพให้สวยงามและใช้งานได้จริงเมื่อนำไปตั้งเป็นพื้นหลังหน้าจอ",
    points: ["สัดส่วนภาพสำหรับมือถือและคอมพิวเตอร์", "เว้นพื้นที่ให้ไอคอนและข้อความอ่านง่าย", "การจัดวางจุดสนใจหลักของภาพ"],
  },
  {
    slug: "upscale",
    section: "บทที่ 4–7 · การจัดองค์ประกอบภาพพื้นหลัง",
    title: "ปรับความคมชัดและขยายขนาดภาพ",
    duration: "16:35",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "วิธีขยายภาพให้คมชัดขึ้นด้วยเครื่องมือ upscale โดยไม่เสียรายละเอียดของภาพ",
    points: ["เครื่องมือ upscale ที่ใช้งานง่าย", "การรักษารายละเอียดของภาพต้นฉบับ", "ส่งออกไฟล์ในความละเอียดที่เหมาะกับหน้าจอ"],
  },
  {
    slug: "collection",
    section: "บทที่ 4–7 · การจัดองค์ประกอบภาพพื้นหลัง",
    title: "สร้างชุดภาพพื้นหลังให้เป็นคอลเลกชัน",
    duration: "20:11",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "วางแนวทางให้ภาพพื้นหลังหลายภาพมีโทนและสไตล์ไปในทิศทางเดียวกันเป็นชุด",
    points: ["วางธีมสีให้สอดคล้องกันทั้งชุด", "ตั้งชื่อและจัดหมวดหมู่ไฟล์ภาพ", "แนวทางนำภาพไปเผยแพร่หรือใช้งานต่อ"],
  },
];

export function getLessonBySlug(slug: string) {
  return lessons.find((l) => l.slug === slug);
}
