import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
import { TransactionTable } from './TransactionHistory.styled';
import { TransactionTitle } from './TransitionsTitle';
export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionTable>
      <TransactionTitle tipeT="Tipe" amountT="Amount" currencyT="Currency" />
      {transactions.map(transaction => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
};
