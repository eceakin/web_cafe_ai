const ChatMessage = ({ chat }) => {
  if (chat.hideInchat) return null;

  return (
    <div className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xs p-3 rounded-lg ${
        chat.role === 'user' 
          ? 'bg-red-500 text-white rounded-br-none' 
          : 'bg-gray-100 text-gray-800 rounded-bl-none'
      }`}>
        <p className="text-sm">{chat.text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;