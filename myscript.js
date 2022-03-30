chrome.runtime.onMessage.addListener(
    function(request, sender, callback) {
        alert('backから受け取り');
        callback(request.message);
        return true;
    }
);


window.addEventListener('load', function() {
    alert('load');
    chrome.runtime.getBackgroundPage(function( backgroundPage ){
        alert('back呼び出し');
        backgroundPage.backgroundFunction();
    });
});