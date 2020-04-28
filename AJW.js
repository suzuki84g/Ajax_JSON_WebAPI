const button = document.getElementById('btn')

// ボタン押下時の動作
button.onclick = () => {
    // script要素を生成する
        // script要素のsrc属性にリクエストURLを指定する。
        // リクエストURL→ ' ベースとなるURL  ? ' +  Zipcodeに入力された郵便番号を指定  + '& callbackに関数名を指定する  ';

    // body要素の末尾にscript要素を追加する。
    // body要素のscript要素を削除する。
}

// 戻ってきた値の処理
`callbackに指定した関数名`(data) {
    if (data.results) {
    // 都道府県の欄に都道府県名を表示する。
    // 市区町村の欄に市区町村名を表示する。
    // 住所の欄に町域名を表示する。
    } else {
        alert('該当するデータが見つかりませんでした');
    }
}
