function backgroundFunction(){
    chrome.runtime.sendMessage({
        message: "BBBBBB"
    }, function(response) {
        alert('backでアラート表示');
        alert(response);
        return true;
    });
};