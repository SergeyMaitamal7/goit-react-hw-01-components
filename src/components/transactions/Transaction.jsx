import PropTypes from 'prop-types';
import { ucFirst } from 'components/profile/Profile.stiled';
import {
  TransactionElements,
  TransactionAllElements,
  TransactionBody,
} from './Transaction.styled';
export const Transaction = ({ transaction: { type, amount, currency } }) => {
  return (
    <TransactionBody>
      <TransactionAllElements>
        <TransactionElements>{ucFirst(type)}</TransactionElements>
        <TransactionElements>{amount}</TransactionElements>
        <TransactionElements>{currency}</TransactionElements>
      </TransactionAllElements>
    </TransactionBody>
  );
};
Transaction.propTypes = {
  transaction: PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
