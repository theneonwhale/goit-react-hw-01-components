import PropTypes from 'prop-types';
import s from './TransactionHistoryItem.module.css';

function TransactionHistoryItem({ transactions }) {
  return transactions.map(({ id, type, amount, currency }) => (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ));
}

export default TransactionHistoryItem;
