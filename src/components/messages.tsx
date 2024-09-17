import { Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const Messages = () => {
  return (
    <div className="flex flex-col bg-primary w-full justify-between p-0">
      <div className="flex w-full bg-secondary p-2 gap-4 ">
        <div className="flex gap-4 justify-center items-center">
          <Avatar sx={{ width: 50, height: 50 }} />
          <span className="text-lg">Manoj</span>
        </div>
      </div>
      <div className=" flex flex-col w-full h-lvh gap-8 m-3 pr-7 pt-0 overflow-auto">
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
        <IncomingMessage />
      </div>
      <div className="flex w-full bg-secondary p-4 gap-2 items-center">
        <input
          className="bg-[#293840] w-full h-11 p-2 rounded focus:border-none focus:outline-none"
          placeholder="Type a message"
        />
        <button>
          <SendIcon
            color="disabled"
            fontSize="large"
            className="cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
};

export const OutgoingMessage = () => {
  return (
    <div className="flex ">
      <div className="flex w-fit p-2 h-auto bg-[#015c4b] justify-between rounded-lg">
        <span className="break-words whitespace-normal text-wrap  max-w-[300px]">
          asdsadhjbsajhdbashasdhjfjdsajasdfjdsajfnsdjkfdsafndskafjdsafnsdajfdsjafjdsafdsfasdmasmdmsads
        </span>
        <div className="flex flex-col justify-end ">
          <span className="text-sm text-Tertiary">11:30</span>
        </div>
      </div>
    </div>
  );
};
export const IncomingMessage = () => {
  return (
    <div className="flex  justify-end  ">
      <div className="flex w-fit p-2  h-auto bg-[#202d33] justify-between rounded-lg">
        <span className="break-words whitespace-normal text-wrap  max-w-[300px]">
          asdsadhjbsajhdbashasdhjfjdsajasdfjdsajfnsdjkfdsafndskafjdsafnsdajfdsjafjdsafdsfasdmasmdmsads
        </span>
        <div className="flex flex-col justify-end ">
          <span className="text-sm text-Tertiary">11:30</span>
        </div>
      </div>
    </div>
  );
};
export default Messages;
