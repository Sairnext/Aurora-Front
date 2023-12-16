import React from 'react';

// const LOCAL_CONNECTION_PORT = window.location.host;
const WEBSERVER_CONNECTION_HOST = 'localhost:8080'
export const webhookConnection = () => {
    const connection = `ws://${WEBSERVER_CONNECTION_HOST}/ws/socket-server/`
    let chat = new WebSocket(connection);

    chat.addEventListener('message', (event) => {
        console.log(JSON.parse(event.data));
    })

    chat.addEventListener('error', (error) => {
        console.warn('Error :: ', error);

        setTimeout(() => {
            useConnectWebhooks();
        }, 5000)
    } )

    return { chat }
}
