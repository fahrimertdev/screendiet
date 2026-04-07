import { FunFactInput, FunFactRule } from "@/types";

const RULES: FunFactRule[] = [
  // App-specific high-priority rules
  {
    id: "tiktok-heavy",
    priority: 10,
    condition: (i) => i.topAppId === "tiktok" && i.totalMinutes > 120,
    messages: [
      "TikTok owns your soul at this point.",
      "The algorithm has won. You never stood a chance.",
      "ByteDance's favorite customer.",
      "For you page? More like life page.",
    ],
  },
  {
    id: "tiktok-moderate",
    priority: 8,
    condition: (i) => i.topAppId === "tiktok",
    messages: [
      "The algorithm is learning your deepest secrets.",
      "Just one more video. Sure.",
    ],
  },
  {
    id: "instagram-heavy",
    priority: 9,
    condition: (i) => i.topAppId === "instagram" && i.totalMinutes > 120,
    messages: [
      "Main character energy. Parasocial edition.",
      "You've seen everyone's highlight reel. Now touch grass.",
      "Reels are just TikTok in a trench coat. You fell for it.",
    ],
  },
  {
    id: "youtube-heavy",
    priority: 9,
    condition: (i) => i.topAppId === "youtube" && i.totalMinutes > 180,
    messages: [
      "You basically have a PhD in rabbit holes.",
      "The algorithm is your best friend. And worst enemy.",
      "Auto-play did this to you. Not your fault.",
    ],
  },
  {
    id: "netflix-heavy",
    priority: 9,
    condition: (i) => i.topAppId === "netflix" && i.totalMinutes > 180,
    messages: [
      "You basically watched a full season this week.",
      "Are you still watching? Yes. Obviously.",
      "Netflix and... that's it. Just Netflix.",
    ],
  },
  {
    id: "twitter-heavy",
    priority: 9,
    condition: (i) => i.topAppId === "twitter" && i.totalMinutes > 90,
    messages: [
      "Chronically online confirmed.",
      "The discourse consumed you. You are the discourse now.",
      "Main character energy. Wrong kind.",
    ],
  },
  {
    id: "discord-heavy",
    priority: 9,
    condition: (i) => i.topAppId === "discord" && i.totalMinutes > 120,
    messages: [
      "The server doesn't actually need you. But you show up anyway. Respect.",
      "Touch grass. The server will survive without you for an hour.",
    ],
  },

  // Total time bracket rules
  {
    id: "extreme-usage",
    priority: 7,
    condition: (i) => i.totalMinutes > 480,
    messages: [
      "That's 8+ hours. Your phone is your whole personality.",
      "Touch grass. Urgently. Like right now.",
      "Your screen called. It's worried about you.",
      "Sleep is a myth apparently.",
    ],
  },
  {
    id: "heavy-usage",
    priority: 6,
    condition: (i) => i.totalMinutes > 240,
    messages: [
      "That's a full workday of screen time. Impressive.",
      "Productivity? Never heard of her.",
      "Your eyes deserve an apology.",
    ],
  },
  {
    id: "moderate-usage",
    priority: 5,
    condition: (i) => i.totalMinutes > 120,
    messages: [
      "Peak digital citizen.",
      "Not bad. Not good. Just vibes.",
      "The internet raised you and it shows.",
    ],
  },
  {
    id: "low-usage",
    priority: 4,
    condition: (i) => i.totalMinutes < 60,
    messages: [
      "Least addicted person on the internet. Prove it.",
      "Suspiciously low. Who are you?",
      "Touch grass? You already did. Legend.",
      "Are you okay? That's concerningly responsible.",
    ],
  },

  // Category rules
  {
    id: "gaming-dominant",
    priority: 5,
    condition: (i) => i.topCategory === "gaming",
    messages: [
      "Least addicted gamer. The bar is low but still.",
      "W rizz, L grass touching.",
      "GG no re on your free time.",
    ],
  },
  {
    id: "productivity-dominant",
    priority: 5,
    condition: (i) => i.topCategory === "productivity" && i.totalMinutes > 120,
    messages: [
      "CEO mindset. Or just lots of emails.",
      "Hustle culture found its victim.",
      "You're either very productive or very good at looking productive.",
    ],
  },
  {
    id: "messaging-dominant",
    priority: 5,
    condition: (i) => i.topCategory === "messaging" && i.totalMinutes > 90,
    messages: [
      "Your friends are lucky. Or tired. Hard to say.",
      "The group chat has claimed another soul.",
      "Reply guy. Main character edition.",
    ],
  },
  {
    id: "music-dominant",
    priority: 5,
    condition: (i) => i.topCategory === "music",
    messages: [
      "The soundtrack to your life is apparently endless.",
      "AirPods in, world out.",
      "Main character with the perfect playlist. Respect.",
    ],
  },
  {
    id: "social-dominant",
    priority: 5,
    condition: (i) => i.topCategory === "social" && i.totalMinutes > 120,
    messages: [
      "The feed has consumed you. You are the feed now.",
      "Chronically online. Chronically.",
      "Social media said jump. You said how high.",
    ],
  },
];

const FALLBACK_MESSAGES = [
  "Your phone misses you. Oh wait, it can't — you never put it down.",
  "Screens: 1. Sunlight: 0.",
  "A perfectly normal amount of screen time. Allegedly.",
  "The internet raised you. It shows. A little.",
  "Peak human behavior documented.",
];

export function getFunFact(input: FunFactInput): string {
  const matching = RULES.filter((r) => r.condition(input)).sort(
    (a, b) => b.priority - a.priority
  );

  const pool =
    matching.length > 0 ? matching[0].messages : FALLBACK_MESSAGES;

  // Pseudo-deterministic: pick based on totalMinutes mod pool length
  const index = input.totalMinutes % pool.length;
  return pool[index];
}
