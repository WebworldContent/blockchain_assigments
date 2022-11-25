//SPDX-License-Identifier:MIT
pragma solidity ^0.8.6;

contract ArrayAssignment
{
    uint[] nums = [1,2,3];

    function addNum(uint n) public {
        nums.push(n);
    }

    function viewArray() public view returns (uint[] memory) {
        return nums;
    }

    function popNum() public {
        nums.pop();
    }

    function arrayLength() public view returns (uint) {
        return nums.length;
    }

    function removeAtIndex(uint indx) public {    //main assignment function
        while (indx+1 < arrayLength()) {
            uint t = nums[indx];
            nums[indx] = nums[indx+1];
            nums[indx+1] = t;
            indx++;
        }
        popNum();
    }
}

