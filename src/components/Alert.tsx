import { ReactNode } from "react";

interface PropAlert {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: PropAlert) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        onClick={onClose}
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
