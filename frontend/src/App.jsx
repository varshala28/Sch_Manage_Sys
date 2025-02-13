import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from '../src/components/Home'
import ChooseUser from '../src/components/Chooseuser'
import AdminSignIn from './components/AdminSignin'
import StudentSignIn from './components/Studentsignin'
import TeacherSignIn from './components/TeacherSignin'
import AdminDashboard from './pages/Admin/Dashboard'
import AdminAnnounce from './pages/Admin/Announce'
import AdminAssign from './pages/Admin/Assign'
import AdminAttendance from './pages/Admin/Attendance'
import AdminClasses from './pages/Admin/Classes'
import AdminExam from './pages/Admin/Exam'
import AdminEventCalander from './pages/Admin/EventCalander'
import AdminLibrary from './pages/Admin/Library'
import AdminPerformance from './pages/Admin/Performance'
import AdminSidebar from './pages/Admin/Sidebar'
import AdminStudents from './pages/Admin/Students'
import AdminTeachers from './pages/Admin/Teachers'
import AdminProfile from './pages/Admin/Profile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path= '/' element={<Home/>} />
        <Route path= '/choose-user' element={<ChooseUser/>} />

       {/* All the signIn page route Links */}
       <Route path="/admin-signIn" element={<AdminSignIn />} />
        <Route path="/student-signIn" element={<StudentSignIn />} />
        <Route path="/teacher-signIn" element={<TeacherSignIn />} />
        
        {/* admin  section routes */}
        <Route path= '/admin/dashboard' element={<AdminDashboard/>} />
        <Route path= '/admin/announce' element={<AdminAnnounce/>} />
        <Route path= '/admin/assign' element={<AdminAssign/>} />
        <Route path= '/admin/attendance' element={<AdminAttendance/>} />
        <Route path= '/admin/exam' element={<AdminExam/>} />
        <Route path= '/admin/events' element={<AdminEventCalander/>} />
        <Route path= '/admin/classes' element={<AdminClasses/>} />
        <Route path= '/admin/library' element={<AdminLibrary/>} />
        <Route path= '/admin/performance' element={<AdminPerformance/>} />
        <Route path= '/admin/sidebar' element={<AdminSidebar/>} />
        <Route path= '/admin/students' element={<AdminStudents/>} />
        <Route path= '/admin/teachers' element={<AdminTeachers/>} />
        <Route path= '/admin/profile' element={<AdminProfile/>} />
        </Routes>
        </Router>
  )
}

export default App
