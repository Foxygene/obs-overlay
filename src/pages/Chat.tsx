import { useEffect, useState } from "react";
import tmi from "tmi.js";

type Message = {
  channel: string;
  tags: tmi.ChatUserstate;
  message: string;
  self: boolean;
};

const client = new tmi.Client({
  channels: ["Foxygene_Ow"],
});

client.connect();

function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    client.on("message", (channel, tags, message, self) => {
      setMessages([
        ...messages,
        { channel: channel, tags: tags, message: message, self: self },
      ]);
    });

    return () => {
      client.removeAllListeners();
    };
  });

  return (
    <ul>
      {messages.map((message) => (
        <li key={message.tags.id}>
          <span style={{ color: message.tags.color }}>
            {message.tags["display-name"]}
          </span>
          : <span>{message.message}</span>
        </li>
      ))}
    </ul>
  );
}

export default Chat;
