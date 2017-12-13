import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import Page from './Page/Page';

import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Page />
            </Provider>
        );
    }
}

export default App;