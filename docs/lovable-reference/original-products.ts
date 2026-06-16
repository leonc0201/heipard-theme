import prod1 from "@/assets/prod-1.jpg";
import prod2 from "@/assets/prod-2.jpg";
import prod3 from "@/assets/prod-3.jpg";
import prod4 from "@/assets/prod-4.jpg";
import prod5 from "@/assets/prod-5.jpg";
import prod6 from "@/assets/prod-6.jpg";

export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  length: string;
  power: string;
  color: string;
  ip: string;
  warranty: string;
  category: string;
};

export const products: Product[] = [
  {
    slug: "kupfer-fairy-100",
    name: "Kupfer Fairy 100",
    subtitle: "Mikro-LED auf Kupferdraht, 10 m",
    price: 24.9,
    image: prod1,
    length: "10 m",
    power: "Netz / USB",
    color: "Warmweiß 2200 K",
    ip: "IP44",
    warranty: "3 Jahre Garantie",
    category: "Lichterketten",
  },
  {
    slug: "edison-festoon-15",
    name: "Edison Festoon 15",
    subtitle: "Glasbirnen, robust für draußen, 15 m",
    price: 89.0,
    image: prod2,
    length: "15 m",
    power: "Netz 230 V",
    color: "Warmweiß 2700 K",
    ip: "IP65",
    warranty: "5 Jahre Garantie",
    category: "Party & Terrasse",
  },
  {
    slug: "solar-laterne-amber",
    name: "Solar Laterne Amber",
    subtitle: "Gartenpfad-Laterne mit Dämmerungssensor",
    price: 34.5,
    image: prod3,
    length: "Einzelleuchte",
    power: "Solar",
    color: "Warmweiß 2400 K",
    ip: "IP54",
    warranty: "2 Jahre Garantie",
    category: "Solar & Garten",
  },
  {
    slug: "camp-lantern-akku",
    name: "Camp Lantern Akku",
    subtitle: "Faltbare LED-Laterne, 80 h Leuchtzeit",
    price: 39.9,
    image: prod4,
    length: "Einzelleuchte",
    power: "Akku",
    color: "Warmweiß 2700 K",
    ip: "IP44",
    warranty: "3 Jahre Garantie",
    category: "Camping & Outdoor",
  },
  {
    slug: "vorhang-stars-3x2",
    name: "Vorhang Stars 3×2",
    subtitle: "Lichtvorhang für Fenster, 300 LEDs",
    price: 49.0,
    image: prod5,
    length: "3 × 2 m",
    power: "Netz 230 V",
    color: "Warmweiß 2200 K",
    ip: "IP20",
    warranty: "3 Jahre Garantie",
    category: "Eiszapfen & Vorhang",
  },
  {
    slug: "smart-strip-rgbw",
    name: "Smart Strip RGBW",
    subtitle: "App-gesteuerter Lichtstreifen, 5 m",
    price: 59.0,
    image: prod6,
    length: "5 m",
    power: "Netz / App",
    color: "RGB + Warmweiß",
    ip: "IP20",
    warranty: "3 Jahre Garantie",
    category: "Smart Lighting",
  },
];

export const findProduct = (slug: string) => products.find((p) => p.slug === slug);
