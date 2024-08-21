let a = "";
let b = "";
let opp = "";

let keys = document.querySelectorAll(".key");

keys.forEach(key => {
    key.addEventListener('click', (event) => {
        const value = event.target.getAttribute('value');
        // console.log(value);
        if (isNaN(value) && value != ".") {
            // Only store the operator if it hasn't been set yet
            if (value == "=") {
                if (opp == "+") {
                    console.log(Number(a) + Number(b));
                } else if (opp == "-") {
                    console.log(Number(a) - Number(b));
                } else if (opp == "*") {
                    console.log(Number(a) * Number(b));
                } else if (opp == "%") {
                    console.log(Number(a) / Number(b));
                }
                a = ""
                b = ""
                opp = ""

            } else if (opp === "") {
                opp = value;
                console.log("opp", opp);
            }
        } else {
            // If an operator has been set, store numbers in b
            if (opp !== "") {
                b += value;
                console.log("b", b);
            } else {
                // Store the first number in a
                a += value;
                console.log("a", a);
            }
        }
    });
});


