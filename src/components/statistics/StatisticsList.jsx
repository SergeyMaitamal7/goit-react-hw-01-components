import { Statistics } from './Statistics';
import PropTypes from 'prop-types';
import { PageTitle } from './StatisticsPageTitle';
import { List, Section } from './StatisticsList.styled';

export const StatisticsList = ({ statistics }) => {
  return (
    <Section>
      <PageTitle text={UpperCase("Upload stats")} />
      <List>
        {statistics.map(statistic => (
          <Statistics   key={statistic.id} statistic={statistic} />
        ))}
      </List>
    </Section>
  );
};

StatisticsList.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export function UpperCase(str) {
  if (!str) return str;

  return str.toUpperCase();
}