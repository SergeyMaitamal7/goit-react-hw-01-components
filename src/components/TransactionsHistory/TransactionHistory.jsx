import PropTypes from 'prop-types';
import {
  TransactionTable,
  HeaderTable,
  ThTable,
  TrTable,
  TransactionElements,
  TransactionAllElements,
  TransactionBody,
} from './TransactionHistory.styled';
import { ucFirst } from 'components/ProfileUser/ProfileUser.stiled';
export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionTable>
      <HeaderTable>
        <TrTable>
          <ThTable>Tipe</ThTable>
          <ThTable>Amount</ThTable>
          <ThTable>Currency</ThTable>
        </TrTable>
      </HeaderTable>

      <TransactionBody>
        {transactions.map(({ id, type, amount, currency }, idx) => (
          <TransactionAllElements key={id} string={idx + 1}>
            <TransactionElements>{ucFirst(type)}</TransactionElements>
            <TransactionElements>{amount}</TransactionElements>
            <TransactionElements>{currency}</TransactionElements>
          </TransactionAllElements>
        ))}
      </TransactionBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

// TransactionHistory.propTypes = {
//   id: PropTypes.string.isRequired,
//   typeT: PropTypes.string.isRequired,
//   amountT: PropTypes.string.isRequired,
//   currencyT: PropTypes.string.isRequired,
// };
