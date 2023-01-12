import React from "react";
import { connect } from 'react-redux/es/exports';
import { changeActiveStyle } from "../../redux/portfolio-reducer";
import SliderItems from "./SliderItems";
import { getTattooStyles } from '../../redux/portfolio-reducer';

class PortfolioSlider extends React.Component {

  componentDidMount() {
    this.props.getTattooStyles();
  }
  
  render = () => {

    return (
      <section className="page-block portfolio-slider container">
        <h2 className="page-block__title">Portfolio</h2>
        <div className="handlers__elements portfolio-slider__handlers">
          <span className="handlers__left-arrow"></span>
          <span className="handlers__right-arrow"></span>
        </div>
        <div className="handlers portfolio-slider__list-wrap">
          <ul className="portfolio-slider__list">
            <SliderItems
              tattooStyles={this.props.tattooStyles}
              changeActiveStyle={this.props.changeActiveStyle}
            />
          </ul>
        </div>
      </section>
    );
  }
}


let mapStateToProps = (state) => {
  return {
    tattooStyles: state.portfolio.tattooStyles,
  };
};

export default connect(mapStateToProps, { getTattooStyles, changeActiveStyle })(PortfolioSlider);
