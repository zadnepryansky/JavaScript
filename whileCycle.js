let i = 0
while (i < 5){
    console.log(i)
    i++
}
// 0
// 1
// 2
// 3
// 4

// Worse practise - Endless cycle:

let x = 0
while(x < 5) {
    console.log(x)
}
//  0
//  0
//  0
//  0
//  0...