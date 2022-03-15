export type FAB = FABNormal | FABExtended;

export type FABNormal = {
  type: "normal" | "small" | "large";
  icon: string | JSX.Element;
};

export type FABExtended = {
  type: "extended";
  icon?: string | JSX.Element;
  label: string | JSX.Element;
};
