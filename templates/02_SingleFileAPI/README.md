# 02_SingleFileExpress
1つのapp.jsファイルでjsonAPIを作成する。簡易的なモックに利用。

## API仕様
| method| url | controller |description |
| --- | --- | --- | --- |
| GET | /api/v1/users | getUsersList | ユーザ一覧を取得 |
| POST | /api/v1/users | createUser | ユーザ一覧を作成 |
| GET | /api/v1/users/:id | getUser | :idユーザ一覧を取得 |
| PUT | /api/v1/users/:id | updateUser | :idユーザ一覧を更新 |
| DELETE | /api/v1/users/:id | deleteUser | :idユーザ一覧を削除 |

## プロジェク構成
```
$ tree
.
├── app.js
├── package-lock.json
└── package.json
```

## マニュアル構築方法
```
npm init
npm install express --save
vim app.js
```

### 記述内容
基本的な部分は01_MinimumExpressと同様。POSTリクエストをパースするために`body-parser`を利用。
urlに含まれる`:id`を取得するには`req.params.id`と記述する。


### API確認
```
//getUserList
curl -s http://localhost:3000/api/v1/users

//createUser
 curl -s http://localhost:3000/api/v1/users -X POST -H "Content-Type: application/json" -d '{"id":1,"name":"bob","age":20}'

 //getUser
 curl -s http://localhost:3000/api/v1/users/1

 //updateUser
 curl -s http://localhost:3000/api/v1/users/1 -X PUT -H "Content-Type: application/json" -d '{"name":"alice","age":21}'

 //deleteUser
 curl -s http://localhost:3000/api/v1/users/0 -X DELETE
```
