import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PostItContainer = styled.div<{ isEditing: boolean }>`
  position: relative;
  padding: 1rem;
  width: 16rem;
  height: 16rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    pointer-events: none;
  }

  .content {
    outline: none;
    ${({ isEditing }) =>
      isEditing &&
      css`
        background-color: #f2f2f2;
      `}
  }

  .controls {
    display: flex;
    align-items: center;

    & > * {
      margin-right: 0.5rem;

      &:last-child {
        margin-right: 0;
        margin-left: auto;
      }
    }
  }
`;

export const PostItControls = styled.div<{ isEditing: boolean }>`
  ${({ isEditing }) =>
    isEditing &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
`;
