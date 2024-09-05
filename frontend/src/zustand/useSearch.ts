import { create } from "zustand";

interface UseSearchProps {
  search: string;
  setSearch: (vl: string) => void;
}

const useSearch = create<UseSearchProps>((set) => ({
  search: '',
  setSearch: (search) => set({ search })
}));

export default useSearch;