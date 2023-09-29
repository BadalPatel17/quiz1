document.getElementById("btn").addEventListener("click", btnclicked);
function btnclicked() {
 let correct = 0;
 let ans1 = document.getElementById("question1").value.toLowerCase();
let ans2 = document.getElementById("question2").value.toLowerCase();
let ans3 = document.getElementById("question3").value.toLowerCase();
let ans4 = document.getElementById("question4").value.toLowerCase();

if (ans1 === "2") {
correct = correct + 1;
} else {
document.getElementById("output1").innerHTML = 2;
}

if (ans2 === "feather") {
correct = correct + 1;
} else {
    document.getElementById("output2").innerHTML = feather;
}

if (ans3 === "yonex") {
correct = correct + 1;
} else {
    document.getElementById("output3").innerHTML = yonex;
}

if (ans4 === "close") {
correct = correct + 1;
} else {
    document.getElementById("output4").innerHTML = close;
}


if (correct === 4) {
document.getElementById("output").innerHTML = `<p>4/4 (100%) Genius!</p>`;
} else if (correct === 3) {
document.getElementById("output").innerHTML = `<p>3/4 (75%) Good Try!</p>`;
} else if (correct === 2) {
document.getElementById("output").innerHTML = `<p>2/4 (50%) Almost failed!</p>`;
} else if (correct === 1) {
document.getElementById(
"output"
).innerHTML = `<p>1/4 (25%) You failed horrificly!</p>`;
} else if (correct === 0) {
document.getElementById(
"output"
).innerHTML = `<p>0/4 (0%) Did you even try?</p>`;
}
}