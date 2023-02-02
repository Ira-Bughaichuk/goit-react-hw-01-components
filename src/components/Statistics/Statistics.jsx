import React from "react";
import PropTypes from 'prop-types';
import getRandomColor from './getRandomColor';

import css from "./Statistics.module.scss";


function Statistics({ stats, title }) {
  return (
    
    <section className={css.statistics}>
      {title && <h2 className={css.statistics__title}>{title}</h2>}
        
        
      <ul className={css.statistics__list}>
       
        {stats.map(({ id, label, percentage }) => (
          <li key={id} style={{backgroundColor: getRandomColor()}} className={css.item}>
            <span className={css.item__label}>{label}</span>
            <span className={css.item__percentage}>{percentage}%</span>
          </li>
        ))}
          
      </ul>
    </section>
  )
}
export default Statistics;

Statistics.defaultProps = {
  stats: [],
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
 }