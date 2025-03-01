// document.getElementById("btn1").addEventListener("click",
//     function () {
//         const taskAssingned = document.getElementById("taskAssigned")
//         const completedCount = document.getElementById("completedCount")
//         const completeButtons = document.getElementById("btn1")
//         for (i = 0, i < completeButtons.length; i++) {
//             completeButtons[i].addEventListener('click', function () {
//                 const assignedValue = parseInt(taskAssingned.textContent);
//                 const completedValue = parseInt(completedCount.textContent);
//                 if (assignedValue > 0) {
//                     taskAssingned.textContent = assignedValue - 1;

//                 }
//                 else {
//                     completedCount.textContent= completedValue+1;
//                 }
//             })
//         }
//     })


document.addEventListener("DOMContentLoaded", function () {
    let taskAssigned = document.getElementById("taskAssigned");
    let completedCount = document.getElementById("completedCount");

    document.getElementById("btn1").addEventListener("click", function () {
        updateTask("btn1");
    });

    document.getElementById("btn2").addEventListener("click", function () {
        updateTask("btn2");
    });

    document.getElementById("btn3").addEventListener("click", function () {
        updateTask("btn3");
    });
    document.getElementById("btn4").addEventListener("click", function () {
        updateTask("btn4");
    });
    document.getElementById("btn5").addEventListener("click", function () {
        updateTask("btn5");
    });
    document.getElementById("btn6").addEventListener("click", function () {
        updateTask("btn6");
    });

    function updateTask(buttonId) {
        let assignedValue = parseInt(taskAssigned.textContent);
        let completedValue = parseInt(completedCount.textContent);

        if (assignedValue > 0) {
            taskAssigned.textContent = assignedValue - 1;
            completedCount.textContent = completedValue + 1;
            
            
     
        }
    }
});