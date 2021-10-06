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
      projects: ['p1', 'p2'],
      loggedIn: true
    },
    new User('2', 'sannie', 'worker', false, ['p1', 'p3']),
    new User('3', 'klaas', 'worker', false, ['p3']),
    new User('4', 'baas', 'manager', true, ['p2', 'p3'])
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
      user.userId === id;
    });
    if (userFound) return userFound;
    else return new User('0', 'noone', 'manager', true, ['']);
  }

  addProject(userId: string, projectId: string) {
    const user = this.getUserById(userId);
    const proj = this.projectsSrv.getProjectById(projectId);

    user.projects.push(projectId);
    this.projectsSrv.addUsers(projectId, [userId]);

  }
}
