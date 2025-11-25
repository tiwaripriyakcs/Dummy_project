import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const user_id = user?._id || null;

  console.log("Guard User ID:", user_id);

  if (user_id) {
    return true;
  }

  return inject(Router).navigate(['/dashboard']);
};
