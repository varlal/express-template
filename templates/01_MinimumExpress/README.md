# 01_MinimumExpress
最小構成でExpressを導入する。主にExpressが導入できているかのテストに利用。

## プロジェク構成
```
$ tree
.
├── app.js
├── package-lock.json
└── package.json
```

### マニュアル構築方法
```
npm init
npm install express --save
vim app.js
```

## 内容
expressを導入してapp作成、app.listen()およびapp.get()を記述。
```
var express = require("express");
var app = express();

app.listen(3000, function() {
  console.log("Express start at http://localhost:3000";
});

app.get("/", function(req, res, next) {
  res.send('Hello Express World')
});
```
