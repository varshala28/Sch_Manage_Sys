import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import EventCalander from './EventCalander';
import Announce from './Announce';
import Performance from './Performance';
import axios from 'axios';

import {
  AdminDashboardContainer,
  Content,
  TopContent,
  BottomContent,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardContent,
  CardTitle
} from '../../styles/DashboardStyles';

const Dashboard = () => {
  return (
    <AdminDashboardContainer>
      <Sidebar/>
      <Content>
        <TopContent>
          <Section>
            <SectionTitle>Overview</SectionTitle>
            <CardContainer>
              <Card>
                <CardTitle>Total Students</CardTitle>
                <CardContent>500</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Teachers</CardTitle>
                <CardContent>50</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Classes</CardTitle>
                <CardContent>20</CardContent>
              </Card>
            </CardContainer>
          </Section>

          <Section>
           <SectionTitle> All Events </SectionTitle>
          </Section>
        </TopContent>

        <BottomContent>
          <Performance/>
          <Announce/>
          
        </BottomContent>
      </Content>
    </AdminDashboardContainer>
  );
};

export default Dashboard;
