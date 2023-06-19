export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  url: string;
}

export interface IFavorite {
  id: number;
  posts: IPost[];
}
