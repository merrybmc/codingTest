function solution(score) {
    let average = []
    let answer = []
    for (el of score){
        average.push(el[0] + el[1])
    }    
    let average_sort = average.slice().sort((a,b) => b - a)
    answer = average.map((el) => {
        return average_sort.indexOf(el) + 1
    })
    return answer
}