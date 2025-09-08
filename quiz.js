
var score = 0;

// BTN-1
var btn1 = document.getElementById("btn1"); 


btn1.addEventListener("click", (evt)=> {
    evt.preventDefault();
    let val = document.querySelector('input[name="ques1"]:checked');
    
    if (val) {
        if (val.value === "optA") {
            console.log("Right ans");
            score++;
            console.log(score);
        } else {
            console.log("Wrong ans");
        }
        // Disable button to prevent multiple clicks
        btn1.disabled = true;
    } else {
        alert("Please select an answer before saving.");
    }
});

// BTN-2
var btn2 = document.getElementById("btn2"); 

btn2.addEventListener("click", (evt)=> {
    evt.preventDefault();
    let val = document.querySelector('input[name="ques2"]:checked');
    
    if (val) { 
        if (val.value === "optC") {
            console.log("Right ans");
            score++;
            console.log(score);
        } else {
            console.log("Wrong ans");
        } 
        btn2.disabled = true;
    } else {
        alert("Please select an answer before saving.");
    }
});

// BTN-3
var btn3 = document.getElementById("btn3"); 

btn3.addEventListener("click", (evt)=> {
    evt.preventDefault();
    let val = document.querySelector('input[name="ques3"]:checked');
    
    if (val) {
        if (val.value === "optC") {
            console.log("Right ans");
            score++;
            console.log(score);
        } else {
            console.log("Wrong ans");
        } 
        btn3.disabled = true;
    } else {
        alert("Please select an answer before saving.");
    }
});

// BTN-4
var btn4 = document.getElementById("btn4"); 

btn4.addEventListener("click", (evt)=> {
    evt.preventDefault();
    let val = document.querySelector('input[name="ques4"]:checked');
    
    if (val) {
        if (val.value === "optB") {
            console.log("Right ans");
            score++;
            console.log(score);
        } else {
            console.log("Wrong ans");
        } 
        btn4.disabled = true;
    } else {
        alert("Please select an answer before saving.");
    }
});

// BTN-5
var btn5 = document.getElementById("btn5"); 

btn5.addEventListener("click", (evt)=> {
    evt.preventDefault();
    let val = document.querySelector('input[name="ques5"]:checked');
    
    if (val) {
        if (val.value === "optB") {
            console.log("Right ans");
            score++;
            console.log(score);
        } else {
            console.log("Wrong ans");
        } 
        btn5.disabled = true;
    } else {
        alert("Please select an answer before saving.");
    }
});


// BTN - SUBMIT 
var subBtn = document.getElementById("submit");
var finScore = document.querySelector(".screen h2"); 

subBtn.addEventListener("click", (evt)=> {
    evt.preventDefault();
    finScore.innerText = "Final Score: "+score;
});