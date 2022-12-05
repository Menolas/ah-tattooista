import { connect } from 'react-redux/es/exports';
import { changeActiveStyleActionCreator } from "../../redux/portfolio-reducer";
import PortfolioSlider from './PortfolioSlider';

let mapStateToProps = (state) => {
  return {
    tattooStyles: state.portfolio.tattooStyles,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleStyleClick: (style) => {
      dispatch(changeActiveStyleActionCreator(style));
    },
  };
};

const PortfolioSliderContainer = connect(mapStateToProps, mapDispatchToProps)(PortfolioSlider);

export default PortfolioSliderContainer;
