import { useState } from "react";

// import './App.css'

function App() {
  const [color, setcolor] = useState("red");
  // const changeColor = () => {
  //   setcolor("green");
  // };
  // As with this apprach we need multiple handler function for each button better approach is to call the setter function in direct onclick 
  return (
    <div
      className="w-full h-screen duration-500  "
      style={{ backgroundColor: color }}
    >
      <div className="fixed p-2 bg-white max-w-2/3  justify-center mx-auto inset-x-0 flex bottom-12 px-2 rounded-full">
        <div className="flex flex-wrap justify-center py-2 px-3 rounded-3xl shadow-lg text-white text-4xl ">
          <button
            onClick={() => setcolor("purple")}
            // onclick={setcolor}
            // onclick={setcolor("purple")}
            //These commented approach will not work as the onclick requires the function to be called which we are passing using the call back function 
            className="outline-none px-4 py-4 shadow-lg rounded-full "
            style={{ backgroundColor: "purple" }}
          >
            Click Me
          </button>
        </div>
        <div className="flex flex-wrap justify-center py-2 px-3 rounded-3xl gap-3 shadow-lg text-white text-4xl ">
          <button
            onClick={() => setcolor("green")}
            className="outline-none px-4 py-4 shadow-lg rounded-full "
            style={{ backgroundColor: "green" }}
          >
            Click Me
          </button>
        </div>
        <div className="flex flex-wrap justify-center py-2 px-3 rounded-3xl gap-3 shadow-lg text-white text-4xl ">
          <button
            onClick={() => setcolor("red")}
            className="outline-none px-4 py-4 shadow-lg rounded-full "
            style={{ backgroundColor: "red" }}
          >
            Click Me
          </button>
        </div>
        <div className="flex flex-wrap justify-center py-2 px-3 rounded-3xl gap-3 shadow-lg text-white text-4xl ">
          <button
            onClick={() => setcolor("olive")}
            className="outline-none px-4 py-4 shadow-lg rounded-full "
            style={{ backgroundColor: "olive" }}
          >
            Click Me
          </button>
        </div>
        <div className="flex flex-wrap justify-center py-2 px-3 rounded-3xl gap-3 shadow-lg text-white text-4xl ">
          <button
            onClick={() => setcolor("blue")}
            className="outline-none px-4 py-4 shadow-lg rounded-full "
            style={{ backgroundColor: "blue" }}
          >
            Click Me
          </button>
        </div>
        <div className="flex flex-wrap justify-center py-2 px-3 rounded-3xl gap-3 shadow-lg text-white text-4xl ">
          <button
            onClick={() => setcolor("aqua")}
            className="outline-none px-4 py-4 shadow-lg rounded-full "
            style={{ backgroundColor: "aqua" }}
          >
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
