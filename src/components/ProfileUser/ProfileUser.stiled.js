import styled from 'styled-components';

export const ProfileContainer = styled.div``;
export const Description = styled.div`
  display: block;
  width: 480px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid gray;
  background-color: aqua;
`;

export const Avatar = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  background-color: yellow;
  border-radius: 50%;
`;

export const PersonalInfo = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${props => {
    if (props.color === 1) return '36px';
    return '24px';
  }};
  font-weight: 700;
  color: ${props => {
    if (props.color === 1) return 'black';
    return 'grey';
  }};
`;
export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  width: 480px;
  padding-left: 0;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid gray;
  background-color: aquamarine; ;
`;
export const StatsItem = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 10px;
  font-weight: 700;
  border: 1px solid gray;
`;
export const SociaNetworcStats = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 158px;
  padding-bottom: 10px;
  font-size: 24px;
  color: ${props => {
    if (props.color === 1) return 'black';
    return 'grey';
  }};
`;
export function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
