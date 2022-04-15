import { useEffect, useMemo, useRef, useState } from "react";
import ContentEditable from "react-contenteditable";

import { DeleteButton } from "../Buttons";
import { EditButton } from "../Buttons";
import { ShareButton } from "../Buttons/ShareButton";

import { frames } from "./helpers";
import { PostItProps } from "./interfaces";
import { PostItContainer } from "./styles";

export const PostIt = (props: PostItProps) => {
  const { content, id, isNew } = props;
  const [isEditing, setIsEditing] = useState<boolean>(Boolean(isNew));
  const ref = useRef<HTMLInputElement>(null);

  const frame = useMemo(
    () => frames[Math.floor(Math.random() * frames.length)],
    []
  );

  useEffect(() => {
    if (isEditing) {
      ref.current?.focus();
      // ref.current?.select();
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
        onBlur={() => setIsEditing(false)}
        tagName="p"
        className="content"
      />

      <div className="controls">
        <DeleteButton id={id} />
        <EditButton id={id} setIsEditing={setIsEditing} isEditing={isEditing} />
        <ShareButton id={id} />
      </div>
    </PostItContainer>
  );
};
