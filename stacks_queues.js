// 4.1
// max stack

const _ = require('underscore')

const getMaxStack = () => ( {
	_internalArray: [],
	_maxes: [],
	push: function(val) {
        this._internalArray.push(val);
        this.max() 
            ? this._maxes.push(Math.max(val, this.max()))
            : this._maxes.push(val)
	},
	pop: function() {
        this._maxes.pop()
        return this._internalArray.pop()
    },
    max: function() { return _.last(this._maxes) },
});

const maxStack = getMaxStack();
maxStack.push(1)
maxStack.push(40)
maxStack.push(12)
console.log(maxStack)

console.log(maxStack.max(), maxStack.pop())
console.log(maxStack.max(), maxStack.pop())
console.log(maxStack.max(), maxStack.pop())