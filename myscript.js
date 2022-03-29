chrome.runtime.sendMessage({
    message: "AAAAAA"
}, function(response) {
    alert(response);
});