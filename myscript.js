let port = chrome.runtime.connect({name: "TestChannel"});
console.log('myscript読み込み')
alert('メッセージを送信します')
port.postMessage({msMessage: "メッセージ送信"});

port.onMessage.addListener(function(msg) {
    console.log(msg.answerMsg);
    alert(msg.answerMsg)
});