import * as React from 'react';
import Comment from './Comment'

interface IProps {
    comments: any
    onDeleteComment: any
}

class CommentList extends React.Component<IProps, any> {
    static defaultProps = {
        comments: []
    }

    constructor(props: IProps) {
        super(props)
    }

    handleDeleteComment(index: any) {
        if(this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }

    render() {
        console.log(this.props.comments)
        return ( 
            <div>
                {this.props.comments.map((comment: any,index: any) => 
                    <Comment 
                        comment={comment} 
                        key={index} 
                        index={index} 
                        onDeleteComment={this.handleDeleteComment.bind(this)}/>
                    // <div key={index}>{comment && comment.username}:{comment && comment.content} </div>
                )}
            </div>
        )
        
    }
}

export default CommentList