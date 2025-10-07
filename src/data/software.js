import spaceEngineLogo from "../assets/spaceEngineLogo.jpg";
import googleEarthLogo from "../assets/googleEarthLogo.png";
import stellariumLogo from "../assets/stellariumLogo.png";
export const softwareTools = [
  {
    name: "Stellarium",
    description:
      "An open-source planetarium software that recreates the sky exactly as it appears from any point on Earth and at any time in history or the future. During our seminar, Stellarium is used to demonstrate star positions, Polaris alignment, Sun paths, and how navigators identify celestial bodies for navigation.",
    url: "https://stellarium.org/",
    logo: stellariumLogo,
  },
  {
    name: "Google Earth",
    description:
      "A virtual globe that lets us view Earth from space, trace latitudes and longitudes, and measure real-world distances. In the seminar, we use Google Earth to show how celestial fixes correspond to actual locations on the globe and how ground tracks relate to geographic coordinates.",
    url: "https://earth.google.com/web/",
    logo: googleEarthLogo,
  },
  {
    name: "Space Engine",
    description:
      "A realistic 3D universe simulator that lets us travel beyond Earth to explore stars, planets, and galaxies with accurate physics and motion. We use Space Engine to demonstrate how celestial navigation principles extend into interplanetary and deep-space contexts, including parallax and reference-frame visualization.",
    url: "https://spaceengine.org/",
    logo: spaceEngineLogo,
  },
];
