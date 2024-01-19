let data = [2,5,8,1,4,3,7,2,0,10]
// for(let i in data){
//     console.log(i)
// }

for(let i=0;i<data.length;i++){
    // console.log(data[i])
    document.write(`The ${data[i]} is at index ${i} <br>`)
}

const field= document.querySelector("#fld")
const btn = document.querySelector("#btn")
const output = document.querySelector(".div1");
btn.addEventListener("click",(event)=>{
    event.preventDefault();
    let fieldVal = field.value;

    if(!fieldVal){
        alert("enter required values");
        return
    }
    else{
        if(fieldVal.length == 5){
            output.innerHTML += `<p>Hello Mr. ${fieldVal}</p>`

        }
        else{
            alert("Must 5 characters!")
            return
        }
    }
    field.value = "";

})
