# :name_badge: Name

<img src="app/assets/images/alb-logo.png" width="70%">
<br>
<br>

# :book: Overview

サイトなどに登録している情報を管理するアプリケーション  

<details><summary>制作背景（意図）</summary>
自分がどれだけのサイトに登録しているのか、どのアドレスを使用しているのか一覧で確認できたら便利だと考え作成した。  
一覧で見えることで、不要なアカウントの整理がしやすくなる。
</details>
<br>

### :pushpin: Production Environment

https://www.a-list-board.com/

Login Info (sample)
- E-mail：sample@sample.com
- Password：sample1
<br>
<br>

# :movie_camera: Demo

### Home
<img src="app/assets/images/hsy62-g1wfj.gif" width="60%">
<details><summary>Describe</summary><div>

- ルートパスに設定しているページ
- ページ下部にログインとサインアップのリンクがある
- フッターにはサイトについて書かれた簡易的なページへのリンクがある
- ログイン状態でこちらのページにいるとヘッダーにはMy Boardとログアウトのリンクが出現する
</div></details>
<br>
<br>

### Login/SignUp view
<img src="app/assets/images/xycre-6btq7.gif" width="60%">
<details><summary>Describe</summary><div>

- SNSアカウントでのログインが可能
</div></details>
<br>
<br>

### My Board
<img src="app/assets/images/890od-2vkgz.gif" width="60%">
<details><summary>Describe</summary><div>

- ログインするとこちらのページへ遷移
- ヘッダーには投稿/ユーザー情報/ログアウトのリンクがある
- 投稿されたリストが一覧表示される
- 左右それぞれ無料/有料で別れて表示される
</div></details>
<br>
<br>

### Post view
<img src="app/assets/images/egdau-32hcs.gif" width="60%">
<details><summary>Describe</summary><div>

- リストの投稿ができる
- 項目はタイトル/URL/メールアドレス/パスワード/料金形態/メモ
- 必須となるのはタイトルと料金形態のみ
</div></details>
<br>
<br>

### Detail view
<img src="app/assets/images/5f5x5-whvkv.gif" width="60%">
<details><summary>Describe</summary><div>

- 投稿したリストの詳細情報がモーダルウィンドウで表示される
- リストをクリックして表示し、モーダルが表示されたら×かマスク部分をクリックすると非表示になる
</div></details>
<br>
<br>

### Edit/delete view
<img src="app/assets/images/vtrll-i79l0.gif" width="60%">
<details><summary>Describe</summary><div>

- リスト一覧で該当リストの右端にある•••に触れると編集と削除のリンクが出現する
- 詳細画面の右上にも編集と削除のリンクアイコンがある
- 編集画面は投稿画面と変わらず、削除リンクを踏むと確認ダイアログが出現する
</div></details>
<br>
<br>

# :rocket: Requirement
<br>

- Ruby 2.6.5
- Ruby on Rails 6.0.0
- HTML 5
- CSS
- PHP
- jQuery 4.4.0
- Bootstrap 4.5.2  
<br>

- MySQL / Sequel Pro / MariaDB
- AWS(EC2) / Capistrano / nginx / unicorn
- GitHub / GitHubDesktop
- RSpec  
<br>

- VScode
<br>
<br>

# :thought_balloon: Note

### 工夫したポイント
機能を絞って必要最低限のシンプルなアプリケーションにするようにした。  
使用者が使いやすいように非同期での表示をするようにした。
<br>

### To Do
<details><summary>アカウント削除を物理削除ではなく論理削除にする</summary>一度削除したユーザーが再度同じメールアドレスでの登録も可能にさせる</details>
<details><summary>レスポンシブデザイン</summary>スマートフォンやタブレットからのアクセスに対応させる</details>
<details><summary>動的フォームの実装</summary>料金形態が有料を選択した場合に入力フォームが増えるようにする</details>
<details><summary>モーダルウィンドウの追加</summary><div>

- 編集画面を詳細モーダルと同じようなモーダルにする
- 投稿画面についてもモーダルから可能にする</div></details>
<details><summary>ドラッグ&ドロップでのリストの移動</summary>簡単に並び替えができるようにするため実装する</details>
<br>
<br>

# :clipboard: Tables

## users

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| nickname | string | null: false |
| email    | string | null: false |
| password | string | null: false |

### Association

- has_many :lists
<br>

## lists

| Column   | Type       | Options                        |
| -------- | ---------- | ------------------------------ |
| title    | string     | null: false                    |
| email    | string     |                                |
| password | string     |                                |
| fee      | string     | null: false                    |
| memo     | text       |                                |
| user     | references | null: false, foreign_key: true |

### Association

- belongs_to :users
- has_one :subscriptions
<br>

## subscriptions

| Column | Type       | Options                       |
| ------ | ---------- | ----------------------------- |
| plan   | string     |                               |
| price  | integer    | null: false                   |
| list   | references | null:false, foreign_key: true |

### Association

- belongs_to :lists