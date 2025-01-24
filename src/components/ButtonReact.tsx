import { ReactNode } from "react";

interface Button {
  children: ReactNode;
  onClick: () => void;
  color?: string;
}

const ButtonReact = ({ children, onClick, color = "primary" }: Button) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonReact;
