import React from 'react'

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoad: false,
            dataPost: {}
        }
    }

    componentDidMount() {
        fetch("https://nguyenhuulinh.github.io/listPost.json")
            .then(res => res.json())
            .then(result => {
                console.log("render 2");
                this.setState({
                    isLoad: true,
                    dataPost: result.resource_response.data
                }, () => {
                    console.log(this.state.dataPost)
                })
            })
    }

    render() {
        const {
            isLoad,
            dataPost
        } = this.state

        if (!isLoad) {
            return (
                <div>Loading...</div>
            )
        } else {
            return (
                <div className="flex flex-wrap">
                    {dataPost && dataPost.map((item, index) => {
                        return (
                            <div key={index} className="my-8 w-2/4 px-4 pt-1">
                                <div className="bg-gray-100 p-3 rounded-lg">
                                    <div className="bg-gray-900 w-8 ml-4 mt-2 mb-2 rounded-full">
                                        <div className="ml-16 text-gray-900">{item.domain}</div>
                                        <div className="ml-16 text-gray-600 text-xs">{item.status}</div>
                                    </div>
                                    <p className="text-gray-700 float-left ml-4">
                                        {item.caption}
                                    </p>
                                    <img className="w-full h-64 px-4 py-4" style={{ "borderRadius": "16px" }} src={item.images.orig.url} alt="" />
                                    <div className="flex mb-4">
                                        <div className="ion-android-favorite-outline w-1/2 h-12 text-black"><p className="ml-2 inline-block">{index}</p></div>
                                        <div className="ion-ios-chatbubble-outline w-1/2 h-12 text-black"><p className="ml-2 inline-block">{index + 1}</p></div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                    }
                </div>
            )
        }
    }
}

export default Post;