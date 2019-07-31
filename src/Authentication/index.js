import React from 'react';
import fire from '../Firebase';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {

        }).catch(error => {
            console.log(error);
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="flex items-center justify-center">
                <div className="w-full max-w-xs pt-24">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input value={this.state.email} onChange={this.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" name="email" placeholder="Enter email" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input value={this.state.password} onChange={this.handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="******************" />
                            <button className="align-baseline font-bold text-xs text-gray-500 hover:text-blue-800 float-right italic underline">
                                Sign Up
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <button onClick={this.login} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Sign In
                            </button>
                            <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 underline">
                                Forgot Password?
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login