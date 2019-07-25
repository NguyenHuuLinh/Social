import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className="bg-black w-full fixed">
                <div className="text-gray-200">
                    <i className="ion-android-home inline-block ml-12 my-4">
                        <p className="inline-block ml-2 font-bold not-italic">
                            <Link to="/">Home</Link>
                        </p>
                    </i>
                    <i className="ion-android-search inline-block ml-12 my-4">
                        <p className="inline-block ml-2 font-bold not-italic">
                            <Link to="/Search">Search</Link>
                        </p>
                    </i>
                    <i className="ion-android-person inline-block ml-12 my-4">
                        <p className="inline-block ml-2 font-bold not-italic">
                            <Link to="/Profile">Profile</Link>
                        </p>
                    </i>
                    <p className="float-right inline-block my-4 mr-12">
                        Logout
                    </p>
                </div>
            </div>
        )
    }
}

export default Header;