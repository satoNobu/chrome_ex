console.log('back start')
chrome.runtime.onConnect.addListener(function(port) {
    if(port.name == "TestChannel"){
        port.onMessage.addListener(function(msg) {
            console.log('受信')
            if(msg.msMessage == "メッセージ送信"){
                alert('メッセージを受信しました')
                port.postMessage({answerMsg: "メッセージ受信完了"});
            }
        });
    }
});