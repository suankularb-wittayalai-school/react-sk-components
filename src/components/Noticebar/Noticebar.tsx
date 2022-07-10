import { classNames } from "../../utils/helpers/elements";
import { SKComponent } from "../../utils/types";

export interface NoticebarProps extends SKComponent {}

const Noticebar = ({ className, style }: NoticebarProps): JSX.Element => (
  <div className={classNames([className])} style={style}></div>
);

export default Noticebar;
