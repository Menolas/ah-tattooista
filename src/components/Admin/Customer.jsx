import React from 'react';

const Customer = (props) => {
  //debugger;
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
            {
              props.customer.phone &&
              <li>
                <span>Phone:&nbsp;</span>
                <span>{ props.customer.phone }</span>
              </li>
            }
            {
              props.customer.email &&
              <li>
                <span>Email:&nbsp;</span>
                <span>{ props.customer.email }</span>
              </li>
            }
            {
              props.customer.insta &&
              <li>
                <span>Instagram:&nbsp;</span>
                <span>{ props.customer.insta }</span>
              </li>
            }
            {
              props.customer.whatsapp &&
              <li>
                <span>Whatsapp:&nbsp;</span>
                <span>{ props.customer.whatsapp }</span>
              </li>
            }
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
        <button>Delete</button>
      </div>
    </li>
  );
}

export default Customer;
