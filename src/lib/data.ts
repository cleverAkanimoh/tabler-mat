import {
  ComponentsIcon,
  DocumentIcon,
  FormsIcon,
  GalleryIcon,
  HomeIcon,
  InterfaceIcon,
  PagesIcon,
} from "@/components/icon";

export const navItems = [
  { icon: HomeIcon(), text: "Home", isActive: true },
  { icon: InterfaceIcon(), text: "Interface", isActive: false },
  { icon: ComponentsIcon(), text: "Components", isActive: false },
  { icon: PagesIcon(), text: "Pages", isActive: false },
  { icon: FormsIcon(), text: "Forms", isActive: false },
  { icon: GalleryIcon(), text: "Gallery", isActive: false },
  { icon: DocumentIcon(), text: "Documentation", isActive: false },
];

export const currencyFreakUrl = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=993f3dfb498d43aaa60b70e7393b91d7`;
