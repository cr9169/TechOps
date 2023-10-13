import GoogleIcon from "@mui/icons-material/Google";
import "./GoogleLoginButton.scss";

const GoogleLoginButton = () => {
  return (
    <button className="google-login-btn">
      <GoogleIcon />
      Continue with google
    </button>
  );
};

export default GoogleLoginButton;
