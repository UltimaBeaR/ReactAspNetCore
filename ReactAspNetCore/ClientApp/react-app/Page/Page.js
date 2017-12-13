// global css rules (everything like *.global.scss or *.global.css is treated as global stylesheet. See webpack config)
import './Page.global.scss';
// local css rules for current component (any other scss or css file is considered as local, css modules are used in this case)
import classes from './Page.scss';

import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Page extends Component {
    render() {
        let { words } = this.props.store;

        let secondWordElement;

        if (words.length > 0)
            secondWordElement = <span className={ classes['colored-text'] }>{words[0]}</span>;
        else
            secondWordElement = <button onClick={() => { words.push('World'); }}>Press me!</button>;

        return (
            <div>
                <span className="colored-text">Hello</span> {secondWordElement}!
            </div>
        );
    }
}

export default Page;