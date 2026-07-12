// ===============================
// ELEMENTS
// ===============================

const percentageInput = document.getElementById("percentage");

const progressCircle = document.getElementById("progress");

const percentValue = document.getElementById("percentValue");

const reportCard = document.getElementById("reportCard");

const quoteBox = document.getElementById("quoteBox");

const showPercentage = document.getElementById("showPercentage");

const grade = document.getElementById("grade");

const status = document.getElementById("status");

const performance = document.getElementById("performance");

const quote = document.getElementById("quote");


// ===============================
// ENTER KEY SUPPORT
// ===============================

percentageInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        checkGrade();

    }

});


// ===============================
// CHECK GRADE
// ===============================

function checkGrade() {

    let percentage = Number(percentageInput.value);

    // Validation

    if (percentageInput.value === "") {

        alert("Please enter your percentage.");

        percentageInput.focus();

        return;

    }

    if (percentage < 0 || percentage > 100) {

        alert("Percentage must be between 0 and 100.");

        percentageInput.focus();

        return;

    }

    // Show Result Boxes

    reportCard.style.display = "block";

    quoteBox.style.display = "block";


    // Percentage

    showPercentage.innerHTML = percentage + "%";

    percentValue.innerHTML = percentage + "%";


    // Progress Ring Animation

    const radius = 70;

    const circumference = 2 * Math.PI * radius;

    progressCircle.style.strokeDasharray = circumference;

    const offset = circumference - (percentage / 100) * circumference;

    progressCircle.style.strokeDashoffset = offset;


    // Variables

    let userGrade = "";
    let userStatus = "";
    let userPerformance = "";
    let userQuote = "";
    let color = "#FFD464";


    // ==========================
    // IF ELSE IF
    // ==========================

    if (percentage >= 90) {

        userGrade = "A+";
        userStatus = "PASS ✅";
        userPerformance = "Outstanding";
        userQuote = "Success is the result of hard work and consistency.";

        color = "#FFD700";

        // Confetti

        if (typeof startConfetti === "function") {

            startConfetti();

            setTimeout(stopConfetti, 4000);

        }

    }

    else if (percentage >= 80) {

        userGrade = "A";
        userStatus = "PASS ✅";
        userPerformance = "Excellent";
        userQuote = "Great job! Keep aiming higher.";

        color = "#2ECC71";

    }

    else if (percentage >= 70) {

        userGrade = "B";
        userStatus = "PASS ✅";
        userPerformance = "Very Good";
        userQuote = "Every step forward is progress.";

        color = "#3498DB";

    }

    else if (percentage >= 60) {

        userGrade = "C";
        userStatus = "PASS ✅";
        userPerformance = "Good";

        userQuote = "Keep practicing and you'll achieve even more.";

        color = "#F39C12";

    }

    else if (percentage >= 50) {

        userGrade = "D";

        userStatus = "PASS ✅";

        userPerformance = "Needs Improvement";

        userQuote = "Don't stop here. You can do much better next time.";

        color = "#E67E22";

    }

    else {

        userGrade = "F";

        userStatus = "FAIL ❌";

        userPerformance = "Better Luck Next Time";

        userQuote = "Failure is not the opposite of success; it's part of success.";

        color = "#E74C3C";

    }


    // Show Data

    grade.innerHTML = userGrade;

    status.innerHTML = userStatus;

    performance.innerHTML = userPerformance;

    quote.innerHTML = userQuote;


    // Change Colors

    grade.style.color = color;

    progressCircle.style.stroke = color;

}



// ===============================
// RESET
// ===============================

function resetApp() {

    percentageInput.value = "";

    percentValue.innerHTML = "0%";

    showPercentage.innerHTML = "--";

    grade.innerHTML = "--";

    status.innerHTML = "--";

    performance.innerHTML = "--";

    quote.innerHTML = "Believe in yourself and keep learning every day.";

    reportCard.style.display = "none";

    quoteBox.style.display = "none";

    progressCircle.style.strokeDashoffset = 440;

    progressCircle.style.stroke = "#FFD464";

    percentageInput.focus();

}