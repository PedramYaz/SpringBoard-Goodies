const Person = ({ name, age, hobbies }) => {
  let vote = age >= 18 ? "Go vote!" : "Go study";
  let hobby = hobbies.map((hobby) => <li>{hobby}</li>);

  return (
    <div>
      <p>Learn about this person:</p>
      <ul>
        <li>Name: {name.slice(0, 6)}</li>
        <li>Age: {age}</li>
        <ul>Hobbies: {hobby}</ul>
      </ul>
      <h3>{vote}</h3>
    </div>
  );
};
