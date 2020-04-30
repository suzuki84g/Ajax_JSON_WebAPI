const push = document.getElementById('btn');  // 送信button

// ボタン押下時の動作
push.onclick = () => {
    // script要素を生成する
    let newScript = document.createElement('script');  // scriptタグを作成
    let zipcode = document.getElementById('zipcode').value;  // 入力された郵便番号を取得
    let urlText = 'https://zip-cloud.appspot.com/api/search?zipcode=' + zipcode + '&callback=callback';  // 送信するURLを作成
    newScript.id = 'newScript';
    newScript.src = urlText;  // scriptのsrcにurlTextを挿入

    // body末尾にscriptの追加と削除
    document.body.appendChild(newScript);
    document.body.removeChild(newScript);
};

// コールバック関数でJSONを受け取る
callback = (jsonData) => {
    console.log(jsonData);
}

// callback = (data) => {
//     if (data.results) {
//     // 都道府県の欄に都道府県名を表示する。
//         let prefecture = document.getElementById('prefecture');
//         prefecture.value = results[0].address1;
//     // 市区町村の欄に市区町村名を表示する。
//         let city = document.getElementById('city');
//         city.value = address2;
//     // 住所の欄に町域名を表示する。
//         let address = document.getElementById('address')
//         address.value = address3;
//     } else {
//         alert('該当するデータが見つかりませんでした');
//     };
// };
