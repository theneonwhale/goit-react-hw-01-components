import TransactionHistoryItem from './TransactionHistoryItem';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ transactions }) {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <TransactionHistoryItem transactions={transactions} />
      </tbody>
    </table>
  );
}

// Statictics.propTypes = {
//   title: PropTypes.string.isRequired,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     }),
//   ),
// };

export default TransactionHistory;
