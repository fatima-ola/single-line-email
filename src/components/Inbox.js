import React from "react";

const Inbox = ({ email }) => {
  const {sender, subject, date, message} = email
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
              <h5>{sender}</h5>
              <h5>{subject}</h5>
              <h5>{date}</h5>
            </div>
            <p>{message}</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Inbox;
