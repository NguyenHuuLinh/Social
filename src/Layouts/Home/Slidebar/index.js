import React from 'react';

class Slidebar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="inline-block bg-gray-100 w-64 h-64 ml-16 my-4 shadow-md" style={{ "borderRadius": "16px" }}>
                    <p className="text-left ml-8 pt-4 font-black">Friends</p>
                    <div className="bg-gray-300 w-48 h-1 ml-8 mt-2"></div>
                    <div className="bg-gray-300 h-12 w-12 ml-8 mt-4" style={{ "borderRadius": "32px" }}>
                        <div className="ml-16"> @name</div>
                        <div className="ml-16 ">Name</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Slidebar