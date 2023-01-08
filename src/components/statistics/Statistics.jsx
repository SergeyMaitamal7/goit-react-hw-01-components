import PropTypes from 'prop-types';
import { Item, StatFileTipe } from './Statistics.styled';
export const Statistics = ({ statistic: { label, percentage } }) => {
  return (
    <Item>
      <StatFileTipe> {label} </StatFileTipe>
      <StatFileTipe> {percentage} </StatFileTipe>
    </Item>
  );
};

Statistics.propTypes = {
  statistic: PropTypes.exact({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
