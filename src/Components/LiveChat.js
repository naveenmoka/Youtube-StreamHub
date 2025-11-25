import React, { useEffect, useState } from "react";
import { addMessage } from "../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      {/* Chat Window */}
      <div
        className="w-full h-[600px] ml-2 p-4 border border-gray-300 bg-white rounded-xl 
                      shadow-md overflow-y-scroll flex flex-col-reverse"
      >
        <div className="space-y-3">
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      {/* Input Box */}
      <form
        className="w-full p-3 ml-2 border border-gray-300 rounded-xl 
                   mt-3 bg-white shadow-sm flex items-center gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "Naveen Moka", message: liveMessage }));
          setLiveMessage("");
        }}
      >
        <input
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg 
                     focus:ring-2 focus:ring-blue-300 focus:outline-none 
                     text-md shadow-sm"
          type="text"
          value={liveMessage}
          placeholder="Type your message..."
          onChange={(e) => setLiveMessage(e.target.value)}
        />

        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm 
                     hover:bg-blue-700 transition-all shadow-sm"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
