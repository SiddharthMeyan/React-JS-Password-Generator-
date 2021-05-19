import "./App.css";
import Form from "./components/Form";
import { useState, useRef } from "react";
function App() {
  const [passLen, setPassLen] = useState(18);
  const [numBool, setnumBool] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [myPassword, setMyPassword] = useState("");
  const textAreaRef = useRef(null);

  const genPassword = (e) => {
    e.preventDefault();
    let myAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let digits = "0123456789";
    let punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    let i = 0;
    let Password = "";
    while (i < passLen) {
      let myvars;
      if (numBool & symbol) {
        myvars = myAlpha + digits + punctuation;
      } else if (numBool) {
        myvars = myAlpha + digits;
      } else if (symbol) {
        myvars = myAlpha + punctuation;
      } else {
        myvars = myAlpha;
      }
      Password += myvars[Math.floor(Math.random() * myvars.length)];
      setMyPassword(Password);
      i++;
    }
  };
  const copyToClipboard = (e) => {
    e.preventDefault();

    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    // setCopySuccess("Copied!");
    alert("copied");
  };

  return (
    <div className="App">
      <Form
        passLen={passLen}
        numBool={numBool}
        symbol={symbol}
        setPassLen={setPassLen}
        setnumBool={setnumBool}
        setSymbol={setSymbol}
        genPassword={genPassword}
        myPassword={myPassword}
        textAreaRef={textAreaRef}
        copyToClipboard={copyToClipboard}
      />
    </div>
  );
}

export default App;
