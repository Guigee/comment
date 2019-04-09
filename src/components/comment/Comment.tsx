import * as React from 'react';
// import PropTypes from 'prop-types';

interface IProps {
    comment: any
    onDeleteComment: any
    index: any
}

interface IState {
    timeString: any
    delete: any
}

class Comment extends React.Component<IProps, IState> {

    // 关于propTypes检测类型
    // static propTypes = {
    //     comment: PropTypes.object.isRequired,
    //     onDeleteComment: PropTypes.func,
    //     index: PropTypes.number
    // }
    
    _timer: NodeJS.Timeout; //问题？
    constructor(props: IProps) {
        super(props)
        this.state = {
            timeString: '',
            delete: 'delete'
        }
    }

    //计时器有问题？
    componentWillMount() {
        this._updateTimeString()
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        )
    }

    //清除定时器
    componentWillUnmount() {
        clearInterval(this._timer)
    }

    //删除方法
    handleDeleteComment() {
        if(this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index) //!!
        }
    }

    //时间戳私有方法
    _updateTimeString() {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
          timeString: duration > 60
            ? `${Math.round(duration / 60)} 分钟前`
            : `${Math.round(Math.max(duration, 1))} 秒前`
        })
      }

    render () {
        return (
        <div className='comment'>
            <div className='comment-user'>
            <span>{this.props.comment.username} </span>：
            </div>
            <p>{this.props.comment.content}</p>
            <span className='comment-createdtime'>
                {this.state.timeString}
            </span>
            <span className="comment-delete" onClick={this.handleDeleteComment.bind(this)}>
                {this.state.delete}
            </span>
        </div>
        )
  }
}

export default Comment