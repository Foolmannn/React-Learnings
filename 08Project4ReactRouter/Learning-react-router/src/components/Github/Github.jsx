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

  return(
    <>
    <div className="bg-gray-600 p-5 ">

    <h1 className="text-center text-4xl font-medium font-sans ">Github User Info:</h1>
    <div className="flex border-2 rounded-xl ">
        <div className="avatar pl-10 py-1 pr-4 object-contain  ">
<img src={data.avatar_url} alt="github picture" width={200} />
        </div>
        <div className="text-white font-medium ">

        <div>Name: {data.name}</div>
        <div>Username: {data.login}</div>
        {/* <a href={data.html_for}>Visit Github</a> */}
        <div>Followers: {data.bio}</div>
        <div>Followers: {data.followers}</div>
        </div>
    </div>
    </div>
    </>

  );
}

export default Github;

export const githubInfoLoader = async ()=>{
const response = await fetch("https://api.github.com/users/Foolmannn")
return response.json()

}
