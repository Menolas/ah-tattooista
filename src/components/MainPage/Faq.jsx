import React from "react";

const Faq = (props) => {
  
  const FaqItem = (props) => {
    return (
      <li className="faq__item">
        <div className="faq__item-header">
          <span className="faq__item-handle"></span>
          <h5 className="faq__item-title">
            {props.question}
          </h5>
        </div>
        <p className="faq__item-text">
          {props.answer}
        </p>
      </li>
    );
  };

  const faqArray = props.faq.map(item => <FaqItem question={item.question} answer={item.answer} key={item.id} />);

  return (
    <section className="page-block faq container">
      <h2 className="page-block__title">F.A.Q</h2>
      <ul className="faq__list list">
        {faqArray}
      </ul>
    </section>
  )
}

export default Faq;
