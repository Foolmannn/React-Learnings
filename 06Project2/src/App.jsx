import { useState, useCallback, useEffect, useRef } from "react";

import "./index.css";

function App() {
  const [length, setlength] = useState(8);
  const [wantNumber, setwantNumber] = useState(false);
  const [wantSymbol, setwantSymbol] = useState(false);
  const [password, setpassword] = useState("");

  //useref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (wantNumber) str += "0123456789";
    if (wantSymbol) str += "!@#$%^&*()_{}[]~'-+=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [wantNumber, wantSymbol, length, setpassword]);
  // passwordGenerator() this will not react as it will create loop  so we need to create another button that calls this callback hook or simply use the useeffect hook

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
    // alert("Copied Successfully! ")
  }, [password]);

  // when chages occur in the dependency array then this useeffect runs the function
  useEffect(() => {
    passwordGenerator();
  }, [length, wantNumber, wantSymbol, passwordGenerator]);

  return (
    <>
      <h1 className="text-xl sm:text-2xl md:text-3xl text-white text-center font-bold">
        Random Password Generator
      </h1>
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto my-10 bg-gray-700 p-5 sm:p-8 md:p-10 rounded-xl font-medium text-lg sm:text-xl">
        <div className="flex flex-col sm:flex-row rounded-xl bg-white overflow-hidden">
          <input
            type="text"
            value={password}
            placeholder="password...."
            readOnly
            className="py-3 px-3 w-full outline-none"
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-700 text-white py-2 px-4 sm:rounded-none sm:rounded-r-xl"
          >
            Copy
          </button>
          {/* <button onClick={passwordGenerator} className="outline-none bg-blue-700 text-white py-1 px-3 cursor-pointer rounded-e-xl ">
            Generate
          </button> */}
        </div>
        <div className="options px-3 py-3 flex flex-col sm:flex-row sm:flex-wrap gap-4 bg-lime-200 rounded-md my-3">
          <div className="flex items-center gap-2">
            <label htmlFor="">Length:</label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer w-full sm:w-auto"
              onChange={(e) => {
                setlength(Number(e.target.value));
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={wantNumber}
              id="numberInput"
              onChange={() => {
                setwantNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={wantSymbol}
              id="symbolInput"
              className="cursor-pointer"
              onChange={() => {
                setwantSymbol((prev) => !prev);
              }}
            />
            <label htmlFor="symbolInput">Symbols </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
