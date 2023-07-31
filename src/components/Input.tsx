type InputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const Input = ({ handleChange, value }: InputProps) => {
    return (
        <div>
            <input type="text" onChange={handleChange} value={value} />;
      </div>
  )
};

export default Input
