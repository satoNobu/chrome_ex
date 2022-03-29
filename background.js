chrome.runtime.onMessage.addListener(
    function(request, sender, callback) {
        callback(request.message);
        return true;
    }
);
