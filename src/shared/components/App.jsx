import React       from 'react';
import { connect } from 'react-redux';
import { setText } from '../redux/actions';

const mapStateToProps = (state) => {
  return { stuff: state.text }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNewText: (text) => {
      dispatch(setText(text));
    }
  }
}

let App = ({ stuff, setNewText }) => (
  <div id="app">
    <h1>{ stuff }</h1>
    <input type="button"
           value="Set new text"
           onClick={ setNewText(stuff.split(' ').reverse().join(' ')) } />
  </div>
);

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;