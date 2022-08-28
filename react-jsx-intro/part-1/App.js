function App() {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Joe" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
