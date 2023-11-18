import { FaGoogle } from "react-icons/fa";
import useAuth from "./../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from './../../hooks/useAxiosPublic';

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic()
  const navigate =useNavigate()
  const handleGoogleLogin = () => {
    googleSignIn().then((res) => {
      console.log(res.user);
      const userInfo = {
        email: res.user.email,
        name: res.user.displayName
      };
      axiosPublic.post("/users", userInfo)
      .then(res => {
        console.log(res.data)
        navigate("/")
      })
    });
  };
  return (
    <div>
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogleLogin} className="btn px-6">
          <FaGoogle></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
