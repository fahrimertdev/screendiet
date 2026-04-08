import { AppDefinition } from "@/types";

export const APP_DEFINITIONS: AppDefinition[] = [
  // Social
  { id: "instagram", name: "Instagram", icon: "📸", color: "#E1306C", category: "social" },
  { id: "tiktok", name: "TikTok", icon: "🎵", color: "#FE2C55", category: "social" },
  { id: "twitter", name: "Twitter / X", icon: "🐦", color: "#1DA1F2", category: "social" },
  { id: "snapchat", name: "Snapchat", icon: "👻", color: "#FFFC00", category: "social" },
  { id: "facebook", name: "Facebook", icon: "📘", color: "#1877F2", category: "social" },
  { id: "reddit", name: "Reddit", icon: "🤖", color: "#FF4500", category: "social" },
  { id: "linkedin", name: "LinkedIn", icon: "💼", color: "#0A66C2", category: "social" },
  { id: "pinterest", name: "Pinterest", icon: "📌", color: "#E60023", category: "social" },
  { id: "threads", name: "Threads", icon: "🧵", color: "#666666", category: "social" },
  { id: "bereal", name: "BeReal", icon: "📷", color: "#3D3D3D", category: "social" },

  // Video
  { id: "youtube", name: "YouTube", icon: "▶️", color: "#FF0000", category: "video" },
  { id: "netflix", name: "Netflix", icon: "🎬", color: "#E50914", category: "video" },
  { id: "twitch", name: "Twitch", icon: "🟣", color: "#9146FF", category: "video" },
  { id: "disney", name: "Disney+", icon: "✨", color: "#113CCF", category: "video" },
  { id: "prime", name: "Prime Video", icon: "📦", color: "#00A8E1", category: "video" },
  { id: "hbo", name: "HBO Max", icon: "🎭", color: "#5822DC", category: "video" },
  { id: "hulu", name: "Hulu", icon: "🟢", color: "#1CE783", category: "video" },

  // Messaging
  { id: "whatsapp", name: "WhatsApp", icon: "💬", color: "#25D366", category: "messaging" },
  { id: "telegram", name: "Telegram", icon: "✈️", color: "#2AABEE", category: "messaging" },
  { id: "discord", name: "Discord", icon: "🎮", color: "#5865F2", category: "messaging" },
  { id: "imessage", name: "Messages", icon: "💬", color: "#34C759", category: "messaging" },
  { id: "signal", name: "Signal", icon: "🔒", color: "#3A76F0", category: "messaging" },
  { id: "messenger", name: "Messenger", icon: "💜", color: "#0099FF", category: "messaging" },

  // Gaming
  { id: "roblox", name: "Roblox", icon: "🟥", color: "#E8172B", category: "gaming" },
  { id: "minecraft", name: "Minecraft", icon: "⛏️", color: "#5B8C3E", category: "gaming" },
  { id: "clashofclans", name: "Clash of Clans", icon: "⚔️", color: "#F4A828", category: "gaming" },
  { id: "fortnite", name: "Fortnite", icon: "🏗️", color: "#00D4FF", category: "gaming" },
  { id: "mobilegame", name: "Mobile Games", icon: "🕹️", color: "#7C3AED", category: "gaming" },

  // Productivity
  { id: "gmail", name: "Gmail", icon: "📧", color: "#EA4335", category: "productivity" },
  { id: "chrome", name: "Chrome", icon: "🌐", color: "#4285F4", category: "productivity" },
  { id: "safari", name: "Safari", icon: "🧭", color: "#006CFF", category: "productivity" },
  { id: "notion", name: "Notion", icon: "📝", color: "#888888", category: "productivity" },
  { id: "slack", name: "Slack", icon: "💬", color: "#E01E5A", category: "productivity" },
  { id: "zoom", name: "Zoom", icon: "📹", color: "#2D8CFF", category: "productivity" },

  // Music
  { id: "spotify", name: "Spotify", icon: "🎧", color: "#1DB954", category: "music" },
  { id: "applemusic", name: "Apple Music", icon: "🎶", color: "#FA243C", category: "music" },
  { id: "soundcloud", name: "SoundCloud", icon: "☁️", color: "#FF5500", category: "music" },
  { id: "podcasts", name: "Podcasts", icon: "🎙️", color: "#9B59B6", category: "music" },
];

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "social", label: "Social" },
  { id: "video", label: "Video" },
  { id: "messaging", label: "Messaging" },
  { id: "gaming", label: "Gaming" },
  { id: "productivity", label: "Productivity" },
  { id: "music", label: "Music" },
  { id: "other", label: "Other" },
] as const;
