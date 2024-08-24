import PropTypes from "prop-types";

function Card({ username, college, email }) {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-4 text-center w-64 h-64 flex flex-col justify-center">
        <h1 className="text-xl font-bold text-gray-800 mb-1">{username}</h1>
        <h2 className="text-md text-gray-500 mb-2">{college}</h2>
        <p className="text-sm text-gray-600 mb-2">{email}</p>
        <div className="border-t border-gray-300 my-2"></div>
        <div className="flex justify-center space-x-3">
          <a href="#" className="text-gray-600 hover:text-blue-500 text-lg">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-700 text-lg">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 text-lg">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  username: PropTypes.string,
  college: PropTypes.string,
  email: PropTypes.string,
};

Card.defaultProps = {
  username: "Shardendu Mishra",
  college: "IIIT Dharwad",
  email: "shardendumishra@gmail.com",
};

export default Card;
