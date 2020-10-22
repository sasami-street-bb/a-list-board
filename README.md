# :name_badge: Name（アプリ名）

A-List Board

# :book: Overview（概要）

サイトなどに登録している情報を管理するアプリケーション

### 制作背景（意図）

自分がどれだけのサイトに登録しているのか、どのアドレスを使用しているのか一覧で確認できたら便利だと考え作成した。
一覧で見えることで、不要なアカウントの整理がしやすくなる。

## :pushpin: Production Environment

http://(サイトURL)

Login Info (for TEST)
- E-mail：ppp@ppp.com
- Password：123qwe


# :movie_camera: Demo（デモ）

### Home
ルートパスに設定しているページ
ページ下部にログインとサインアップのリンクがある
ヘッダーにはサイトについて書かれた簡易的なページへのリンクがある
ログイン状態でこちらのページにいるとヘッダーにはMy Boardとログアウトのリンクが出現する

### Login/SignUp view
SNSアカウントでのログインが可能

### My Board
ログインするとこちらのパージへ遷移
ヘッダーには投稿/ユーザー情報/ログアウトのリンクがある
投稿されたリストが一覧表示される
左右それぞれ無料/有料で別れて表示される

### Post view
リストの投稿ができる
項目はタイトル/URL/メールアドレス/パスワード/料金形態/メモがあり、必須となるのはタイトルと料金形態のみ

### Detail view
投稿したリストの詳細情報がモーダルウィンドウで表示される
リストをクリックして表示し、モーダルが表示されたら×かマスク部分をクリックすると非表示になる

### Edit/delete view
リスト一覧で該当リストの右端にある•••に触れると編集と削除のリンクが出現する
詳細画面の右上にも編集と削除のリンクアイコンがある
編集画面は投稿画面と変わらず、削除リンクを踏むと確認ダイアログが出現する


# :running: Usage（使い方）


# :rocket: Requirement（開発環境）

- Ruby 2.6.5p114
- Ruby on Rails 6.0.0
- HTML 5
- CSS
- PHP
- jQuery 4.4.0
- Bootstrap 4.5.2
- MySQL
- Sequel Pro
- AWS(EC2)
- Capistrano
- nginx
- unicorn
- GitHub
- GitHubDesktop
- RSpec
- VScode


# :recycle: Install（インストール方法）
# :thought_balloon: Note（注意事項）
# :bust_in_silhouette: Author（文責）
# :trollface: Lisence（ライセンス）


# :clipboard: テーブル設計

## users テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| nickname | string | null: false |
| email    | string | null: false |
| password | string | null: false |

### Association

- has_many :lists

## lists テーブル

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

## subscriptions テーブル

| Column | Type       | Options                       |
| ------ | ---------- | ----------------------------- |
| plan   | string     |                               |
| price  | integer    | null: false                   |
| list   | references | null:false, foreign_key: true |

### Association

- belongs_to :lists