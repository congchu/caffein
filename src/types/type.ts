export interface ICamp {
  name: string;
  type: string;
  status: string;
  field: string;
  skill: string;
  startDate: string;
  thumbnail: string;
}

export interface ICommunity {
  tags: string[];
  title: string;
  content: string;
  comments: { profile: string; nickname: string; content: string }[];
}
