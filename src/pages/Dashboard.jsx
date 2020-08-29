import React, { useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchPosts } from '../redux/actions/posts'

function Dashboard(props) {
  
  useEffect(() => {
      props.fetchPosts()
  }, [])

  const postInformation = useSelector(state => state.posts)

  return (
    <div style={{minHeight:"100vh"}}>
      <nav>
        <div className="flex flex-wrap border-b-2 border-gray-600 bg-gray-300" style={{height:"10vh"}}>
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
<div className="flex flex-row" style={{minHeight:"82vh"}}>
<div className="border-r-2 border-gray-600 w-1/6 py-6">
<div className="w-full flex flex-col items-center justify-center" style={{height:"85%"}}>
{props.posts.posts.map((result,index) => {
return (
<button className="h-12 block text-left rounded w-4/5 m-1 p-2 bg-gray-200 border-2 border-gray-500 overflow-hidden whitespace-no-wrap hover:bg-orange-300 hover:text-white capitalize" key={index} style={{textOverflow: "ellipsis"}} value={result.id}>{result.id}. {result.title}</button>
)
})}
</div>
<div className="w-full flex items-center justify-center" style={{height:"15%"}}>
<button className="h-12 w-10/12 rounded block bg-green-300 text-xl font-semibold text-gray-700 border-blue-300 border-2 hover:bg-green-500 hover:text-gray-200 ">Load More</button>
</div>

</div>
<div className="w-5/6">

</div>
</div>
      

      <footer className="flex flex-wrap border-t-2 border-gray-600 bg-gray-300" style={{height:"8vh"}}> </footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  posts: state.posts
});

export default connect(mapStateToProps, { fetchPosts })(Dashboard);
