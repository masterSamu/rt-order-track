export default interface Message {
    type: MessageTypes
    data?: string
}

export enum MessageTypes {
    ping = 'ping',
    pong = 'pong',
    auth = 'auth',
    sub = 'sub',
    unsub = 'unsub',
    error = 'error',
}
