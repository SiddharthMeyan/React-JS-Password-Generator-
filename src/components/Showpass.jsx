import React from "react";

const Showpass = ({ myPassword, copyToClipboard, textAreaRef }) => {
  return (
    <div className="form-group">
      <textarea
        name="txtMsg"
        className="form-control"
        ref={textAreaRef}
        placeholder=""
        defaultValue={`${myPassword}`}
        style={{ width: "100%", height: "70px" }}
      ></textarea>
      <button
        className="btn btn-success btn-rounded mt-2"
        onClick={copyToClipboard}
      >
        copy
      </button>
    </div>
  );
};

export default Showpass;
