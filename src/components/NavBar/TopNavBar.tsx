import clsx from "clsx";
import { NotificationIcon } from "../icon";
import ProfileHeader from "../Dashboard/ProfileHeader";
import Logo from "./Logo";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { Button } from "../ui/button";
import { useState } from "react";

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

      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  </header>
);

const NotificationWithIndicator = () => {
  const [showNotificationDropdown, setShowNotificationDropdown] =
    useState(false);

  return (
    <>
      <Button
        className="relative p-0 h-fit cursor-pointer shadow-none notification"
        onClick={() => {
          setShowNotificationDropdown((prev) => !prev);
        }}
      >
        {!showNotificationDropdown && (
          <span className="size-1.5 bg-red-600 absolute -right-1 top-0 rounded-full" />
        )}
        <NotificationIcon />
      </Button>
    </>
  );
};
