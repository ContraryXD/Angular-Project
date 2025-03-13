import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    if (route.routeConfig?.path === 'dashboard' && !authService.isAdminUser()) {
      router.navigate(['/admin']);
      return false;
    }
    return true;
  } else {
    if (route.routeConfig?.path === 'dashboard') {
      router.navigate(['/admin']);
    } else {
      router.navigate(['/login']);
    }
    return false;
  }
};
