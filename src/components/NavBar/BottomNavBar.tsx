import clsx from "clsx";
import Headroom from "react-headroom";

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
        "pt-2 gap-2 xs:gap-4 sm:gap-5 lg:gap-8 w-full bg-white"
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
          <>{item.icon}</>
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
