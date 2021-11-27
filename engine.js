window.onload = function () {

  var alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж',
'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'ө', 'п', 'р',
'с', 'т', 'у', 'ү', 'ф', 'х', 'ц', 'ч','ш','щ','ъ','ь','ы','э','ю','я','-'];
  
  var categories;         
  var chosenCategory;    
  var getHint ;          
  var word ;              
  var guess ;            
  var guesses = [ ];      
  var lives ;             
  var counter ;          
  var space;             
  guess
  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  // var getHint = document.getElementById("hint");
  // var showClue = document.getElementById("clue");



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
      if (chosenCategory === categories[0]) {
        catagoryName.innerHTML = "Жавхлан багш гоё багш тэ ? ";
      } else if (chosenCategory === categories[1]) {
        catagoryName.innerHTML = "Хамгийн анх сансарт гарсан хүний нэр";
      } else if (chosenCategory === categories[2]) {
        catagoryName.innerHTML = "2 цагийн хугацаанд 5879 удаа нэг үйлдэлийг хийж геннисийн номонд бичигдсэн тэр ямар үйлдэл вэ ?";
      }
      else if(chosenCategory === categories[3]){
        catagoryName.innerHTML = "Харанхуйд хамгийн холоос тод харагддаг гэрэл"
      }
      else if(chosenCategory === categories[4]){
          catagoryName.innerHTML = "Эхийн санаа үрд үрийн санаа хэнд гэдэг вэ ?"
        }

    }

  // Create guesses ul
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

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = "Таньд " + lives + " амь байна";
    if (lives < 1) {
      showLives.innerHTML = "Та ялагдлаа!!!";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "Та ялж чадлаа баяр хүргэе!!!";
      }
    }
  }
  var l=0;
  var t=0;
  // OnClick Function
   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      if(word[t]==guess)
      {
        comments();
      }
      else{
        
        alert(word[t] +" "+ guess);
        alert(word);

        lives -= 1;
        document.getElementById("hangmanPic").src= '/image/' + lives + '.png';
        comments();
      }
        if (word[t] === guess) {
          guesses[l].innerHTML = guess;
          counter += 1;
          t++;
          l++;
      }
    
    }
  }

  

  play = function () {
      categories = [
          ["тийм"],
          ["баба-яага"],
          ["зүү сүвлэх"],
          ["лааны гэрэл"],
          ["сүмбээд"]
      ];
  
      chosenCategory = categories[Math.floor(Math.random() * categories.length)];
      word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
      word = word.replace(/\s/g, "-");
      console.log(word);
      buttons();
  
      guesses = [ ];
      lives = 5;
      counter = 0;
      space = 0;
      result();
      comments();
      selectCat();
      // updateHangmanPicture();
    }
  
    play();

    document.getElementById('reset').onclick = function() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "&rarr;TIP&larr;";
      context.clearRect(0, 0, 200, 200);
      play();
    }
}