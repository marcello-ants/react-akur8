export type Post = {
  id: string;
  name: string;
  content: string;
};

export type Event = {
  name: string;
  type: "created" | "removed";
  date: Date;
};
