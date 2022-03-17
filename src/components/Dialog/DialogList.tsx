import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";

type DialogListItem = {
  name: string;
  label: string | JSX.Element;
  meta?: string | JSX.Element;
};

interface DialogListProps {
  content: Array<DialogListItem>;
  onChange?: Function;
}

const DialogList = ({ content, onChange }: DialogListProps): JSX.Element => {
  const [contentStates, setContentStates] = useState<
    Array<{ name: DialogListItem["name"]; checked: boolean }>
  >(content.map((listItem) => ({ name: listItem.name, checked: false })));

  useEffect(
    () =>
      onChange &&
      onChange(
        contentStates.map((contentState) => {
          if (contentState.checked) return contentState.name;
        })
      ),
    [contentStates]
  );

  return (
    <ul className="dialog__list">
      {content.map((listItem) => (
        <li key={listItem.name} className="dialog__list__item">
          <div className="dialog__list__item__section">
            <label htmlFor={listItem.name}>{listItem.label}</label>
          </div>
          <div className="dialog__list__item__section">
            <span>{listItem.meta}</span>
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
