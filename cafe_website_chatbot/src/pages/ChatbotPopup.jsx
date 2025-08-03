import React, { useEffect, useRef, useState } from "react";
import ChatbotIcon from "../components/Chatbot/ChatbotIcon";
import ChatForm from "../components/Chatbot/ChatForm";
import ChatMessage from "../components/Chatbot/ChatMessage";
import { CompanyInfo } from "../CompanyInfo";
const ChatbotPopup = () => {


  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([
   { 
    role: "model", 
    text: "Hello! I'm your virtual assistant. How can I help you today?", 
  },
  { 
    hideInchat: true,
    role: "model", 
    text: CompanyInfo ,
  }
  ]);

  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text, isError }
      ]);
    };

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history })
    };
    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error.message || "Failed to fetch response");

      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [chatHistory]);

  return (
    <>
      {/* Açma butonu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-xl transition-all"
      >
        <ChatbotIcon className="w-8 h-8" />
      </button>

      {/* Chat popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-50 w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-red-500 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <ChatbotIcon className="w-8 h-8 bg-white p-1 rounded-full text-red-500" />
              <h2 className="text-white font-semibold text-lg">Chatbot</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-red-600 rounded-full p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={chatBodyRef} className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
          </div>

          <div className="p-4 border-t bg-white">
            <ChatForm
              chatHistory={chatHistory}
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotPopup;
