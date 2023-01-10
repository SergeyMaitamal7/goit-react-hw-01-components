import styled from 'styled-components';
import { getRandomHexColor } from './Statistics';
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
  padding-bottom:${props => {
    if (props.fontSize === 24) return '20px';
    return '10px';
  }}; ; ;
  font-size: ${props => {
    if (props.fontSize === 24) return '24px';
    return '16px';
  }}; ;
`;
