chrome.storage.local.get("hoge", function(items) {
    console.log(items.hoge);
    alert(items.hoge)
});

chrome.storage.local.get(null, function(items) {
    console.log(items.piyo);
    alert(items.piyo)
});