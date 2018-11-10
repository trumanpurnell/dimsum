import Header from '../../ndarray/header.mjs'
import utils from '../../utils'

export default class MatrixOperator {
    static multiply(A, B) {
        const newTypedArray = utils.array.type.compareTypes(A.type, B.type)
        const newHeader = new Header({ shape: [A.header.shape[0], B.header.shape[1]] })
        const newData = new newTypedArray(A.header.shape[0] * B.header.shape[1])

        for (let r = 0, i = 0; r < newHeader.shape[0]; r++)
            for (let c = 0; c < newHeader.shape[1]; c++ , i++)
                for (let s = 0; s < A.header.shape[1]; s++)
                    newData[i] +=
                        utils.array.nd.read(A, [r, s]) *
                        utils.array.nd.read(B, [s, c])


        return [newData, newHeader, newTypedArray]
    }

    static invert(A, I) {
        const invA = A.copy()

        // Perform elementary row operations
        for (let i = 0; i < invA; i += 1) {
            // get the element e on the diagonal
            e = C[i][i];

            // if we have a 0 on the diagonal (we'll need to swap with a lower row)
            if (e == 0) {
                //look through every row below the i'th row
                for (ii = i + 1; ii < dim; ii += 1) {
                    //if the ii'th row has a non-0 in the i'th col
                    if (C[ii][i] != 0) {
                        //it would make the diagonal have a non-0 so swap it
                        for (j = 0; j < dim; j++) {
                            e = C[i][j];       //temp store i'th row
                            C[i][j] = C[ii][j];//replace i'th row by ii'th
                            C[ii][j] = e;      //repace ii'th by temp
                            e = I[i][j];       //temp store i'th row
                            I[i][j] = I[ii][j];//replace i'th row by ii'th
                            I[ii][j] = e;      //repace ii'th by temp
                        }
                        //don't bother checking other rows since we've swapped
                        break;
                    }
                }
                //get the new diagonal
                e = C[i][i];
                //if it's still 0, not invertable (error)
                if (e == 0) { return }
            }

            // Scale this row down by e (so we have a 1 on the diagonal)
            for (j = 0; j < dim; j++) {
                C[i][j] = C[i][j] / e; //apply to original matrix
                I[i][j] = I[i][j] / e; //apply to identity
            }

            // Subtract this row (scaled appropriately for each row) from ALL of
            // the other rows so that there will be 0's in this column in the
            // rows above and below this one
            for (ii = 0; ii < dim; ii++) {
                // Only apply to other rows (we want a 1 on the diagonal)
                if (ii == i) { continue; }

                // We want to change this element to 0
                e = C[ii][i];

                // Subtract (the row above(or below) scaled by e) from (the
                // current row) but start at the i'th column and assume all the
                // stuff left of diagonal is 0 (which it should be if we made this
                // algorithm correctly)
                for (j = 0; j < dim; j++) {
                    C[ii][j] -= e * C[i][j]; //apply to original matrix
                    I[ii][j] -= e * I[i][j]; //apply to identity
                }
            }
        }

        //we've done all operations, C should be the identity
        //matrix I should be the inverse:
        return I;
    }
}
