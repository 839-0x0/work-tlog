# Work Time Log
Work Time Logは、作業時間を記録し管理するためのデスクトップアプリケーションです。
ReactとElectronを使用して開発されています。

-  機能
     - タイマーを使用して作業時間を記録
     - 記録された時間の合計を表示
     - 作業項目ごとに時間を管理


## 開始方法
このプロジェクトをローカルで実行するには、以下の手順に従ってください。

### 必要条件
- Node.js (推奨: 最新のLTSバージョン)
- npm (Node.jsに含まれています)

### インストール
依存関係をインストールするには、プロジェクトのルートディレクトリで以下のコマンドを実行してください。
``
npm install
```

### 開発モードでの実行
開発モードでアプリケーションを起動するには、以下のコマンドを実行します。
```
npm start
```

### ビルド
#### 開発用ビルド
開発用のビルドを行い、distディレクトリに出力するには、以下のコマンドを使用します。
```
npm run build
```

#### 開発用実行
以下のコマンドを使うことでElectronのアプリケーションを起動できます。
```
npm run electron
```


## やり残したこと
### アプリケーション化
1. パッケージをインストール
```
npm install --save-dev electron-builder
```

2. `package.json` ファイルにビルド設定を追加.(MacとWindowsの設定例)
```
  "scripts": {
    "start": "electron .",  // ここは書き換え
    "pack": "electron-builder --dir",
    "dist": "electron-builder"
  },
    "build": {
    "appId": "com.example.worktlog",
    "mac": {
      "target": "dmg",
      "category": "public.app-category.productivity"
    },
    "win": {
      "target": "nsis",
      "icon": "build/icon.ico"
    },
    "linux": {
      "target": [
        "AppImage",
        "deb"
      ]
    }
  },
```

3. ビルドの実行
開発用ビルド（ディレクトリに出力）
```
npm run pack
```

本番用ビルド（distディレクトリにインストーラ作成）
```
npm run dist
```