import * as React from 'react';

interface IProps {
    onSubmit: any
}
interface IState {
    usernameTitle: any;
    contentTitle: any;
    submitTitle: any;
    username: any;
    content: any;
    
}

class CommentInput extends React.Component<IProps,IState> {
    textarea: any;
    constructor(props: IProps) {
        super(props);
        this.state = {
            usernameTitle: 'username',
            contentTitle: 'content',
            submitTitle: 'submit',
            username: '',
            content: ''
        }
    }

    //执行加载用户名方法
    componentWillMount() {
        this._loadUsername()
    }

    //刷新页面使光标聚焦到textarea框
    componentDidMount() {
        this.textarea.focus()
    }

    //保存用户名方法
    _saveUsername(username: any) {
        localStorage.setItem('username', username)
    }

    //加载用户名方法
    _loadUsername() {
        const username = localStorage.getItem('username')
        console.log(username)
        if(username) {
            this.setState({ username })
        }
    }

    //使页面刷新时有之前用户名显示
    handleUsernameBlur(event: any) {
        this._saveUsername(event.target.value)
    }

    //使username中内容可更改
    handleUsernameChange (event: any) {
        this.setState ({
            username: event.target.value
            }   
        )
    }

    // 使textarea中内容可更改
    handleContentChange (event:any) {
        this.setState ({
            content: event.target.value
            }   
        )
    }

    //点击按钮保存需要传递给父组件CommentApp.tsx的参数
    handleSubmit () {
        if(this.props.onSubmit) {
            const {username, content} = this.state
            this.props.onSubmit({
                username, //上传输入的用户名与内容
                content, 
                createdTime: +new Date() //上传评论数据的时间戳
            })
        }
        this.setState({
            content: ''
        })
        // this.props.loadComments()
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>{this.state.usernameTitle}:</span>
                    <div className='comment-field-input'>
                        <input 
                            value={this.state.username}
                            onBlur={this.handleUsernameBlur.bind(this)} 
                            onChange={this.handleUsernameChange.bind(this)}
                        />
                    </div>
                </div>
            <div className='comment-field'>
                <span className='comment-field-name'>{this.state.contentTitle}:</span>
                <div className='comment-field-input'>
                    <textarea 
                        ref={(textarea) => this.textarea=textarea}
                        value={this.state.content}
                        onChange={this.handleContentChange.bind(this)}
                    />
                </div>
            </div>
            <div className='comment-field-button'>
                <button onClick={this.handleSubmit.bind(this)}>
                {this.state.submitTitle}
                </button>
            </div>
            </div>
        ) 
    }   
}

export default CommentInput