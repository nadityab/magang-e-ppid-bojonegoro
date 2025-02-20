{
  /*Cons for Navbar */
}
export const navItems = [
  { label: "Beranda", href: "#" },
  { label: "Profil", href: "#" },
  { label: "Layanan Informasi", href: "#" },
  { label: "Informasi Publik", href: "#" },
  { label: "Laporan PPID", href: "#" },
  { label: "Transparansi", href: "#" },
];

{
  /*Cons for FeatureSection */
}

import { BookOpen, BookX, Globe, BookText, Users } from "lucide-react"; // Import icons

export const cardItems = [
  {
    title: "Alur Permohonan",
    description:
      "Warga dapat mengajukan permohonan informasi pada PPID di Badan Publik",
    bgColor: "bg-[rgba(14,124,98,255)]",
    textColor: "text-white",
    iconBg: "bg-white",
    iconColor: "text-green-600",
    icon: <BookOpen className="w-12 h-12 text-green-600" />,
    href: "#alur-permohonan", // Add the href
  },
  {
    title: "Alur Keberatan",
    description:
      "Ungkapan rasa tidak senang, ketidakpuasan kepada Badan Publik",
    bgColor: "bg-white",
    textColor: "text-black",
    iconBg: "bg-[rgba(14,124,98,255)]",
    iconColor: "text-white",
    icon: <BookX className="w-12 h-12 text-white" />,
    href: "#alur-keberatan", // Add the href
  },
  {
    title: "Serta Merta",
    description: "Informasi yang dapat mengancam hajat hidup orang banyak",
    bgColor: "bg-[rgba(14,124,98,255)]",
    textColor: "text-white",
    iconBg: "bg-white",
    iconColor: "text-green-600",
    icon: <Globe className="w-12 h-12 text-green-600" />,
    href: "#serta-erta", // Add the href
  },
  {
    title: "Daftar Informasi Publik",
    description:
      "Informasi Publik yang wajib disediakan dan diumumkan setiap saat",
    bgColor: "bg-white",
    textColor: "text-black",
    iconBg: "bg-[rgba(14,124,98,255)]",
    iconColor: "text-white",
    icon: <BookText className="w-12 h-12 text-white" />,
    href: "#daftar-informasi", // Add the href
  },
  {
    title: "Informasi Mobile",
    description: "Layanan sambang langsung di berbagai desa-desa",
    bgColor: "bg-[rgba(14,124,98,255)]",
    textColor: "text-white",
    iconBg: "bg-white",
    iconColor: "text-green-600",
    icon: <Users className="w-12 h-12 text-green-600" />,
    href: "#informasi-mobile", // Add the href
  },
];

{
  /*Cons for InformasiSection */
}
export const informasiLeft = [
  {
    image:
      "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    title: "New album is released!",
    date: "20 Feb",
    description: "Click the button to listen on Spotiwhy qdqd.",
    buttonHref: "https://example.com",
  },
  {
    image:
      "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp",
    title: "New album is released!",
    date: "20 Feb",
    description: "Click the button to listen on Spotiwhy qdqd.",
    buttonHref: "https://example.com",
  },
  // You can add more objects here
  // You can add more objects here
];

export const informasiRight = [
  {
    date: "20 Februari",
    description: "If a dog chews shoes whose shoes does he qdqdq?",
    buttonHref: "https://example.com",
  },
  {
    date: "20 Februari",
    description: "If a dog chews shoes whose shoes does he qdqdq?",
    buttonHref: "https://example.com",
  },
  // You can add more objects here
  // You can add more objects here
];

{
  /*Cons for Galeri */
}
export const galleryItems = [
  {
    id: 1,
    title: "Life Hack",
    description: "How to park your car at your garage?",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  },
  {
    id: 2,
    title: "Tech Trends",
    description: "Latest updates in the tech world!",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107558224-40e45f3a47a5.webp",
  },
  {
    id: 3,
    title: "Healthy Living",
    description: "Tips for a balanced and healthy lifestyle.",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107560005-5141bba3ba18.webp",
  },
  {
    id: 4,
    title: "Travel Adventures",
    description: "Explore the world with these travel guides.",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107559876-c2a7b5f19b91.webp",
  },
  {
    id: 5,
    title: "Home Decor",
    description: "Transform your home with these ideas!",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107558671-0c4a4a5f2d9f.webp",
  },
  {
    id: 6,
    title: "Productivity Hacks",
    description: "Boost your efficiency with these tricks.",
    image:
      "https://img.daisyui.com/images/stock/photo-1606107560813-51aefb0b69e7.webp",
  },
];
