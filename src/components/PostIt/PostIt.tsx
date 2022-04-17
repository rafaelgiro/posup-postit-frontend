import { useContext, useEffect, useMemo, useRef, useState } from "react";
import ContentEditable from "react-contenteditable";

import { DeleteButton, EditButton, ShareButton } from "../Buttons";

import { NotesContext } from "../../contexts/NotesContext";
import { api } from "../../utils/api";
import { frames } from "./helpers";
import { PostItProps } from "./interfaces";
import { PostItContainer, PostItControls } from "./styles";

export const PostIt = (props: PostItProps) => {
  const { content, _id, isNew } = props;
  const [isEditing, setIsEditing] = useState<boolean>(Boolean(isNew));
  const { setNotes } = useContext(NotesContext);
  const ref = useRef<HTMLInputElement>(null);
  const frame = useMemo(
    () => frames[Math.floor(Math.random() * frames.length)],
    []
  );

  async function handleBlur() {
    if (ref.current?.innerText) {
      try {
        const res = await api.put(`/postits/${_id}`, {
          content: ref.current?.innerText,
        });
        setNotes((currNotes) => {
          const newNotes = [...currNotes];
          const index = newNotes.findIndex((n) => n._id === _id);
          newNotes[index] = res.data;
          return newNotes;
        });
        setIsEditing(false);
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    if (isEditing) {
      ref.current?.focus();
    }
  }, [isEditing]);

  return (
    <PostItContainer isEditing={isEditing}>
      <svg
        viewBox="0 0 508 509"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="frame"
      >
        <path d={frame} stroke="black" strokeWidth="4" strokeLinecap="round" />
      </svg>

      <ContentEditable
        innerRef={ref}
        html={content}
        disabled={!isEditing}
        onChange={() => console.log("alo)")}
        onBlur={handleBlur}
        tagName="p"
        className="content"
      />

      <PostItControls className="controls" isEditing={isEditing}>
        <DeleteButton id={_id} />
        <EditButton
          id={_id}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
        />
        <ShareButton id={_id} />
      </PostItControls>
    </PostItContainer>
  );
};
