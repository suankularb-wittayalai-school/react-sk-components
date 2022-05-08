// Modules
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

// Components
import Button from "../Button";

// Utils
import { animationTransition } from "../../utils/animations/config";

export interface SnackbarProps {
  id: string;
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
 * @param id Unique ID for this Snackbar
 * @param text Text on Snackbar
 * @param action Action to the right/bottom on Snackbar
 * @param show Whether Snackbar is visible
 * @param onClose A function to hide Snackbar
 * @param isStacked For a longer action; moves Button to a new line
 * @param isAboveFAB Moves Snackbar up to be above a regular FAB
 */
const Snackbar = ({
  id,
  text,
  action,
  show,
  onClose,
  isStacked,
  isAboveFAB,
}: SnackbarProps): JSX.Element => {
  // Hide Snackbar after 6 seconds
  // (Material Guidelines recommends 4-10 seconds)
  useEffect(() => {
    if (show) setTimeout(onClose, 6000);
  }, [show]);

  return (
    <aside>
      <AnimatePresence>
        {show && (
          <motion.div
            className={[
              isStacked && "snackbar--stacked",
              isAboveFAB && "snackbar--above-fab",
              "snackbar--no-transition show",
            ]
              .filter((className) => className)
              .join(" ")}
            role="status"
            key={id}
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 12 }}
            transition={animationTransition}
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
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};

export default Snackbar;
