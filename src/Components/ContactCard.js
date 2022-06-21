import React from "react";


const ContactCard = (props) => {
    
    const {id, firstName, middleName, lastName }= props.contact;
    return (
        <div className="item">
        <div className="content">
            <div className="header">
                {firstName}
            </div>
            <div>{middleName}</div>
            <div>{lastName}</div>
        </div>
        <i className="trash alternate outline icon"
        style= {{color:"red", marginTop:"7px"}}></i>

    </div>
    );
};

export default ContactCard;