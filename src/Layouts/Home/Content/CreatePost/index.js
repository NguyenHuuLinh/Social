import React from 'react';
// import ModalCreatePost from '../../../../Components/ModalCreatePost';

class CreatePost extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            
        }
    }

    showModalCreatePost = () =>{
        this.props.onClickCreatePost();
    }

    render() {
        return (
            <div className="bg-gray-100 h-8 w-4/5 text-center text-black ml-12 mt-4" style={{ "borderRadius": "16px" }}>
                <i className="inline-block ion-edit not-italic">
                    <p className = "inline-block ml-2 mt-1" onClick = {this.showModalCreatePost}>
                        CreatePost
                    </p>
                </i>
            </div>
        )
    }
}

export default CreatePost