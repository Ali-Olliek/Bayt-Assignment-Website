import { useRole } from '../../../hooks/useRoles';
import { signOutService } from '../../../services/AuthService';
import { useNavigate } from 'react-router-dom';

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
              <p>Students</p>
              <p>Users</p>
            </>
          ) : (
            <p>Students</p>
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
