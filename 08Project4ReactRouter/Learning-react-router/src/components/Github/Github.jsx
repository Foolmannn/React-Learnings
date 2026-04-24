import React,{useState,useEffect} from "react";
import { data } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Github() {

    // This method is slower . As it takes time to fetch apis. So the loader method is faster as it preloads the api response increasin performance 
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/Foolmannn")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

// Using the lOader

//this hook gets the data 
const data = useLoaderData()

return (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
    <div className="bg-gray-800 text-white rounded-2xl shadow-lg max-w-md w-full p-6">

      {/* Title */}
      <h1 className="text-2xl font-semibold text-center mb-6">
        GitHub User Info
      </h1>

      {/* Profile Section */}
      <div className="flex flex-col items-center text-center">
        
        {/* Avatar */}
        <img
          src={data.avatar_url}
          alt="github avatar"
          className="w-32 h-32 rounded-full border-4 border-orange-500 shadow-md mb-4"
        />

        {/* Name */}
        <h2 className="text-xl font-bold">{data.name || "No Name"}</h2>

        {/* Username */}
        <p className="text-gray-400 mb-2">@{data.login}</p>

        {/* Bio */}
        <p className="text-sm text-gray-300 mb-4">
          {data.bio || "No bio available"}
        </p>

        {/* Stats */}
        <div className="flex justify-between w-full text-center border-t border-gray-700 pt-4">
          <div>
            <p className="text-lg font-bold">{data.followers}</p>
            <p className="text-gray-400 text-sm">Followers</p>
          </div>
          <div>
            <p className="text-lg font-bold">{data.following}</p>
            <p className="text-gray-400 text-sm">Following</p>
          </div>
          <div>
            <p className="text-lg font-bold">{data.public_repos}</p>
            <p className="text-gray-400 text-sm">Repos</p>
          </div>
        </div>

        {/* Button */}
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 bg-orange-600 hover:bg-orange-700 px-5 py-2 rounded-lg text-sm font-medium transition"
        >
          View Profile
        </a>
      </div>
    </div>
  </div>
);
}

export default Github;

export const githubInfoLoader = async ()=>{
const response = await fetch("https://api.github.com/users/Foolmannn")
return response.json()

}
