import { Component } from 'react';
import './styles.css';

type ButtonProps = {
  value: string;
  onClick: () => void;
};

export class Button extends Component<ButtonProps> {
  render() {
    return (
      <button className="button" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

export class ErrorButton extends Component {
  state = {
    error: false,
  };
  render() {
    return (
      <>
        <button
          className="button"
          onClick={() => {
            this.setState({ error: true });
          }}
        >
          Throw Error
        </button>
        {this.state.error && <ButtonComponent />}
      </>
    );
  }
}

class ButtonComponent extends Component {
  render() {
    throw Error('error!');
    return <></>;
  }
}
