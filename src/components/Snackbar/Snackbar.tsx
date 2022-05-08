// Components
import Button from "../Button";

export interface SnackbarProps {
  text: string;
  action?: {
    text: string;
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
  <div className="snackbar" role="status"></div>
);

export default Snackbar;
