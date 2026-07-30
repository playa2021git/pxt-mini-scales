// 拡張機能の基本的なコンパイル確認用コード
input.onButtonPressed(Button.A, function () {
    basic.showNumber(miniScales.weight())
})

input.onButtonPressed(Button.B, function () {
    miniScales.tare()
    basic.showIcon(IconNames.Yes)
})
