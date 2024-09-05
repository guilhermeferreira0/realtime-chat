import { useContext } from "react";
import { Context } from ".";

export function useSocket() {
  return useContext(Context);
}