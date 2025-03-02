
    let clickedButtons = 0;
    let totalButtons = 6; 

    function handleClick(buttonId) {
        let button = document.getElementById(buttonId);
        
        clickedButtons++; 
        
        if (clickedButtons === totalButtons) {
            alert("All ok"); 
        }
    }

    document.getElementById("btn1").addEventListener("click", function () {
        handleClick("btn1");
    });

    document.getElementById("btn2").addEventListener("click", function () {
        handleClick("btn2");
    });

    document.getElementById("btn3").addEventListener("click", function () {
        handleClick("btn3");
   });
    document.getElementById("btn4").addEventListener("click", function () {
        handleClick("btn4");
   });
    document.getElementById("btn5").addEventListener("click", function () {
        handleClick("btn5");
   });
    document.getElementById("btn6").addEventListener("click", function () {
        handleClick("btn6");
   });
