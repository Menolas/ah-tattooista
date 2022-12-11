import React from "react";
import MyClient from "./MyClient";
import Paginator from "../common/Paginator";

const MyClients = (props) => {
  //debugger;

  const myClients = props.myClients
    .map(myClient => {
      return (
        <MyClient
          key={myClient.id}
          myClient={myClient}
          showMyClientProfile={props.showMyClientProfile}
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
