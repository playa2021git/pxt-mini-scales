# Mini Scales の重さ（整数g）

M5Stack Unit Mini Scalesから現在の重量を読み取り、小数点以下を四捨五入した整数のグラム値を返します。

```sig
miniScales.weight()
```

## 戻り値

現在の重量を表す整数です。単位はグラム（g）です。

## 使用例

Aボタンを押したときに現在の重量を表示します。

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(miniScales.weight())
})
```

50g以下なら笑顔、51g以上なら×印を表示します。

```blocks
basic.forever(function () {
    if (miniScales.weight() <= 50) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
    }
})
```

## 注意

- Mini ScalesをGrove ShieldのI2C端子へ接続してください。
- MakeCodeシミュレーターでは実際の重量を取得できません。
- 読み取った値は整数に四捨五入されます。

## 関連項目

- [Mini Scalesを風袋引きする](./tare)

```package
mini-scales=github:playa2021git/pxt-mini-scales
```
