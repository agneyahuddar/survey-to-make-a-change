class Form {

  constructor() {
    this.input = createInput("NAME");
    this.button = createButton('Cont.');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.input2 = createInput("EMAIL");
    this.question1 = createElement('h1');
    this.question2 = createElement('h1');
    this.question3 = createElement('h1');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.input2.hide();
    this.title.hide();
  }

  display(){
    this.title.html("SURVEY TO MAKE A CHANGE");
    this.title.position(400, 20);
    this.input2.position(200, 100);

    this.input.position(200, 150);
    this.button.position(400, 600);

    this.question1.html("1. Do you think there are poor kids who should get free lunch?");
    this.question1.position(200, 200);
     this.radioq1 = createRadio('h2');
        this.radioq1.option('yes');
        this.radioq1.option('No');
        this.radioq1.position(200, 275);
    this.question2.html("2. Would you like to give money to help these children?")
    this.question2.position(200, 320)
    this.radioq2 = createRadio('h2');
        this.radioq2.option('yes');
        this.radioq2.option('No');
        this.radioq2.position(200, 400);
    this.question3.html("3. How much would you contribute?");
    this.question3.position(200, 450)
    this.radioq3 = createRadio('h2');
        this.radioq3.option('100');
        this.radioq3.option('1000');
        this.radioq3.position(200, 520);
2
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.input2.hide();
      this.question1.hide();
      this.question2.hide();
      this.question3.hide();
      this.radioq1.hide();
      this.radioq2.hide();
      this.radioq3.hide();
      player.name = this.input.value();
      playerCount-=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello. Thank you for taking the short questionnaire " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

  }
}
