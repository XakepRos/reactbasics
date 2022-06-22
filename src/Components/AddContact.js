import React from "react";

class AddContact extends React.Component{
    state ={
        firstName: "",
        middleName: "",
        lastName: "",
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.firstName === "" && this.state.middleName === "" && this.state.lastName === ""){
          alert("All the fields are mandatory!");
          return;
        }
        this.props.addContactHandler(this.state);
        this.setState({firstName: "", middleName: "", lastName: ""});
        console.log(this.state);
    }
      render() {
          return(
              <div className = "ui main">
                  <h2>Add Contact</h2>
                  <form className = "ui form" onSubmit={this.add}> 
                    <div className = "field">
                        <label>First Name</label>
                        <input type = "text" name ="name" placeholder="Enter your first name ?" 
                         value={this.state.firstName} 
                         onChange={ (e) => this.setState({firstName: e.target.value})} />
                    </div>
                    <div className = "field">
                        <label>Middle Name</label>
                        <input type = "text" name ="name" placeholder="Enter your middle name ?" 
                        value={this.state.middleName} 
                        onChange={ (e) => this.setState({middleName: e.target.value})}/>
                    </div>
                    <div className = "field">
                        <label>Last Name</label>
                        <input type = "text" name ="name" placeholder="Enter your last name ?"
                        value={this.state.lastName} 
                        onChange={ (e) => this.setState({lastName: e.target.value})} />
                    </div>
                    <button className = "ui button blue">Add</button>
                  </form>
              </div>
          );       
      }
}

export default AddContact;