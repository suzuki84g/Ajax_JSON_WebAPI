const push = document.getElementById('btn');  // 送信button

// ボタン押下時の動作
push.onclick = () => {
    // script要素を生成する
    let newScript = document.createElement('script');  // scriptタグを作成
    let zipcode = document.getElementById('zipcode').value;  // 入力された郵便番号を取得
    let urlText = 'https://zip-cloud.appspot.com/api/search?zipcode=' + zipcode + '&callback';  // 送信するURLを作成
    newScript.id = 'newScript';
    newScript.src = urlText;  // scriptのsrcにurlTextを挿入

    // body要素の末尾にscript要素を追加する。
    document.body.appendChild(newScript);
    // TODO:body要素のscript要素を削除する。
    document.body.removeChild(newScript);
};

// 戻ってきた値の処理
// callback(data) {
//     if (data.results) {
//     // 都道府県の欄に都道府県名を表示する。
//     // 市区町村の欄に市区町村名を表示する。
//     // 住所の欄に町域名を表示する。
//     } else {
//         alert('該当するデータが見つかりませんでした');
//     };
// };
