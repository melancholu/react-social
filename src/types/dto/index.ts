export type User = {
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

export type Pagination<T> = {
  data: T[];
  meta: Meta;
};

export type Meta = {
  cur_page: number;
  next_page: number;
  page_num: number;
};
export type Feed = {
  uuid: string;
  user: User;
  created: Date;
  content: string;
};
