const App = () => {
  return (
    <div>
      <Tweet
        username="patoosh"
        name="pedram"
        date="Aug. 27"
        message="This is my second component"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
