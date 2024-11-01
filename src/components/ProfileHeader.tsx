function ProfileHeader() {
  return (
    <div className="flex items-center cursor-pointer">
      <img src="/person.svg" alt="person" className="size-8 rounded-full" />
      <div className="sm:flex flex-col hidden">
        <span className="font-semibold text-sm text-gray-600">
          Jane Pearson
        </span>
        <span className="font-light text-xs text-gray-400">Administrator</span>
      </div>
    </div>
  );
}

export default ProfileHeader;
