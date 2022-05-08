// Modules
import { useEffect } from "react";

// Components
import Button from "../Button";

export interface SnackbarProps {
  text: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  show: boolean;
  onClose: () => void;
  isStacked?: boolean;
  isAboveFAB?: boolean;
}

/**
 * Snackbar conveys low priority information
 */
const Snackbar = ({
  text,
  action,
  show,
  onClose,
  isStacked,
  isAboveFAB,
}: SnackbarProps): JSX.Element => {
  // Hide Snackbar after 6 seconds
  // (Material Guidelines recommends 6-10 seconds)
  useEffect(() => {
    if (show) setTimeout(onClose, 6000);
  }, [show]);

  return (
    <div
      className={[
        "snackbar--no-transition",
        isStacked && "snackbar--stacked",
        isAboveFAB && "snackbar--above-fab",
      ]
        .filter((className) => className)
        .join(" ")}
      role="status"
    >
      <p className="snackbar__label">{text}</p>
      {action && (
        <Button
          label={action.label}
          type="text"
          onClick={() => {
            action.onClick();
            onClose();
          }}
          className="snackbar__action"
        />
      )}
    </div>
  );
};

export default Snackbar;
