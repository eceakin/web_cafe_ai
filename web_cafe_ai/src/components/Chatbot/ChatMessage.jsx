import ChatbotIcon from "./ChatbotIcon";

const ChatMessage = ({ chat }) => {
  if (chat.hideInchat) return null;

  const isBot = chat.role === "model";

  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"} items-start gap-2`}>
      {/* Bot ikonu sadece bot mesajlarında */}
      {isBot && (
        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-sm">
          <ChatbotIcon className="w-5 h-5 text-red-500" />
        </div>
      )}

      {/* Mesaj balonu */}
      <div
        className={`max-w-xs px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed ${
          isBot
            ? "bg-gray-100 text-gray-800 rounded-bl-none"
            : "bg-red-500 text-white rounded-br-none"
        } ${chat.isError ? "border border-red-400 bg-red-50 text-red-700" : ""}`}
      >
        <p>{chat.text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
