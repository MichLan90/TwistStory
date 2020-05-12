window.onload = () => {
  //Skapar ny div där texten skall stå
  let resultHeader = document.createElement("h1");
  document.body.append(resultHeader);
  resultHeader.className = "resultH1";
  let textOutput = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/j6b4hvuepj633fegbnyg.webp");
  img.className = 'img'
  document.body.append(img);
  textOutput.className = "textOutput";
  document.body.append(textOutput);




  //Skapar första meddelande "1"
  let msg = 'You just woke up in a room you dont recognize. It is dark. What do you do?';
  textOutput.innerHTML = msg;

  //Skapar val 1 av 2 i steg 1 "Button 1 2a)"
  let button2a = document.createElement('button');
  document.body.append(button2a);
  button2a.className = 'button2a'
  button2a.innerText = 'WAKE UP AND EXPLORE'

  //Skapar val 2 av 2 i steg 1 "Button 2 2b)"
  let button2b = document.createElement('button');
  document.body.append(button2b);
  button2b.className = 'button2b'
  button2b.innerText = 'STAY IN BED AND WAIT FOR SOMETHING TO HAPPEN'

  //Val 1 av 2 i steg 1 "Button 1 2a)"
  button2a.onclick = function twoA() {
    let msg: string = "You went to the kitchen and you see blood on the floor that leads to the garden.";
    let textOutput = <HTMLElement>document.querySelector(".textOutput");
    img.setAttribute("src", "https://i.pinimg.com/originals/40/e4/44/40e4442d230f10425b3013d9193985e7.jpg");
    textOutput.innerHTML = msg;
    button2a.innerText = 'FOLLOW THE BLOOD STAINS'
    button2b.innerText = 'GO OUT FROM THE FRONT DOOR AND LOOK FOR HELP'

    //Val 1 av 2 i steg 2 
    button2a.onclick = function threeA() {
      let msg: string = "They lead to the shed. Do you want to open it and see?";
      let textOutput = <HTMLElement>document.querySelector(".textOutput");
      img.setAttribute("src", "https://3.bp.blogspot.com/-BAhGv-2F1k8/TzUn1naRWbI/AAAAAAAAAEw/yZLnoot6Ino/s1600/shed.jpg");
      textOutput.innerHTML = msg;
      button2a.innerText = 'YES'
      button2b.innerText = 'NO'

      //Val 1 av 2 i steg 3 -> Result F "4a"
      button2a.onclick = function resultF() {
        let textOutput = <HTMLElement>document.querySelector(".textOutput");
        let resultHeader = <HTMLElement>document.querySelector(".resultH1");
        img.setAttribute("src", "https://static.wixstatic.com/media/e8cafb_5ff989d4045642c5b1f7511ccd2aea36~mv2.jpg");

        resultHeader.innerHTML = "RESULT F: Biggest Hero"
        textOutput.innerHTML = "You woke up in your own room and realize it was all a dream. You have followed the path that led you to be the biggest hero, taking the most risky choice every time. Congratulations!";
        let hiddenButton = <HTMLElement>document.querySelector(".button2b");
        //För att dölja knapp 2
        hiddenButton.style.display = "none";
        button2a.innerText = 'Play Again';

        //Replayknapp
        button2a.onclick = function restartGame() {
          location.reload();
        }
      }
      //val 2 av 2 i steg 3 -> Result E "4b"
      button2b.onclick = function resultE() {
        let textOutput = <HTMLElement>document.querySelector(".textOutput");
        let resultHeader = <HTMLElement>document.querySelector(".resultH1");
        img.setAttribute("src", "https://miro.medium.com/max/4096/1*OmXjXB5KztYdxV_BgKIGxg.jpeg");

        resultHeader.innerHTML = "RESULT E: ALMOST A HERO... BUT STILL A ZERO"
        textOutput.innerHTML = "You woke up in your own room and realize it was all a dream. You started so bravely by following the danger to the source but freaked out the last minute.";
        let hiddenButton = <HTMLElement>document.querySelector(".button2b");
        //För att dölja knapp 2
        hiddenButton.style.display = "none";
        button2a.innerText = 'Play Again';

        //Replayknapp
        button2a.onclick = function restartGame() {
          location.reload();
        }
      }
    }

    //Val 2 av 2 i steg 2 "3b"
    button2b.onclick = function resultD() {
      let textOutput = <HTMLElement>document.querySelector(".textOutput");
      let resultHeader = <HTMLElement>document.querySelector(".resultH1");
      img.setAttribute("src", "https://www.nbcsports.com/northwest/sites/csnnw/files/2019/07/03/screen_shot_2019-07-03_at_10.55.36_am.png");

      resultHeader.innerHTML = "RESULT D: START AS A HERO, END AS A ZERO"
      textOutput.innerHTML = "You woke up in your own room and realize it was all a dream. You stood up and went to explore the dark house which was kind of brave but then freaked out when you saw the blood.";
      let hiddenButton = <HTMLElement>document.querySelector(".button2b");
      //För att dölja knapp 2
      hiddenButton.style.display = "none";
      button2a.innerText = 'Play Again';

      //Replayknapp
      button2a.onclick = function restartGame() {
        location.reload();
      }

    }

  }


  button2b.onclick = function twoB() {
    let msg: string = "After a while you hear somebody scream.";
    let textOutput = <HTMLElement>document.querySelector(".textOutput");
    img.setAttribute("src", "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/sn-scream.jpg?itok=AXrCdWlt");
    textOutput.innerHTML = msg;
    button2a.innerText = 'FOLLOW THE SCREAMING'
    button2b.innerText = 'GO OUT FROM THE FRONT DOOR AND LOOK FOR HELP'

    //Val 1 av 2 i steg 3 "3c"
    button2a.onclick = function threeC() {
      let msg: string = "It Leads you to the shed. Do you want to open it?";
      let textOutput = <HTMLElement>document.querySelector(".textOutput");
      img.setAttribute("src", "https://3.bp.blogspot.com/-BAhGv-2F1k8/TzUn1naRWbI/AAAAAAAAAEw/yZLnoot6Ino/s1600/shed.jpg");
      textOutput.innerHTML = msg;
      button2a.innerText = 'YES'
      button2b.innerText = 'NO'

      button2a.onclick = function resultC() {
        let textOutput = <HTMLElement>document.querySelector(".textOutput");
        let resultHeader = <HTMLElement>document.querySelector(".resultH1");
        img.setAttribute("src", "https://i.ytimg.com/vi/USs8fVILE94/maxresdefault.jpg");

        resultHeader.innerHTML = "RESULT C: YOU ARE INSECURE… BUT STILL A HERO"
        textOutput.innerHTML = "You woke up in your own room and realize it was all a dream. You were not sure what to do at the beginning but you found courage when you heard somebody screaming and went to save the poor soul!";
        let hiddenButton = <HTMLElement>document.querySelector(".button2b");
        //För att dölja knapp 2
        hiddenButton.style.display = "none";
        button2a.innerText = 'Play Again';

        //Replayknapp
        button2a.onclick = function restartGame() {
          location.reload();
        }
      }
      //val 2 av 2 i steg 3 -> Result B "4b"
      button2b.onclick = function resultB() {
        let textOutput = <HTMLElement>document.querySelector(".textOutput");
        let resultHeader = <HTMLElement>document.querySelector(".resultH1");
        img.setAttribute("src", "https://nflanagan.files.wordpress.com/2019/02/d068be02f1e2576b5f2b9470ba7a11a0.jpg");

        resultHeader.innerHTML = "RESULT B: KIND OF A ZERO"
        textOutput.innerHTML = "You woke up in your own room and realize it was all a dream. You started by not moving than suddenly found courage to follow the screaming voice but decided not to open the door anyway.";
        let hiddenButton = <HTMLElement>document.querySelector(".button2b");
        //För att dölja knapp 2
        hiddenButton.style.display = "none";
        button2a.innerText = 'Play Again';

        //Replayknapp
        button2a.onclick = function restartGame() {
          location.reload();
        }
      }

    }
    //val 2 av 2 i steg 3 -> Result A "3d"
    button2b.onclick = function resultA() {
      let textOutput = <HTMLElement>document.querySelector(".textOutput");
      let resultHeader = <HTMLElement>document.querySelector(".resultH1");
      img.setAttribute("src", "https://images.justwatch.com/backdrop/11794118/s1440/the-biggest-loser");

      resultHeader.innerHTML = "RESULT A: BIGGEST ZERO"
      textOutput.innerHTML = "You woke up in your own room and realize it was all a dream. It was kind of a short dream since you only took the coward choices that led you to be the biggest zero";
      let hiddenButton = <HTMLElement>document.querySelector(".button2b");
      //För att dölja knapp 2
      hiddenButton.style.display = "none";
      button2a.innerText = 'Play Again';

      //Replayknapp
      button2a.onclick = function restartGame() {
        location.reload();
      }
    }

  }
}