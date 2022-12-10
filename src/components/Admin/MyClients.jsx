import React from "react";
import MyClient from "./MyClient";
import Paginator from "../Paginator";

const MyClients = (props) => {

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
    <>
      <Paginator
        totalCount={props.totalCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
      <ul className="admin__cards-list list">
        { myClients }
      </ul>
    </>
  );
};

export default MyClients;
