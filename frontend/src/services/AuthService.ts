import { ISignIn, ISignUp } from '../apis/auth.api';
import LocalStorageService, { AuthenticatedUser } from './LocalStorageService';
import { signInApi, signOutApi, signUpApi } from '../apis/auth.api';

// Initialize LocalStorage Service Outside
const localStorageService = LocalStorageService.getInstance();

const signin = async (
  credentials: ISignIn
): Promise<AuthenticatedUser | null> => {
  try {
    const userData = await signInApi(credentials);

    if (!userData) return null;

    localStorageService.saveUser(userData);

    return userData;
  } catch (error) {
    throw error;
  }
};

const signup = async (
  credentials: ISignUp
): Promise<AuthenticatedUser | null> => {
  try {
    const userData = await signUpApi(credentials);

    if (!userData) return null;

    localStorageService.saveUser(userData);

    return userData;
  } catch (error) {
    throw error;
  }
};

const signout = async () => {
  try {
    await signOutApi();

    localStorageService.deleteUser();
  } catch (error) {
    throw error;
  }
};

export {
  signin as signInService,
  signup as signUpService,
  signout as signOutService,
};
