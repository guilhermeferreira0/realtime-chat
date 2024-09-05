import { UserProps } from "./types";

export function getUserLocalStorage(): null | UserProps {
  const user = localStorage.getItem('chat-user');
  if (!user) return null;

  return JSON.parse(user);
}

export function setUserLocalStorage(user: UserProps) {
  localStorage.setItem('chat-user', JSON.stringify(user));
}

export function removeUserLocalStorage() {
  localStorage.removeItem('chat-user');
}