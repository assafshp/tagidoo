export type Vote = {
  voterName: string;
  vote: number;
  comment:string;
}
export interface ItemType  {
  [`item-id`]: string;
  [`image-url`]: string;
  name: string;
  price: string;
  votes: Vote[]
  selected: boolean;
}
