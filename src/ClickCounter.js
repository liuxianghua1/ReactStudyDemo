import React, { Component } from 'react';
class ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        // this.onClickButton = this.onClickButton.bind(this);
        this.state = { count: 0, demo: 0 };
    }

    render() {
        const demo = {
            color: 'red'
        }
        // css在render中设定 然后在想要的标签 设置成 style={你的属性}
        return (
            <div>
                <button onClick={this.onClickButton}>Click Me</button>
                <h1 style={demo}>Count: {this.state.count}</h1>
            </div>
        );
    }

    onClickButton() {
        // alert('1')
        // localStorage.count
        // if (this.state.count === 0) {
        //     this.setState({ count: this.state.count + localStorage.count })
        // }
        // localStorage.setItem('count', this.state.count + 1);
        this.setState({ count: this.state.count + 1 });
        // this.setState({ demo: this.state.demo - 1 });
        // this.setState({count: this.state.count + 1});
    }
}

export default ClickCounter;