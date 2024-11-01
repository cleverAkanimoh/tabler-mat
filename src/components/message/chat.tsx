import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import LetterPlane from "../icons/letterPlane";
import MessageResponse from "./messageResponse";
import GIF from "../icons/gif";
import PhotoIcon from "../icons/photoIcon";

export default function ChatRoom() {
  const [userChatMessage, setUserChatMessage] = useState("");

  const messageOnChange = (e: any) => {
    setUserChatMessage(e.target.value);
    console.log(userChatMessage, "user");
  };

  return (
    <section className="flex flex-col justify-between rounded h-full lg:col-span-3">
      <div className="flex items-start justify-between cursor-pointer border-b py-3 px-4">
        <div className="flex items-start cursor-pointer">
          <img
            src="/234567891.svg"
            className="rounded-full object-cover object-center w-12 h-12"
            alt="profile photo"
          />

          <div className="mx-2">
            <h4 className="font-[600] text-[0.9rem] mb-1">Admin</h4>
            <div className="flex items-center justify-center">
              <div
                style={{ backgroundColor: "#00FF00" }}
                className={`w-2 h-2 rounded-full mx-1 mr-1`}
              ></div>
              <p className="text-xs">Online</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full scroll-container overflow-y-scroll">
        <div className="w-full">
          <MessageResponse
            background="bg-custom_blue"
            name="Admin"
            text="Hello The Design Buddy, Thank for the work Keep up the good work."
            time="19:00"
          />
        </div>
        <div className="w-full flex justify-end">
          <MessageResponse
            containerDirection="flex-row-reverse"
            justifyContainer="justify-end"
            justifyTitle="justify-end"
            background="bg-[#9797FB]"
            name="You"
            text="Thank you."
            time="19:25"
          />
        </div>
      </div>

      <div className="bg-white flex items-center p-2">
        <GIF width={30} height={30} style="text-gray-600 mr-2 cursor-pointer" />
        <PhotoIcon width={30} height={30} style="text-gray-600 mr-2 cursor-pointer" />
        <div className="flex items-center border w-full p-2">
          <TextareaAutosize
            className="autoResize outline-none max-h-32 mr-2 w-full"
            onChange={messageOnChange}
            placeholder="Type a messsage"
            minRows={1}
          />
        </div>
        <button className="!bg-white px-4 text-gray-600 p-2 rounded">
          <LetterPlane style="rotate-[-40deg]" />
        </button>
      </div>
    </section>
  );
}
