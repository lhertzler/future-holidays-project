import React, { Component } from "react";

class ExampleComponent extends Component {
    constructor() {
        super();
    }

    render() {
        const { shopname } = this.props;
        const { description } = this.props;
        return (
            <div className="vue-mini-cart">
                Store name is: {shopname} and {description}
            </div>
        );
    }
}
export default ExampleComponent;
