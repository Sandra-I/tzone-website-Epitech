import { User } from "./user";

export interface APIResponse {
  message?: string;
}

export interface APIErrorResponse {
  error: {
    message?: string;
  }
}

export interface AuthAPIResponse extends APIResponse {
  token?: string;
}

export interface UserAPIResponse extends APIResponse {
  user?: User;
}
