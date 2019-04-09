import * as React from 'react';

const users = [
    {username: 'Tom', age: '12', gender: 'male',},
    {username: 'Jerry', age: '18', gender: 'male',},
    {username: 'lucy', age: '20', gender: 'female',},
    {username: 'Lili', age: '15', gender: 'female',}
]
interface IProps {
    user: any
}
interface Istate{
    test: string | boolean
}
class User extends React.Component<IProps ,Istate>{
    constructor (props: IProps) {
        super(props);
        this.state = {
            test: '123',
        }
    }

    render() {
        // const { user } = this.props 
        // var a = {user: 1}  const {user} = a console
        const user = this.props.user
        return (
            <div>
                <div>{user.username}</div>
                <div>{user.age}</div>
                <div>{user.gender}</div>
                <hr />   
            </div>
        ) 
    }    
}

class List extends React.Component {
    // constructor (props: IProps) {
    //     super(props)

    //     this.state = {
    //         desc: 'xxxx'
    //     }
    // }

    render() {
        return (
            // <div>{ this.state.desc }{ this.props.name }<div>{usersElements}</div></div>
            <div>
                {users.map((user, index) => <User user={user} key={index}/>)}
            </div>
        )
    }

    
}

export default List;