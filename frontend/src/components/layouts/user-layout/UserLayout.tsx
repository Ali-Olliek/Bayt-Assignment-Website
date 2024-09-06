import './user-layout.css';
import { useRole } from '../../../hooks/useRoles';
import { signOutService } from '../../../services/AuthService';
import { Link, useNavigate } from 'react-router-dom';

function UserLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const { isAdmin } = useRole();

  const handleLogout = () => {
    signOutService();
    navigate('/sign-in');
  };

  return (
    <>
      <div className='top-bar'>
        <div className='nav-buttons'>
          {isAdmin ? (
            <>
              <h3>
                <Link to={'/students'}>Students</Link>
              </h3>

              <h3>
                <Link to={'/users'}>Users</Link>
              </h3>
            </>
          ) : (
            <h3>
              <Link to={'students'}>Students</Link>
            </h3>
          )}
        </div>
        <button className='logout btn' type='button' onClick={handleLogout}>
          Logout
        </button>
      </div>
      <>{children}</>
    </>
  );
}

export default UserLayout;
