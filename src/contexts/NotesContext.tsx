import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { PostItNote } from "../components/PostIt/interfaces";

export const NotesContext = createContext<{
  notes: PostItNote[];
  setNotes: Dispatch<SetStateAction<PostItNote[]>>;
}>({ notes: [], setNotes: () => [] });

export const NotesProvider = (props: { children: ReactNode }) => {
  const [notes, setNotes] = useState<PostItNote[]>([]);
  return <NotesContext.Provider value={{ notes, setNotes }} {...props} />;
};
