
const litindex = function (index) {
    let resultIndex = this.header.offset

    for (let j = 0; j < this.header.shape; j++)
        resultIndex += Math.floor(index / this.header.strides[j]) % this.header.shape[j] * this.header.strides[j]

    return resultIndex
}

export const litassign = function (callback) {
    const ainds = [...this.of.header.shape.keys()]
    const binds = [...this.with.header.shape.keys()]
    const rinds = [...this.result.header.shape.keys()]

    return new Array(this.result.header.size)
        .fill(null)
        .map(function (_, index) {

            return callback(
                ainds.reduce(flatindex.call(this.of, index), this.of.header.offset),
                binds.reduce(flatindex.call(this.with, index), this.with.header.offset),
                rinds.reduce(flatindex.call(this.result, index), this.result.header.offset)
            )

        })
}

