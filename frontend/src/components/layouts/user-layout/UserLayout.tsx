import './user-layout.css';
import { useRole } from '../../../hooks/useRoles';
import { signOutService } from '../../../services/AuthService';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function UserLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

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
              <Link
                className={location.pathname == '/students' ? 'nav-active' : ''}
                to={'/students'}
              >
                <h3 className='link-name'>Students</h3>
              </Link>

              <Link
                className={location.pathname == '/users' ? 'nav-active' : ''}
                to={'/users'}
              >
                <h3 className='link-name'>Users</h3>
              </Link>
            </>
          ) : (
            <Link to={'students'}>
              <h3 className='nav-active'>Students</h3>
            </Link>
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
