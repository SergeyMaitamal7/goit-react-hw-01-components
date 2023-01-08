import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  outline: 10px gold;
  width: 240px;
  margin-left: auto;
  margin-right: auto;
  background-color: brown;
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${props => {
    console.log(props.isOnline);
    if (props.isOnline === true) return 'green';
    return 'red';
  }};
`;
export const Avatar = styled.img`
  display: block;
  margin-left: 10px;
  width: 120px;
  background-color: green;
`;
export const Name = styled.p`
  display: flex;
  margin-left: 10px;
  margin-right: auto;
  align-items: center;
  justify-content: left;
  background-color: chocolate;
`;
