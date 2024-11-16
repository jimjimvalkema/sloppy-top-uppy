// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

library FhenixIntegerDivisionLibrary {

    function IntegerDivision(uint256 dividend, uint256 divisor) public pure returns(uint256 quotient) {
        quotient = 0;
        while (dividend >= divisor) {
            dividend -= divisor;
            quotient++;
        }
        return quotient;
    }
}
