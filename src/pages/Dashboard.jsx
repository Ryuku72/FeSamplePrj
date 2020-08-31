import React, { useEffect, useState, useRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchSinglePost } from "../redux/actions/posts";
import { userLogin, fetchColor, userLogOut, userLoading } from '../redux/actions/user'
import { Redirect, useHistory } from "react-router-dom";

function Dashboard(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const userName = useSelector(state => state.user.name)
  const userColor = useSelector(state => state.user.color)

  const [number, setNumber] = useState(1);
  const [toggle, setToggle] = useState(false)
  const [user, setUser] = useState("")
  const [color, setColor] = useState("")
  const [error, setError] = useState(false)
  const [dropToggle, setDropToggle] = useState(false)

  useEffect(() => {
    dispatch(userLoading())
    setUser(props.user.name)
    props.fetchPosts(1);
    props.fetchSinglePost(1);
    return () => {
        props.fetchPosts(1);
        props.fetchSinglePost(1);
    }
  }, []);

  function useOutsideAlerter(ref) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              setDropToggle(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideModule(ref) {
    useEffect(() => {
        function handleOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              setToggle(false)
            }
        }
        document.addEventListener("mousedown", handleOutside);
        return () => {
            document.removeEventListener("mousedown", handleOutside);
        };
    }, [ref]);
  }
  const moduleRef = useRef(null)
  useOutsideModule(moduleRef)

  function onHandleNext(event) {
    event.preventDefault();
    if (number < 10) {
      setNumber(number + 1);
      props.fetchPosts(number + 1)
    } else {
      setNumber(1);
      props.fetchPosts(1)
    };
  }

  function onHandlePrev(event) {
    event.preventDefault();
    if (number > 1) {
      setNumber(number - 1);
      props.fetchPosts(number - 1)
    } else {
      setNumber(10);
      props.fetchPosts(10)
    }
  }

  function onHandleSinglePost(event){
    event.preventDefault()
    props.fetchSinglePost(event.target.value);
}

  function onHandleUser(event){
      event.preventDefault()
      setError(false)
      setUser(event.target.value)
  }

  function onHandleColor(event){
      event.preventDefault()
      setColor(event.target.value)
  }

  function onHandleToggle(event){
      event.preventDefault()
      setUser("")
      setToggle(false)
  }

  function onHandleSubmit(event){
      event.preventDefault()
      if (user.length < 4){
        setError(true)
    } else {
        dispatch(userLogin(user))
        dispatch(fetchColor(color))
        setToggle(false)
    }    
  }

  async function logout(event) {
    event.preventDefault();
      dispatch(userLogOut())
      history.push("/login");
  }

  const themeColor = () => {
    switch(userColor){
    case "Red":
        return "bg-red-300"
    case "Orange":
        return "bg-orange-300"
    case "Yellow":   
     return "bg-yellow-500"
    case "Green":
        return "bg-green-300"
    case "Blue":
        return "bg-blue-300"
    case "Indigo":
        return "bg-indigo-300"
    case "Gray":
        return "bg-gray-400"
    default:
        return "bg-gray-400"
  }
}

  if (userName.length !== 0) { 
  return (
    <div className="relative" style={{height: "100vh" }}>
        {toggle ? 
      <div className="w-screen h-screen flex justify-center items-center absolute top-0">
          <div ref={moduleRef} className={`z-50 xl:w-1/3 xs:w-1/2 relative border-2 border-gray-700  p-6 rounded-lg ${themeColor()}`} style={{height: "40vh"}}>
          <button className="absolute top-0 right-0 rounded-full border border-red-600 xl:px-1 md:px-1 text-base text-red-600 bg-red-600 hover:bg-red-500 hover:text-gray-300 mx-3 my-2 antialiased shadow-xl focus:outline-none"
                  onClick={onHandleToggle}
                >
                  &#10006;
                </button>
            <h1 className="text-2xl font-mono text-white" style={{height:"15%"}}>Settings</h1>
            <form className="w-full flex-wrap flex justify-center items-center" style={{height:"70%"}}>
                <div className="w-full flex justify-center">
                <label className="w-1/4 text-2xl font-semibold flex items-center justify-center">Name: </label>
                <input id="userInput" className="w-1/2 border shadow-2xl rounded-md p-2 my-2 flex justify-center items-center" onChange={onHandleUser} placeholder={userName} />
                </div>
                <div className="w-full flex justify-center">
                <label className="w-1/4  text-2xl font-semibold flex items-center justify-center">Color: </label>
                <select id="colorInput" className="w-1/2 border shadow-2xl rounded-md p-2 my-2" onChange={onHandleColor} placeholder={userColor}>
                <option value="">None</option>
                <option value="Red">Red</option>
                <option value="Orange">Orange</option>
                <option value="Yellow">Yellow</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                <option value="Indigo">Indigo</option>
                <option value="Gray">Gray</option>
                </select>
                </div>

            <div className="w-2/3 px-2 text-xs font-semibold capitalize text-red-600" style={{height:"3vh"}}>
                {error ? "#PLEASE ENTER AT LEAST 4 LETTERS" : ""}
            </div>

           <div className="w-full absolute bottom-0 p-4 flex justify-end" style={{height:"10vh"}}>
            <button className="w-32 h-12 my-1 mx-1 text-sm bg-green-500 hover:bg-green-600 font-mono hover:text-white rounded focus:outline-none shadow-2xl" onClick={onHandleSubmit}  type="submit">Submit</button>
        </div>
            </form>
          </div>
      <div id="overlay" className="active"></div> 
      </div>
      : 
      <></>}
      <nav>
        <div
          className={`flex flex-wrap border-b-2 border-gray-600 ${themeColor()}`}
          style={{ minHeight: "10vh" }}
        >
          <div className="w-1/2 h-full flex items-center p-4">
            <h1 className="capitalize text-2xl font-semibold font-mono text-blue-700">
              {props.user.name}'s Dashboard
            </h1>
          </div>
          <div className="w-1/2 flex justify-end items-end px-6 text-sm text-gray-800">
          <div ref={wrapperRef} className="relative">
            <button className="text-2xl font-mono p-2 outline-none focus:outline-none font-semibold text-blue-600" onClick={()=>setDropToggle(!dropToggle)}>Menu</button>
            {dropToggle ? 
            <div className={`dropDown rounded-lg flex flex-col shadow-2xl ${themeColor()}`}>
            <button
              className="w-full h-8 my-1 font-mono bg-yellow-400 hover:bg-yellow-600 hover:text-white rounded focus:outline-none shadow-2xl"
              type="submit"
              onClick={()=>setToggle(true)}
            >
              Settings
            </button>
            <button
              className="w-full h-8 my-1 font-mono bg-purple-400 hover:bg-purple-600 hover:text-white rounded focus:outline-none shadow-2xl"
              type="submit" onClick={logout}
            >
              LogOut
            </button>
          </div>
          :
          <></>
            }
        </div>
        </div>
        </div>
      </nav>
      <div className="flex flex-row" style={{ minHeight: "82vh" }}>
        <div className="border-r-2 border-gray-600 w-1/6 p-6" >
            <div className="flex items-center" style={{ minHeight: "5vh" }}>
                <h1 className="text-2xl font-mono underline overflow-hidden whitespace-no-wrap" style={{ textOverflow: "ellipsis" }}>POSTS</h1>
            </div>
            <div className="w-full flex flex-col items-start justify-center" style={{height: "60vh"}}>
          {props.api.isFetchingPosts ? (
            <>
              <img id='loader' src='data:image/png;base64,R0lGODlhgAAPAJEAAAAAALOzs////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgAAACwAAAAAgAAPAAACo4wfooK33NKKUtF3Z8RbN/55CEiNonMaJGp1bfiaMQvBtXzTpZuradUDZmY+opA3DK6KwaQTCbU9pVHc1LrDUrfarq765Ya9u+VRzLyO12lwG10yy39zY11Jz9t/6jf5/HfXB8hGWKaHt6eYyDgo6BaH6CgJ+QhnmWWoiVnI6ddJmbkZGkgKujhplNpYafr5OooqGst66Uq7OpjbKmvbW/p7UAAAIfkEBAoAAAAsAAAAAAcADwAAAgiEj6nL7Q+jLAAh+QQECgAAACwLAAAABwAPAAACCISPqcvtD6MsACH5BAQKAAAALBYAAAAHAA8AAAIIhI+py+0PoywAIfkEBAoAAAAsIQAAAAcADwAAAgiEj6nL7Q+jLAAh+QQECgAAACwsAAAABwAPAAACCISPqcvtD6MsACH5BAQKAAAALDcAAAAHAA8AAAIIhI+py+0PoywAIfkEBAoAAAAsQgAAAAcADwAAAgiEj6nL7Q+jLAAh+QQECgAAACxNAAAABwAPAAACCISPqcvtD6MsACH5BAQKAAAALFgAAAAHAA8AAAIIhI+py+0PoywAIfkEBAoAAAAsYwAAAAcADwAAAgiEj6nL7Q+jLAAh+QQECgAAACxuAAAABwAPAAACCISPqcvtD6MsACH5BAQKAAAALG4AAAASAA8AAAIojB+iAu2AzmKvRTOrvVnftGgQF3qkIn5dpZbsSb3R+rSoObs1nPJaAQA7' alt='Loading' />
            </>
          ) : (
                <>
              {props.api.posts.map((result) => {
                return (
                  <button
                    className={`h-12 block text-left rounded w-4/5 m-1 p-2 bg-gray-200 border-2 border-gray-500 overflow-hidden whitespace-no-wrap hover:bg-orange-300 hover:border-red-300 hover:text-white capitalize ${themeColor()}`}
                    key={result.id}
                    style={{ textOverflow: "ellipsis" }}
                    value={result.id}
                    onClick={onHandleSinglePost}
                  >
                    {result.id}. {result.title}
                  </button>
                );
              })}
            </>
             )}
             </div>
            <div className="w-full flex items-center" style={{ minHeight: "15%" }}>
            <button
                className="h-12 w-1/4 mr-1 rounded-lg block bg-red-300 text-lg text-center font-semibold text-gray-700 border-orange-300 border-2 hover:bg-red-500 hover:text-gray-200 overflow-hidden whitespace-no-wrap" style={{ textOverflow: "ellipsis" }}
                onClick={onHandlePrev}
              >
             -
              </button>
              <button
                className="h-12 w-1/4 ml-1 rounded-lg block bg-blue-300 text-lg text-center font-semibold text-gray-700 border-gray-300 border-2 hover:bg-blue-500 hover:text-gray-200 overflow-hidden whitespace-no-wrap" style={{ textOverflow: "ellipsis" }}
                onClick={onHandleNext}
              >
              +
              </button>
             
            </div>
        </div>
        <div className="w-5/6 flex flex-col items-center justify-center text-gray-800">
            {props.api.isFetchingSingle ?   
            <img id='loader' src='data:image/png;base64,R0lGODlhgAAPAJEAAAAAALOzs////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgAAACwAAAAAgAAPAAACo4wfooK33NKKUtF3Z8RbN/55CEiNonMaJGp1bfiaMQvBtXzTpZuradUDZmY+opA3DK6KwaQTCbU9pVHc1LrDUrfarq765Ya9u+VRzLyO12lwG10yy39zY11Jz9t/6jf5/HfXB8hGWKaHt6eYyDgo6BaH6CgJ+QhnmWWoiVnI6ddJmbkZGkgKujhplNpYafr5OooqGst66Uq7OpjbKmvbW/p7UAAAIfkEBAoAAAAsAAAAAAcADwAAAgiEj6nL7Q+jLAAh+QQECgAAACwLAAAABwAPAAACCISPqcvtD6MsACH5BAQKAAAALBYAAAAHAA8AAAIIhI+py+0PoywAIfkEBAoAAAAsIQAAAAcADwAAAgiEj6nL7Q+jLAAh+QQECgAAACwsAAAABwAPAAACCISPqcvtD6MsACH5BAQKAAAALDcAAAAHAA8AAAIIhI+py+0PoywAIfkEBAoAAAAsQgAAAAcADwAAAgiEj6nL7Q+jLAAh+QQECgAAACxNAAAABwAPAAACCISPqcvtD6MsACH5BAQKAAAALFgAAAAHAA8AAAIIhI+py+0PoywAIfkEBAoAAAAsYwAAAAcADwAAAgiEj6nL7Q+jLAAh+QQECgAAACxuAAAABwAPAAACCISPqcvtD6MsACH5BAQKAAAALG4AAAASAA8AAAIojB+iAu2AzmKvRTOrvVnftGgQF3qkIn5dpZbsSb3R+rSoObs1nPJaAQA7' alt='Loading'/> 
            :
            <>
        {props.api.post.map((result) => {
                return (
                    <div key={result.id} className="w-full flex justify-center">
                    <div className="w-3/4">
                    <h1 className="capitalize text-2xl font-semibold underline">{result.id}. {result.title}</h1>
                    <p className="text-xl">{result.body}</p>
                    </div>
                    </div>
                )
                })}
                </>
}
        </div>
      </div>
      <footer
        className={`flex flex-wrap justify-end items-end border-t-2 border-gray-600 ${themeColor()}`}
        style={{ minHeight: "8vh" }}
      >
          <p className="p-2">Designed by JKB</p>
      </footer>
    </div>
  );
} else {
    return (
        <Redirect to="/" />
       )
}
}

const mapStateToProps = (state) => ({
  user: state.user,
  api: state.api,
});

export default connect(mapStateToProps, { fetchPosts, fetchSinglePost })(Dashboard);