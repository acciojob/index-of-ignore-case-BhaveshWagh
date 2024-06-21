function indexOfIgnoreCase(str, subStr) {
  // write your code here
	const strLower = str.toLowerCase();
    const subStrLower = subStr.toLowerCase();
    
    if (subStrLower === "") {
        return 0; // Empty substring is always found at index 0
    }
    
    for (let i = 0; i <= str.length - subStr.length; i++) {
        if (strLower.substring(i, i + subStr.length) === subStrLower) {
            return i;
        }
    }
    
    return -1; // substring not found
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
