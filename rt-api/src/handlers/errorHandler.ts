import WebSocket from 'ws'
import Message, { MessageTypes } from '../interfaces/MessageData'

export const sendErrorMessage = (socket: WebSocket, data: string) => {
    const message: Message = { type: MessageTypes.error, data }
    socket.send(JSON.stringify(message))
}
