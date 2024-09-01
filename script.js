function Next(){
    const see = `where are you`
    document.getElementById(`first`).innerHTML=`Wanna see my next?`;
    document.getElementById(`first`).style.color = `aquamarine`;
    document.getElementById(`button2`).style.display= `block`;
    document.getElementById(`button1`).style.display= `none`;
};

function Previous(){
    document.getElementById(`first`).innerHTML=`This is my fisrt time making a webpage dynamic`;
    document.getElementById(`first`).style.color = `burlywood`;
    document.getElementById(`button1`).style.display= `block`;
    document.getElementById(`button2`).style.display= `none`;
};
var num = 0
function next_pic(i){
    document.getElementById(`img${i}`).style.display = 'none';
    document.getElementById(`img${(i%26)+1}`).style.display = 'flex';
    document.getElementById('btn_pic1').style.backgroundImage = `url('pics/btn_left.svg')`;
    document.getElementById('btn_pic1').style.cursor = `pointer`;
};
function previous_pic(i){
    document.getElementById(`img${i}`).style.display = 'none';
    document.getElementById(`img${(i%26)-1}`).style.display = 'flex';
    document.getElementById('btn_pic1').style.backgroundImage = `none`;
    document.getElementById('btn_pic1').style.cursor = `auto`;
};

var _input = prompt('What is your name? ','Who the fuck are you');
if (_input !== 'null'){
    document.querySelector('#na').innerHTML = _input;
}
