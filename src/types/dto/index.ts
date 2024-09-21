export type User = {
  id: number;
  uuid: string;
  name: string;
  email: string;
  password: string;
  imageUrl: string;
  created: Date;
};

export type Token = {
  accessToken: string;
  refreshToken: string;
};
