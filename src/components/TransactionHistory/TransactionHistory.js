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
        <TransactionHistoryItem transactions={transactions} />
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionHistory;
