/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let arr = [];
    for(let i = 0; i < nums1.length; i++) {
        let found = false;
        let gn = -1;
        for(let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) found = true;
            if (found && nums1[i] < nums2[j]) {
                gn = nums2[j];
                break;
            }
        }
        arr.push(gn);
    }
    
    return arr
};