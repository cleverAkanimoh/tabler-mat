import clsx from "clsx";
import { NotificationIcon } from "../icon";
import ProfileHeader from "../ProfileHeader";
import Logo from "../Logo";
import { SignedIn } from "@clerk/clerk-react";

export const TopNavBar = ({ headerStyle }: { headerStyle: string }) => (
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

      <SignedIn>
        <ProfileHeader />
      </SignedIn>
    </div>
  </header>
);

const NotificationWithIndicator = () => (
  <div className="relative cursor-pointer">
    <span className="size-1.5 bg-red-600 absolute -right-1 rounded-full" />
    <NotificationIcon />
  </div>
);
