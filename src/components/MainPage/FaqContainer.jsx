import { connect } from 'react-redux/es/exports';
import { showFaqItemTextActionCreator } from "../../redux/mainPage-reducer";
import Faq from './Faq';

let mapStateToProps = (state) => {
  return {
    faq: state.mainPage.faq,
    faqActive: state.mainPage.faqActive,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onFaqItemHover: (index) => {
      dispatch(showFaqItemTextActionCreator(index));
    },
  }
}

const FaqContainer = connect(mapStateToProps, mapDispatchToProps)(Faq);

export default FaqContainer;
