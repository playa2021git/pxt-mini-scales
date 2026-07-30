# pxt-mini-scales

M5Stack Unit Mini Scalesを、BBC micro:bit V2のMicrosoft MakeCodeから利用するための拡張機能です。

Mini Scales内部のI2C通信をブロック化し、生徒は重量を通常のセンサー値と同じように条件分岐や制御へ利用できます。

## 対応機器

- BBC micro:bit V2
- Seeed Studio Grove Shield for micro:bit v2.0
- M5Stack Unit Mini Scales

## 接続

Mini ScalesをGrove Shieldの **I2C端子** へ接続します。

Mini Scalesは5V給電を必要とします。使用するシールドと給電方法の仕様を確認してください。

## MakeCodeへの追加方法

1. Microsoft MakeCode for micro:bitでプロジェクトを開く
2. 「拡張機能」を選択する
3. 検索欄へ次のURLを貼り付ける

```text
https://github.com/playa2021git/pxt-mini-scales
```

4. 表示された拡張機能を選択する

## ブロック

### Mini Scales の重さ（整数g）

Mini Scalesから重量を読み取り、小数点以下を四捨五入した整数のグラム値を返します。

### Mini Scales を風袋引きする

現在載っている物を含めた状態を0gとして設定します。

## 使用例

Aボタンで重量を表示し、Bボタンで風袋引きする例です。

```typescript
input.onButtonPressed(Button.A, function () {
    basic.showNumber(miniScales.weight())
})

input.onButtonPressed(Button.B, function () {
    miniScales.tare()
    basic.showIcon(IconNames.Yes)
})
```

50g以下なら笑顔、51g以上なら警告する例です。

```typescript
basic.forever(function () {
    const weight = miniScales.weight()

    if (weight <= 50) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
        music.playTone(988, 250)
    }

    basic.pause(200)
})
```

## 技術仕様

- I2Cアドレス：`0x26`
- 重量レジスタ：`0x10`
- 風袋引きレジスタ：`0x50`
- 重量データ形式：32bit浮動小数点、Little Endian

## 注意

- MakeCodeシミュレーター上では実際の重量を取得できません。micro:bit実機で確認してください。
- M5StackおよびSeeed Studioの製品仕様を確認し、適切な電源で使用してください。
- 本拡張機能はM5Stack公式製品ではありません。

## License

MIT License
