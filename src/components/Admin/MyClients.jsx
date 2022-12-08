import React from "react";
import MyClient from "./MyClient";
import axios from 'axios';

const MyClients = (props) => {
  //debugger;
  if (props.myClients.length === 0) {
    axios.get("https://mockend.com/Menolas/ah-tattooista/clients").then(response => {
      props.setMyClients(response.data);
    });
  }

  const myClients = props.myClients
    .map(myClient => {
      return (
        <MyClient
          key={myClient.id}
          myClient={myClient}
        />
      );
  });

  return (
    <ul className="admin__cards-list list">
      { myClients }
    </ul>
  );
};

export default MyClients;
