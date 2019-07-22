import React from 'react'

class Post extends React.Component {
    render() {
        return (
            <div className="bg-gray-100 mt-8 w-4/5 ml-12 pt-1" style={{ "borderRadius": "8px" }}>
                <div className="bg-gray-900 h-12 w-12 ml-4 mt-2 mb-2" style={{ "borderRadius": "32px" }}>
                    <div className="ml-16 text-gray-900"> @name</div>
                    <div className="ml-16 text-gray-600 text-xs">Online</div>
                </div>
                <p className="text-gray-700 float-left ml-4">
                    This is caption.
                </p>
                <img className="w-full h-64 px-4 py-4" style={{ "borderRadius": "16px" }} src="https://pbs.twimg.com/profile_images/895274026783866881/E1G1nNb0.jpg" alt="Sunset in the mountains" />
                <div className="float-left">
                    <i className="ion-android-favorite-outline text-gray-700 ml-4 not-italic"><p className="ml-2 inline-block">2</p></i>
                    <i className="ion-ios-chatbubble-outline text-gray-700 ml-4 not-italic"><p className="ml-2 inline-block">1</p></i>
                </div>
            </div>
        )
    }
}

export default Post;