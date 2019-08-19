import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* Entête de la page */
class Head extends React.Component {
  render() {
    return (
      <h1>Notre première page React !!</h1>
    )}
  }

ReactDOM.render(<Head />, document.getElementById('head'));

/* affichage du logo */
class Logo extends React.Component {
  render() {
    return (
      <img src="http://www.acseo.fr/wp-content/uploads/2016/01/react-logo.png"/>
    )
  }
}

ReactDOM.render(<Logo />, document.getElementById('logo'));

/* affichage d'un lien vers oppen-classroom */

class Link extends React.Component {
  render () {
    return (
      <a href="https://openclassrooms.com/en/courses/4664381-realisez-une-application-web-avec-react-js/4664388-decouvrez-lutilite-et-les-concepts-cles-de-react">
      Vous avez du temps à perdre ?
      </a>
    )
  }
}

ReactDOM.render(<Link />, document.getElementById('link'));

/* affichage du boutton like */
const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Vous aimez React !!';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

/* affichage du boutton like */
const f = React.createElement;

class DislikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Vous méprisez React';
    }

    return f(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Dislike'
    );
  }
}
const domContainerTwo = document.querySelector('#dislike_button_container');
ReactDOM.render(f(DislikeButton), domContainerTwo);
