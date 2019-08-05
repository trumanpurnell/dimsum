import bb from '../../main/array'
import jest from '../engine'

export default function () {

    console.log('\n\n-------- Complex Suite --------\n\n')

    const A = bb.array({
        with: [
            ['10 + 2i'],
            ['40 + 3i'],
            ['50 + 1i']
        ]
    })

    const B = bb.array({
        with: [
            ["2+2i", "7+9i", "3+5i", "5+8i", "3+4i", "5+6i", "0+7i", "5+9i", "6+0i", "1+6i", "7+9i", "5+7i", "1+9i", "6+6i", "0+8i", "6+8i", "1+4i", "1+0i", "2+1i", "6+9i", "0+6i", "3+4i", "8+6i", "1+0i", "0+2i", "3+7i", "0+7i", "9+6i", "3+5i", "2+4i", "1+7i", "7+8i", "6+2i", "6+8i", "4+7i", "9+1i", "8+6i", "5+2i", "1+2i", "5+2i", "8+7i", "7+0i"],
            ["6+4i", "8+0i", "4+0i", "8+7i", "2+0i", "9+8i", "8+7i", "3+7i", "8+6i", "5+0i", "2+1i", "7+5i", "8+6i", "7+4i", "7+7i", "4+8i", "6+6i", "0+3i", "6+1i", "2+6i", "1+6i", "2+8i", "1+9i", "1+3i", "2+2i", "1+6i", "6+0i", "6+6i", "0+2i", "8+7i", "8+9i", "4+6i", "7+4i", "3+2i", "7+1i", "7+4i", "7+6i", "5+3i", "4+5i", "9+1i", "5+2i", "3+0i"],
        ]
    })

    const C = bb.array({
        with: [
            "i", "i", "i", "i", "i", "i", "i", "i",
            "i", "i", "i", "i", "i", "i", "i", "i",
            "i", "i", "i", "i", "i", "i", "i", "i",
            "i", "i", "i", "i", "i", "i", "i", "i",
            "i", "i", "i", "i", "i", "i", "i", "i",
            "i", "i"
        ]
    })

    const D = bb.array({
        with: [
            ['0', '1', '2', '3', '4'],
            ['0', '1', '2', '3', '4'],
            ['0', '1', '2', '3', '4'],
            ['0', '1', '2', '3', '4'],
            ['0', '1', '2', '3', '4'],
        ]
    })


    const E = bb.array({ with: ['1 + 8i'] })
    const F = bb.array({ with: [['0'], ['1'], ['2'], ['3'], ['4']] })

    const G = bb.array({
        with: [
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]
        ]
    })

    const H = bb.array({
        with: [["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]]
    })

    const I = bb.array({ with: [['1 + 1i', '4 + 6i', '2 - 5i']] })
    const J = bb.array({ with: [['7 - 1i', '2 + 1i', '5 - 9i']] })

    const K = bb.array({
        with: [
            ['5. + 3i', '4. + 2i', '4. + 8i', '9. + 7i'],
            ['4. + 7i', '9. + 2i', '4. + 4i', '4. + 8i'],
            ['3. + 1i', '4. + 3i', '5. + 1i', '7. + 7i'],
            ['4. + 5i', '7. + 3i', '3. + 5i', '7. + 3i']
        ]
    })

    const L = bb.array({
        with: [
            ['6 + 1i', '4 + 0i', '4 + 4i', '3 + 1i'],
            ['1 + 5i', '0 + 1i', '2 + 4i', '3 + 9i'],
            ['7 + 8i', '5 + 4i', '3 + 6i', '7 + 9i'],
            ['7 + 1i', '2 + 3i', '9 + 2i', '2 + 2i']
        ]
    })

    /** Elementwise operations */
    jest.expect(A.min()).toEqual('10 + 2i')
    jest.expect(A.max()).toEqual('50 + i')
    jest.expect(A.mean()).toEqual('33.33333206176758 + 2i')
    jest.expect(A.sum()).toEqual('100 + 6i')
    jest.expect(A.norm()).toEqual('64.91532897949219')

    jest.expect(B.min()).toEqual('7i')
    jest.expect(B.max()).toEqual('9 + 6i')
    jest.expect(B.mean()).toEqual('4.464285850524902 + 4.690476417541504i')
    jest.expect(B.sum()).toEqual('375 + 394i')
    jest.expect(B.norm()).toEqual('69.73521423339844')

    /** Pairwise operations */
    jest.expect(B.add({ with: B })).toEqual(B.multiply({ with: 2 }))
    jest.expect(B.subtract({ with: B })).toEqual(B.multiply({ with: 0 }))
    jest.expect(B.divide({ with: B })).toEqual(bb.ones({ shape: B.shape }))

    jest.expect(A.add({ with: A })).toEqual(A.multiply({ with: 2 }))
    jest.expect(A.subtract({ with: A })).toEqual(A.multiply({ with: 0 }))
    jest.expect(A.divide({ with: A })).toEqual(bb.ones({ shape: A.shape }))

    /** Broadcast Operations */
    jest.expect(B.subtract({ with: C })).toEqual(B.subtract({ with: 'i' }))
    jest.expect(A.multiply({ with: E })).toEqual([["-6 + 82i"], ["16 + 323i"], ["42 + 401i"]])
    jest.expect(A.add({ with: E })).toEqual([["11 + 10i", "41 + 11i", "51 + 9i"]])

    jest.expect(D.add({ with: F.T() })).toEqual([
        [0, 2, 4, 6, 8],
        [0, 2, 4, 6, 8],
        [0, 2, 4, 6, 8],
        [0, 2, 4, 6, 8],
        [0, 2, 4, 6, 8]
    ])

    jest.expect(D.add({ with: F })).toEqual([
        [0, 1, 2, 3, 4],
        [1, 2, 3, 4, 5],
        [2, 3, 4, 5, 6],
        [3, 4, 5, 6, 7],
        [4, 5, 6, 7, 8]
    ])

    jest.expect(G.add({ with: H })).toEqual([["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"]])
    jest.expect(G.add({ with: H.T() })).toEqual([[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26], [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38]])

    jest.expect(I.cross({ with: J })).toEqual(['65 + 2i', '-5 - 33i', '-33 - 35i'])
    jest.expect(K.matMult({ with: L })).toEqual(["41 + 191i", "3 + 113i", "39 + 181i", "-34 + 180i", "32 + 213i", "2 + 101i", "6 + 200i", "-2 + 200i", "75 + 135i", "23 + 68i", "62 + 148i", "19 + 131i", "38 + 159i", "13 + 91i", "34 + 144i", "-15 + 173i"])


    console.log('\n\n-------- End Complex Suite --------\n\n')
}
