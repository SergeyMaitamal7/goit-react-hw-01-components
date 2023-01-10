import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 460px;

  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border: 1px solid gray;
  background-color: lightblue;
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${props => {
    if (props.isOnline === true) return 'green';
    return 'red';
  }};
`;
export const Avatar = styled.img`
  display: block;
  margin-left: 10px;
  width: 200px;
`;
export const Name = styled.p`
  display: flex;
  margin-left: 10px;
  margin-right: auto;
  align-items: center;
  justify-content: left;
  font-size: 24px;
`;
