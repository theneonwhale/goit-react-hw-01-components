import PropTypes from 'prop-types';
import s from './TransactionHistoryItem.module.css';

function TransactionHistoryItem({ transactions }) {
  return transactions.map(
    ({ id, type = 'unknown', amount = 0, currency = 'unknown' }) => (
      <tr className={s.tableRow} key={id}>
        <td className={s.tableData}>{type}</td>
        <td className={s.tableData}>{amount}</td>
        <td className={s.tableData}>{currency}</td>
      </tr>
    ),
  );
}

TransactionHistoryItem.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistoryItem;
