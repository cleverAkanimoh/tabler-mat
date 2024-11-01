interface messageResponseProperties {
  containerDirection?: string;
  justifyContainer?: string;
  justifyTitle?: string;
  background?: string;
  name?: string;
  text?: string;
  time?: string;
}

export default function MessageResponse({
  containerDirection,
  justifyTitle,
  justifyContainer,
  background,
  name,
  text,
  time,
}: messageResponseProperties) {
  return (
    <div
      className={`flex items-start ${justifyContainer} py-3 px-4 my-4 w-[90%] md:w-[70%]`}
    >
      <div className={`flex items-start ${containerDirection}`}>
        <img
          src="/234567891.svg"
          className="rounded-full object-cover object-center w-12 h-12"
          alt="profile photo"
        />

        <div className="mx-2">
          <div className={`flex items-center ${justifyTitle}`}>
            <h4 className="font-[600] text-[0.9rem] mb-1 mr-2">{name}</h4>
            <span className="text-gray-500 text-xs">{time}</span>
          </div>
          <p
            className={`text-xs ${background} text-white p-2 rounded-bl-xl rounded-r-xl`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
