// children, es otra forma de usar props. children es una palabra reservada
const Error = ({ children }) => {
  return (
    <div className="bg-red-800 text-white text-center uppercase font-bold mb-3 p-3 rounded-md">
      {children}
    </div>
  );
};

export default Error;
