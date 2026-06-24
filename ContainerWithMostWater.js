// Broute force approach
function containerWithMostWater(height) {
    let maxArea = 0;

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const width = j - i;
            const currentHeight = Math.min(height[i], height[j]);
            const currentArea = width * currentHeight;
            maxArea = Math.max(maxArea, currentArea);
        }
    }

    return maxArea;
}


// Two pointer approach
function containerWithMostWater(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const currentArea = width * currentHeight;
        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

console.log(containerWithMostWater([1,8,2,5,6,7,4]))