"use client";
import { useState } from 'react';

export default function Chat() {
  const [chatOpen, setChatOpen] = useState(false);

  const openChat = () => {
    setChatOpen(true);
  };

  const closeChat = () => {
    setChatOpen(false);
  };

  return (
    <div className="flex h-screen">
      {/* Friends List */}
      <div
        className={`w-full md:w-1/3 border-r border-gray-300 p-4 overflow-y-auto ${
          chatOpen ? 'hidden' : 'block'
        }`}
      >
        <h3 className="text-lg font-bold mb-4">Friends</h3>
        <ul>
          <li
            className="p-2 hover:bg-gray-200 cursor-pointer"
            onClick={openChat}
          >
            Friend 1
          </li>
          <li
            className="p-2 hover:bg-gray-200 cursor-pointer"
            onClick={openChat}
          >
            Friend 2
          </li>
          <li
            className="p-2 hover:bg-gray-200 cursor-pointer"
            onClick={openChat}
          >
            Friend 3
          </li>
        </ul>
      </div>

      {/* Chat Window */}
      <div
        className={`${
          chatOpen ? 'block' : 'hidden'
        } w-full md:w-2/3 p-4 flex flex-col`}
      >
        <div className="flex items-center justify-between border-b pb-2 mb-4">
          <h3 className="text-lg font-bold">Chat</h3>
          <button
            className="text-blue-500 md:hidden"
            onClick={closeChat}
          >
            Back
          </button>
        </div>
        <div className="flex-grow overflow-y-auto">
          <p className="mb-2">Hi there!</p>
          <p>Hello!</p>
        </div>
      </div>
    </div>
  );
}
