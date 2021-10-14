import { Injectable } from '@angular/core';
import { User } from './user.model';
import { ProjectsService } from './projects.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private users: User[] =
  [
    {
      userId: '1',
      name: 'boet',
      role: 'manager',
      costRate: 15,
      billingRate: 14,
      projects: ['p1', 'p2'],
      loggedIn: true
    },
    new User('2', 'sannie', 'worker', 10, 20, ['p1', 'p3']),
    new User('3', 'klaas', 'worker', 50, 60,  ['p3']),
    new User('4', 'baas', 'manager', 12, 25, ['p2', 'p3'])
];

  constructor(private projectsSrv: ProjectsService) {
    this.projectsSrv.setUserNames(this.users.map(eachname => eachname.name));
  }

  get getUsers() {
    return [...this.users];
  }

  getUserById(id: string) {
    const userFound = this.users.find((user) => {
      console.log('ermburm?');
      return user.userId === id;
    });
    if (userFound) return userFound;
    else return User.noUser();
  }

  addProject(userId: string, projectId: string) {
    const user = this.getUserById(userId);
    const proj = this.projectsSrv.getProjectById(projectId);

    user.projects.push(projectId);
    this.projectsSrv.addUsers(projectId, [userId]);

  }
}
