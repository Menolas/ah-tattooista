import React from "react";
import classNames from "classnames";

const Faq = (props) => {

  const onFaqItemHover = (evt) => {
    const index = evt.currentTarget.getAttribute('data');
    props.onFaqItemHover(index);
  }
  
  const FaqItem = (props) => {
    
    let faqItemClasses = classNames('faq__item', {'shown': props.faqActive == props.data});
    
    return (
      <li
        className = { faqItemClasses }
        data={props.data}
        onMouseOver = { onFaqItemHover }>
        <div className = "faq__item-header">
          <span className = "faq__item-handle"></span>
          <h5 className = "faq__item-title">
            { props.question }
          </h5>
        </div>
        <p className = "faq__item-text">
          { props.answer }
        </p>
      </li>
    );
  };

  const faqArray = props.faq.map((item, i) => {
    return (
      <FaqItem question={item.question} answer={item.answer} key={i} data={i + 1} faqActive={props.faqActive} />
    )
  });

  return (
    <section className = "page-block faq container">
      <h2 className = "page-block__title">F.A.Q</h2>
      <ul className = "faq__list list">
        { faqArray }
      </ul>
    </section>
  )
}

export default Faq;
