 // ===============================
// SELECT ELEMENTS
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

percentageInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        checkGrade();
    }

});

// ===============================
// PROGRESS CIRCLE
// ===============================

const radius = 70;
const circumference = 2 * Math.PI * radius;

progressCircle.style.strokeDasharray = circumference;
progressCircle.style.strokeDashoffset = circumference;

// ===============================
// CHECK GRADE
// ===============================

function checkGrade() {

    const percentage = Number(percentageInput.value);

    // Validation

    if (percentageInput.value.trim() === "") {

        alert("Please enter your percentage.");
        percentageInput.focus();
        return;

    }

    if (percentage < 0 || percentage > 100) {

        alert("Please enter a percentage between 0 and 100.");
        percentageInput.focus();
        return;

    }

    reportCard.style.display = "block";
    quoteBox.style.display = "block";

    // Update Percentage

    showPercentage.textContent = percentage + "%";
    percentValue.textContent = percentage + "%";

    // Progress Circle

    const offset = circumference - (percentage / 100) * circumference;

    progressCircle.style.strokeDashoffset = offset;

    // Variables

    let userGrade = "";
    let userStatus = "";
    let userPerformance = "";
    let userQuote = "";

    let circleColor = "";
    let cardColor = "";

    // ===============================
    // IF ELSE
    // ===============================

    if (percentage >= 90) {

        userGrade = "A+";
        userStatus = "PASS ✅";
        userPerformance = "Outstanding";
        userQuote = "Excellent work! Keep reaching for new heights.";

        circleColor = "#FFD464";
        cardColor = "#B0183D";

        if (typeof startConfetti === "function") {
            startConfetti();
            setTimeout(stopConfetti, 4000);
        }

    }

    else if (percentage >= 80) {

        userGrade = "A";
        userStatus = "PASS ✅";
        userPerformance = "Excellent";
        userQuote = "Amazing! Keep up the great work.";

        circleColor = "#FFD464";
        cardColor = "#C62852";

    }

    else if (percentage >= 70) {

        userGrade = "B";
        userStatus = "PASS ✅";
        userPerformance = "Very Good";
        userQuote = "You're doing great. Keep improving every day.";

        circleColor = "#FCEDD8";
        cardColor = "#E23C64";

    }

    else if (percentage >= 60) {

        userGrade = "C";
        userStatus = "PASS ✅";
        userPerformance = "Good";
        userQuote = "Good effort! Keep practicing.";

        circleColor = "#FCEDD8";
        cardColor = "#FF5E5E";

    }

    else if (percentage >= 50) {

        userGrade = "D";
        userStatus = "PASS ✅";
        userPerformance = "Needs Improvement";
        userQuote = "Don't stop now. Every step counts.";

        circleColor = "#FCEDD8";
        cardColor = "#FF8A65";

    }

    else {

        userGrade = "F";
        userStatus = "FAIL ❌";
        userPerformance = "Better Luck Next Time";
        userQuote = "Failure is not the end. Learn, improve, and come back stronger.";

        circleColor = "#FCEDD8";
        cardColor = "#D84315";

    }

    // ===============================
    // DISPLAY RESULT
    // ===============================

    grade.textContent = userGrade;
    status.textContent = userStatus;
    performance.textContent = userPerformance;
    quote.textContent = userQuote;

    // Grade Style

    grade.style.color = "#FFD464";
    grade.style.fontSize = "2rem";
    grade.style.fontWeight = "700";

    // Circle Color

    progressCircle.style.stroke = circleColor;

    // Report Card Theme

    reportCard.style.background = `linear-gradient(135deg, ${cardColor}, #B0183D)`;

    reportCard.style.boxShadow = `0 15px 35px ${cardColor}55`;

}

// ===============================
// RESET APP
// ===============================

function resetApp() {

    percentageInput.value = "";

    percentValue.textContent = "0%";

    showPercentage.textContent = "--";
    grade.textContent = "--";
    status.textContent = "--";
    performance.textContent = "--";

    quote.textContent = "Believe in yourself and keep learning every day.";

    reportCard.style.display = "none";
    quoteBox.style.display = "none";

    progressCircle.style.strokeDashoffset = circumference;
    progressCircle.style.stroke = "#FFD464";

    reportCard.style.background = "rgba(176,24,61,.90)";
    reportCard.style.boxShadow = "0 15px 35px rgba(0,0,0,.18)";

    percentageInput.focus();

}