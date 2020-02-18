import authService from 'services/auth';

export default (error) => {
  const { status, data } = error.response;
  if ([401, 403].indexOf(status) !== -1) {
    authService.signOut();
    // eslint-disable-next-line no-restricted-globals
    location.reload(true);
  }
  throw {status, ...data.error };
};
