import { WebSocketServer } from 'ws'
import { sendErrorMessage } from './handlers/errorHandler'

const wss = new WebSocketServer({ port: 8080 })

wss.on('connection', (socket) => {
    console.log('Client connected to rt server')

    socket.on('message', (payload) => {
        if (!payload) sendErrorMessage(socket, 'Invalid payload')
        socket.send('Hello world')
        console.log('received: %s', payload)
    })
})

export { wss }
