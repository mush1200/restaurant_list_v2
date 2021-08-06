# 餐廳清單
一個用Express和MongoDB所建立的餐廳清單，有使用者登入註冊系統，登入後可以瀏覽該使用者的擁有的餐廳、搜尋特定餐廳、查看餐廳詳細資訊，還可以新增、修改、刪除餐廳資料。

# 專案功能
1. 使用者可以註冊帳號或是用Facebook第三方登入
1. 使用者可以瀏覽屬於他自己的全部餐廳
2. 使用者可以查看餐廳詳細資訊
3. 使用者可以依據餐廳名稱、類別搜尋特定餐廳
4. 使用者可以新增餐廳和其相關資訊
5. 使用者可以修改餐廳的資訊
6. 使用者可以刪除餐廳

# 畫面瀏覽
![餐廳清單](/餐廳清單.png)

# 環境建置
- Node.js
- nodemon
- MongoDb
- npm

# 安裝流程
1. 在終端機輸入指令 Clone 此專案至本機電腦
```
git clone https://github.com/mush1200/restaurant_list_v2.git
```
2. 進入專案目錄
```
cd restaurant_list_v2
```
3. 安裝相關套件
```
npm install
```
4. 將根目錄.env.example檔案中列為SKIP的部分替換為相關ID與金鑰內容並把.env.example檔案名稱修改為.env
5. 新增種子資料
```
npm run seed
```
6. 啟動專案
```
npm run dev
```
7. 出現以下訊息後，即可在 http://localhost:3000 開始使用
<br>
`The Express server is running on http://localhost:3000.`

# 預設者使用者 
email: user1@example.com
<br>
password: 12345678

email: user2@example.com
<br>
password: 12345678