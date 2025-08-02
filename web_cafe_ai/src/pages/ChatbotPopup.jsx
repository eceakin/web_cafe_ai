import React, { useEffect, useRef, useState } from "react";
import ChatbotIcon from "../components/Chatbot/ChatbotIcon";
import ChatForm from "../components/Chatbot/ChatForm";
import ChatMessage from "../components/Chatbot/ChatMessage";

const ChatbotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      hideInchat: true,
      role: "model",
      text: "Hello! How can I assist you today?"
    }
  ]);

  const chatBodyRef = useRef();

  // API çağrısı fonksiyonu
  const generateBotResponse = async (history) => {
   
    
    const updateHistory = (text,isError=false) => {
      setChatHistory((prev) => [
        ...prev.filter(msg => msg.text !== "Thinking..."),
        { role: "model", text , isError }
      ]);
    }

    history = history.map(({ role, text }) => ({role,parts: [{text}]}));


    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({
        contents: history
      })
    };
    try {
      //make api call to get the bot response
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if(!response.ok) throw new Error(data.error.message || "Failed to fetch response");
      

      //clean and update the chat history with the bot response
      const apiResponseText = data.candidates[0].content
      .parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponseText);


  }
  catch (error) {
     updateHistory(error.message, true);
  } 
  }; // <-- Add this closing brace for generateBotResponse

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({ 
        top: chatBodyRef.current.scrollHeight, 
        behavior: "smooth" 
      });
    }
  }, [chatHistory]);

  return (
    <>
      {/* Chatbot açma butonu */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg transition-all"
      >
        <ChatbotIcon className="w-8 h-8" />
      </button>

      {/* Chatbot popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-50 w-96 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-pink-500 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <ChatbotIcon className="w-8 h-8 bg-white p-1 rounded-full text-pink-500" />
              <h2 className="text-white font-semibold">Chatbot</h2>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-pink-600 rounded-full p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <div ref={chatBodyRef} className="h-96 overflow-y-auto p-4 space-y-4">
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
          </div>

          <div className="p-4 border-t">
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