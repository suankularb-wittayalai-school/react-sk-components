// Modules
import { useEffect, useState } from "react";

// Types
import { SKComponent } from "../../utils/types";

type DialogListItem = {
  name: string;
  label: string | JSX.Element;
  meta?: string | JSX.Element;
  image?: JSX.Element;
  monogramLetter?: string;
  monogramDefault?: boolean;
};

interface DialogListProps extends SKComponent {
  content: Array<DialogListItem>;
  onChange?: Function;
}

const DialogList = ({
  content,
  onChange,
  className,
  style,
}: DialogListProps): JSX.Element => {
  const [contentStates, setContentStates] = useState<
    Array<{ name: DialogListItem["name"]; checked: boolean }>
  >(content.map((listItem) => ({ name: listItem.name, checked: false })));

  useEffect(
    () =>
      onChange &&
      onChange(
        contentStates
          .filter((contentState) => contentState.checked)
          .map((contentState) => contentState.name)
      ),
    [contentStates]
  );

  return (
    <ul className={`dialog__list ${className}`} style={style}>
      {content.map((listItem) => (
        <li key={listItem.name} className="dialog__list__item">
          <div className="dialog__list__item__section">
            {listItem.image ? (
              // Use supplied image element inside monogram
              <div className="monogram">{listItem.image}</div>
            ) : listItem.monogramLetter ? (
              // Use supplied monogram letter
              <div className="monogram">{listItem.monogramLetter}</div>
            ) : (
              listItem.monogramDefault &&
              // Check if label is a string; cannot get first letter of JSX Element
              typeof listItem.label == "string" && (
                <div className="monogram">
                  {listItem.label[0].toUpperCase()}
                </div>
              )
            )}
            <label htmlFor={listItem.name}>{listItem.label}</label>
          </div>
          <div className="dialog__list__item__section">
            {listItem.meta && <span>{listItem.meta}</span>}
            <input
              type="checkbox"
              name={listItem.name}
              id={listItem.name}
              onChange={() => {
                setContentStates(
                  contentStates.map((contentState) =>
                    listItem.name == contentState.name
                      ? { ...contentState, checked: !contentState.checked }
                      : contentState
                  )
                );
              }}
              checked={
                contentStates.find(
                  (contentState) => listItem.name == contentState.name
                )?.checked
              }
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DialogList;
