import styled from 'styled-components';
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  margin-left: auto;
  margin-right: auto;
`;
export const PageTitle = styled.h2`
  display: flex;
  width: 480px;
  justify-content: center;
  background-color: aqua;
  margin: 0;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: black;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  width: 480px;
  background-color: orange;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 480px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  background-color: ${getRandomHexColor};
`;

export const StatFileTipe = styled.span`
  align-items: center;
  text-align: center;
  padding: 10px;
  padding-bottom: ${props => {
    if (props.fontSize === 24) return '20px';
    return '10px';
  }};
  font-size: ${props => {
    if (props.fontSize === 24) return '24px';
    return '16px';
  }}; ;
`;

export function UpperCase(str) {
  if (!str) return str;
  return str.toUpperCase();
}
export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
