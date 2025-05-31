import { useState } from 'react';
import './styles.css';

function App() {
    // 1. Pass in a new color of your choosing in place of the old one.
    //   Hint: we don’t care what the previous color was.
    const [color, setColor] = useState('pink');

    const setNewColor = () => {
        const newColor = 'blue';
        setColor(newColor);
        console.log(newColor); // Expected: "blue"
    };

    // 2. Toggle between the colors pink and blue. If the current color is pink, we want to set it to blue. If it’s currently blue, set it back to pink.
    const [toggleColor, setToggleColor] = useState('pink');

    const toggleColors = () => {
        const newColor = toggleColor === 'pink' ? 'blue' : 'pink';
        setToggleColor(newColor);
        console.log(newColor); // Expected: Alternates between "pink" and "blue"
    };

    // 3. Add a new person object to the people array in state. You can hard-code a new object, but it must be a person object with firstName and lastName properties. The final array should contain two person objects.
    const [people, setPeople] = useState([
        {
            firstName: 'John',
            lastName: 'Smith'
        }
    ]);

    const addPerson = () => {
        const newPerson = { firstName: 'Jane', lastName: 'Doe' };
        setPeople((prev) => [...prev, newPerson]);
        console.log([...people, newPerson]); // Expected: [{ firstName: "John", lastName: "Smith" }, { firstName: "Jane", lastName: "Doe" }]
    };

    // 4. Update the following state so the value is multiplied by 2.
    const [number, setNumber] = useState(4);

    const multiplyNumber = () => {
        setNumber((prev) => {
            const newNumber = prev * 2;
            console.log(newNumber); // Expected: 8
            return newNumber;
        });
    };

    // 5. Add an age property to the existing person state object and set its value to 30, ensuring that the other properties are not overwritten.
    const [person, setPerson] = useState({
        firstName: 'John',
        lastName: 'Smith'
    });

    const addAge = () => {
        setPerson((prev) => {
            const updatedPerson = { ...prev, age: 30 };
            console.log(updatedPerson); // Expected: { firstName: "John", lastName: "Smith", age: 30 }
            return updatedPerson;
        });
    };

    // 6. Fix the following state update so that it correctly adds a new color to the colors array.
    const [colors, setColors] = useState(['pink', 'blue']);

    const addColor = () => {
        setColors((prev) => {
            const updatedColors = [...prev, 'green'];
            console.log(updatedColors); // Expected: ["pink", "blue", "green"]
            return updatedColors;
        });
    };

    return (
        <div className="app">
            <h1>useState Practice</h1>
            <p>
                This app uses{' '}
                <code class="language-javascript">
                    <span class="token-keyword">useState</span>
                </code>{' '}
                to manage various state updates. Check the console for outputs.
            </p>
            <div className="container">
                <div className="controls">
                    <button onClick={setNewColor}>Set Color to Blue</button>
                    <button onClick={toggleColors}>
                        Toggle Color (Pink/Blue)
                    </button>
                    <button onClick={addPerson}>Add Person</button>
                    <button onClick={multiplyNumber}>
                        Multiply Number by 2
                    </button>
                    <button onClick={addAge}>Add Age to Person</button>
                    <button onClick={addColor}>Add Green to Colors</button>
                </div>
                <div className="output">
                    <div className="output-section">
                        <p className="output-item">
                            <strong>Color:</strong> {color}
                        </p>
                    </div>
                    <div className="output-section">
                        <p className="output-item">
                            <strong>Toggle Color:</strong> {toggleColor}
                        </p>
                    </div>
                    <div className="output-section">
                        <p className="output-item">
                            <strong>People:</strong> {JSON.stringify(people)}
                        </p>
                    </div>
                    <div className="output-section">
                        <p className="output-item">
                            <strong>Number:</strong> {number}
                        </p>
                    </div>
                    <div className="output-section">
                        <p className="output-item">
                            <strong>Person:</strong> {JSON.stringify(person)}
                        </p>
                    </div>
                    <div className="output-section">
                        <p className="output-item">
                            <strong>Colors:</strong> {JSON.stringify(colors)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
