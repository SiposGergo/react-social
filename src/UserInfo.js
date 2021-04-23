import React from "react";

const UserInfo = ({ name, username, email, phone }) => (<div className="row">
  <div className="col-3">{name}</div>
  <div className="col-3">{username}</div>
  <div className="col-3">{email}</div>
  <div className="col-3">{phone}</div>
</div>)


export default UserInfo;