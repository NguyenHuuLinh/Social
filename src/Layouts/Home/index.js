import React from 'react';
import Slidebar from './Slidebar';
import CreatePost from './Content/CreatePost';
import Post from './Content/Post';
import ModalCreatePost from '../../Components/ModalCreatePost';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowModalCreate: false
        }
    }

    showModalCreate = () => {
        this.setState({
            isShowModalCreate: !this.state.isShowModalCreate
        }, () => {
            console.log(this.state.isShowModalCreate);
        })
    }

    render() {
        return (
            <>
                <div className="flex flex-wrap">
                    <div className="w-full h-full md:w-1/3 bg-gray-300 p-4 text-center text-gray-700 mt-12">
                        <Slidebar />
                    </div>
                    <div className="w-full md:w-2/3 bg-gray-300 p-4 text-center text-gray-200 mt-12">
                        <CreatePost onClickCreatePost={this.showModalCreate}/>
                        {this.state.isShowModalCreate && <ModalCreatePost/>}
                        <Post />
                    </div>
                </div>
            </>
        )
    }
}

export default Home