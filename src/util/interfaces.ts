export interface Card {
  name?: string;
  number?: string;
  date?: string;
  checked?: boolean;
  toggle?: () => void;
}

type BaseInput = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputExtended = {
  icon?: JSX.Element;
  gray?: boolean;
};

export type InputProps = BaseInput & InputExtended;
