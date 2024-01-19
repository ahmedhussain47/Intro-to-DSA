let data = [1,22,3,10,6,7,32]
let newNum = 70;
console.log(data)
let position = 2;
data[position]=newNum
console.log(data)
// var ans = promt("What Operation Do you wanna do? D")
for(let i = 0; i<data.length; i++)
{
    console.log(data[i])
    if(data[i]==10){
        data[i]=newNum;
        console.log(`yes now ${data[i]} exist in array`)
    }
}
data.push(10,11)
console.log(data)
data.pop()
console.log(data)
data.shift()
console.log(data)
data.unshift(10,11)
console.log(data)
data.splice(1,3)
console.log(data)
a=data.slice(4);
console.log(a)