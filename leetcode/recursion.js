/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

    const recusiveStringReverser = (stringArr, p1, p2) => {
        
        if (stringArr.length === 0) return

        p1 = p1 === undefined ? 0 : p1        
        p2 = p2 === undefined ? stringArr.length - 1 : p2
                
        if ( p1 === p2 ) {
            // base case, odd length
            return
        } else {
            const temp = stringArr[p1];
            stringArr[p1] = stringArr[p2];
            stringArr[p2] = temp;
            
            if ( (p1 + 1) === p2 ) {
                // base case, even length
                return;
            } else {
                recusiveStringReverser(stringArr, p1 + 1, p2 - 1);
            }
        }
    }
    
    recusiveStringReverser(s)
};