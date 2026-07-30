/**
 * M5Stack Unit Mini Scales用MakeCode拡張機能
 * BBC micro:bit V2 + Grove ShieldのI2C端子で使用します。
 */
//% color="#F59E0B" weight=90 icon="\uf24e" block="Mini Scales"
namespace miniScales {
    // Mini ScalesのI2Cアドレス
    const SCALE_ADDRESS = 0x26

    // レジスタ番号
    const REG_WEIGHT_FLOAT = 0x10
    const REG_TARE = 0x50

    /**
     * Mini Scalesから重量を読み取ります。
     * 小数点以下を四捨五入し、整数のグラム値を返します。
     */
    //% blockId=mini_scales_weight
    //% block="Mini Scales の重さ（整数g）"
    //% weight=100
    //% help=github:mini-scales/docs/weight
    export function weight(): number {
        // 読み出すレジスタを指定する
        pins.i2cWriteNumber(
            SCALE_ADDRESS,
            REG_WEIGHT_FLOAT,
            NumberFormat.UInt8LE,
            true
        )

        // 32bit浮動小数点・Little Endianで重量を読み取る
        const weightG = pins.i2cReadNumber(
            SCALE_ADDRESS,
            NumberFormat.Float32LE,
            false
        )

        return Math.round(weightG)
    }

    /**
     * 現在載っている重量を0gとして風袋引きします。
     */
    //% blockId=mini_scales_tare
    //% block="Mini Scales を風袋引きする"
    //% weight=90
    //% help=github:mini-scales/docs/tare
    export function tare(): void {
        // レジスタ番号と実行値を送る2バイトのバッファ
        const data = pins.createBuffer(2)
        data.setNumber(NumberFormat.UInt8LE, 0, REG_TARE)
        data.setNumber(NumberFormat.UInt8LE, 1, 1)

        pins.i2cWriteBuffer(SCALE_ADDRESS, data, false)

        // Mini Scales側の処理完了を待つ
        basic.pause(300)
    }
}
