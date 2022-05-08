// Components
import Button from "../Button";

export interface SnackbarProps {
  text: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  isStacked?: boolean;
  isAboveFAB?: boolean;
}

/**
 * Snackbar conveys low priority information
 */
const Snackbar = ({
  text,
  action,
  isStacked,
  isAboveFAB,
}: SnackbarProps): JSX.Element => (
  <div className="snackbar" role="status">
    <p className="snackbar__label">{text}</p>
    {action && (
      <Button
        label={action.label}
        type="text"
        onClick={action.onClick}
        className="snackbar__action"
      />
    )}
  </div>
);

export default Snackbar;
