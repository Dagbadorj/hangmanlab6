var alph = ['А', 'О', 'У', 'Э', 'Ө', 'Ү', 'Ы', 'И', 'Й', 'Я', 'Е', 'Ё', 'Ю', 'Б', 'В', 'Г', 'Д', 'Ж', 'З', 'К', 'Л', 'М', 'Н'
                 , 'П', 'Р', 'С', 'Т', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ъ'];
var Asuult,category, hints, word, guess, geusses=[ ], lives, counter, space;             
var showLives = document.getElementById("mylives");
var showCatagory = document.getElementById("scatagory");
var hints = document.getElementById("hint");
var showClue = document.getElementById("clue");
var buttons = function () {
  myButtons = document.getElementById('buttons');
  letters = document.createElement('ul');
  for (var i = 0; i < alph.length; i++) {
    letters.id = 'alphabet';
    list = document.createElement('li');
    list.id = 'letter';
    list.innerHTML = alph[i];
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);
  }
}
 var selectCat = function () {
   if (category === Asuult[0]) {
     catagoryName.innerHTML = "Ямар нэртэй хот вэ?";
   } else if (category === Asuult[1]) {
     catagoryName.innerHTML = "Ямар нэртэй улс вэ?";
   } else if (category === Asuult[2]) {
     catagoryName.innerHTML = "Ямар нэртэй тив бэ?";
   }
 }
  result = function () {
   wordHolder = document.getElementById('hold');
   correct = document.createElement('ul');
   for (var i = 0; i < word.length; i++) {
     correct.setAttribute('id', 'my-word');
     guess = document.createElement('li');
     if (word[i] === "-") {
       guess.innerHTML = "━";
       space = 1;
     } else {
       guess.innerHTML = "❌";
     }
     geusses.push(guess);
     wordHolder.appendChild(correct);
     correct.appendChild(guess);
   }
 }
  comments = function () {
   showLives.innerHTML = "Таньд " + lives + " ширхэг амь байна.";
   if (lives <=0) {
     alert("Та ялагдлаа! хариулт нь: "+word+" байлаа.");
     correct.parentNode.removeChild(correct);
     letters.parentNode.removeChild(letters);
     showClue.innerHTML = "";
     context.clearRect(0, 0, 200, 200);
     play();
   }
   for (var i = 0; i < geusses.length; i++) {
     if (counter + space === geusses.length) {
         alert("Та яллаа!");
         correct.parentNode.removeChild(correct);
         letters.parentNode.removeChild(letters);
         showClue.innerHTML = "";
         context.clearRect(0, 0, 200, 200);
         play();
     }
   }
 }
 var animate = function () {
   var drawMe = lives ;
   drawArray[drawMe]();
 }
 canvas = function(){
   myStickman = document.getElementById("stickman");
   context = myStickman.getContext('2d');
   context.beginPath();
   context.strokeStyle = "#fff";
 };
  duujluur = function() {
    context.moveTo(10, 150);
    context.lineTo(150, 150);
    context.stroke();
    context.moveTo(10, 10);
    context.lineTo(10, 200);
    context.stroke();
    context.moveTo(10, 10);
    context.lineTo(100, 10);
    context.stroke();
    context.moveTo(80, 10);
    context.lineTo(80, 20);
    context.stroke();
  };
  headbody = function() {
    //huzuu
    context.moveTo(80, 41);
    context.lineTo(80, 90);
    context.stroke();
    //tolgoi
    context.beginPath();
    context.arc(80, 30, 10, 0, Math.PI*2, true);
    context.stroke();
  };
  gar = function() {
    //baruun gar
    context.moveTo(80, 50);
    context.lineTo(100, 50);
    context.stroke();
    //zuun gar
    context.moveTo(80, 50);
    context.lineTo(60, 50);
    context.stroke();
  };
 hol = function() {
   //baruun hol
    context.moveTo(80, 90);
    context.lineTo(100, 100);
    context.stroke();
    //zuun hol 
    context.moveTo(80, 90);
    context.lineTo(60, 100);
    context.stroke();
  };
 drawArray = [hol,hol, gar,  headbody, duujluur]; 
  check = function () {
   list.onclick = function () {
     var geuss = (this.innerHTML);
     for (var i = 0; i < word.length; i++) {
       if (word[i] === geuss) {
         geusses[i].innerHTML = geuss;
         counter+=1;
       } 
     }
     var j = (word.indexOf(geuss));
     if (j === -1) {
       lives --;
       animate();
       comments();
     } else {
       comments();
     }
   }
 }
 play = function () {
     Asuult = [
       ["УЛААНБААТАР", "ТОКИО", "СӨҮЛ", "БЭЭЖИН","ЛОНДОН", "ПАРИС", "БЭРЛИН", "РОМ", "МАДРИД","ЛИМА", "ВАШИНГТОН", "БРАЗИЛИА","ЖАКАРТА"],
       ["МОНГОЛ", "ЯПОН", "ХЯТАД", "ИНДОНЕЗ", "ТАЙЛАНД","АНГЛИ","ФРАНЦ","ГЕРМАН","ИТАЛИ","ПОЛАНД","АРГЕНТИН", "ЧИЛИ", "БОЛИВИА","АНУ","БРАЗИЛ"],
       ["АНТРАКТИКА", "АВСТРАЛИ", "АЗИ", "АФРИКА", "ЕВРОП","ХОЙД-АМЕРИКА", "ӨМНӨД-АМЕРИКА"]
   ];
   category = Asuult[Math.floor(Math.random() * Asuult.length)];
   word = category[Math.floor(Math.random() * category.length)];
   console.log(word);
   buttons();
   geusses = [ ];
   lives = 5;
   counter = 0;
   space = 0;
   result();
   comments();
   selectCat();
   canvas();
 }
 play();
   hint.onclick = function() {
     hints = [
       ["АЗИ тив-д байдаг хот","АЗИ тив-д байдаг хот","АЗИ тив-д байдаг хот","АЗИ тив-д байдаг хот","Европ тив-д байдаг хот","Европ тив-д байдаг хот","Европ тив-д байдаг хот","Европ тив-д байдаг хот","Европ тив-д байдаг хот","Америк тив-д байдаг хот"
      ,"Америк тив-д байдаг хот","Америк тив-д байдаг хот","Америк тив-д байдаг хот","Америк тив-д байдаг хот"],
       ["АЗИ тив-д байдаг улс","АЗИ тив-д байдаг улс","АЗИ тив-д байдаг улс","АЗИ тив-д байдаг улс","АЗИ тив-д байдаг улс"
       ,"Европ тив-д байдаг улс","Европ тив-д байдаг улс","Европ тив-д байдаг улс","Европ тив-д байдаг улс","Европ тив-д байдаг улс",
       "Америк тив-д байдаг улс","Америк тив-д байдаг улс","Америк тив-д байдаг улс","Америк тив-д байдаг улс","Америк тив-д байдаг улс","Америк тив-д байдаг улс"],
       ["ХАМГИЙН ХҮЙТЭН ТИВ","ТИВ БА УЛС","ХАМГИЙН ТОМ ГАЗАР НУТАГТАЙ ТИВ","ХАМГИЙН ХАЛУУН ТИВ","БАРУУНЫХАН","ОЛОН ҮНДЭСТЭН БАЙДАГ","КОЛОНЧИЛОГДОЖ БАЙСАН"]
   ];
   var catagoryIndex = Asuult.indexOf(category);
   var hintIndex = category.indexOf(word);
   showClue.innerHTML = hints [catagoryIndex][hintIndex];
 };
 document.getElementById('reset').onclick = function() {
   correct.parentNode.removeChild(correct);
   letters.parentNode.removeChild(letters);
   showClue.innerHTML = "&rarr;TIP&larr;";
   context.clearRect(0, 0, 200, 200);
   play();
 }