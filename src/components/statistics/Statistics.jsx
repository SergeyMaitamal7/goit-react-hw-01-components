import PropTypes from 'prop-types';
import { Item, StatFileTipe } from './Statistics.styled';
export const Statistics = ({ statistic: { label, percentage } }) => {
  return (
    <Item>
      <StatFileTipe> {label} </StatFileTipe>
      <StatFileTipe fontSize={24}> {percentage} </StatFileTipe>
    </Item>
  );
};

Statistics.propTypes = {
  statistic: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
