import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {

  private loadedUserId!: string;

  constructor(private userSrv: UserService) {}

  public selectUser(userId:string) {
    this.loadedUserId = userId;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return true;
  }
}
