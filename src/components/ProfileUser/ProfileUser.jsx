import PropTypes from 'prop-types';
import { ucFirst } from './ProfileUser.stiled';
import {
  Avatar,
  Description,
  PersonalInfo,
  ProfileContainer,
  SociaNetworcStats,
  Stats,
  StatsItem,
} from './ProfileUser.stiled';
export const ProfileUser = ({ profile }) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={profile.avatar} alt={profile.username} />
        <PersonalInfo color={1}>{ucFirst(profile.username)}</PersonalInfo>
        <PersonalInfo> {profile.tag}</PersonalInfo>
        <PersonalInfo>{profile.location}</PersonalInfo>
      </Description>
      <Stats>
        <StatsItem>
          <SociaNetworcStats>Followers</SociaNetworcStats>
          <SociaNetworcStats color={1}>
            {profile.stats.followers}
          </SociaNetworcStats>
        </StatsItem>
        <StatsItem>
          <SociaNetworcStats>Views</SociaNetworcStats>
          <SociaNetworcStats color={1}>{profile.stats.views}</SociaNetworcStats>
        </StatsItem>
        <StatsItem>
          <SociaNetworcStats>Likes</SociaNetworcStats>
          <SociaNetworcStats color={1}>{profile.stats.likes}</SociaNetworcStats>
        </StatsItem>
      </Stats>
    </ProfileContainer>
  );
};

ProfileUser.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
  }),
};
