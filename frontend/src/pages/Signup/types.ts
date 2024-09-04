export enum GenderProps {
  MALE = 'male',
  FEMALE = 'female'
};

export interface InputsProps {
  fullname: string;
  username: string;
  password: string;
  confirmPassword: string;
  gender: GenderProps | string;
}