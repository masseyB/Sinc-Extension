const main = () => {

    // listen to messages from extension
    chrome.runtime.onMessage.addListener((request, sender, respond) => {
        if (request.to === 'background') {
            if (request.from === 'sidebar') { handleSidebarMessage(request, sender, respond); return true }
            if (request.from === 'contentscript') { handleContentScriptMessage(request, sender, respond); return true }
        }
    })

    // listen to messages from server
    socket.on('update video', videoID => handleServerMessage('update video', videoID))
    socket.on('start sync', videoID => handleServerMessage('start sync'))

    // notifications from the server
    socket.on('notification', notification => handleServerMessage('notification', notification))

    socket.on('disconnect', () => {
        if (user.roomname !== null) {

            user = { // data about the user
                roomname: null,
                name: null,
                mic: false,
                tabID: null
            }

            chrome.runtime.sendMessage({
                from: 'background',
                to: 'sidebar',
                message: 'disconnected'
            }, res => { })

        }
    })

    // chrome browser listeners
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => handleTabUpdate(tabId, changeInfo, tab))
    chrome.tabs.onRemoved.addListener((tabId, changeInfo, tab) => handleTabRemove(tabId, changeInfo, tab))

}

window.onload = main