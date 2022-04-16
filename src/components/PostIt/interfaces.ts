export interface PostItNote {
  _id: string;
  content: string;
}

export interface PostItProps extends PostItNote {
  isNew?: boolean;
}
