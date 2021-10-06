export class User {

  constructor(public userId: string,
              public name: string,
              public role: 'worker' | 'manager',
              public loggedIn: boolean,
              public projects: string[]) {}
}
