export type Lesson = {
  slug: string;
  title: string;
  duration: string;
  videoUrl: string; // YouTube/Vimeo embed URL, or your own mp4 link
  description: string;
  points: string[];
  section: string;
};

export const courseTitle = "17 สัญลักษณ์ เปลี่ยนชีวิต เดินสู่ความสุข — ซ่อมสมอง";
export const instructor = "Winyoo";

const SECTION_1 = "ส่วนที่ 1 · เข้าใจความสุขและตัวตน (หน้า 5–47)";
const SECTION_2 = "ส่วนที่ 2 · มุมมองและพลังความคิด (หน้า 51–83)";
const SECTION_3 = "ส่วนที่ 3 · ลงมือเปลี่ยนชีวิต (หน้า 88–93)";

export const lessons: Lesson[] = [
  {
    slug: "definition-of-happiness",
    section: SECTION_1,
    title: "นิยามของความสุข",
    duration: "08:05",
    videoUrl: "https://youtube.com/shorts/6UoBmvfM-kY?si=rVlNzxc8pc1oP49b",
    description:
      'ทำความเข้าใจว่าแท้จริงแล้ว "ความสุข" คืออะไร และทำไมแต่ละคนถึงนิยามมันไม่เหมือนกัน ก่อนจะเริ่มเดินทางเข้าสู่เนื้อหาทั้งเล่ม',
    points: ["ความสุขไม่ใช่จุดหมายปลายทางเดียว", "แยกความสุขออกจากความพึงพอใจชั่วคราว", "ตั้งกรอบความคิดก่อนเริ่มบทถัดไป"],
  },
  {
    slug: "love-yourself",
    section: SECTION_1,
    title: "รักตัวเอง",
    duration: "10:40",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "ตอบคำถามว่ารักตัวเองคืออะไร และทำไมการรักตัวเองจึงเป็นรากฐานสำคัญของความสุขที่ยั่งยืน",
    points: ["รักตัวเองคืออะไรกันแน่?", "ทำไมรักตัวเองจึงสำคัญ?", "เริ่มฝึกรักตัวเองแบบไม่หลงตัวเอง"],
  },
  {
    slug: "past-future-present",
    section: SECTION_1,
    title: "อดีต อนาคต ปัจจุบัน",
    duration: "09:15",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "เรียนรู้วิธีวางน้ำหนักความคิดระหว่างอดีต อนาคต และปัจจุบัน เพื่อไม่ให้จมอยู่กับเรื่องใดเรื่องหนึ่งมากเกินไป",
    points: ["ผลกระทบของการยึดติดอดีต", "ความกังวลเกี่ยวกับอนาคตที่ยังไม่เกิด", "ฝึกอยู่กับปัจจุบันอย่างมีสติ"],
  },
  {
    slug: "controllable-uncontrollable",
    section: SECTION_1,
    title: "คุมได้ คุมไม่ได้",
    duration: "11:20",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "แยกแยะสิ่งที่อยู่ในการควบคุมของเราออกจากสิ่งที่ควบคุมไม่ได้ เพื่อลดความทุกข์ที่ไม่จำเป็น",
    points: ["วิธีแบ่งสิ่งที่คุมได้กับคุมไม่ได้", "ปล่อยวางสิ่งที่อยู่นอกเหนือการควบคุม", "โฟกัสพลังงานไปที่สิ่งที่เปลี่ยนแปลงได้จริง"],
  },
  {
    slug: "can-do-cannot-do",
    section: SECTION_1,
    title: "ทำได้ ทำไม่ได้",
    duration: "13:50",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "มองความสามารถของตัวเองตามความเป็นจริง เพื่อตั้งเป้าหมายและความคาดหวังได้อย่างเหมาะสม",
    points: ["ยอมรับขีดจำกัดของตัวเองอย่างตรงไปตรงมา", "แยกข้อจำกัดชั่วคราวออกจากข้อจำกัดถาวร", 'พัฒนาสิ่งที่ "ยังทำไม่ได้" ให้กลายเป็น "ทำได้"'],
  },
  {
    slug: "focus-unfocus",
    section: SECTION_1,
    title: "โฟกัส ไม่โฟกัส",
    duration: "14:30",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "เข้าใจพลังของการโฟกัส และผลเสียของการปล่อยความคิดกระจัดกระจายไปเรื่อยเปื่อย",
    points: ["สัญญาณของการขาดโฟกัส", "เทคนิคดึงความสนใจกลับมาที่เป้าหมาย", "จัดลำดับความสำคัญให้ชัดเจน"],
  },
  {
    slug: "happy-with-goals",
    section: SECTION_1,
    title: "มีความสุขกับเป้าหมาย",
    duration: "12:05",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "เรียนรู้ที่จะมีความสุขระหว่างทางไปสู่เป้าหมาย ไม่ใช่รอให้ถึงปลายทางเท่านั้นถึงจะมีความสุข",
    points: ["เป้าหมายไม่ใช่สิ่งสำเร็จรูปที่ตายตัว", "สนุกกับกระบวนการระหว่างทาง", "ปรับเป้าหมายได้โดยไม่รู้สึกล้มเหลว"],
  },
  {
    slug: "no-fixed-self",
    section: SECTION_1,
    title: "ไม่มีตัวตน สลายได้ ประกอบใหม่ได้",
    duration: "15:10",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "มุมมองที่ว่าตัวตนของเราไม่ใช่สิ่งตายตัว แต่สามารถสลายความเชื่อเดิมและประกอบขึ้นใหม่ให้ดีกว่าเดิมได้",
    points: ["ตัวตนคือสิ่งที่เปลี่ยนแปลงได้เสมอ", "กล้าสลายความเชื่อที่ไม่เป็นประโยชน์", "ประกอบตัวตนใหม่อย่างมีทิศทาง"],
  },
  {
    slug: "living-life",
    section: SECTION_1,
    title: "การใช้ชีวิต",
    duration: "07:45",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "สรุปแนวคิดจากส่วนที่ 1 สู่แนวทางการใช้ชีวิตประจำวันอย่างมีความสุขมากขึ้น",
    points: ["เชื่อมโยงบทเรียนก่อนหน้าเข้าด้วยกัน", "นำแนวคิดไปปรับใช้ในชีวิตจริง", "เตรียมพร้อมสู่เนื้อหาส่วนที่ 2"],
  },
  {
    slug: "everything-starts-with-decision",
    section: SECTION_2,
    title: "ทุกอย่างเริ่มต้นที่ตัดสินใจ",
    duration: "10:55",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "ทุกการเปลี่ยนแปลงเริ่มต้นจากการตัดสินใจเพียงครั้งเดียว เรียนรู้วิธีตัดสินใจอย่างมั่นใจ",
    points: ["ทำไมการตัดสินใจถึงเป็นจุดเริ่มต้นของทุกสิ่ง", "เอาชนะความลังเลก่อนตัดสินใจ", "รับผิดชอบต่อผลของการตัดสินใจ"],
  },
  {
    slug: "look-back",
    section: SECTION_2,
    title: "มองภาพย้อนกลับ",
    duration: "09:30",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "ฝึกมองย้อนกลับไปยังเหตุการณ์ที่ผ่านมา เพื่อเข้าใจตัวเองและสถานการณ์ปัจจุบันได้ลึกซึ้งขึ้น",
    points: ["บทเรียนที่ซ่อนอยู่ในอดีต", "มองเหตุการณ์เดิมด้วยมุมมองใหม่", "ใช้อดีตเป็นเข็มทิศ ไม่ใช่โซ่ตรวน"],
  },
  {
    slug: "third-eye",
    section: SECTION_2,
    title: "ดวงตาที่สาม",
    duration: "12:40",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: 'เปิดมุมมองใหม่ในการมองเห็นตัวเองและโลกรอบตัว ผ่านแนวคิดเรื่อง "ดวงตาที่สาม"',
    points: ["มองเห็นสิ่งที่ตาเปล่ามองไม่เห็น", "ฝึกสังเกตความคิดและอารมณ์ของตัวเอง", "เชื่อมโยงสัญชาตญาณเข้ากับเหตุผล"],
  },
  {
    slug: "frequency-energy",
    section: SECTION_2,
    title: "พลังงานความถี่",
    duration: "11:15",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "ทำความเข้าใจแนวคิดเรื่องพลังงานและความถี่ของความคิด ที่ส่งผลต่ออารมณ์และพฤติกรรมของเรา",
    points: ["ความถี่ทางความคิดคืออะไร", "ผลกระทบของพลังงานลบและพลังงานบวก", "ปรับความถี่ภายในให้สอดคล้องกับสิ่งที่ต้องการ"],
  },
  {
    slug: "gps-4-circles-0",
    section: SECTION_2,
    title: "ความคิดระบบ GPS 4 วงกลม 0",
    duration: "16:20",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: 'โมเดลความคิดแบบ "GPS 4 วงกลม 0" เครื่องมือช่วยกำหนดทิศทางชีวิตอย่างเป็นระบบ',
    points: ["โครงสร้างของโมเดล 4 วงกลม", "ตั้งจุดเริ่มต้น (0) ให้ชัดเจน", "ใช้โมเดลนี้วางแผนเป้าหมายระยะยาว"],
  },
  {
    slug: "quality-of-time",
    section: SECTION_2,
    title: "คุณภาพการใช้เวลา",
    duration: "10:05",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "เวลาที่มีคุณค่าไม่ได้วัดจากปริมาณ แต่วัดจากคุณภาพของสิ่งที่เราทำในเวลานั้น",
    points: ['แยกเวลาที่ "ผ่านไป" กับเวลาที่ "มีคุณค่า"', "ลดกิจกรรมที่กินเวลาแต่ไม่สร้างคุณค่า", "ออกแบบวันให้มีคุณภาพมากขึ้น"],
  },
  {
    slug: "game-lose-restart",
    section: SECTION_2,
    title: "Game แพ้ก็เริ่มใหม่",
    duration: "09:50",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "มองความล้มเหลวเหมือนเกมที่แพ้แล้วเริ่มใหม่ได้ ไม่ใช่จุดจบของทุกอย่าง",
    points: ["เปลี่ยนมุมมองต่อความล้มเหลว", "เรียนรู้จากความพ่ายแพ้แต่ละครั้ง", "กล้าเริ่มใหม่โดยไม่กลัวแพ้ซ้ำ"],
  },
  {
    slug: "perfect-in-imperfection",
    section: SECTION_2,
    title: "ความสมบูรณ์แบบในความไม่สมบูรณ์ (การยอมรับตัวเอง)",
    duration: "13:25",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "เรียนรู้ที่จะยอมรับความไม่สมบูรณ์แบบของตัวเอง และมองเห็นความงามที่ซ่อนอยู่ในความไม่สมบูรณ์นั้น",
    points: ["ทำไมความสมบูรณ์แบบถึงเป็นภาพลวงตา", "ฝึกการยอมรับตัวเองอย่างที่เป็น", "เปลี่ยนข้อบกพร่องให้เป็นเอกลักษณ์"],
  },
  {
    slug: "everything-starts-with-a-question",
    section: SECTION_3,
    title: "ทุกอย่างเริ่มต้นที่คำถาม",
    duration: "08:40",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "การตั้งคำถามที่ถูกต้องคือจุดเริ่มต้นของการเปลี่ยนแปลงและการค้นพบคำตอบที่แท้จริง",
    points: ["พลังของการตั้งคำถามกับตัวเอง", "คำถามที่ควรถามก่อนตัดสินใจครั้งสำคัญ", "เปลี่ยนคำถามเปลี่ยนคำตอบของชีวิต"],
  },
  {
    slug: "want-to-change-do-this",
    section: SECTION_3,
    title: "อยากเปลี่ยนชีวิต ทำสิ่งนี้!!",
    duration: "11:00",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "บทสรุปส่งท้าย รวมแนวทางปฏิบัติที่เป็นรูปธรรม สำหรับใครที่อยากเริ่มเปลี่ยนชีวิตตั้งแต่วันนี้",
    points: ["สรุปแก่นความคิดตลอดทั้งเล่ม", "ขั้นตอนลงมือทำที่ทำได้ทันที", "รักษาแรงจูงใจให้เปลี่ยนแปลงได้ต่อเนื่อง"],
  },
];

export function getLessonBySlug(slug: string) {
  return lessons.find((l) => l.slug === slug);
}
