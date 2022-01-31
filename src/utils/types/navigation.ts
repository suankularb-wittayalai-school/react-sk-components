export type NavItem = {
  name: string;
  icon: {
    inactive: JSX.Element;
    active: JSX.Element;
  };
  url: string;
};
