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
