import { useContext, useEffect } from "react";

import { PostIt } from "../PostIt";
import { AddPostIt } from "../AddPostIt";

import { NotesContext } from "../../contexts/NotesContext";
import { api } from "../../utils/api";

import { BoardContainer } from "./styles";

export const Board = () => {
  const { notes, setNotes } = useContext(NotesContext);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await api.get("/postits");
        setNotes(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchNotes();
  }, [setNotes]);

  return (
    <BoardContainer>
      {notes.map((n) => n.content && <PostIt key={n._id} {...n} />)}
      <AddPostIt />
    </BoardContainer>
  );
};
