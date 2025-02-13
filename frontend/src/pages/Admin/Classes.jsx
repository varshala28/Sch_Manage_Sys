// Classes.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  ClassesContainer,
  Content,
  ClassesContent,
  ClassesHeader,
  ClassList,
  ClassItem,
  AddClassForm,
  AddClassInput,
  AddClassButton,
} from '../../styles/ClassesStyles';

const Classes = () => {
  

  return (
    <ClassesContainer>
      <Sidebar />
      <Content>
        <ClassesContent>
          <ClassesHeader>Classes</ClassesHeader>
          <AddClassForm >
            <AddClassInput
              type="text"
              placeholder="Enter class name"
            />
            <AddClassButton type="submit">Add Class</AddClassButton>
          </AddClassForm>
          <ClassList>
  
          </ClassList>
        </ClassesContent>
      </Content>
    </ClassesContainer>
  );
};

export default Classes;
