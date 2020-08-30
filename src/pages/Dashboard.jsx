import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchPosts, fetchNextPost, fetchSinglePost } from "../redux/actions/posts";

function Dashboard(props) {
  const dispatch = useDispatch();

  const [number, setNumber] = useState(1);
  const [index, setIndex] = useState(1)

  useEffect(() => {
    props.fetchPosts(number);
    props.fetchSinglePost(index);
  }, []);

  useEffect(() => {
    dispatch(fetchNextPost(number));
    props.fetchPosts(number);
  }, [number]);

  useEffect(() => {
    dispatch(fetchSinglePost(index));
  }, [index]);

  function onHandleNext(event) {
    event.preventDefault();
    if (number < 10) {
      setNumber(number + 1);
    } else {
      setNumber(1);
    }
  }

  function onHandlePrev(event) {
    event.preventDefault();
    if (number > 1) {
      setNumber(number - 1);
    } else {
      setNumber(10);
    }
  }

  function onHandleSinglePost(event){
      event.preventDefault()
      setIndex(event.target.value)
  }
  console.log(props.api.post)
  return (
    <div style={{ minHeight: "100vh" }}>
      <nav>
        <div
          className="flex flex-wrap border-b-2 border-gray-600 bg-gray-300"
          style={{ height: "10vh" }}
        >
          <div className="w-1/2 h-full flex items-center p-4">
            <h1 className="capitalize text-2xl font-semibold font-mono text-blue-700">
              {props.user.name}'s Dashboard
            </h1>
          </div>
          <div className="w-1/2 h-full flex justify-end items-end px-6">
            <button
              className="w-24 h-8 my-1 mx-1 bg-teal-500 hover:bg-teal-600 rounded focus:outline-none shadow-2xl"
              type="submit"
            >
              Settings
            </button>
            <button
              className="w-24 h-8 my-1 mx-1 bg-purple-400 hover:bg-purple-600 rounded focus:outline-none shadow-2xl"
              type="submit"
            >
              LogOut
            </button>
          </div>
        </div>
      </nav>
      <div className="flex flex-row" style={{ minHeight: "82vh" }}>
        <div className="border-r-2 border-gray-600 w-1/6 py-6">
          {props.api.isFetchingPosts ? (
            <div
              className="w-full flex flex-col items-center justify-center"
              style={{ height: "85%" }}
            >
              <div className="h-12 block text-left rounded w-4/5 mx-1 my-6 p-2 bg-orange-300 border-2 border-gray-500 overflow-hidden whitespace-no-wrap">
                <h1>LOADING...</h1>
              </div>
            </div>
          ) : (
            <div
              className="w-full flex flex-col items-center justify-center"
              style={{ height: "85%" }}
            >
              {props.api.posts.map((result) => {
                return (
                  <button
                    className="h-12 block text-left rounded w-4/5 m-1 p-2 bg-gray-200 border-2 border-gray-500 overflow-hidden whitespace-no-wrap hover:bg-orange-300 hover:text-white capitalize"
                    key={result.id}
                    style={{ textOverflow: "ellipsis" }}
                    value={result.id}
                    onClick={onHandleSinglePost}
                  >
                    {result.id}. {result.title}
                  </button>
                );
              })}
            </div>
          )}
          <div className="w-full flex items-end px-6" style={{ height: "15%" }}>
          <button
              className="h-12 w-1/2 m-1 p-2 rounded block bg-red-300 text-xl font-semibold text-gray-700 border-orange-300 border-2 hover:bg-red-500 hover:text-gray-200"
              onClick={onHandlePrev}
            >
             -
            </button>
            <button
              className="h-12 w-1/2 m-1 p-2 rounded block bg-blue-300 text-xl font-semibold text-gray-700 border-gray-300 border-2 hover:bg-blue-500 hover:text-gray-200"
              onClick={onHandleNext}
            >
              +
            </button>

           
          </div>
        </div>
        <div className="w-5/6 flex flex-col items-center justify-center text-gray-800">
            {props.api.isFetchingSingle ? <div className="text-4xl">Loading...</div> :
            <div>
        {props.api.post.map((result) => {
                return (
                    <div className="w-full flex justify-center">
                    <div key={result.id} className="w-3/4">
                    <h1 className="capitalize text-2xl font-semibold underline">{result.id}. {result.title}</h1>
                    <p className="text-xl">{result.body}</p>
                    </div>
                    </div>
                )
                })}
                </div>
}
        </div>
      </div>

      <footer
        className="flex flex-wrap justify-end items-end border-t-2 border-gray-600 bg-gray-300"
        style={{ height: "8vh" }}
      >
          <p className="p-2">Designed by JKB</p>
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  api: state.api,
});

export default connect(mapStateToProps, { fetchPosts, fetchSinglePost })(Dashboard);
