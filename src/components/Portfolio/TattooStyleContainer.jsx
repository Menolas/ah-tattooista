import { connect } from 'react-redux/es/exports';
import { changeActiveStyleActionCreator } from '../../redux/portfolio-reducer';
import TattooStyle from './TattooStyle';


let mapStateToProps = (state) => {
  return {
    tattooStyles: state.portfolio.tattooStyles,
    activeStyle: state.portfolio.activeStyle,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleStyleClick: (style) => {
      dispatch(changeActiveStyleActionCreator(style));
    },
  }
}

const TattooStyleContainer = connect(mapStateToProps, mapDispatchToProps)(TattooStyle);

export default TattooStyleContainer;
