import TransactionHistoryItem from './TransactionHistoryItem';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ transactions }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.tableRow}>
          <th className={s.tableHeading}>Type</th>
          <th className={s.tableHeading}>Amount</th>
          <th className={s.tableHeading}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tableBody}>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TransactionHistoryItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
