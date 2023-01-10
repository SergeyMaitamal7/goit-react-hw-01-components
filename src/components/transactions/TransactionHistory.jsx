import PropTypes from 'prop-types';
import { UpperCase } from 'components/statistics/StatisticsList';
import { Transaction } from './Transaction';
import { TransactionTable } from './TransactionHistory.styled';
import { TransactionTitle } from './TransitionsTitle';
export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionTable>
      <TransactionTitle
        tipeT={UpperCase('Tipe')}
        amountT={UpperCase('Amount')}
        currencyT={UpperCase('Currency')}
      />
      {transactions.map(transaction => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  typeT: PropTypes.string.isRequired,
  amountT: PropTypes.string.isRequired,
  currencyT: PropTypes.string.isRequired,
};
