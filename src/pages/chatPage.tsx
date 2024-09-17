import ChatBox from "../components/chatBox";
import Messages from "../components/messages";

const Chatpage = () => {
  return (
    <div className="font-sans text-primary bg-primary flex h-lvh p-0 ">
      <ChatBox />
      <Messages />
    </div>
  );
};

export default Chatpage;
