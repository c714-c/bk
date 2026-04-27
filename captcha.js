let x, y;

function generateProblem() {
    x = Math.floor(Math.random() * 13) + 2;
    y = Math.floor(Math.random() * 13) + 2;
    document.getElementById("n1").innerHTML = x;
    document.getElementById("n2").innerHTML = y;
    document.getElementById("answer").value = "";
}

generateProblem();
function enter() {
    const ans = document.getElementById("answer").value;

    if (ans != x * y) {
        document.getElementById("msg").innerHTML = "Try again, robot!";
        generateProblem();
    } else {
        document.getElementById("msg").innerHTML = "Verified Human, redirecting...";
        setTimeout(() => {
            window.location.href = "index.html";
        }, 3500);
    }
}