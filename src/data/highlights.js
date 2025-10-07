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
    src: "https://github.com/Betelwise/Cel_Nav_Website/releases/download/assets/angles.png",
    alt: "Celestial sphere showing altitude and azimuth angles",
    caption:
      "The celestial dome — showing how a star’s altitude and azimuth define its position in the sky relative to the observer.",
  },
  {
    type: "image",
    src: "https://github.com/Betelwise/Cel_Nav_Website/releases/download/assets/angles2d.png",
    alt: "2D diagram showing celestial triangle between star, zenith, and horizon",
    caption:
      "A simplified 2D view of the celestial triangle — the geometric foundation of celestial navigation.",
  },
  {
    type: "gif",
    src: "https://github.com/Betelwise/Cel_Nav_Website/releases/download/assets/gridExplainGIF.gif",
    alt: "Animated explanation of Earth's latitude and longitude grid",
    caption:
      "Earth’s coordinate grid — latitude and longitude lines mapping every point on the globe.",
  },
  {
    type: "gif",
    src: "https://github.com/Betelwise/Cel_Nav_Website/releases/download/assets/greatCircleGIF.gif",
    alt: "Animated great circle route",
    caption:
      "A great circle path — the shortest distance between two points on Earth, followed by aircraft and ships.",
  },
  {
    type: "gif",
    src: "https://github.com/Betelwise/Cel_Nav_Website/releases/download/assets/declinationGIF.gif",
    alt: "Animated diagram explaining celestial declination and Earth's tilt",
    caption:
      "Celestial declination — showing how a star’s position shifts with Earth’s axial tilt and orbit around the Sun.",
  },
  {
    type: "gif",
    src: "https://github.com/Betelwise/Cel_Nav_Website/releases/download/assets/polarisExplainGIF.gif",
    alt: "Animated explanation of finding Polaris using the Big Dipper",
    caption:
      "Using the Big Dipper to find Polaris — the North Star, which almost exactly marks true north.",
  },
  {
    type: "image",
    src: "https://github.com/Betelwise/Cel_Nav_Website/releases/download/assets/reflectionTrick.png",
    alt: "Diagram showing reflection trick to measure equal altitudes",
    caption:
      "The equal-altitude reflection trick — a simple way to find height of object respect to horizon",
  },
  {
    type: "image",
    src: "https://github.com/Betelwise/Cel_Nav_Website/releases/download/assets/sextant.jpg",
    alt: "Astronaut using sextant for navigation",
    caption:
      "A modern sextant in use — measuring the angle between celestial bodies and the horizon, a timeless navigation method.",
  },
  {
    type: "image",
    src: "https://github.com/Betelwise/Cel_Nav_Website/releases/download/assets/sphericalTrig.png",
    alt: "Mathematical diagram of spherical trigonometry on Earth’s surface",
    caption:
      "Spherical trigonometry — the mathematical framework behind converting celestial angles into Earth coordinates.",
  },
  {
    type: "image",
    src: "https://github.com/Betelwise/Cel_Nav_Website/releases/download/assets/kamal.jpg",
    alt: "Traditional navigation instrument Kamal made of wood and string",
    caption:
      "The Kamal — an ancient Arabian tool that measures the altitude of Polaris using a wooden plate and string knots.",
  },
  {
    type: "image",
    src: "https://github.com/Betelwise/Cel_Nav_Website/releases/download/assets/sunStone.jpg",
    alt: "Person holding a sunstone crystal under sunlight",
    caption:
      "Viking sunstone — a polarizing crystal that reveals the Sun’s direction even through clouds, a brilliant example of early optical navigation.",
  },
];
