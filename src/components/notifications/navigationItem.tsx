import ArrowIcon from "../icons/arrowIcon";
import BellIcon from "../icons/bellIcon";

type NavigationItemProps = {
  title: string;
  message: string;
  date: string;
  isActive?: {
    status: boolean;
    color: string;
  };
  property?: "message" | "notifcation";
};
export default function NavigationItem({
  title,
  message,
  date,
  isActive,
  property,
}: NavigationItemProps) {
  console.log(isActive, "ACTIVE");
  return (
    <div className="flex items-center justify-between my-8">
 
      <div className="flex items-center">
      {property === "message" ? (
        <img
          src={"/234567891.svg"}
          className="rounded-full object-cover object-center w-[38px] h-[38px] mr-2"
          alt="profile photo"
        />
      ) : (
        <div className="w-[38px] h-[38px] md:w-[48px] md:h-[48px] flex items-center justify-center mr-2 bg-gray-300 rounded-full">
          <BellIcon fillColor="#1D1D62" width={12} height={12} />
        </div>
      )}
        <div className="flex flex-col">
          <h3 className="Subscription Discount font-[500] text-[0.9rem] mb-1">
            {title}
          </h3>
          <p className="text-xs text-gray-600">
            {message.length > 29 ? message.slice(0, 29) + " ..." : message}
          </p>
          <span className="text-xs text-gray-600">{date}</span>
        </div>
      </div>
      <div className="flex items-center">
        {property === "message" && (
          <div
            style={{ backgroundColor: isActive?.color }}
            className={`w-2 h-2 rounded-full mx-1 mr-8`}
          ></div>
        )}
        <ArrowIcon direction={"right"} />
      </div>
    </div>
  );
}
