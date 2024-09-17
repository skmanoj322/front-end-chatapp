import Avatar from "@mui/material/Avatar";
// import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
export default function ChatBox() {
  return (
    <div className="flex flex-col max-w-[500px]  w-full p-2 gap-2 h-screen  border border-gray-800">
      <div className="text-[#e9edf0] font-header text-xl p-6"> Chats</div>
      <div className="divide-y divide-slate-800 overflow-auto ">
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
    </div>
  );
}
export const Conversation = () => {
  return (
    <div className="flex gap-3 w-full p-2 pl-1 hover:bg-hover cursor-pointer ">
      <Avatar sx={{ width: 60, height: 60 }} />
      <div className="flex flex-col w-full">
        <div className="flex text-lg justify-between">
          <span>Manoj</span>
          <span className="text-sm text-Tertiary">3:40 PM</span>
        </div>
        <div className="text-Tertiary flex">
          <span>
            {" "}
            {/* <DoneIcon /> */}
            {/* <DoneAllIcon color="info" />  */}
            <DoneAllIcon />
          </span>

          <span>messagrcnkcmans askdmas</span>
        </div>
      </div>
    </div>
  );
};
