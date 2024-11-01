function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <img src="/logo.svg" width={30} height={30} alt="tabler logo" />
      <span className="font-semibold xs:text-sm">tabler</span>
    </div>
  );
}

export default Logo;
