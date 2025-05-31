## Assignment: Practice Updating State in React

### Objective
The goal of this assignment is to practice updating state in React. This is a fundamental skill for managing and manipulating data within your components. By completing this exercise, you will gain confidence in using the `useState` hook to handle various state updates.

### Instructions

1. **Clone the Repository:**
   - Start by cloning the repository that contains the starter code.
   ```bash
   git clone https://github.com/VSchool/useState-practice.git
   ```

2. **Remove the .git Directory:**
   - Navigate into the cloned repository and remove the `.git` directory to detach from the original repository.
   ```bash
   cd useState-practice
   rm -rf .git
   ```

3. **Install Dependencies:**
   - Install the necessary dependencies for the project.
   ```bash
   npm install
   ```

4. **Implement the Following State Updates:**

   1. **Set a New Color:**
      - Pass in a new color of your choosing in place of the old one. We don’t care what the previous color was.
      - **Expected Output:** The console should log the new color you chose, e.g., "blue".

   2. **Toggle Between Two Colors:**
      - Toggle between the colors pink and blue. If the current color is pink, set it to blue. If it's currently blue, set it back to pink.
      - **Expected Output:** The console should alternate between logging "pink" and "blue" on subsequent state updates.

   3. **Add a New Person to the Array:**
      - Add a new person object to the `people` array in state. You can hard-code a new object, but it must be a person object with `firstName` and `lastName` properties. The final array should contain two person objects.
      - **Expected Output:** The console should log an array containing two objects, e.g., `[ { firstName: "John", lastName: "Smith" }, { firstName: "Jane", lastName: "Doe" } ]`.

   4. **Multiply the Number by 2:**
      - Update the state so the value is multiplied by 2.
      - **Expected Output:** The console should log `8` (if the initial state is `4`).

   5. **Add a New Property to an Object:**
      - Add an `age` property to the existing `person` state object and set its value to `30`, ensuring that the other properties are not overwritten.
      - **Expected Output:** The console should log an object containing the original properties plus the new `age` property, e.g., `{ firstName: "John", lastName: "Smith", age: 30 }`.

   6. **Fix an Incorrect State Update:**
      - Fix the following state update so that it correctly adds a new color to the `colors` array:
      ```javascript
      const [colors, setColors] = useState(["pink", "blue"])

      setColors("green") // Fix this state update
      ```
      - **Expected Output:** The console should log an array containing the original colors plus the new color, e.g., `[ "pink", "blue", "green" ]`.

5. **Verify Your Work:**
   - To verify that your state updates are correct, check the console output in your browser. The assignment is considered correct when the `console.log` statements in the code display the expected data based on your state updates.

### Reason for Practice
Understanding how to update state is crucial for building interactive and dynamic React applications. This exercise covers a variety of common state management scenarios, including:
- Setting state with new values.
- Toggling state between two values.
- Adding items to arrays.
- Multiplying numerical state values.
- Updating objects without overwriting existing properties.
- Correctly updating state arrays.

By completing this assignment, you will strengthen your ability to manage state in React, which is essential for developing robust applications.