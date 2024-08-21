let str = "";


let screen = document.querySelector(".screen")

let keys = document.querySelectorAll(".key");

keys.forEach(key => {
    key.addEventListener('click', (event) => {
        const value = event.target.getAttribute('value');
        // console.log(value);
        if(value == "del"){
            str = str.slice(0, -1)
            console.log(str);
            screen.innerHTML = `${str}`
        }
        else if(value == "="){
            let a = ""
            let b = ""
            let op = ""
            
            for (let char of str){
                if(op !== ""){
                    b +=char
                }
                else if(isNaN(char) && char != "."){
                    op = char
                }
                else{
                    a += char
                }
            }
            // console.log("a",a);
            // console.log("op",op);
            // console.log("b",b);
            calc = ((a, op, b)=>{
                if(op == "+"){
                    return(Number(a) + Number(b));
                }
                if(op == "-"){
                    return(Number(a) - Number(b));
                }
                if(op == "x"){
                    return(Number(a) * Number(b));
                }
                if(op == "÷"){
                    return(Number(a) / Number(b));
                }
            })
            screen.innerHTML = `${calc(a, op, b)}`

            str = ""            
        }

        else{
            str += value
            console.log(str);
            screen.innerHTML = `${str}`
        }
    });
});

