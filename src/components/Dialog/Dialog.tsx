// Modules
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { useHotkeys } from "react-hotkeys-hook";

// Components
import DialogHeader from "./DialogHeader";

// Types
import DialogActions, { DialogAction } from "./DialogActions";
import { SKComponent } from "../../utils/types";

// Utils
import { animationTransition } from "../../utils/animations/config";

export interface DialogProps extends SKComponent {
  // General
  type: "regular" | "large";
  label: string;
  // Header
  title: string | JSX.Element;
  icon?: JSX.Element;
  supportingText?: string | JSX.Element;
  closeIcon?: JSX.Element;
  // Actions
  actions?: [DialogAction] | [DialogAction, DialogAction];
  // State
  show: boolean;
  // Attrs
  noOverlay?: boolean;
  noBlurToClose?: boolean;
  isBlank?: boolean;
  // Callbacks
  onClose: Function;
  onSubmit?: Function;
  // Children
  children?: ReactNode;
}

/**
 * Dialog presents information in need of immediate attention and prompts the user to make crucial decisions
 *
 * ---
 * **General**
 * @param type `"regular" | "large"`
 * @param label The text label for screenreaders
 *
 * ---
 * **Header**
 * @param title The text to show on top of the Dialog, summarises the content
 * @param icon The hero icon on top of title text, will make header centered
 * @param supportingText A paragraph explaining the title in more detail
 * @param closeIcon On mobile, an icon button closes the Dialog; this icon can be customized here
 *
 * ---
 * **Actions**
 * @param actions An array of 1-2 action(s), each includes `name`, `type`, and `isDangerous`
 *
 * ---
 * **State**
 * @param show If Dialog is currently visible
 *
 * ---
 * **Attrs**
 * @param noOverlay Removes the dark scrim in the background when the Dialog is shown
 * @param noBlurToClose The user cannot click outside Dialog to close it
 * @param isBlank Removes all default components
 *
 * ---
 * **Callbacks**
 * @param onClose Triggered when button with type `close` or close button is clicked/tapped
 * @param onSubmit Triggered when button with type `submit` is clicked/tapped
 */
const Dialog = ({
  type,
  label,
  title,
  icon,
  supportingText,
  closeIcon,
  actions,
  show,
  noOverlay,
  noBlurToClose,
  isBlank,
  onClose,
  onSubmit,
  children,
  className,
  style,
}: DialogProps): JSX.Element => {
  useHotkeys("esc", () => onClose());

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="dialog__wrapper--no-transition show"
          key={`${label}-wrapper`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={animationTransition}
        >
          {/* Overlay */}
          {noOverlay || (
            <div
              className="overlay"
              onClick={() => noBlurToClose || onClose()}
            />
          )}
          {/* Dialog */}
          <motion.dialog
            key={label}
            aria-labelledby={label}
            className={`${type == "large" ? "dialog--large" : "dialog"} ${
              className || ""
            }`}
            style={style}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={animationTransition}
          >
            {isBlank ? (
              children
            ) : (
              <>
                <div className="dialog__content">
                  {/* Header */}
                  {title && (
                    <DialogHeader
                      label={label}
                      title={title}
                      icon={icon}
                      supportingText={supportingText}
                      closeIcon={closeIcon}
                      submitName={
                        actions?.find((action) => action.type == "submit")?.name
                      }
                      onClose={() => onClose()}
                      onSubmit={onSubmit ? () => onSubmit() : undefined}
                    />
                  )}

                  {/* Content */}
                  {children}
                </div>

                {/* Actions */}
                {actions && (
                  <DialogActions
                    actions={actions}
                    onClose={() => onClose()}
                    onSubmit={onSubmit ? () => onSubmit() : undefined}
                  />
                )}
              </>
            )}
          </motion.dialog>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dialog;
