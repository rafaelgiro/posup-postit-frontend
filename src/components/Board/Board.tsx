import { BoardProps } from "./interfaces";
import { BoardContainer } from "./styles";

export const Board = (props: BoardProps) => {
  const { children } = props;
  return <BoardContainer>{children}</BoardContainer>;
};
