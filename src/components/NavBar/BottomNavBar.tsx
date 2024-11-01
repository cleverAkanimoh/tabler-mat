import clsx from "clsx";
import Headroom from "react-headroom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export const BottomNavBar = ({
  headerStyle,
  navItems,
}: {
  headerStyle: string;
  navItems: any[];
}) => (
  <Headroom>
    <header
      className={clsx(
        headerStyle,
        "pt-2 gap-4 xs:gap-6 sm:gap-8 lg:gap-10 w-full bg-white border-b shadow-sm"
      )}
    >
      {navItems.map((item) => (
        <div
          key={item.text}
          className={clsx(
            "cursor-pointer flex items-center gap-1 pb-2 transition-colors duration-300",
            {
              "text-blue-400 border-b border-blue-400": item.isActive,
              "text-gray-400 hover:text-blue-400": !item.isActive,
            }
          )}
        >
          <TooltipProvider delayDuration={0.3}>
            <Tooltip>
              <TooltipTrigger>{item.icon}</TooltipTrigger>
              <TooltipContent className="bg-white border border-blue-100 rounded md:hidden">
                {item.text}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <span
            className={clsx("md:block xs:text-xs", {
              hidden: !item.isActive,
            })}
          >
            {item.text}
          </span>
        </div>
      ))}
    </header>
  </Headroom>
);
