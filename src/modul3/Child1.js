import React, { Component } from "react";
class Child1 extends Component {
    state = {
        nama: "Setyo"
    }
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    ubahNama = () => {
        this.setState((state) => {
            if (state.nama === "Setyo") {
                return { nama: "Danar" }
            } else {
                return { nama: "Setyo" }
            }
        })
    }

    componentWillUnmount() {
        alert('child 1 will be gone :(')
    }
    render() {
        return (
            <div>
                <h4>PLAYER!</h4>
                <button onClick={this.ubahNama}>Ubah nama!</button>
                <br />
                <h4>{this.state.nama}</h4>
            </div>
        );
    }
}
export default Child1;