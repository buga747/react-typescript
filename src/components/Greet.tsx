type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = ({ name, messageCount = 0, isLoggedIn }: GreetProps) => {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Hi ${name}, you have ${messageCount} unread messages`
          : 'Welcome guest'}
      </h2>
    </div>
  );
};

export default Greet;
