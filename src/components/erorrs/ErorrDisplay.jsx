const ErorrDisplay = ({ error }) => (
  <div className="text-red-500 text-center">
    <p>Something went wrong:</p>
    <p>{error}</p>
  </div>
);

export default ErorrDisplay;
