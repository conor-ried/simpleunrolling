import React from "react";
import unroll from "./unroll"; // Import the unroll function

class App extends React.Component {
  state = {
    square: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ],
    unrolled: []
  };

  componentDidMount() {
    const { square } = this.state;
    const unrolled = unroll(square); // Use the unroll function to get the unrolled values
    this.setState({ unrolled });
  }

  render() {
    const { square, unrolled } = this.state;

    return (
      <div className="App">
        <h1>Square</h1>
        <table>
          <tbody>
            {square.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <h1>Unrolled Values</h1>
        <ul>
          {unrolled.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;