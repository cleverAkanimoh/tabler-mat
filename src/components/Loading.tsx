function Loading() {
  return (
    <div className="w-full h-[300px] flex flex-col gap-3 items-center justify-center">
      <div className="size-10 animate-spin border border-t-4 border-t-blue-400 rounded-full" />
      <span>loading data...</span>
    </div>
  );
}

export default Loading;
