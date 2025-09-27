import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError, BehaviorSubject, tap } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({
    id: 0,
    email: '',
  });

  constructor(private http: HttpClient) {}
  login(credentials: LoginRequest): Observable<any> {
    return this.http.get<User>('json/data.json').pipe(
      tap((userData: User) => {
        this.currentUserData.next(userData), this.currentUserLoginOn.next(true);
      }),

      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    console.error('Error capturado en handleError:', error); // Esto imprime todo el objeto de error
    if (error.status === 0) {
      console.log('Se ha producido un error: ', error.error);
    } else {
      console.log(
        'El backend retorno el codigo de estado: ',
        error.status,
        error.error
      );
    }
    return throwError(
      () => new Error('Algo fallo. por favor intente nuevamente')
    );
  }
  get userData(): Observable<User> {
    return this.currentUserData.asObservable();
  }
  get userLoginOn(): Observable<boolean> {
    return this.currentUserLoginOn.asObservable();
  }
}
