import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {
  const http = inject(HttpClient);
  const router = inject(Router);

  try {
    // Call a backend endpoint to check authentication
    await firstValueFrom(http.get('http://localhost:3000/protected', { withCredentials: true }));
    return true;
  } catch {
    router.navigate(['/login']);
    return false;
  }
};