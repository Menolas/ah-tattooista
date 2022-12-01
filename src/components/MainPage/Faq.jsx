import React from "react";
import classNames from "classnames";
import { showFaqItemTextActionCreator } from "../../redux/mainPage-reducer";

const Faq = (props) => {
  //console.log(props.faqActive);

  const onFaqItemHover = (evt) => {
    const index = evt.currentTarget.getAttribute('data');
    //console.log(index);
    const action = showFaqItemTextActionCreator(index);
    props.dispatch(action);
  }
  
  const FaqItem = (props) => {
    if (props.faqActive == props.data) {
      console.log('oops!!');
    }
    let faqItemClasses = classNames('faq__item', {'shown': props.faqActive == props.data});
    
    return (
      <li
        className={faqItemClasses}
        data={props.data}
        onClick={onFaqItemHover}>
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

  const faqArray = props.faq.map((item, i) => <FaqItem question={item.question} answer={item.answer} key={i} data={i + 1} faqActive={props.faqActive} />);

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
