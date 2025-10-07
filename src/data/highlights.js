export const navigationMethods = [
  {
    key: "dead-reckoning",
    title: "Dead Reckoning",
    summary:
      "Extend a last known fix using course, speed, and time to estimate present position.",
    takeaway: "Your phone quietly falls back to this inside tunnels.",
    icon: "⚓",
  },
  {
    key: "celestial",
    title: "Celestial Navigation",
    summary:
      "Measure the altitude of the Sun, Moon, or stars to compute latitude and longitude.",
    takeaway:
      "Entire ocean crossings were guided by nothing but sextants and tables.",
    icon: "🌌",
  },
  {
    key: "piloting",
    title: "Piloting",
    summary:
      "Match visible landmarks, coasts, or skyline silhouettes against charts.",
    takeaway: "Every road trip using signposts is piloting in disguise.",
    icon: "🧭",
  },
  {
    key: "radio",
    title: "Radio Navigation",
    summary: "Triangulate signals from beacons like VOR, LORAN, or modern AIS.",
    takeaway: "A bridge technology between analog seas and the satellite era.",
    icon: "📡",
  },
  {
    key: "gnss",
    title: "GNSS",
    summary:
      "Constellations such as GPS, GLONASS, Galileo, and BeiDou stream precise timing data.",
    takeaway:
      "Four separate systems now criss-cross the planet for redundancy.",
    icon: "🛰️",
  },
];

export const directionTricks = [
  {
    title: "Solar Compass",
    detail:
      "Plant a stick and watch its shadow sweep east to west; the noon line gives you a perfect north–south axis.",
    icon: "🌞",
  },
  {
    title: "Shadow Walking",
    detail:
      "Keep your shadow ahead between 11 AM and 1 PM to walk straight north — a simple desert survival trick.",
    icon: "🚶",
  },
  {
    title: "Polaris Pointer",
    detail:
      "Use Merak and Dubhe in the Big Dipper to sight Polaris; its altitude equals your latitude in the northern hemisphere.",
    icon: "⭐",
  },
  {
    title: "Southern Cross",
    detail:
      "Extend the Cross’s long axis four-and-a-half lengths to land on the South Celestial Pole.",
    icon: "✝️",
  },
  {
    title: "Moon Clock",
    detail:
      "Full Moon on the meridian at midnight, waxing half at 6 PM, waning half at 6 AM — convert sky time into longitude.",
    icon: "🌙",
  },
];

export const mediaItems = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    alt: "Night sky over the ocean with bright stars",
    caption: "Star fields above a calm sea — your navigation chart at night.",
  },
  {
    type: "gif",
    src: "https://media.giphy.com/media/3oKIPtjElfqwMOTbH2/giphy.gif",
    alt: "Animated rotating globe with latitude and longitude grid",
    caption: "Visualizing latitude-longitude as a living grid.",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
    alt: "Sextant resting on a nautical chart",
    caption: "Sextants translate star angles into precise fixes.",
  },
];
