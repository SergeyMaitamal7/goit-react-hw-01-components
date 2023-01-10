import PropTypes from 'prop-types';
import { TheadTable, ThTable, TrTable } from './TransitionsTitle.styled';
export const TransactionTitle = ({ tipeT, amountT, currencyT }) => {
  return (
    <TheadTable>
      <TrTable>
        <ThTable>{tipeT}</ThTable>
        <ThTable>{amountT}</ThTable>
        <ThTable>{currencyT}</ThTable>
      </TrTable>
    </TheadTable>
  );
};

TransactionTitle.propTypes = {
  typeT: PropTypes.string.isRequired,
  amountT: PropTypes.string.isRequired,
  currencyT: PropTypes.string.isRequired,
};

