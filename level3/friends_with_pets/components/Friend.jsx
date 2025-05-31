import Pet from "./Pet";

export default function Friend({ name, age, pets }) {
  return (
    <div className="friendBox">
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <h2>Pets:</h2>
      <div className="listBox">
        <ul>
            {pets.map((pet, index) => (
            <Pet key={index} {...pet} />
            ))}
        </ul>
      </div>
    </div>
  );
}