import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css['stat-list']}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className={css.item}
          style={{
            backgroundColor:
              '#' + Math.floor(Math.random() * 16777215).toString(16),
          }}
        >
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
