import PropTypes from 'prop-types';
import s from './TransactionHistoryItem.module.css';

function TransactionHistoryItem({
  type = 'unknown',
  amount = 0,
  currency = 'unknown',
}) {
  return (
    <tr className={s.tableRow}>
      <td className={s.tableData}>{type}</td>
      <td className={s.tableData}>{amount}</td>
      <td className={s.tableData}>{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
