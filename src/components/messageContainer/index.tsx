interface MessageProperties {
  // key: string | number;
  message: string;
  time: string;
  read: boolean;
  setOnClick?: () => void;
  textHeadingsStyle?: string;
  timeStyle?: string;
}

export default function MessageContainer({
  // key,
  message,
  time,
  read,
  setOnClick,
  textHeadingsStyle,
  timeStyle,
}: MessageProperties) {
  const check = true;
  return (
    <section
      onClick={setOnClick}
      className="flex items-center cursor-pointer border-b py-3 px-4"
      // key={key}
    >
      {check ? (
        <img
          src={"/person.svg"}
          className="rounded-full object-cover object-center size-10 mr-4"
          alt="profile photo"
        />
      ) : (
        <div className="w-10 h-10 bg-red-500 flex items-center justify-center mr-4 text-white rounded-full">
          K
        </div>
      )}
      <div>
        <h4 className={`${textHeadingsStyle}`}>{message}</h4>
        <p className={`${timeStyle}`}>{time}</p>
      </div>
      {read}
    </section>
  );
}
