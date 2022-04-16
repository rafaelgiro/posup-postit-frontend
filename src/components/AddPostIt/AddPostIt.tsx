import { useContext } from "react";
import { NotesContext } from "../../contexts/NotesContext";
import { defaultNote } from "./helpers";
import { AddPostItButton } from "./styles";

export const AddPostIt = () => {
  const { setNotes } = useContext(NotesContext);

  return (
    <AddPostItButton onClick={() => setNotes((curr) => [...curr, defaultNote])}>
      <svg viewBox="0 0 510 511" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.19982 500.88C-3.00018 328.78 7.43982 160.5 4.37982 7.54003M8.61982 9.02003C123.78 1.84003 244.92 -0.17997 494.88 11.68L8.61982 9.02003ZM507.04 7.16003C503.54 139.16 492.7 266.66 496.86 505.34L507.04 7.16003ZM500.68 499.96C367.86 504.12 239 510.9 1.31982 506.1L500.68 499.96Z"
          stroke="black"
          strokeOpacity="0.2"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="16 20"
        />
        <path
          d="M239.432 234.505V217.63H242.295V234.505H239.432ZM232.426 227.499V224.636H249.301V227.499H232.426Z"
          fill="black"
          fillOpacity="0.2"
        />
      </svg>
    </AddPostItButton>
  );
};
