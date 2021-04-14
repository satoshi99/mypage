import { createContext } from 'react';
import { POST } from '../types/types';

interface SearchContextValue {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  // searchResutls: POST[]
}

export const SearchContext = createContext<SearchContextValue>({
  search: '',
  setSearch: () => undefined,
  // searchResutls: []
});