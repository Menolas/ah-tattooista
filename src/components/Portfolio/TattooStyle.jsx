import React from 'react';

const TattooStyle = () => {
  return (
    <section className="tattoo-style page-block container">
      <ul className="tattoo-style__list list">
        <li className="tattoo-style__item">BlackWork</li>
        <li className="tattoo-style__item">Black&Gray</li>
        <li className="tattoo-style__item active">FineLine</li>
      </ul>
      <div className="tattoo-style__item-content">
        <h2 className="title title--secondary page-block__title tattoo-style__title">FineLine</h2>
        <div className="tattoo-style__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </div>
      </div>
    </section>
  )
}

export default TattooStyle;
