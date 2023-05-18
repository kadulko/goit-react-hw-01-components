import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css['transaction-history']}>
      <thead className={css['table-header']}>
        <tr>
          <th className={css['column-header']}>Type</th>
          <th className={css['column-header']}>Amount</th>
          <th className={css['column-header']}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css['table-data']}>{type}</td>
            <td className={css['table-data']}>{amount}</td>
            <td className={css['table-data']}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionHistory;
