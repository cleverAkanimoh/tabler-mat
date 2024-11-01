import clsx from "clsx";
import { NotificationIcon } from "../icon";
import ProfileHeader from "../Dashboard/ProfileHeader";
import Logo from "./Logo";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { Button } from "../ui/button";
import { useState } from "react";
import DropDownMenuWrapper from "../dropDownMenu/dropDownMenuWrapper";
import MessageContainer from "../messageContainer";
import { Link } from "react-router-dom";

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
  const notificationMessages = [
    {
      id: 1,
      message:
        "New employee, James Card, has been added to the payroll system.",
      time: "2 days ago",
      read: true,
    },
    {
      id: 2,
      message:
        "John Doe's expense report for the last quarter has been approved and processed.",
      time: "3 days ago",
      read: true,
    },
    {
      id: 3,
      message:
        "Emily Smith's presentation slides for the upcoming conference have been reviewed and finalized.",
      time: "4 days ago",
      read: true,
    },
    {
      id: 4,
      message:
        "Mark Johnson's access to the confidential documents has been temporarily revoked due to security concerns.",
      time: "5 days ago",
      read: true,
    },
    {
      id: 5,
      message: "Samantha White's request for vacation leave has been approved.",
      time: "6 days ago",
      read: true,
    },
  ];
  const [showNotificationDropdown, setShowNotificationDropdown] =
    useState(false);
  const [isNotification, setIsNotification] = useState("");

  return (
    <>
      <Button
        className="relative p-0 h-fit cursor-pointer shadow-none notification"
        onClick={(e: any) => {
          console.log(showNotificationDropdown, isNotification);

          setShowNotificationDropdown(!showNotificationDropdown);
          setIsNotification(e.target.className);
        }}
      >
        <span className="size-1.5 bg-red-600 absolute -right-1 top-0 rounded-full" />
        <NotificationIcon />
      </Button>
    </>
  );
};
