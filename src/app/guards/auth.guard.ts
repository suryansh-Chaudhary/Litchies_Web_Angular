import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('access_token');

  // Check if token exists and is not null or empty
  if (!token || token.trim() === '') {
    return false;
  }

  return true;
};
