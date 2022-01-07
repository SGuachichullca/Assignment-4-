
//Q1

function q1Argue () {
    document.querySelector(".q1 p").innerHTML = "    I'm right!"
}

function q1ArgueBack () {
    document.querySelector(".q1 p").innerHTML = "   No, I'm right!";
}
//////////////////////////////////////////////////////////////

//Q2

const hoverElement = document.querySelector(".q2 h2");

hoverElement.addEventListener("mouseover", function (event) {
    alert("Hey! I told you not hover over me!");

})
//////////////////////////////////////////////////////////////

//Q4

    function q4Submit() {
        
        const password = document.getElementById("password");
        const heading = document.querySelector(".prompt");
            
        if (password.value == "password123") {
            heading.innerHTML = "Welcome " + document.querySelector("#username").value + ".";
        } else {
            alert ("The password you have entered is invalid. Please try again.")
        }
    }
