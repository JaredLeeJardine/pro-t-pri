import React               from 'react';
import ReactDOM            from 'react-dom';
import { Provider }        from 'react-redux'
import { configuredStore } from './js/config'
import { GameContainer }       from './js/containers/GameContainer'

ReactDOM.render(
  (
    <Provider store={configuredStore} >
      <GameContainer />
    </Provider>
  ), document.getElementById('root'));
// registerServiceWorker();
