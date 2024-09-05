import { ISignIn, ISignUp } from '../apis/auth.api';
import LocalStorageService from './LocalStorageService';
import { signInApi, signOutApi, signUpApi } from '../apis/auth.api';

// Initialize LocalStorage Service Outside
const localStorageService = new LocalStorageService();

const signin = async (credentials: ISignIn) => {
  try {
    const token = await signInApi(credentials);

    localStorageService.saveToken(token);
  } catch (error) {
    throw error;
  }
};

const signup = async (credentials: ISignUp) => {
  try {
    const token = await signUpApi(credentials);

    localStorageService.saveToken(token);
  } catch (error) {
    throw error;
  }
};

const signout = async () => {
  try {
    await signOutApi();

    localStorageService.deleteToken();
  } catch (error) {
    throw error;
  }
};

export {
  signin as signInService,
  signup as signUpService,
  signout as signOutService,
};
