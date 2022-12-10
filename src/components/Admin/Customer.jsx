import React from 'react';

const Customer = (props) => {

  const changeCustomerStatus = (evt) => {
    const customerId = evt.target.getAttribute('data');
    props.changeCustomerStatus(customerId);
  };

  const unChangeCustomerStatus = (evt) => {
    const customerId = evt.target.getAttribute('data');
    props.unChangeCustomerStatus(customerId);
  };
  
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
        {!props.customer.status
          ? <button data={ props.customer.id } onClick={changeCustomerStatus}>Contact</button>
          : <button data={ props.customer.id } onClick={unChangeCustomerStatus}>Done</button>
        }
      </div>
    </li>
  );
}

export default Customer;
