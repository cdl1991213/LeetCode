/* 
    860. 柠檬水找零
*/
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const n = bills.length

    let dollars = new Array(2).fill(0)
    for(let i=0; i<n; i++){
        switch(bills[i]){
            case 5:
                dollars[0] += 1 
                break
            case 10:
                if(dollars[0] < 1){
                    return false
                }
                dollars[0] -= 1
                dollars[1] += 1
                break
            case 20:
                if(dollars[1] >= 1 && dollars[0] >= 1){
                    dollars[1] -= 1
                    dollars[0] -= 1
                }else if(dollars[0] >= 3){
                    dollars[0] -= 3
                }else{
                    return false
                }
                dollars[2] += 1
                break
        }
    }
    return true
};

/* 一行代码 */
var lemonadeChange = function(bills, n5 = 0, n10 = 0) {
    return bills.every(b => (b === 5 ? n5++ : b === 10 ? (n10++, n5--) : n10 ? (n10--, n5--) : n5 -= 3, n5 >= 0))
};

console.log(lemonadeChange([1,2]))