import React from "react";
import './App.css';
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ContactCard from "./Components/ContactCard";
import ContactList from "./Components/ContactList";

function App() {

  const contacts =[
    {
      id: "1",
      firstName: "Dipesh",
      middleName: "Kumar",
      lastName: "Sikhawat",
    },
    {
      id: "1",
      firstName: "Dipesh",
      middleName: "Kumar",
      lastName: "Sikhawat",
    },
    {
      id: "1",
      firstName: "Dipesh",
      middleName: "Kumar",
      lastName: "Sikhawat",
    },
    {
      id: "1",
      firstName: "Dipesh",
      middleName: "Kumar",
      lastName: "Sikhawat",
    },
    {
      id: "1",
      firstName: "Dipesh",
      middleName: "Kumar",
      lastName: "Sikhawat",
    },
  ]

  return(
       <div className="ui container">
         <Header />
         <AddContact />
         {/* contactlist has used props */}
         <ContactList contacts ={contacts} />
         <ContactCard/>
       </div> 
  )
  
}

export default App;
