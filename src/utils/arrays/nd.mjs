import MathUtils from '../math'
import RawArrayUtils from './raw'
import FormatUtils from './format'

export default class NDArrayUtils {
    static getDataFromIndex(indices, ndArray) {
        return ndArray.data[
            // gets flat index into data array
            ndArray.header.offset + indices.reduce(function (finalIndex, idxValue, dimension) {
                return finalIndex + idxValue * ndArray.header.stride[dimension]
            }, 0)
        ]
    }

    static getManyDataFromIndex(indices, ndArrays) {
        return ndArrays.map(nd => this.getDataFromIndex(indices, nd))
    }

    static getAxisIndices(axis, shape) {
        return shape.map((_, dim) => axis === dim ? '$' : ':')
    }

    static * getValueSequenceGenerator(ndArray) {
        for (const index of this.getIndices(ndArray.header.shape))
            yield this.getDataFromIndex(index, ndArray)
    }

    static getRawFlat(ndArray) {
        return [...this.getValueSequenceGenerator(ndArray)]
    }

    static getValueSequenceAutoGenerator(ndArray) {
        const valueSequenceGenerator = this.getValueSequenceGenerator(ndArray)

        return RawArrayUtils.getAutoInvokingGenerator(valueSequenceGenerator)
    }

    static * getIndices(shape, index = []) {
        for (let i = 0; i < shape[0]; i++) {
            if (shape.length > 1)
                yield* this.getIndices(shape.slice(1), index.concat(i))
            else
                yield index.concat(i)
        }
    }

    static helperArange(args) {
        if (args.length === 1)
            return [...MathUtils.getIntegerRange(0, args[0], 1)]
        if (args.length === 2)
            return [...MathUtils.getIntegerRange(args[0], args[1], 1)]
        if (args.length === 3)
            return [...MathUtils.getIntegerRange(args[0], args[1], args[2])]
    }
}