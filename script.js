function findJewelsInStones(jewels , stones) {
    let jewelsArr = jewels.split('') // ['a','A']
    let stonesArr = stones.split('') // ['a','A','A','b','b','b','b']
    let numOfjewels = 0;
    jewelsArr.forEach((jewel) => {
        for(let i = 0; i < stonesArr.length; i++) {
            if(stonesArr[i] === jewel) {
                numOfjewels++;
            }
        }
    })
    return numOfjewels;
}

console.log(findJewelsInStones('aA' , 'aAAbbbbb'));