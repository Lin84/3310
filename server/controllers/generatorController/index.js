function getAllCombinations(inputs) {
    if (!Array.isArray(inputs)) {
        throw new TypeError('function accept only data type array');
    }

    const alphabet = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    const elements = [];

    inputs.map(input => elements.push(alphabet[input]));

    const end = elements.length - 1;
    const result = [];

    function generateCombination(curr, start) {
        const first = elements[start];
        const last = (start === end);

        for (let i = 0; i < first.length; i += 1) {
            const copy = curr.slice();

            copy.push(first[i]);

            if (last) {
                result.push(copy.join(''));
            } else {
                generateCombination(copy, start + 1);
            }
        }
    }

    if (elements.length) {
        generateCombination([], 0);
    } else {
        result.push([]);
    }

    return result;
}

function generatorController(req, res) {
    const result = getAllCombinations(req.body);
    res.send(result);
}

module.exports = {
    getAllCombinations,
    generatorController
};
