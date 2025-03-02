


    const taskAssigned = document.getElementById("taskAssigned");
    const completedCount = document.getElementById("completedCount");

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
        const assignedValue = parseInt(taskAssigned.textContent);
        const completedValue = parseInt(completedCount.textContent);

        if (assignedValue > 0) {
            taskAssigned.textContent = assignedValue - 1;
            completedCount.textContent = completedValue + 1;



        }
    }
