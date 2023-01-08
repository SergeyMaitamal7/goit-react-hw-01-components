import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: block;
  background-color: royalblue;
`;

export const Description = styled.div`
  display: block;
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  color: orange;
  background-color: yellow;
`;
export const Avatar = styled.img`
  display: block;
  width: 480px;
  margin-left: auto;
  margin-right: auto;
  background-color: gray;
`;

export const PersonalInfo = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: red;
`;
export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  width: 480px;
  padding-left: 0;
  margin-left: auto;
  margin-right: auto;
  color: red;
  background-color: brown;
`;
export const StatsItem = styled.span`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding: 12px;
  flex-direction: column;
`;
export const SociaNetworcStats = styled.span`
  padding: 6px;
  margin-left: auto;
  margin-right: auto;
  background-color: black;
`;
