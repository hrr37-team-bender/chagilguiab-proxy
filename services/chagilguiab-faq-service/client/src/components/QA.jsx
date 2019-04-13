import React from 'react';
import styles from '../css-modules/QA.css';

class QA extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listOpen: false
    }

    this.setState= this.setState.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }
  toggleList () {
    this.setState({listOpen: !this.state.listOpen});
  }

  render () {
    return (
      <div className="qa-div">
      <tr className="qa-panel" onClick={() => this.toggleList()}>
        <span className="question">{this.props.question}</span>
      </tr>
        {this.state.listOpen
        ? <span className="answer"><br />{this.props.answer}</span>
        : null
      }
      </div>
    )
  }
}

export default QA;