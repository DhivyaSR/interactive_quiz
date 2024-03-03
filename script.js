document.getElementsByClassName('question_box')[0].style.display = "block";

function next(id){
    document.getElementsByClassName('question_box')[id-1].style.display = "none";
    document.getElementsByClassName('question_box')[id].style.display = "block";
}

function result(){
    var score = 0;
    if(document.getElementById('correct1').checked){
        score++;
    }
    if(document.getElementById('correct2').checked){
        score++;
    }
    if(document.getElementById('correct3').checked){
        score++;
    }
    document.getElementById('score_card').textContent = "Score : "+score;
    //document.querySelectorAll('.question_box').style.display = "none";
    var elems = document.getElementsByClassName('question_box');
    for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'none';
    }
   document.querySelector('.score_board').style.display = "block";
}

function close_score(){
    document.querySelector('.score_board').style.display = "none";
    document.getElementsByClassName('question_box')[0].style.display = "block";
    clearRadio(); 
}

function clearRadio(){
    document.getElementsByTagName('radio').checked = false;
    var question_list = ["question1","question2","question3"];
    for(var j=0;j<question_list.length;j++){
        var ele = document.getElementsByName(question_list[j]);
        for(var i=0;i<ele.length;i++)
            ele[i].checked = false;
        }
    }
    
    