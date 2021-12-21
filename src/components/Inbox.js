import React from "react";

const Inbox = ({ email }) => {
  return (
    <div className="wrapper">
      <div className="email-container">
        <hr />
        <div className="inner-wrapper">
          <div className="left-info">
            <input type="checkbox" id="read" name="read" />
            <i class="fa fa-thumb-tack" aria-hidden="true"></i>
          </div>
          <div className="right-info">
            <div className="email-header">
              <h5>{email.sender}</h5>
              <h5>{email.subject}</h5>
              <h5>{email.date}</h5>
            </div>
            <p>{email.message}</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Inbox;
