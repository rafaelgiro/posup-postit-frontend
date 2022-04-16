import { useContext, useEffect } from "react";

import { PostIt } from "../PostIt";

import { NotesContext } from "../../contexts/NotesContext";
import { initialNotes } from "../../utils/notes";
import { BoardContainer } from "./styles";
import { AddPostIt } from "../AddPostIt";

export const Board = () => {
  const { notes, setNotes } = useContext(NotesContext);

  useEffect(() => {
    setNotes(initialNotes);
  }, [setNotes]);

  return (
    <BoardContainer>
      {notes.map((n) => (
        <PostIt key={n._id} {...n} />
      ))}
      <AddPostIt />
    </BoardContainer>
  );
};
