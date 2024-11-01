import { UserButton, useUser } from "@clerk/clerk-react";

function ProfileHeader() {
  const { user } = useUser();

  return (
    <>
      <div className="flex items-center gap-2">
        <UserButton />
        <div className="sm:flex flex-col hidden pointer-events-none">
          <span className="font-semibold text-[.825rem] text-gray-600">
            {user?.fullName}
          </span>
          <span className="font-light text-[.7rem] text-gray-400">
            Administrator
          </span>
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
