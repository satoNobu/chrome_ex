// TODO (1_NG)グローバル変数は非推奨
let savedName = undefined;
chrome.runtime.onInstalled.addListener(({}) => {
    console.log('oninstalled')
    // TODO (1_OK) ストレージを使うこと
    chrome.storage.local.set({'key': "abcedfg"}, function () {});
    savedName = "hijkelmn"
})

chrome.storage.local.get("key", function (value) {
    console.log(value.key);
    // TODO（2_NG） ここにイベントを書くのはダメ！！
    // chrome.action.onClicked.addListener((tab) => {
    //     chrome.scripting.executeScript({
    //         target: {tabId: tab.id},
    //         files: ['content.js']
    //     });
    // });
});

// TODO（2_OK）TOPレベルにイベントを記載すること
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content.js']
    });
    // ストレージに保存している方はエラーにならない
    console.log('tabs.onupdated')
    // タブタップ時にエラーとなる
    console.log(savedName)
    // TODO(4_OK) タブやwindowを新しく新規作する or ライブラリを使う
    chrome.tabs.create({
        url: tab.url
    });
});

// TODO (3_NG) 非推奨！！This worked in Manifest V2.
// const TIMEOUT = 3 * 60 * 1000; // 3 minutes in milliseconds
// setTimeout(() => {
//     chrome.action.setIcon({
//         path: getRandomIconPath(),
//     });
// }, TIMEOUT);

// TODO (3_OK) AlarmsAPIを使うこと
// Create an alarm
chrome.alarms.create('NAME_OF_ALARM', { delayInMinutes : 1 });

// Run something when the alarm goes off
chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name == 'NAME_OF_ALARM') {
        console.log('nanika')
    }
});

// TODO(4_ng) v2だと動くが、v3だとエラーになる。
// window.alert('HelloWorld');