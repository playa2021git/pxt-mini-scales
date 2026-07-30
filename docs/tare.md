# Mini Scalesを風袋引きする

現在Mini Scalesに載っている物を含めた状態を0gとして設定します。容器の重さを差し引いて中身だけを量る場合などに使用します。

```sig
miniScales.tare()
```

## 使用例

Bボタンを押したときに風袋引きを行い、完了後にチェックマークを表示します。

```blocks
input.onButtonPressed(Button.B, function () {
    miniScales.tare()
    basic.showIcon(IconNames.Yes)
})
```

## 注意

- 風袋引きを実行するときは、計量台を動かさないでください。
- 処理完了まで約300ミリ秒待機します。
- 電源を入れ直した場合は、必要に応じて再度風袋引きしてください。

## 関連項目

- [Mini Scalesの重さ（整数g）](./weight)

```package
mini-scales=github:playa2021git/pxt-mini-scales
```
