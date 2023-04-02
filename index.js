// code your solution here
function superbowlWin(array){
    const isWin = array.find(element => element.result ==="W")
    if (isWin !== undefined){
    return array.find(element => element.result ==="W").year
    }
}
