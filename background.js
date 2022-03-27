function hoge () {
    alert("バックグラウンドの処理を呼び出しました");
}

chrome.runtime.onInstalled.addListener(piyo);
chrome.runtime.onStartup.addListener(hoge);

function piyo() {
    alert("インストール or 更新");
}