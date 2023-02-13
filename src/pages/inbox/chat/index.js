import Header from "./components/header";
import Reply from "./components/reply";
import Messages from "./components/messages";
import { useState } from "react";

export default function Chat() {

    const user = {
        name: 'Ata Güneşer',
        avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg'
    }

    const [messages, setMessages] = useState([
        {
            from: {
                id: 'CRKlUnGLnfT1Dl201DmVkCzMutj2',
                name: 'Tayfun Erbilen',
                username: 'tayfunerbilen',
                avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg'
            },
            message: 'grup'
        },  
    ])

    return (
        <div className="flex-1">
            <Header user={user} />
            <Messages messages={messages} />
            <Reply setMessages={setMessages} />
        </div>
    )
}