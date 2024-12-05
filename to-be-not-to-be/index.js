/**
 * @param {*} val - The value to be tested.
 * @return {Object} - Object containing `toBe` and `notToBe` methods.
 */
function expect(val) {
    return {
        toBe: function(expected) {
            if (val === expected) {
                return true;
            }
            throw new Error("Not Equal");
        },
        notToBe: function(expected) {
            if (val !== expected) {
                return true;
            }
            throw new Error("Equal");
        }
    };
}

// Examples:

try {
    console.log(expect(5).toBe(5)); // true
} catch (error) {
    console.error(error.message);
}

try {
    console.log(expect(5).toBe(null)); // throws "Not Equal"
} catch (error) {
    console.error(error.message);
}

try {
    console.log(expect(5).notToBe(null)); // true
} catch (error) {
    console.error(error.message);
}
