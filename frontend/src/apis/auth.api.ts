import { SuccessResponse } from '../classes/Response';
import { authenticatedApi, unAuthenticatedApi } from '../config/api';

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp {
  email: string;
  password: string;
  username: string;
}

const signin = async (credentials: ISignIn): Promise<string> => {
  try {
    const { data } = await authenticatedApi.post(
      '/public/sign-in',
      credentials
    );

    return data;
  } catch (error) {
    throw error;
  }
};

const signup = async (credentials: ISignUp): Promise<string> => {
  try {
    const { data } = await unAuthenticatedApi.post(
      '/public/sign-up',
      credentials
    );

    return data;
  } catch (error) {
    throw error;
  }
};

const signout = async (): Promise<any> => {
  try {
    const { data } = await authenticatedApi.post('/public/sign-out');

    return data;
  } catch (error) {}
};

export { signin as signInApi, signout as signOutApi, signup as signUpApi };
