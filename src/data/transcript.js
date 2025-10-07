export const transcriptSections = [
  {
    id: "intro",
    emoji: "🎤",
    title: "Introduction:",
    paragraphs: [
      "Welcome everyone to our journey through celestial navigation, the art of finding our position on Earth by reading the sky. From ancient voyagers who crossed oceans guided only by the stars, to today’s satellite-guided explorers, navigation has always been about one thing — knowing where we are and where we’re going.",
      "By the end of this seminar, you will understand how to find direction, latitude, and longitude using nothing but natural references — the Sun, the Moon, and the stars — no gadgets, no GPS, just the same methods sailors, travelers, and explorers once trusted their lives upon.",
    ],
  },
  {
    id: "foundations",
    emoji: "🧭",
    title: "1. Foundations:",
    paragraphs: [
      "Let’s begin by looking at the divisions of our planet. I will open Google Earth with the grid turned on to show you how the Earth is divided into lines of latitude and longitude. Latitude tells us how far north or south we are from the equator, and longitude tells us how far east or west we are from the Prime Meridian in Greenwich. Together, they form Earth’s coordinate system — just like an x-y graph, but wrapped around a sphere.",
      "To make this more concrete, we’ll find where Islamabad is. Imagine starting from the Earth’s center at 0° latitude and 0° longitude, which is near the Gulf of Guinea off Africa’s coast. From there, we move the line upward to 33.6° north, forming a great circle at that latitude. Then, from that circle, we move eastward by 73°, and that brings us exactly to Islamabad. So just two numbers — latitude and longitude — can locate any point on Earth.",
      "Now, a question. If you get lost in a desert, why not just start walking straight? It sounds simple, but experiments show humans can’t actually do that. When blindfolded, people end up walking in small circles, about 20 meters wide. Without a visible reference, our brain’s sense of direction drifts. In the desert, there are no trees or mountains to align yourself with, so you could keep walking in loops. And even if you could walk perfectly straight, in the Thar Desert for example, you might accidentally walk toward the Indian border instead of home. This is why navigation — true navigation — is essential.",
    ],
  },
  {
    id: "types",
    emoji: "🗺️",
    title: "2. Types of Navigation:",
    paragraphs: [
      "There are several main types of navigation that humans have used across history.",
      "Dead Reckoning: This method starts from a known position and estimates the next position by tracking your direction, speed, and time. Sailors used to calculate their new position based on how fast they were moving and how long they had traveled in a certain direction. The same principle still works today — your phone uses dead reckoning when GPS signals are lost, such as when you drive through a tunnel. That’s why, even underground, your blue dot keeps moving for a short while.",
      "Celestial Navigation: This is the main focus of our seminar. It means finding your position using the Sun, Moon, and stars. Before GPS or radio, entire voyages across the oceans were guided by these celestial clues.",
      "Piloting: This means navigating by visual landmarks — coasts, mountains, signboards, or any recognizable feature. When you’re driving and using visible points to orient yourself, you’re practicing piloting.",
      "Radio Navigation: This method uses radio waves from fixed transmitters or beacons. By comparing the strength or timing of signals from different stations, navigators could determine their position. Systems like LORAN for ships and VOR for aircraft used this technique long before GPS existed.",
      "GNSS: Finally, Global Navigation Satellite Systems such as GPS (United States), GLONASS (Russia), Galileo (Europe), and BeiDou (China). These rely on satellites orbiting Earth that broadcast signals with precise timing. Your receiver measures how long these signals take to reach you, and from that, it calculates your position anywhere on Earth with amazing accuracy.",
    ],
  },
  {
    id: "directions",
    emoji: "☀️",
    title: "3. Tricks for Direction:",
    paragraphs: [
      "Using the Sun: If you place a stick in the ground, you can tell directions by observing its shadow. As the Sun rises in the east and sets in the west, the shadow moves in the opposite direction. At exact noon, the shadow points along the north–south line. Once you know where south is, it’s easy to find north, east, and west.",
      "Another Sun trick: If you walk following your shadow between 11 a.m. and 1 p.m., you’ll actually move in a straight line toward north. If you keep your shadow on your right, you’re walking west; on your left, you’re walking east; behind you, that’s south.",
      "Using the Stars: The North Star, or Polaris, is famous for showing north. But it’s not the brightest star in the sky; it’s about the 41st brightest. You can locate it by drawing a line through the two outer stars of the Big Dipper’s bowl — those stars are called Merak and Dubhe. That line points straight to Polaris. If you’re unsure, look for the W-shaped constellation Cassiopeia on the opposite side; together, they frame Polaris in the northern sky.",
      "However, Polaris can’t be seen from the southern hemisphere. Instead, navigators there use the Southern Cross. Draw a line through its long axis about four and a half times its length, and that line points almost directly to the South Pole. That’s why the Southern Cross appears on the flags of Australia, New Zealand, and several other southern nations.",
      "Using the Moon: The Moon also helps in navigation if you know its timing. A full moon crosses the meridian — the imaginary line from north to south through your zenith — at midnight (12h plus Local Apparent Noon). A waxing half moon does so at 6h after LAN, and a waning half moon at 6h before LAN. The Moon’s motion in the sky can also be measured roughly using your hand: your outstretched fingers at arm’s length cover about 15 degrees, which equals one hour of the Moon’s apparent movement.",
    ],
  },
  {
    id: "coordinates",
    emoji: "🌍",
    title: "4. Tricks for Coordinates:",
    paragraphs: [
      "Using the Sun for Longitude: Longitude is directly related to time. The Earth rotates 360 degrees in 24 hours, so every hour of time difference equals 15 degrees of longitude. For example, if it’s noon where you are but 9 a.m. in Greenwich, you are 45 degrees east. This is how navigators found longitude once accurate clocks were invented.",
      "Using the Sun for Latitude: Latitude can be calculated from the Sun’s highest point in the sky, which happens at noon. If you measure the Sun’s altitude above the horizon and know the Sun’s declination for that date (its celestial latitude), you can find your latitude by using the formula: Latitude = 90° - Sun’s altitude + Sun’s declination.",
      "Using Polaris: The altitude of Polaris above your horizon directly equals your latitude in the northern hemisphere. If Polaris is 30 degrees above the horizon, you are at 30 degrees north latitude. Ancient navigators used simple instruments to measure this angle, such as the Kamal, Astrolabe, and Sextant. We’ll look at these tools in the seminar — including a DIY version and the real one.",
      "And if you can’t see the real horizon, for example on a ship or behind obstacles, you can use an artificial horizon. Even a shallow puddle of water works, because its surface is always perfectly horizontal and reflects the sky.",
    ],
  },
  {
    id: "celestial",
    emoji: "🌠",
    title: "5. Celestial Navigation Workflow:",
    paragraphs: [
      "Celestial navigation works on the principle that every celestial body — the Sun, Moon, planets, and stars — has a fixed path across the sky based on its declination. If you measure the altitude of one of these bodies and know its declination, you can calculate your latitude. The relationship is simple: Latitude = 90° - Zenith Distance + Declination.",
      "Each observation gives you a circle of possible positions on Earth, known as a Circle of Position. When you observe two or three different stars, the circles intersect at a single point, and that intersection is your exact position. This is where the math of spherical trigonometry comes in. You can imagine drawing these great circles on a globe or solving their equations to pinpoint your coordinates. Accurate time measurement is essential, because celestial positions constantly shift as the Earth rotates.",
    ],
  },
  {
    id: "viking",
    emoji: "⚔️",
    title: "6. Viking Bonus Trick:",
    paragraphs: [
      "Long before magnetic compasses, the Vikings were expert navigators who could sail across the North Atlantic even through clouds and fog. They used a fascinating tool called a Sunstone, which was a crystal known as Iceland spar. This crystal polarizes light — by rotating it and finding the position where the brightness looks equal on both sides, they could determine the direction of the hidden Sun. This allowed them to keep track of their course even when the sky was overcast or during long twilight hours. This trick, centuries ahead of its time, shows how deeply humans have always looked to the sky for guidance.",
    ],
  },
];
