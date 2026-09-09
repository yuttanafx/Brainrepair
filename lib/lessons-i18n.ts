import type { Lang } from "@/app/providers/language-provider";
import { courseTitle as courseTitleTh, type Lesson } from "./lessons";

export type LocalizedLessonText = {
  title: string;
  description: string;
  points: string[];
};

export const courseTitleTranslations: Record<Lang, string> = {
  th: courseTitleTh,
  en: "17 Symbols That Change Your Life — Rewire Your Mind",
  zh: "17个改变人生的符号——重塑心灵，走向幸福",
};

export const sectionTranslations: Record<string, Record<Lang, string>> = {
  "ส่วนที่ 1 · เข้าใจความสุขและตัวตน (หน้า 5–47)": {
    th: "ส่วนที่ 1 · เข้าใจความสุขและตัวตน (หน้า 5–47)",
    en: "Part 1 · Understanding Happiness & Self (p. 5–47)",
    zh: "第一部分·理解幸福与自我（第5–47页）",
  },
  "ส่วนที่ 2 · มุมมองและพลังความคิด (หน้า 51–83)": {
    th: "ส่วนที่ 2 · มุมมองและพลังความคิด (หน้า 51–83)",
    en: "Part 2 · Perspective & the Power of Thought (p. 51–83)",
    zh: "第二部分·视角与思维的力量（第51–83页）",
  },
  "ส่วนที่ 3 · ลงมือเปลี่ยนชีวิต (หน้า 88–93)": {
    th: "ส่วนที่ 3 · ลงมือเปลี่ยนชีวิต (หน้า 88–93)",
    en: "Part 3 · Taking Action to Change Your Life (p. 88–93)",
    zh: "第三部分·付诸行动，改变人生（第88–93页）",
  },
};

export function getLocalizedSection(section: string, lang: Lang): string {
  return sectionTranslations[section]?.[lang] ?? section;
}

export const lessonTranslations: Record<string, { en: LocalizedLessonText; zh: LocalizedLessonText }> = {
  "definition-of-happiness": {
    en: {
      title: "The Definition of Happiness",
      description:
        "Understand what happiness truly means and why everyone defines it differently, before starting the journey through the rest of the book.",
      points: [
        "Happiness isn't a single destination",
        "Separate happiness from temporary satisfaction",
        "Set the right mindset before the next chapter",
      ],
    },
    zh: {
      title: "幸福的定义",
      description: "了解“幸福”究竟是什么，以及为什么每个人对它的定义都不同，为接下来的学习打下基础。",
      points: ["幸福不是单一的终点", "区分幸福与短暂的满足感", "在进入下一章前建立正确心态"],
    },
  },
  "love-yourself": {
    en: {
      title: "Love Yourself",
      description:
        "Answer the question of what it really means to love yourself, and why self-love is the essential foundation of lasting happiness.",
      points: [
        "What does loving yourself really mean?",
        "Why self-love matters so much",
        "Start practicing self-love without becoming self-absorbed",
      ],
    },
    zh: {
      title: "爱自己",
      description: "回答“爱自己”到底是什么，以及为什么自爱是持久幸福的重要基础。",
      points: ["爱自己到底意味着什么？", "为什么爱自己如此重要？", "开始练习爱自己，而不流于自恋"],
    },
  },
  "past-future-present": {
    en: {
      title: "Past, Future, Present",
      description:
        "Learn how to balance your attention between the past, the future, and the present, so you don't get stuck dwelling on any one of them.",
      points: [
        "The impact of clinging to the past",
        "Anxiety about a future that hasn't happened yet",
        "Practice mindful presence in the now",
      ],
    },
    zh: {
      title: "过去、未来、现在",
      description: "学习如何在过去、未来与现在之间分配注意力，避免过度沉溺在其中任何一个时刻。",
      points: ["执着过去带来的影响", "对尚未发生的未来的焦虑", "练习专注当下的正念"],
    },
  },
  "controllable-uncontrollable": {
    en: {
      title: "What You Can and Can't Control",
      description: "Separate what's within your control from what isn't, so you can let go of unnecessary suffering.",
      points: [
        "How to tell what you can and can't control",
        "Letting go of things beyond your control",
        "Focus your energy on what you can actually change",
      ],
    },
    zh: {
      title: "能掌控的，不能掌控的",
      description: "分清哪些事在你的掌控之中，哪些不是，从而减少不必要的痛苦。",
      points: ["如何区分能掌控与不能掌控的事", "放下无法掌控的事情", "把精力集中在真正能改变的事上"],
    },
  },
  "can-do-cannot-do": {
    en: {
      title: "What You Can and Can't Do",
      description: "See your own abilities realistically, so you can set goals and expectations that actually fit you.",
      points: [
        "Honestly accept your own limitations",
        "Tell temporary limits apart from permanent ones",
        "Turn 'not yet able to' into 'able to'",
      ],
    },
    zh: {
      title: "能做到的，做不到的",
      description: "客观看待自己的能力，从而设定适合自己的目标与期望。",
      points: ["诚实接受自己的局限", "区分暂时的局限与永久的局限", "把“还做不到”变成“能做到”"],
    },
  },
  "focus-unfocus": {
    en: {
      title: "Focus and Losing Focus",
      description: "Understand the power of focus, and the cost of letting your thoughts scatter aimlessly.",
      points: ["Signs that you're losing focus", "Techniques to bring your attention back", "Set clear priorities"],
    },
    zh: {
      title: "专注与不专注",
      description: "理解专注的力量，以及思绪散乱带来的代价。",
      points: ["失去专注的信号", "把注意力拉回来的技巧", "清晰地安排优先顺序"],
    },
  },
  "happy-with-goals": {
    en: {
      title: "Being Happy With Your Goals",
      description: "Learn to enjoy the journey toward your goals, instead of waiting for the finish line to feel happy.",
      points: [
        "A goal isn't a fixed, finished thing",
        "Enjoy the process along the way",
        "Adjust your goals without feeling like a failure",
      ],
    },
    zh: {
      title: "在目标中获得快乐",
      description: "学会享受追求目标的过程，而不是只等到终点才感到快乐。",
      points: ["目标不是一成不变的", "享受过程本身", "调整目标而不觉得自己失败"],
    },
  },
  "no-fixed-self": {
    en: {
      title: "No Fixed Self — You Can Dissolve and Rebuild It",
      description:
        "The idea that your identity isn't fixed — you can dissolve old beliefs and rebuild yourself into something better.",
      points: [
        "Your identity can always change",
        "Dare to dissolve beliefs that no longer serve you",
        "Rebuild your identity with clear direction",
      ],
    },
    zh: {
      title: "没有固定的自我，可以打破也可以重建",
      description: "理解自我并非一成不变，你可以打破旧有信念，重新塑造更好的自己。",
      points: ["自我始终可以改变", "敢于打破无益的信念", "有方向地重建自我"],
    },
  },
  "living-life": {
    en: {
      title: "Living Life",
      description: "A summary that connects the ideas from Part 1 into practical ways to live a happier daily life.",
      points: ["Tie together the previous chapters", "Apply the ideas to real life", "Get ready for Part 2"],
    },
    zh: {
      title: "生活的方式",
      description: "总结第一部分的观念，转化为在日常生活中获得更多幸福的实用方法。",
      points: ["把前面几章的内容串联起来", "把观念应用到实际生活中", "为第二部分做好准备"],
    },
  },
  "everything-starts-with-decision": {
    en: {
      title: "Everything Starts With a Decision",
      description: "Every change begins with a single decision. Learn how to decide with confidence.",
      points: [
        "Why decisions are the starting point of everything",
        "Overcome hesitation before deciding",
        "Take responsibility for the outcome of your decisions",
      ],
    },
    zh: {
      title: "一切从决定开始",
      description: "每一次改变都始于一个决定。学习如何自信地做出决定。",
      points: ["为什么决定是一切的起点", "克服做决定前的犹豫", "为决定的结果负责"],
    },
  },
  "look-back": {
    en: {
      title: "Looking Back",
      description: "Practice looking back at past events to understand yourself and your current situation more deeply.",
      points: [
        "The lessons hidden in your past",
        "See old events through a new lens",
        "Use the past as a compass, not a chain",
      ],
    },
    zh: {
      title: "回望过去",
      description: "练习回顾过去发生的事情，从而更深入地了解自己和当下的处境。",
      points: ["藏在过去中的教训", "用新的视角看待旧事件", "把过去当作指南针，而不是枷锁"],
    },
  },
  "third-eye": {
    en: {
      title: "The Third Eye",
      description: "Open a new way of seeing yourself and the world around you through the idea of the 'third eye'.",
      points: [
        "See what the naked eye can't",
        "Practice observing your own thoughts and emotions",
        "Connect intuition with reason",
      ],
    },
    zh: {
      title: "第三只眼",
      description: "通过“第三只眼”的概念，打开看待自己与世界的新视角。",
      points: ["看见肉眼看不见的东西", "练习观察自己的想法与情绪", "把直觉与理性连接起来"],
    },
  },
  "frequency-energy": {
    en: {
      title: "Frequency and Energy",
      description: "Understand the concept of thought energy and frequency, and how it shapes your emotions and behavior.",
      points: [
        "What thought frequency really is",
        "The impact of negative and positive energy",
        "Align your inner frequency with what you want",
      ],
    },
    zh: {
      title: "频率与能量",
      description: "理解思想能量与频率的概念，以及它如何影响你的情绪与行为。",
      points: ["思想频率究竟是什么", "负能量与正能量的影响", "调整内在频率，与你想要的一致"],
    },
  },
  "gps-4-circles-0": {
    en: {
      title: "The 4-Circle GPS Thinking Model (Zero)",
      description: "The '4-Circle GPS, Zero' thinking model — a systematic tool to help set the direction of your life.",
      points: [
        "The structure of the 4-circle model",
        "Set a clear starting point (zero)",
        "Use the model to plan long-term goals",
      ],
    },
    zh: {
      title: "GPS四圆思维模型（0点）",
      description: "“GPS四圆·0点”思维模型，是一套帮助你系统地设定人生方向的工具。",
      points: ["四圆模型的结构", "设定清晰的起点（0点）", "用这个模型规划长期目标"],
    },
  },
  "quality-of-time": {
    en: {
      title: "The Quality of Time",
      description: "Valuable time isn't measured by quantity, but by the quality of what you do with it.",
      points: [
        "Tell time that 'passes' apart from time that 'matters'",
        "Cut down on activities that consume time without adding value",
        "Design your day to be more meaningful",
      ],
    },
    zh: {
      title: "时间的质量",
      description: "有价值的时间不是以数量衡量，而是以你如何使用它的质量衡量。",
      points: ["区分“流逝的时间”与“有价值的时间”", "减少消耗时间却没有价值的活动", "设计出更有质量的一天"],
    },
  },
  "game-lose-restart": {
    en: {
      title: "Game Over? Just Restart",
      description: "See failure like a game you lost and can restart — not the end of everything.",
      points: [
        "Change your perspective on failure",
        "Learn from every defeat",
        "Dare to start over without fear of losing again",
      ],
    },
    zh: {
      title: "游戏输了就重新开始",
      description: "把失败看作一局输掉的游戏，可以重新开始，而不是一切的终点。",
      points: ["改变对失败的看法", "从每一次挫折中学习", "敢于重新开始，不怕再次失败"],
    },
  },
  "perfect-in-imperfection": {
    en: {
      title: "Perfection Within Imperfection (Self-Acceptance)",
      description: "Learn to accept your own imperfections, and see the beauty hidden within them.",
      points: [
        "Why perfection is an illusion",
        "Practice accepting yourself as you are",
        "Turn your flaws into your identity",
      ],
    },
    zh: {
      title: "不完美中的完美（接纳自己）",
      description: "学习接纳自己的不完美，并看见其中隐藏的美。",
      points: ["为什么完美只是幻象", "练习接纳真实的自己", "把缺点变成自己的特色"],
    },
  },
  "everything-starts-with-a-question": {
    en: {
      title: "Everything Starts With a Question",
      description: "Asking the right question is the starting point of change and of finding real answers.",
      points: [
        "The power of asking yourself questions",
        "Questions to ask before a major decision",
        "Change the question, change the answer to your life",
      ],
    },
    zh: {
      title: "一切从提问开始",
      description: "提出正确的问题，是改变与找到真正答案的起点。",
      points: ["向自己提问的力量", "做重大决定前该问的问题", "改变问题，就能改变人生的答案"],
    },
  },
  "want-to-change-do-this": {
    en: {
      title: "Want to Change Your Life? Do This!!",
      description: "The closing summary — concrete steps for anyone who wants to start changing their life today.",
      points: [
        "The core ideas of the whole book, summarized",
        "Actionable steps you can take right now",
        "Keep your motivation going for lasting change",
      ],
    },
    zh: {
      title: "想改变人生？就做这件事！！",
      description: "全书的总结，为想要从今天开始改变人生的人提供具体可行的步骤。",
      points: ["全书核心观念总结", "现在就能开始的行动步骤", "让动力持续，带来长久的改变"],
    },
  },
};

export function getLocalizedLesson(lesson: Lesson, lang: Lang): LocalizedLessonText {
  if (lang === "th") {
    return { title: lesson.title, description: lesson.description, points: lesson.points };
  }
  const translated = lessonTranslations[lesson.slug]?.[lang];
  if (!translated) {
    return { title: lesson.title, description: lesson.description, points: lesson.points };
  }
  return translated;
}
