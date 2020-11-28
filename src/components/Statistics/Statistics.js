import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statictics({ title, stats }) {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>
      <ul>
        {stats.map(({ id, label, percentage }) => (
          <li key={id}>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statictics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statictics;
