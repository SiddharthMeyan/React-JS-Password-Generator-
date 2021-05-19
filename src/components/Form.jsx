import React from "react";

const Form = (props) => {
  return (
    <div className="container contact-form">
      <div className="contact-image">
        <img
          src="https://pngimg.com/uploads/key/key_PNG1176.png"
          alt="password-key"
        />
      </div>
      <form onSubmit={props.genPassword}>
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
                value={props.passLen}
                onChange={(e) => props.setPassLen(e.target.value)}
              />
              <center>
                <div id="showLen">{props.passLen ? props.passLen : 18}</div>
              </center>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="numbers"
                  value={props.numBool}
                  onChange={(e) =>
                    e.target.checked
                      ? props.setnumBool(true)
                      : props.setnumBool(false)
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
                  value={props.symbol}
                  onChange={(e) =>
                    e.target.checked
                      ? props.setSymbol(true)
                      : props.setSymbol(false)
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
            <div className="form-group">
              <textarea
                name="txtMsg"
                className="form-control"
                ref={props.textAreaRef}
                placeholder=""
                defaultValue={`${props.myPassword}`}
                style={{ width: "100%", height: "150px" }}
              ></textarea>
              <button
                className="btn btn-primary"
                onClick={props.copyToClipboard}
              >
                copy
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="col-md-6"></div>
    </div>
  );
};

export default Form;
