import { RecordModel } from "pocketbase";

export type User = RecordModel & {
  avatar: string;
  email: string;
  emailVisibility: boolean;
  name: string;
  username: string;
  verified: boolean;
};
