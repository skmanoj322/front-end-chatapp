import GoogleIcon from "@mui/icons-material/Google";
// import GoogleLogin from "../api/auth";
import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { Api } from "../utils";
import { useNavigate } from "react-router-dom";

const storeTokenToLocalStorage = (access_token: string): void => {
  localStorage.setItem("access_token", access_token);
};
const Login = () => {
  const [, setUserInfo] = useState({});
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      setUserInfo(codeResponse);
      const data = await Api.post("/auth/google", { body: codeResponse });
      const { access_token } = data;

      console.log(access_token);
      if (access_token) {
        storeTokenToLocalStorage(access_token);
        navigate("/chat");
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="flex justify-center items-center h-lvh bg-primary">
      <div className="flex">
        <button
          className=" flex  gap-2 border p-2 rounded bg-[white]"
          onClick={() => {
            login();
          }}
        >
          <GoogleIcon />
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
