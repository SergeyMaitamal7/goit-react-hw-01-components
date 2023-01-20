import PropTypes from 'prop-types';
import {
  Section,
  PageTitle,
  List,
  Item,
  StatFileTipe,
} from './Statistics.styled';

export const Statistics = ({ title, statistics }) => (
  <Section>
    <PageTitle>{title}</PageTitle>
    <List>
      {statistics.map(statistic => (
        <Item key={statistic.id}>
          <StatFileTipe>{statistic.label}</StatFileTipe>
          <StatFileTipe fontSize={24}>{statistic.percentage}%</StatFileTipe>
        </Item>
      ))}
    </List>
  </Section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  statistic: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

