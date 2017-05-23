import React, { Component, PropTypes } from 'react';
import EventSection from '../components/EventSection';
import style from './App.css';

export default class App extends Component {

  static propTypes = {
    artist: PropTypes.string.isRequired
  };

  render() {
    const { artist } = this.props;

    return (
      <div className={style.normal}>
        <EventSection artist={artist} />
      </div>
    );
  }
}
