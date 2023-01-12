import React from 'react';

const Customer = (props) => {
  const contacts = Object.keys(props.customer.contacts).map(contact => {
    if (props.customer.contacts[contact]) {
      return (
        <li key={contact}>
          <span>{contact}:&nbsp;</span>
          <span>{props.customer.contacts[contact]}</span>
        </li>
      );
    }
  });

  return (
    <li className="admin__card">
      <div className="admin__card-details">
        <div className="admin__card-name">
          <span>Name:&nbsp;</span>
          <span>{props.customer.fullName}</span>
        </div>
        <div>
          <span>Contacts:</span>
          <ul className="list">
            {contacts}
          </ul>
        </div>
        <div className="admin__card-message">
          <span>Message:&nbsp;</span>
          <p>{props.customer.message}</p>
        </div>
      </div>
      <div className="admin__card-btns">
        <button
          disabled={props.isStatusChanging.some(id => id === props.customer._id)}
          onClick={() => {
            props.customer.status === false
              ? props.changeCustomerStatusThunkCreator(props.customer._id)
              : props.unChangeCustomerStatusThunkCreator(props.customer._id)
            }
          }
        >
          { props.customer.status === false
            ? 'Contact'
            : 'Done' }
        </button>
        <button>Add to My Clients</button>
        <button
          disabled={props.isCustomerDeletingInProcess.some(id => id === props.customer._id)}
          onClick={() => {
            //debugger;
            props.deleteCustomerThunkCreator(
              props.customer._id,
              props.pageSize,
              props.currentPage)
          }}
        >Delete</button>
      </div>
    </li>
  );
}

export default Customer;
