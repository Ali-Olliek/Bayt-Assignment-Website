import './App.css';
import Redirector from './navigation/Redirector';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  SignInScreen,
  SignUpScreen,
  StudentsScreen,
  UsersScreen,
} from './screens';
import MainLayout from './components/layouts/main-layout/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path='/sign-in'
          element={
            <MainLayout>
              <SignInScreen />
            </MainLayout>
          }
        />
        <Route
          path='/sign-up'
          element={
            <MainLayout>
              <SignUpScreen />
            </MainLayout>
          }
        />

        <Route path='/' element={<Redirector />}>
          {/* Protected Routes */}
          <Route path='/students' element={<StudentsScreen />} />
          <Route path='/users' element={<UsersScreen />} />
        </Route>
        <Route path='*' element={<>404</>} />
      </Routes>
    </Router>
  );
}

export default App;
