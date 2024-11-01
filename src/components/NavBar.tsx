import clsx from "clsx";
import Logo from "./Logo";
import {
  ComponentsIcon,
  DocumentIcon,
  FormsIcon,
  GalleryIcon,
  HomeIcon,
  InterfaceIcon,
  NotificationIcon,
  PagesIcon,
} from "./icon";
import ProfileHeader from "./ProfileHeader";

function NavBar() {
  const navItems = [
    { icon: <HomeIcon />, text: "Home", isActive: true },
    { icon: <InterfaceIcon />, text: "Interface", isActive: false },
    { icon: <ComponentsIcon />, text: "Components", isActive: false },
    { icon: <PagesIcon />, text: "Pages", isActive: false },
    { icon: <FormsIcon />, text: "Forms", isActive: false },
    { icon: <GalleryIcon />, text: "Gallery", isActive: false },
    { icon: <DocumentIcon />, text: "Documentation", isActive: false },
  ];
  const headerStyle = "container flex items-center";
  return (
    <nav className="fixed top-0 bg-white w-full min-h-[60px] pt-2 flex flex-col items-center justify-center">
      <header className={clsx(headerStyle, "justify-between border-b pb-2")}>
        <Logo />
        <div className="flex items-center gap-2 xs:gap-4 lg:gap-5">
          <a
            href="http://github.com/cleverakanimoh/tabler-mat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm xs:text-xs text-blue-400 border border-blue-200 hover:border-blue-400 rounded px-2 py-1 transition-colors duration-300"
          >
            Source code
          </a>

          <NotificationWithIndicator />

          <ProfileHeader />
        </div>
      </header>
      <header className={clsx(headerStyle, "pt-2 gap-2 sm:gap-5 lg:gap-8")}>
        {navItems.map((item) => (
          <div
            key={item.text}
            className={clsx("cursor-pointer flex items-center gap-1 pb-2", {
              "text-blue-400 border-b border-blue-400": item.isActive,
              "text-gray-400 hover:text-blue-400": !item.isActive,
            })}
          >
            <>{item.icon}</>
            <span className="hidden sm:block text-xs">{item.text}</span>
          </div>
        ))}
      </header>
    </nav>
  );
}

export default NavBar;

const NotificationWithIndicator = () => (
  <div className="relative cursor-pointer">
    <span className="size-1.5 bg-red-600 absolute -right-1 rounded-full" />
    <NotificationIcon />
  </div>
);
