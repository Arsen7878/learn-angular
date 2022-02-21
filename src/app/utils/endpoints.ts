interface IEndpoints {
  home: string;
  login: string;
  [propName: string]: string;
}

export const endpoints: IEndpoints = {
  home: '',
  login: 'login',
};
