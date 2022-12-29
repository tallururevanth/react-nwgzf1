import React from 'react';

class Singleip extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ['Revanth', 'Subbu', 'sai'],
      friends: ['Uday', 'Eswar', 'karthik'],
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              friends: [...this.state.friends, ...this.state.name],
            });
          }}
        >
          display
        </button>
        <table border="1px">
          <tr>
            {this.state.friends.map(function (fr, i) {
              return <td>{fr}</td>;
            })}
          </tr>
        </table>
        <ul>
          {this.state.friends.map(function (tg, i) {
            return <li>{tg}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Singleip;
