window.onload = function () {
  var alphabet = ['А', 'О', 'У', 'Э', 'Ө', 'Ү', 'Ы', 'И', 'Й', 'Я', 'Е', 'Ё', 'Ю', 'Б', 'В', 'Г', 'Д', 'Ж', 'З', 'К', 'Л', 'М', 'Н'
                 , 'П', 'Р', 'С', 'Т', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'щ', 'ь', 'ъ'];
 var Asuult; 
 var category;    
 var hints ;      
 var word ;           
 var guess ;             
 var geusses = [ ];    
 var lives ;            
 var counter ;         
 var space;             
 var showLives = document.getElementById("mylives");
 var showCatagory = document.getElementById("scatagory");
 var hints = document.getElementById("hint");
 var showClue = document.getElementById("clue");
 var buttons = function () {
   myButtons = document.getElementById('buttons');
   letters = document.createElement('ul');
   for (var i = 0; i < alphabet.length; i++) {
     letters.id = 'alphabet';
     list = document.createElement('li');
     list.id = 'letter';
     list.innerHTML = alphabet[i];
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
     guess.setAttribute('class', 'guess');
     if (word[i] === "-") {
       guess.innerHTML = "-";
       space = 1;
     } else {
       guess.innerHTML = "_";
     }

     geusses.push(guess);
     wordHolder.appendChild(correct);
     correct.appendChild(guess);
   }
 }
  comments = function () {
   showLives.innerHTML = "Таньд " + lives + " ширхэг амь байна.";
   if (lives <=0) {
     alert("Та ялагдлаа!");
     correct.parentNode.removeChild(correct);
     letters.parentNode.removeChild(letters);
     showClue.innerHTML = "";
     context.clearRect(0, 0, 400, 400);
     play();
   }
   for (var i = 0; i < geusses.length; i++) {
     if (counter + space === geusses.length) {
         alert("Та яллаа!");
         correct.parentNode.removeChild(correct);
         letters.parentNode.removeChild(letters);
         showClue.innerHTML = "";
         context.clearRect(0, 0, 400, 400);
         play();
     }
   }
 }
 var animate = function () {
   var drawMe = lives ;
   drawArray[drawMe]();
 }
 canvas =  function(){

   myStickman = document.getElementById("stickman");
   context = myStickman.getContext('2d');
   context.beginPath();
   context.strokeStyle = "#fff";
   context.lineWidth = 2;
 };
 draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
   context.moveTo($pathFromx, $pathFromy);
   context.lineTo($pathTox, $pathToy);
   context.stroke(); 
}

  duujluur1 = function() {
    draw (0, 150, 150, 150);
    draw (10, 0, 10, 600);
  };
  
  duujluur2 = function() {
     draw (0, 5, 70, 5);
     draw (60, 5, 60, 15);
  };
  headbody = function() {
    draw (60, 36, 60, 70); 
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI*2, true);
    context.stroke();
  };
  gar = function() {
    draw (60, 46, 100, 50);
    draw (60, 46, 20, 50);
  };
 hol = function() {
    draw (60, 70, 100, 100);
    draw (60, 70, 20, 100);
  };
 drawArray = [hol, gar,  headbody, duujluur2, duujluur1]; 
  check = function () {
   list.onclick = function () {
     var geuss = (this.innerHTML);
     this.setAttribute("class", "active");
     this.onclick = null;
     for (var i = 0; i < word.length; i++) {
       if (word[i] === geuss) {
         geusses[i].innerHTML = geuss;
         counter += 1;
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
 // Play
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
 // Hint
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
   showClue.innerHTML = "";
   context.clearRect(0, 0, 400, 400);
   play();
 }
}


