const Tweet = ({ username, name, date, message }) => {
  return (
    <div>
      <h2>{username}</h2>
      <h4>{name}</h4>
      <p>{date}</p>
      <p> {message}</p>
    </div>
  );
};
