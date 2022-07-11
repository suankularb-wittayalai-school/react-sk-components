import { AnimatePresence } from "framer-motion";

// Components
import Noticebar from "./Noticebar";
import MaterialIcon from "../Icon";

// Types
import { LinkElement, SKComponent } from "../../utils/types";
import { NoticebarProps } from "./Noticebar";

export interface NoticebarManagerProps extends SKComponent {
  id: string;
  noticebars: Omit<NoticebarProps, "LinkElement">[];
  LinkElement?: LinkElement;
}

const NoticebarManager = ({
  noticebars,
  className,
  style,
}: NoticebarManagerProps): JSX.Element => (
  <AnimatePresence initial={false}>
    {noticebars.map((noticebar) => (
      <Noticebar
        key={noticebar.id}
        id={noticebar.id}
        type={noticebar.type}
        icon={
          noticebar.icon ||
          (noticebar.type == "notice" ? (
            <MaterialIcon icon="warning" />
          ) : noticebar.type == "warning" ? (
            <MaterialIcon icon="error" />
          ) : (
            <MaterialIcon icon="info" />
          ))
        }
        message={noticebar.message}
        actions={noticebar.actions}
        className={noticebar.className || className}
        style={noticebar.style || style}
      />
    ))}
  </AnimatePresence>
);

export default NoticebarManager;
