import React from "react";
import Showpass from "./Showpass";

const Form = ({
  passLen,
  numBool,
  symbol,
  setPassLen,
  setnumBool,
  setSymbol,
  genPassword,
  myPassword,
  textAreaRef,
  copyToClipboard,
}) => {
  return (
    <div className="container contact-form border-gradient border-gradient-purple">
      <div className="contact-image">
        <img
          src="https://pngimg.com/uploads/key/key_PNG1176.png"
          alt="password-key"
        />
      </div>
      <form onSubmit={genPassword}>
        <h3>Generate a random Password</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="passLength" className="form-label">
                Length
              </label>
              <input
                type="range"
                className="form-range"
                min="6"
                max="30"
                id="passLength"
                value={passLen}
                onChange={(e) => setPassLen(e.target.value)}
              />
              <center>
                <div id="showLen">{passLen ? passLen : 18}</div>
              </center>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="numbers"
                  value={numBool}
                  onChange={(e) =>
                    e.target.checked ? setnumBool(true) : setnumBool(false)
                  }
                />
                <label className="form-check-label" htmlFor="numbers">
                  Numbers (eg: 1,2,3,4,5,6)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="symbols"
                  value={symbol}
                  onChange={(e) =>
                    e.target.checked ? setSymbol(true) : setSymbol(false)
                  }
                />
                <label className="form-check-label" htmlFor="symbols">
                  Symbols(eg: !@#${}_)
                </label>
              </div>
            </div>

            <div className="form-group">
              <input
                type="submit"
                name="btnSubmit"
                className="btnContact"
                value="Generate"
              />
            </div>
            <Showpass
              myPassword={myPassword}
              copyToClipboard={copyToClipboard}
              textAreaRef={textAreaRef}
            />
          </div>
        </div>
      </form>
      <div className="col-md-6"></div>
    </div>
  );
};

export default Form;
