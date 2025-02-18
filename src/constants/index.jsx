export const navItems = [
  { label: "Beranda", href: "#" },
  { label: "Profil", href: "#" },
  { label: "Layanan Informasi", href: "#" },
  { label: "Informasi Publik", href: "#" },
  { label: "Laporan PPID", href: "#" },
  { label: "Transparansi", href: "#" },
];

import { BookOpen, BookX, Globe, BookText, Users } from "lucide-react"; // Import icons

export const cardItems = [
  {
    title: "Alur Permohonan",
    description:
      "Warga dapat mengajukan permohonan informasi pada PPID di Badan Publik",
    bgColor: "bg-[rgb(48,134,98)]",
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
    iconBg: "bg-[rgb(48,134,98)]",
    iconColor: "text-white",
    icon: <BookX className="w-12 h-12 text-white" />,
    href: "#alur-keberatan", // Add the href
  },
  {
    title: "Serta Merta",
    description: "Informasi yang dapat mengancam hajat hidup orang banyak",
    bgColor: "bg-[rgb(48,134,98)]",
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
    iconBg: "bg-[rgb(48,134,98)]",
    iconColor: "text-white",
    icon: <BookText className="w-12 h-12 text-white" />,
    href: "#daftar-informasi", // Add the href
  },
  {
    title: "Informasi Mobile",
    description: "Layanan sambang langsung di berbagai desa-desa",
    bgColor: "bg-[rgb(48,134,98)]",
    textColor: "text-white",
    iconBg: "bg-white",
    iconColor: "text-green-600",
    icon: <Users className="w-12 h-12 text-green-600" />,
    href: "#informasi-mobile", // Add the href
  },
];
