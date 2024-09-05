export interface UserProps {
  fullname: string;
  profilePick: string;
  username: string;
  _id: string;
}

export interface AuthContextProviderProps {
  authUser: UserProps | null;
  setUserContext: (user: UserProps) => void;
  logoutUser: () => void;
}