var player1_name = localStorage.getItem("Player 1");
var player2_name = localStorage.getItem("Player 2");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    var number1 = document.getElementById("number1_input").value;
    var number2 = document.getElementById("number2_input").value;
    var actual_answer = parseInt(number1) * parseInt(number2);
    console.log(actual_answer);

    var question_number = "<h4>" + number1 + " × " + number2 + "</h4>";
    var input_box = "<br> Answer: <br> <input type='number' id='input_check_box' class='form-control'>";
    var check_button = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
    var row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    
    document.getElementById("number1_input").value = "";
    document.getElementById("number2_input").value = "";
}