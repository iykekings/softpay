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
  grayable?: 0 | 1;
  displayicon?: 0 | 1;
};

export type InputProps = BaseInput & InputExtended;
