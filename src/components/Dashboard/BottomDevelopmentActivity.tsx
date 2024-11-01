import { TrashIcon } from "../icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

function BottomDevelopmentActivity() {
  return (
    <div>
      <div className="flex items-center justify-between w-full text-gray-500 max-md:hidden p-4 border-b">
        <h3 className="md:basis-1/4">User</h3>
        <h3 className="md:basis-1/4">Commit</h3>
        <h3 className="md:basis-1/4">Date</h3>
        <h3 className="size-5" />
      </div>

      <div className="divide-y">
        <SingleUser
          username="Ronald Bradley"
          date="May 6, 2018"
          message="Initial commit"
        />
        <SingleUser
          username="Russell Gibson"
          date="April 22, 2018"
          message="Main structure"
        />
        <SingleUser
          username="Beverly Armstrong"
          date="April 15, 2018"
          message="Left sidebar adjustments"
        />
        <SingleUser
          username="Clever Akanimoh"
          date="November 01, 2024"
          message="New dashboard"
        />
      </div>
    </div>
  );
}

export default BottomDevelopmentActivity;

const SingleUser = ({
  username,
  imageUrl,
  message,
  date,
}: {
  username: string;
  date: string;
  message: string;
  imageUrl?: string;
}) => (
  <div className="relative flex max-md:flex-col md:items-center justify-between text-gray-500 p-4">
    <div className="flex items-center gap-1 xs:gap-2 md:basis-1/4">
      <img
        src={imageUrl ? imageUrl : "/person.svg"}
        className="size-5 rounded-full"
      />

      <h3 className="md:text-sm shrink-0">{username}</h3>
    </div>

    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="line-clamp-1 max-md:pl-7 md:basis-1/4 md:text-sm text-start max-md:cursor-text">
          {message}
        </TooltipTrigger>
        <TooltipContent className="bg-white border border-blue-100 rounded max-md:hidden">
          {message}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <span className="max-md:absolute max-md:right-5 md:basis-1/4 text-sm">
      {date}
    </span>

    <button className="max-md:absolute max-md:right-5 max-md:bottom-4">
      <TrashIcon />
    </button>
  </div>
);
