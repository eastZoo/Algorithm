function solution(array, commands) {
    var answer = [];

    for (var i = 0; i < commands.length; i++) {
        console.log("commands[i][0] - 1", commands[i][0] - 1)
        var list = array.slice(commands[i][0] - 1, commands[i]
        [1]).sort((a, b) => { return a - b });

        answer.push(list[commands[i][2] - 1]);
    }

    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))

// function solution(array, commands) {
//     var answer = [];

//     for (var i = 0; i < commands.length; i++) {
//         var list = array.slice(commands[i][0] - 1, commands[i]
//         [1]).sort((a, b) => { return a - b });

//         answer.push(list[commands[i][2] - 1]);
//     }

//     return answer;
// }