import { Dispatch, SetStateAction } from "react";

export interface ButtonProps {
  id: string;
}

export interface EditButtonProps extends ButtonProps {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  isEditing: boolean;
}
