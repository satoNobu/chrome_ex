chrome.contextMenus.create({title: "hoge", onclick: test}, function(){
    alert("コンテキストメニューが登録されました");
});

function test(){alert("クリック")};

// ■ 専用のイベントリスナーの登録
// chrome.contextMenus.create({title: "hoge"}, function(){
//     alert("コンテキストメニュー登録完了");
// });
//
// chrome.contextMenus.onClicked.addListener( function(){
//     alert("onClickedイベントでクリック");
// });