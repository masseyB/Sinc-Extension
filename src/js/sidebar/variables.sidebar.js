const DOM = {
    button: {
        createRoom: document.querySelector('#btn-create-room'),
        joinRoom: document.querySelector('#btn-join-room'),
        leaveRoom: document.querySelector('#btn-leave-room'),
        generateRoomname: document.querySelector('#btn-generate-roomname'),
        mic: document.querySelector('#btn-mic'),
        settings: document.querySelector('#btn-setting')
    },
    input: {
        name: document.querySelector('#input-membername'),
        roomname: document.querySelector('#input-roomname'),

        volume: document.querySelector('#input-volume')
    },
    text: {
        roomname: document.querySelector('#roomname'),
        callVolume: document.querySelector('#call-volume'),
        sidebarNotification: document.querySelector('#sidebar-notification')
    },
    view: {
        loading: document.querySelector('#view-loading'),
        error: document.querySelector('#view-error'),
        roomLogon: document.querySelector('#view-logon'),
        hangoutArea: document.querySelector('#view-hangout')
    },
    dashboard: document.querySelector('#hangout-room-dashboard'),
    allViews: document.querySelectorAll('.view'),
    settingsMenu: document.querySelector('#settings-menu')
}

const whatsNewPage = 'https://google.ca'
const micToggleCol = { on: 'blue', off: '#333333' }

let settings = {
    volume: 0.5
}

const emojies = {
    hourglass: 0x231b,
    speaker: {
        load: 0x1f50a,
        mid: 0x1f509,
        mute: 0x1f507
    }
}