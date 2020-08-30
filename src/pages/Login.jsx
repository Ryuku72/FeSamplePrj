import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { userLogin, userError, userClear } from "../redux/actions/user";
import { useHistory, Redirect } from "react-router-dom";

function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector((state) => state.user.name);
  const userErr = useSelector((state) => state.user.userError);
  const errText = useSelector((state) => state.user.errorText)
  const userLoad = useSelector((state) => state.user.userLoading)
  const [user, setUser] = useState("");

  function onHandleUser(event) {
    event.preventDefault();
    setUser(event.target.value.trim().toLowerCase());
    dispatch(userClear());
  }

  function loginUser(event) {
    event.preventDefault();
    console.log(user.length);
    if (user.length < 4) {
      dispatch(userError());
    } else {
      dispatch(userLogin(user));
      history.push("/dashboard");
    }
  }

  function clearForm(event) {
    event.preventDefault();
    document.getElementById("loginForm").reset();
    setUser("");
  }

  if (userName.length === 0) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
          {userLoad ? 
          <div class="sk-cube-grid">
          <div class="sk-cube sk-cube1"></div>
          <div class="sk-cube sk-cube2"></div>
          <div class="sk-cube sk-cube3"></div>
          <div class="sk-cube sk-cube4"></div>
          <div class="sk-cube sk-cube5"></div>
          <div class="sk-cube sk-cube6"></div>
          <div class="sk-cube sk-cube7"></div>
          <div class="sk-cube sk-cube8"></div>
          <div class="sk-cube sk-cube9"></div>
        </div>
        :
        <div className="w-1/3 border-2 border-blue-600 p-4 rounded-lg shadow-2xl">
          <form id="loginForm" className="w-full flex flex-col">
            <label className="text-lg">Please Login</label>
            <input
              className="border shadow-2xl rounded-md p-2 my-2"
              value={user}
              onChange={onHandleUser}
            />
            <div className="w-full flex flex-wrap items-center">
              <div className="w-2/3 px-2 text-xs font-semibold text-red-600">
                {userErr ? errText : ""}
              </div>

              <div className="w-1/3">
                <button
                  className="w-16 h-8 my-1 mx-1 bg-teal-500 hover:bg-teal-600 rounded focus:outline-none shadow-2xl"
                  type="submit"
                  onClick={loginUser}
                >
                  Login
                </button>
                <button
                  className="w-16 h-8 my-1 mx-1 bg-purple-400 hover:bg-purple-600 rounded focus:outline-none shadow-2xl"
                  type="submit"
                  onClick={clearForm}
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
  }
      </div>
    );
  } else {
    return <Redirect to="/dashboard" />;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Login);
