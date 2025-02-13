import React from 'react';
import Sidebar from './Sidebar';
import {
  ProfileContainer,
  SidebarContainer,
  Content,
  ProfileHeader,
  ProfileDetails,
  ProfileLabel,
  ProfileInfo,
  EditButton,
} from '../../styles/SettingsProfileStyles';

const Profile = () => {
  const teacherInfo = {
    name: 'Mary John',
    email: 'mary23@example.com',
    phone: '123-456-7890',
    address: '12 Main St, City, Country',
    qualification: 'Bsc(Hons) Computer Science',
  };

  return (
    <ProfileContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ProfileHeader>Profile Details</ProfileHeader>
        <ProfileDetails>
          <ProfileLabel>Name:</ProfileLabel>
          <ProfileInfo>{teacherInfo.name}</ProfileInfo>
          <ProfileLabel>Email:</ProfileLabel>
          <ProfileInfo>{teacherInfo.email}</ProfileInfo>
          <ProfileLabel>Phone:</ProfileLabel>
          <ProfileInfo>{teacherInfo.phone}</ProfileInfo>
          <ProfileLabel>Address:</ProfileLabel>
          <ProfileInfo>{teacherInfo.address}</ProfileInfo>
          <ProfileLabel>Qualification:</ProfileLabel>
          <ProfileInfo>{teacherInfo.qualification}</ProfileInfo>
        </ProfileDetails>
        <EditButton>Edit Profile</EditButton>
      </Content>
    </ProfileContainer>
  );
};


export default Profile