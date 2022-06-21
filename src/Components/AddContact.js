import React from "react";

class AddContact extends React.Component{
      render() {
          return(
              <div className = "ui main">
                  <h2>Add Contact</h2>
                  <form className = "ui form"> 
                    <div className = "field">
                        <label>First Name</label>
                        <input type = "text" name ="name" placeholder="Enter your first name ?" />
                    </div>
                    <div className = "field">
                        <label>Middle Name</label>
                        <input type = "text" name ="name" placeholder="Enter your middle name ?" />
                    </div>
                    <div className = "field">
                        <label>Last Name</label>
                        <input type = "text" name ="name" placeholder="Enter your last name ?" />
                    </div>

                    <button className = "ui button blue">Add</button>
                  </form>

              </div>
          );
            
      }
}

export default AddContact;