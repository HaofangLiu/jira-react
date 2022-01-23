export interface User {
  id: number;
  name: string;
}

export interface List {
  id: number;
  name: string;
  personId: number;
  organization: string;
}

export interface paramsInterface {
  name: string;
  personId: string;
}
