# テーブル設計

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