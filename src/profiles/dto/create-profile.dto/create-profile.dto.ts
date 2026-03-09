import { UserRole } from "../../enums/roles/roles";

export class CreateProfileDto {
  F_Name!: string;
  L_Name!: string;
  role!: UserRole ;
}