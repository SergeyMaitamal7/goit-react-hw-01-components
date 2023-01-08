import PropTypes from 'prop-types';
import {
  Avatar,
  Description,
  PersonalInfo,
  ProfileContainer,
  SociaNetworcStats,
  Stats,
  StatsItem,
} from './Profile.stiled';
export const Profile = ({ profile }) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={profile.avatar} alt={profile.username} />
        <PersonalInfo>{profile.username}</PersonalInfo>
        <PersonalInfo>{profile.tag}</PersonalInfo>
        <PersonalInfo>{profile.location}</PersonalInfo>
      </Description>
      <Stats>
        <StatsItem>
          <SociaNetworcStats>followers</SociaNetworcStats>
          <SociaNetworcStats>{profile.stats.followers}</SociaNetworcStats>
        </StatsItem>
        <StatsItem>
          <SociaNetworcStats>views</SociaNetworcStats>
          <SociaNetworcStats>{profile.stats.views}</SociaNetworcStats>
        </StatsItem>
        <StatsItem>
          <SociaNetworcStats>likes</SociaNetworcStats>
          <SociaNetworcStats>{profile.stats.likes}</SociaNetworcStats>
        </StatsItem>
      </Stats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  profile: PropTypes.objectOf(
    PropTypes.exact({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
};
