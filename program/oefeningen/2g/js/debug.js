// De variabele 'a' wordt gebruikt voordat deze is gedeclareerd, wat een ReferenceError veroorzaakt.
// Om dit op te lossen, declareer de variabele 'a' voordat je deze gebruikt.

let a = 1;
console.log(a);
console.log(foo());

function foo(){
    return 2;
}