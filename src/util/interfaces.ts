export interface Card {
  name?: string;
  number?: string;
  date?: string;
  checked?: boolean;
}

type BaseInput = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type InputExtended = {
  icon?: JSX.Element;
  iconSize?: string;
}

export type InputProps = BaseInput & InputExtended;