// Performance.js
import React from 'react';
import Sidebar from './Sidebar';
import {
  PerformanceContainer,
  Content,
  PerformanceContent,
  PerformanceHeader,
  SchoolPerformance,
  IndividualPerformance,
} from '../../styles/PerformanceStyles'; 

const Performance = () => {
  // Sample data for school performance
  const schoolPerformanceData = {
    averageScore: 73,
    totalStudents: 80,
  };

  // Sample data for individual student performance
  const individualPerformanceData = [
    { id: 1, name: 'John Doe', score: 70 },
    { id: 2, name: 'sam Johnsaon', score: 84 },
    { id: 3, name: 'Michael smith', score: 79 },
  ];

  return (
    <PerformanceContainer>
      <Sidebar /> {/* Include the Sidebar component */}
      <Content>
        <PerformanceContent>
          <PerformanceHeader>School Performance</PerformanceHeader>
          <SchoolPerformance>
            <p>Average Score: {schoolPerformanceData.averageScore}</p>
            <p>Total Students: {schoolPerformanceData.totalStudents}</p>
          </SchoolPerformance>
          <PerformanceHeader>Individual Performance</PerformanceHeader>
          <IndividualPerformance>
            {individualPerformanceData.map((student) => (
              <p key={student.id}>
                {student.name}: {student.score}
              </p>
            ))}
          </IndividualPerformance>
        </PerformanceContent>
      </Content>
    </PerformanceContainer>
  );
};

export default Performance;
