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
