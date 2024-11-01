import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "../icons/arrowIcon";

interface DropdownProperties {
  data: Array<any>;
  showDropdown: boolean;
  setShowDropdown: any;
  onClickData: string;
  style?: string;
}

export default function DropDownMenu({
  data,
  showDropdown,
  setShowDropdown,
  onClickData,
  style,
}: DropdownProperties) {
  const [dropdownData] = useState(data);
  const [nextLevelDropdownData, setNextLevelDropDownData] = useState<any>([]);
  const dropdownRef = useRef() as any;
  const miniDropdownRef = useRef() as any;

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        (dropdownRef.current && dropdownRef.current.contains(event.target)) ||
        (miniDropdownRef.current &&
          miniDropdownRef.current.contains(event.target))
      ) {
        return;
      }

      if (event.target.className !== onClickData) {
        setShowDropdown(false);
        setNextLevelDropDownData([]);
        return;
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickData, setShowDropdown]);

  return (
    <>
      {showDropdown && (
        <div
          className={`shadow-xl absolute top-full md:w-full p-2 z-40 ${style}`}
          ref={dropdownRef}
        >
          {dropdownData.map((data: any) => {
            return (
              <div className="py-2" key={data.id}>
                {data.type === "link" && data.query ? (
                  <Link
                    to={{
                      pathname: data.path,
                      // path: data.query,
                    }}
                    key={data.id}
                  >
                    <div className="flex items-center text-xs">
                      {data.icon && data.icon} {data.name}
                    </div>
                  </Link>
                ) : data.type === "link" ? (
                  <Link to={data.path} key={data.id}>
                    <div className="flex items-center text-xs">
                      {data.icon && data.icon} {data.name}
                    </div>
                  </Link>
                ) : data.type === "itemClickCallbacks" ? (
                  <span
                    className="cursor-pointer"
                    onClick={() => data.function()}
                    key={data.id}
                  >
                    <div className="flex items-center text-xs">
                      {data.icon && data.icon} {data.name}
                    </div>
                  </span>
                ) : data.type === "moreDropDownData" ? (
                  <span
                    className="cursor-pointer relative moreDropDownData"
                    onClick={(e) => {
                      setNextLevelDropDownData(data.function());
                      e.stopPropagation();
                    }}
                    key={data.id}
                  >
                    <div className="flex items-center justify-between text-xs">
                      {data.icon && data.icon} {data.name}
                      <ArrowIcon direction={"right"} style="!w-3 !h-3" />
                    </div>
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
      )}

      {showDropdown && nextLevelDropdownData.length > 0 && (
        <div
          className={`shadow-xl absolute top-full left-full md:w-full p-2 z-40 ${style}`}
          ref={miniDropdownRef}
        >
          {nextLevelDropdownData.map((data: any) => (
            <div key={data.name} className="text-xs pt-2 mb-1">
              {data.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
