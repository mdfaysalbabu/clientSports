import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogle = () => {
    googleLogin().
    then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      const saveUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
      };
      fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <div className="divider">or</div>
      <div className="w-full text-center my-4">
        <button onClick={handleGoogle} className="btn w-full bg-red-200">
          <FaGoogle className="text-orange-500 text-4xl"></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
