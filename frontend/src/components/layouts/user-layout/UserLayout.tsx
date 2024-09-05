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
      <div>
        <div>
          {isAdmin ? (
            <>
              <Link to={'/students'}>Students</Link>
              <Link to={'/users'}>Users</Link>
            </>
          ) : (
            <Link to={'students'}>Students</Link>
          )}
        </div>
        <button type='button' onClick={handleLogout}>
          Logout
        </button>
      </div>
      <>{children}</>
    </>
  );
}

export default UserLayout;
