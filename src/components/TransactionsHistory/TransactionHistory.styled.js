import styled from 'styled-components';

export const TransactionTable = styled.table`
  display: flex;
  flex-direction: column;
  width: 480px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`;

export const HeaderTable = styled.tbody`
`;
export const TrTable = styled.tr`
  display: flex;
  flex-direction: row;
 
`;
export const ThTable = styled.th`
  width: 157px;
  padding: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid gray;
  color: white;
  background-color: blue;
`;

export const TransactionBody = styled.tbody`
  width: 480px;
`;
export const TransactionAllElements = styled.tr`
  display: flex;
  background-color: wheat;

  background-color: ${props => (props.string % 2 ? 'aqua' : 'green')};
`;

export const TransactionElements = styled.td`
  width: 158px;
  padding: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  color: black;
  border: 1px solid gray;
`;
