import backgroundImage from "../assets/images/Background.png";

const Background = ({ children }) => {
  return (
    <div
      className="mt-10 w-full h-30 bg-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {children}
    </div>
  );
};

export default Background;
