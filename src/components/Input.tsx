type InputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const Input = ({ handleChange, value }: InputProps) => {
  return <input type="text" onChange={handleChange} value={value} />;
};

export default Input
