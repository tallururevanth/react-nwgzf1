import React from 'react';

class SingleInput extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'hareesh',
      friends: ['raju', 'omkar'],
    };
  }
  render() {
    return (
      <div>
        sdfs
        <button
          onClick={() => {
            this.setState({
              friends: [...this.state.friends, this.state.name],
            });
          }}
        >
          add
        </button>
        <ul>
          {this.state.friends.map(function (fr, i) {
            return <li>{fr}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default SingleInput;
