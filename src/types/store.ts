export type Action = {
  type: string;
  payload?: any;
};

export type ActionCreator = (params: any) => Action;
