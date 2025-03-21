import {  useState, useEffect } from "react";

import "./App.css";

function App() {
  let [password, setPassword] = useState("");
  let [value, setValue] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [specialCharAllowed, setSpecialCharAllowed] = useState(false);

  const passwordGenerator =() => {
    let password = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num = "12345679";
    let specialChar = "!@#$%^&*()_+";
    if (numberAllowed) {
      str += num;
    }
    if (specialCharAllowed) {
      str += specialChar;
    }
    for (let i = 0; i < value; i++) {
      let realPassword = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(realPassword);
    }
    setPassword(password);
  };

  

  useEffect(() => {
    passwordGenerator();
  }, [numberAllowed, value, specialCharAllowed]);

  const copyToClipboard = () =>{
    window.navigator.clipboard.writeText(password);
    alert('password copied to your clipboard');
  }

  // let length = 4;

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-[#1CB5E0] to-[#000851]">
        <div className="w-[90%] max-w-lg shadow p-4 rounded bg-[#ffffff2b]">
          <h1 className="text-2xl text-center mb-3 font-bold text-white">
            Password Generator
          </h1>
          <div className="flex border border-black rounded mb-4 w-full">
            <input
              value={password}
              type="text"
              readOnly
              className="outline-none p-2 rounded text-black placeholder:text-black container text-xs mb-2 mt-2"
              placeholder="The password will be displayed here..."
            />
            <button className="outline-none bg-[#0008519c] p-3 rounded-br-xs rounded-tr-xs text-white shrink-0 cursor-pointer" onClick={copyToClipboard}>
              Copy
            </button>
          </div>
          <div className="flex justify-between items-center">
            <label className="flex justify-center flex-col items-center font-bold" htmlFor="input">Password Range
            <input
              type="range"
              className="cursor-pointer"
              min={8}
              max={100}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            </label>
            
            <input
              className="mt-1 cursor-pointer"
              type="checkbox"

              defaultChecked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
            />
            <label htmlFor="number" className="font-bold">number</label>
            <input
              className="mt-1 cursor-pointer"
              type="checkbox"
              defaultChecked={specialCharAllowed}
              onChange={(e) => setSpecialCharAllowed(e.target.checked)}
            />
            <label htmlFor="special-char" className="font-bold">special-char</label>
            <p className="font-bold">Length: {value}</p>
          </div>
          <div className="w-full flex justify-center items-center p-4 mt-4">
            <button onClick={passwordGenerator} className="p-2 border rounded  bg-[#0008519c] cursor-pointer text-white w-full">Generate Password</button>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
