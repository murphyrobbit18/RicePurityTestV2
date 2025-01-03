//function to calculate the user's score
function calculateScore(){

    //sets the maximum score as 100
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let score = 100;
            
    //for each checkbox that is selected, 1 is taken from the total score
    checkboxes.forEach((checkbox) => { 
        if (checkbox.checked){
        score--;
    }

    });
    
    const resultDiv = document.getElementById('result'); 
    resultDiv.textContent = `Your score:`;
    resultDiv.style.display = 'block'; 

    const resultDiv2 = document.getElementById('result2'); 
    resultDiv2.textContent = `${score}`;
    resultDiv2.style.display = 'block'; 

    document.getElementById("popup").style.display = "block";
}

//function to clear the checkboxes
function clearBoxes(){

    //makes it so that the checkboxes being checked is made false
    const questions = document.querySelectorAll('input[type = "checkbox"]')
    questions.forEach((question) => {
        question.checked = false;

    });
    
    //clears the screen of checked checkboxes and score
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'none'; 
    
}

function exitWindow() {
    document.getElementById("popup").style.display = "none";
}