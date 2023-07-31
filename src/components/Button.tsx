
type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  count: number;
};

export const Button = ({ handleClick, count }: ButtonProps) => {
  return <button onClick={event=>handleClick(event, 1)}>{count ? count : 'Click me'}</button>;
};
