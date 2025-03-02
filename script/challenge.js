
    let clickedButtons = 0;
    let totalButtons = 6; 

    function handleClick(buttonId) {
        let button = document.getElementById(buttonId);
        
        clickedButtons++; 

       

        
        
        if (clickedButtons === totalButtons) {
            alert("congratulation!!! You have complate the task"); 
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



//    change color

    
        const colors =['blue','green','yellow','purple','orange','pink'];
        document.getElementById("colorBtn").addEventListener('click',function(){
            const randomColor = colors[Math.floor(Math.random ()*colors.length)];
            
            document.body.style.backgroundColor = randomColor;
        
        });
       
        

// current date
function showCurrentDate(){
    let today = new Date();
    let options = {weekday:'long', year:'numeric',month:'long', day: 'numeric',};
    document.getElementById("current-date").innerText = today.toLocaleDateString("en-us",options);

}

showCurrentDate();
