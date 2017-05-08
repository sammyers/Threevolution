import React, { Component } from 'react';

class Trait extends Component {
    render() {
        const { name, level } = this.props;

        return (
            <div className="trait">{`${name}: level ${level}`}</div>
        );
    }
}

export default class Traits extends Component {
    render() {
        return (
            <div className="traits">
                <div className="traits-heading">Traits:</div>
                {Object.entries(this.props.list).map(([name, level], i) =>
                    <Trait key={i} name={name} level={level}/>
                )}
            </div>
        );
    }
}
