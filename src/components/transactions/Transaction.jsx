import PropTypes from 'prop-types';
import {
  TransactionElements,
  TransactionAllElements,
  TransactionBody,
} from './Transaction.styled';
export const Transaction = ({ transaction: { type, amount, currency } }) => {
  return (
    <TransactionBody>
      <TransactionAllElements>
        <TransactionElements>{type}</TransactionElements>
        <TransactionElements>{amount}</TransactionElements>
        <TransactionElements>{currency}</TransactionElements>
      </TransactionAllElements>
    </TransactionBody>
  );
};
// Transaction.propTypes = {
//   transaction: PropTypes.exact({
//     type: PropTypes.string.isRequired,
//     amount: PropTypes.string.isRequired,
//     currency: PropTypes.string.isRequired,
//   }).isRequired,
// };
