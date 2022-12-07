import React from 'react';

const Customer = (props) => {

  const changeStatus = (evt) => {
    const customerId = evt.target.getAttribute('data');
    props.changeStatus(customerId);
  };

  const unChangeStatus = (evt) => {
    const customerId = evt.target.getAttribute('data');
    props.unChangeStatus(customerId);
  };

  const contacts = Object.entries(props.customer.contacts)
    .map(([soc, contact]) => {
      if (contact) {
        return (
          <li key={soc}>
            <span>{soc}:&nbsp;</span>
            <span>{contact}</span>
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
        {!props.customer.status
          ? <button data={ props.customer.id } onClick={changeStatus}>Contact</button>
          : <button data={ props.customer.id } onClick={unChangeStatus}>Done</button>
        }
      </div>
    </li>
  );
}

export default Customer;
