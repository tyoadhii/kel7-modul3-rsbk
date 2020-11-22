import React, { Component } from "react";
class Child2 extends Component {
    state = {
        angka: 0
    }
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    tambahAngka = () => {
        this.setState((state) => { return { angka: state.angka + 1 } })
    }
    kurangiAngka = () => {
        this.setState((state) => { return { angka: state.angka - 1 } })
    }
    componentWillUnmount() {
        alert('child 2 will be gone :(')
    }
    render() {
        return (
            <div>
                <h4>Ayo bermain</h4>
                <button onClick={this.tambahAngka}>Tambah kuy!</button>
                <button onClick={this.kurangiAngka}>Kurangin kuy!</button>
                <br />
                <p>{this.state.angka}</p>
            </div>
        );
    }
}
export default Child2;