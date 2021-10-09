import { Injectable, OnInit } from '@angular/core';
import { Project, projectDepartments, projectStatus } from './projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private tempuserIds!: string[];

  private projects: Project[] =
  [
    {
      code: 'p1',
      name: 'job1',
      status: projectStatus.active,
      department: projectDepartments.fs,
      dateStart: new Date('2021-01-03'),
      dateEnd: new Date('2021-05-23'),
      workersById: []
    },
    {
      code: 'p2',
      name: 'job2',
      status: projectStatus.closed,
      department: projectDepartments.mil,
      dateStart: new Date('2021-02-05'),
      dateEnd: new Date('2021-08-23'),
      workersById: []
    },
    {
      code: 'p3',
      name: 'jobabity 3',
      status: projectStatus.active,
      department: projectDepartments.mv,
      dateStart: new Date('2021-02-05'),
      dateEnd: new Date('2021-08-23'),
      workersById: []
    },
    {
      code: 'p4',
      name: 'job 4 4',
      status: projectStatus.dormant,
      department: projectDepartments.other,
      dateStart: new Date('2021-02-05'),
      dateEnd: new Date('2021-08-23'),
      workersById: []
    }
  ];

  constructor() {}

  onInit() {
  }

  /*
  What does this do dude?
  */
  setUserNames(userIds: string[]) {
    this.tempuserIds = userIds;
  }

  // public get projects() {
  //   return this.projects.slice();
  // }

  getProjects(): Project[] {
    return [...this.projects];
  }

  getProjectById(id: string) {
    let foundproject = this.projects.find((project) => project.code === id);
    if (foundproject) { return foundproject}
    else {
      foundproject = {code: 'p0', name: 'undefinded', status: projectStatus.closed, workersById:  [''], department: projectDepartments.other, dateStart: new Date(), dateEnd: new Date()}
      return foundproject;
    }
  }

  addProject(project: Project) {
      this.projects.push(project);
    }

  addUsers(code: string, userIds: string[]) {
    let foundproject = this.getProjectById(code);
    foundproject.workersById.push(...userIds);
  }

  removeUsers(code: string, userIds: string[]) {
    console.log('REMOVING users, but defs an error');
    let foundproject = this.getProjectById(code);
    return foundproject.workersById.filter((projectWorker) => (
      userIds.includes(projectWorker)
    ));
  }

  removeProject(project: Project) {
    const projindex = this.projects.findIndex((p) =>
      p.code === project.code);

    let removedlist = [...this.projects];


    removedlist.splice(projindex, 1);
    console.log('new project removed list');
    console.log(removedlist);
    this.projects.splice(projindex, 1);
  }

}
