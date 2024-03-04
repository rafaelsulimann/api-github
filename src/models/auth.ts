export type LoginDTO = {
  username: string;
  password: string;
};

export type RoleEnum = "ROLE_ADMIN" | "ROLE_CLIENT";

export type AccessPayloadTokenDTO = {
  exp: number;
  user_name: string;
  authorities: RoleEnum[];
};
