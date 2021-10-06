// export class Project {
//   // code: string;
//   // name: string;
//   // status: 'Active' | 'Closed' | 'Dormat';
//   // workersById: string[];
//   // dateStart: Date;
//   // dateEnd: Date;

//   constructor(
//     public code: string,
//     public name: string,
//     public status: 'Active' | 'Closed' | 'Dormat',
//     public workersById: string[],
//     public dateStart: Date,
//     public dateEnd: Date) {}
// }

export enum projectStatus {
  active = 'Active',
  closed = 'Closed',
  dormant = 'Dormant'
}

// export type projectStatus = 'Active' | 'Closed' | 'Dormant';

// export type projectDepartments = 'Production' | 'Administartion' | 'Engineer' | 'Nowhere';
export enum projectDepartments {
   fs = 'FS',
   mv = 'MV',
   mil = 'MIL',
   other = 'Other'
}

// export type projectStatus = {
//   active: 'Active',
//   closed: 'Closed',
//   dormant: 'Dormant'
// }

export interface Project {
  code: string,
  name: string,
  status: projectStatus,
  // projectStatus: 'Active' | 'Closed' | 'Dormant';
  // status: {
  //   active = 'Active',
  //   closed = 'Closed'
  // },
  workersById: string[],
  department: projectDepartments,
  dateStart: Date,
  dateEnd: Date,
  notes?: string[]
}
