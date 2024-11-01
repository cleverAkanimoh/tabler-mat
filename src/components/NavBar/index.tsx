import { TopNavBar } from "./TopNavBar";
import { BottomNavBar } from "./BottomNavBar";
import { navItems } from "@/lib/data";

function NavBar() {
  const headerStyle = "container flex items-center";
  return (
    <nav className="bg-white w-full min-h-[60px] pt-2 flex flex-col">
      <TopNavBar headerStyle={headerStyle} />
      <BottomNavBar headerStyle={headerStyle} navItems={navItems} />
    </nav>
  );
}

export default NavBar;
