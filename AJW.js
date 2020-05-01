const push = document.getElementById('btn');  // 送信button

// ボタン押下時の動作
push.onclick = () => {
    // script要素を生成する
    let newScript = document.createElement('script');  // scriptタグを作成
    let zipcode = document.getElementById('zipcode').value;  // 入力された郵便番号を取得
    let urlText = 'https://zip-cloud.appspot.com/api/search?zipcode=' + zipcode + '&callback=zipOutput';  // 送信するURLを作成
    newScript.id = 'newScript';
    newScript.src = urlText;  // scriptのsrcにurlTextを挿入

    // body末尾にscriptの追加と削除
    document.body.appendChild(newScript);
    document.body.removeChild(newScript);
};

// コールバック関数でJSONを受け取る
zipOutput = (data) => {
    let jsonData = data;
    if (jsonData.results[0]) {
        document.getElementById('prefecture').value = jsonData.results[0].address1;
        document.getElementById('city').value = jsonData.results[0].address2;
        document.getElementById('address').value = jsonData.results[0].address3;
    } else {
        alert('該当するデータが見つかりませんでした');
    };
};
