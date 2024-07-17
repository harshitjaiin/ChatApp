import { PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props)=>{
    return <div style={{height:'100vh'}}>
        <PrettyChatWindow projectId='c214ee6e-e366-4ed8-be8c-c8ec6dac3c26'
        username={props.user.username}
        secret={props.user.secret} 
        style={{height:"100%"}}
        />
    </div>
}

export default ChatsPage