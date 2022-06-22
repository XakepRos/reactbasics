import React, {useState, useEffect} from "react";  //react hook
import {uuid} from 'uuid';
import './App.css';
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ContactCard from "./Components/ContactCard";
import ContactList from "./Components/ContactList";

function App() {
const [contacts, setContacts] = useState([]);
  // const contacts =[
  //   {
  //     id: "1",
  //     firstName: "Dipesh",
  //     middleName: "Kumar",
  //     lastName: "Sikhawat",
  //   },
  //   {
  //     id: "1",
  //     firstName: "Dipesh",
  //     middleName: "Kumar",
  //     lastName: "Sikhawat",
  //   },
  // ]
  const LOCAL_STORAGE_KEY = "contacts";

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contact }]);
  };

  const removeContacHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
}, []);

  useEffect(() => {
       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return(
       <div className="ui container">
         <Header />
         <AddContact addContactHandler = {addContactHandler} />
         {/* contactlist has used props */}
         <ContactList contacts ={contacts} getContactId = {removeContacHandler}/>
         <ContactCard/>
       </div> 
  )
  
}

export default App;


//use props to get data from parent to child 
//use case like addContactHandler to get data from child t parent
