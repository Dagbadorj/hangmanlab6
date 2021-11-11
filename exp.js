window.onload = function () {
    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
          'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
          'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var Asuult;         // Array of topics
    var chosenCategory;     // Selected catagory
    var getHint ;          // Word getHint
    var word ;              // Selected word
    var guess ;             // Geuss
    var geusses = [ ];      // Stored geusses
    var lives ;             // Lives
    var counter ;           // Count correct geusses
    var space;              // Number of spaces in word '-'
  
    // Get elements
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");
    // create alphabet ul
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
    // Select Catagory
    var selectCat = function () {
      if (chosenCategory === Asuult[0]) {
        catagoryName.innerHTML = "Ямар нэртэй хот вэ?";
      } else if (chosenCategory === Asuult[1]) {
        catagoryName.innerHTML = "Ямар нэртэй улс вэ?";
      } else if (chosenCategory === Asuult[2]) {
        catagoryName.innerHTML = "Ямар нэртэй тив бэ?";
      }
    }
    // Create geusses ul
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
    // Show lives
     comments = function () {
      showLives.innerHTML = "You have " + lives + " lives";
      if (lives <=0) {
        alert("GAME OVER!");
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
        showClue.innerHTML = "";
        context.clearRect(0, 0, 400, 400);
        play();
      }
      for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
            alert("YOU WIN!");
            correct.parentNode.removeChild(correct);
            letters.parentNode.removeChild(letters);
            showClue.innerHTML = "";
            context.clearRect(0, 0, 400, 400);
            play();
        }
      }
    }
        // Animate man
    var animate = function () {
      var drawMe = lives ;
      drawArray[drawMe]();
    }
     // Hangman
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
    // OnClick Function
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
          ["ULAANBAATAR", "TOKYO", "SEOUL", "BEIJING", "HONGKONG","LONDON", "PARIS", "BERLIN", "ROME", "MADRID","LIMA", "WASHINGTON", "BRASILIA", "LAPAZ", "SANTIAGO"],
          ["MONGOLIA", "TOKYO", "CHINA", "INDONESIA", "THAILAND","ENGLAND","FRANCE","GERMAN","ITALY","POLAND","ARGENTINA", "CHILE", "BOLIVIA","USA","BRAZIL"],
          ["ANTRACTICA", "AUSTRALIA", "ASIA", "AFRICA", "EUROPE","NORTH AMERICA", "SOUTH AMERICA"]
      ];
      chosenCategory = Asuult[Math.floor(Math.random() * Asuult.length)];
      word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
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
          ["LOCATED IN ASIA(CAPITAL CITY)","LOCATED IN ASIA(CAPITAL CITY)","LOCATED IN ASIA(CAPITAL CITY)","LOCATED IN ASIA(CAPITAL CITY)","LOCATED IN ASIA(CAPITAL CITY)","LOCATED IN EUROPE(CAPITAL CITY)","LOCATED IN EUROPE(CAPITAL CITY)","LOCATED IN EUROPE(CAPITAL CITY)","LOCATED IN EUROPE(CAPITAL CITY)","LOCATED IN EUROPE(CAPITAL CITY)","LOCATED IN AMERICA(CAPITAL CITY)","LOCATED IN AMERICA(CAPITAL CITY)","LOCATED IN AMERICA(CAPITAL CITY)","LOCATED IN AMERICA(CAPITAL CITY)","LOCATED IN AMERICA(CAPITAL CITY)"],
          ["LOCATED IN ASIA(COUNTRY)","LOCATED IN ASIA(COUNTRY)","LOCATED IN ASIA(COUNTRY)","LOCATED IN ASIA(COUNTRY)","LOCATED IN ASIA(COUNTRY)","LOCATED IN EUROPE(COUNTRY)","LOCATED IN EUROPE(COUNTRY)","LOCATED IN EUROPE(COUNTRY)","LOCATED IN EUROPE(COUNTRY)","LOCATED IN EUROPE(COUNTRY)","LOCATED IN AMERICA(COUNTRY)","LOCATED IN AMERICA(COUNTRY)","LOCATED IN AMERICA(COUNTRY)","LOCATED IN AMERICA(COUNTRY)","LOCATED IN AMERICA(COUNTRY)"],
          ["ХАМГИЙН ХҮЙТЭН ТИВ","ТИВ БА УЛС","ХАМГИЙН ТОМ ГАЗАР НУТАГТАЙ ТИВ","ХАМГИЙН ХАЛУУН ТИВ","БАРУУНЫХАН","ОЛОН ҮНДЭСТЭН БАЙДАГ","КОЛОНЧИЛОГДОЖ БАЙСАН"]
      ];
      var catagoryIndex = Asuult.indexOf(chosenCategory);
      var hintIndex = chosenCategory.indexOf(word);
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
  
  
  