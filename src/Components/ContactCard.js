import React from "react";
import User from "../Images/Profilepic.jpg";


const ContactCard = (props) => {
    
    const {id, firstName, middleName, lastName }= props.contact;
    return (
        <div className="item">
            <div className="ui avatar image" src={User} alt="user" />
        <div className="content">
            <div className="header">
                {firstName}
            </div>
            <div>{middleName}</div>
            <div>{lastName}</div>
        </div>
        <i className="trash alternate outline icon"
        style= {{color:"red", marginTop:"7px"}}
        onClick = {() => props.clickHandler(id)}
        ></i>

    </div>
    );
};

export default ContactCard;