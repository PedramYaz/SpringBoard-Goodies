const App = () => {
  return (
    <div>
      <Person
        name="Homer"
        age={38}
        hobbies={["bowling", "working out", "drinking kombucha"]}
      />
      <Person name="Marge" age={34} hobbies={["painting", "gambling"]} />
      <Person
        name="Bart"
        age={10}
        hobbies={["skateboarding", "making prank calls"]}
      />
      <Person
        name="Lisa"
        age={8}
        hobbies={["reading", "saxophone", "eating vegetables"]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
