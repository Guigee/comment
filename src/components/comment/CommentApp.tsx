import * as React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

interface IProps {
    comment?: any
}

interface IState {
    comments: any
}

class CommentApp extends React.Component<IProps,IState>{
    constructor (props: IProps) {
        super(props)
        this.state = {
            comments: []
        }
    }
    
    componentDidMount() {
        this._loadComments()
    }

    //保存评论法方法
    _saveComments(comments: any) {
        localStorage.setItem('comments', JSON.stringify(comments))
    }

    //加载评论方法
    _loadComments() {
        let comments = localStorage.getItem('comments')
        if(comments) {
            comments = JSON.parse(comments)
            this.setState({comments})
        }
    }
    
    //将CommentInput组件传过来的comment{username,content}参数push进入commments
    handleSubmitComment(comment: any) {
        const comments = this.state.comments
        this.state.comments.push(comment)
        this.setState({
            // comments: this.state.comments
            comments
        })
        console.log(comments)
        this._saveComments(comments)
    }

    //将comment组件传过来的下标对应的项删除
    handleDeleteComment(index: any) {
        console.log(index)
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({
            comments
        })
        this._saveComments(comments)
    }

    render() {
        return (
            <div>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList 
                    comments={this.state.comments}
                    onDeleteComment={this.handleDeleteComment.bind(this)}/>
            </div>
        )
    }
}

export default CommentApp