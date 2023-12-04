let name = document.getElementById('name');

let countM = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;

let rotationM = 0;
let rotation1 = 0;
let rotation2 = 0;
let rotation3 = 0;
let rotation4 = 0;
let rotation5 = 0;

let btM = document.getElementById('mainNextIcon');
let bt1 = document.getElementById('button1');
let bt2 = document.getElementById('button2');
let bt3 = document.getElementById('button3');
let bt4 = document.getElementById('button4');
let bt5 = document.getElementById('button5');

let conM = document.getElementById('mainNextText');
let con1 = document.getElementById('tableContext1');
let con2 = document.getElementById('tableContext2');
let con3 = document.getElementById('tableContext3');
let con4 = document.getElementById('tableContext4');
let con5 = document.getElementById('tableContext5');

let iconMH = document.getElementById('mainNextH');
let icon1 = document.getElementById('subMore1');
let icon2 = document.getElementById('subMore2');
let icon3 = document.getElementById('subMore3');
let icon4 = document.getElementById('subMore4');
let icon5 = document.getElementById('subMore5');

bt1.addEventListener('click', function() {
  if(count1==0){
    con1.style.display = 'block';
    icon1.style.transform = 'rotate(90deg)';
    count1 = 1;
    setTimeout(() => con1.style.opacity = '1', 150);
  }else{
    icon1.style.transform = 'rotate(0deg)';
    con1.style.opacity = '0';
    con1.style.display = 'none';
    count1 = 0;
  }
})

bt2.addEventListener('click', function() {
  if(count2==0){
    con2.style.display = 'block';
    icon2.style.transform = 'rotate(90deg)';
    count2 = 1;
    setTimeout(() => con2.style.opacity = '1', 150);
  }else{
    icon2.style.transform = 'rotate(0deg)';
    con2.style.opacity = '0';
    con2.style.display = 'none';
    count2 = 0;
  }
})

bt3.addEventListener('click', function() {
  if(count3==0){
    con3.style.display = 'block';
    icon3.style.transform = 'rotate(90deg)';
    count3 = 1;
    setTimeout(() => con3.style.opacity = '1', 150);
  }else{
    icon3.style.transform = 'rotate(0deg)';
    con3.style.opacity = '0';
    con3.style.display = 'none';
    count3 = 0;
  }
})

btM.addEventListener('click', function() {
  if(countM==0){
    conM.style.display = 'block';
    iconMH.style.transform = 'rotate(90deg)';
    name.innerHTML = '접기';
    countM = 1;
    setTimeout(() => conM.style.opacity = '1', 150);
  }else{
    iconMH.style.transform = 'rotate(0deg)';
    conM.style.opacity = '0';
    conM.style.display = 'none';
    name.innerHTML = '더보기';
    countM = 0;
  }
})

bt4.addEventListener('click', function() {
  if(count4==0){
    con4.style.display = 'block';
    icon4.style.transform = 'rotate(90deg)';
    count4 = 1;
    setTimeout(() => con4.style.opacity = '1', 150);
  }else{
    icon4.style.transform = 'rotate(0deg)';
    con4.style.opacity = '0';
    con4.style.display = 'none';
    count4 = 0;
  }
})

bt5.addEventListener('click', function() {
  if(count5==0){
    con5.style.display = 'block';
    icon5.style.transform = 'rotate(90deg)';
    count5 = 1;
    setTimeout(() => con5.style.opacity = '1', 150);
  }else{
    icon5.style.transform = 'rotate(0deg)';
    con5.style.opacity = '0';
    con5.style.display = 'none';
    count5 = 0;
  }
})