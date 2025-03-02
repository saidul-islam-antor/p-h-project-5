document.addEventListener("DOMContentLoaded", function () {
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");
    let btn5 = document.getElementById("btn5");
    let btn6 = document.getElementById("btn6");
    let historyList = document.getElementById("historyList");
    let clearHistoryBtn = document.getElementById("clearHistory");

    
    function addToHistory(btnName) {
        let currentTime = new Date().toLocaleTimeString();
        let listItem = document.createElement("li");
        listItem.innerText =`
         You have  Complete the task ${btnName} at ${currentTime};
       
        
        `
        historyList.appendChild(listItem);
    }

    // প্রতিটি বাটনের জন্য ইভেন্ট লিসেনার যুক্ত করা
    btn1.addEventListener("click", function () {
        addToHistory("Fix Mobile Button Issue");
    });

    btn2.addEventListener("click", function () {
        addToHistory("Add Dark Mode");
    });

    btn3.addEventListener("click", function () {
        addToHistory("Optimize Home Page");
    });
    btn4.addEventListener("click", function () {
        addToHistory("Add new emoji 🤲");
    });
    btn5.addEventListener("click", function () {
        addToHistory("Integrate OpenAI API");
    });
    btn6.addEventListener("click", function () {
        addToHistory("Improve Job searching");
    });

    // Clear History বাটন ক্লিক করলে হিস্ট্রি মুছে যাবে
    clearHistoryBtn.addEventListener("click", function () {
        historyList.innerHTML = "";
    });
});