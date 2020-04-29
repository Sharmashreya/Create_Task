var earnings = 0;
var lifelines = 2;
setText("Total_Earnings0", earnings);

Start_Game();
Question1();
Question2();
Question3();
Question4();
Question5();
Question6();
Question7();
LifeLineFinished();

function Start_Game() {
  onEvent("Instructions", "click", function() {
    setScreen("Game_Instructions");
  });
  onEvent("Play_Button", "click", function () {
    setScreen("Question_0");
  });
  onEvent("back_button", "click", function(){
    setScreen("Starting_Screen");
  });}

function Question1() {
  onEvent("Leave1", "click", function() {
    console.log("You cannot leave on the first question. Please choose an answer or a lifeline.");
  });
  onEvent("0A", "click", function() {
    setText("Total_Earnings0", earnings);
    earnings = Math.pow(10,0);
    setScreen("Question_1");
    setText("Total_Earnings1", earnings);});
  onEvent("0B", "click", function() {
    setScreen("Game_Over");
  });
  onEvent("0C", "click", function() {
    setScreen("Game_Over");
  });
  onEvent("0D", "click", function() {
    setScreen("Game_Over");
  });
}

function Question2() {
  onEvent("Leave2", "click", function(){
    setScreen("Leave_Screen");
    setText("Total", earnings);
  });
  onEvent("1A", "click", function() {
    setText("Total_Earnings1", earnings);
    earnings = Math.pow(10,1);
    setScreen("Question_2");
    setText("Total_Earnings2", earnings);});
  onEvent("1B", "click", function() {
    setScreen("Game_Over");
  });
  onEvent("1C", "click", function() {
    setScreen("Game_Over");
  });
  onEvent("1D", "click", function() {
    setScreen("Game_Over");
  });
}

function Question3() {
  onEvent("Leave3", "click", function(){
    setScreen("Leave_Screen");
    setText("Total", earnings);
  });
  onEvent("2A", "click", function() {
    setText("Total_Earnings2", earnings);
    earnings = Math.pow(10,2);
    setScreen("Question_3");
    setText("Total_Earnings3", earnings);});
  onEvent("2B", "click", function() {
    setScreen("Game_Over");
  });
  onEvent("2C", "click", function() {
    setScreen("Game_Over");
  });
  onEvent("2D", "click", function() {
    setScreen("Game_Over");
  });
}

function Question4() {
  onEvent("Leave4", "click", function(){
    setScreen("Leave_Screen");
    setText("Total", earnings);
  });
  onEvent("3A", "click", function() {
    setText("Total_Earnings3", earnings);
    earnings = Math.pow(10,3);
    setScreen("Question_4");
    setText("Total_Earnings4", earnings);});
  onEvent("3B", "click", function() {
    setScreen("Game_Over");
  });
  onEvent("3C", "click", function() {
    setScreen("Game_Over");
  });
  onEvent("3D", "click", function() {
    setScreen("Game_Over");
  });
}

function Question5() {
  onEvent("Leave5", "click", function(){
    setScreen("Leave_Screen");
    setText("Total", earnings);
  });
  onEvent("4A", "click", function() {
    setText("Total_Earnings4", earnings);
    earnings = Math.pow(10,4);
    setScreen("Question_5");
    setText("Total_Earnings5", earnings);});
  onEvent("4B", "click", function() {
    setScreen("Game_Over");
  });
  onEvent("4C", "click", function() {
    setScreen("Game_Over");
  });
  onEvent("4D", "click", function() {
    setScreen("Game_Over");
  });
}

function Question6() {
  onEvent("Leave6", "click", function(){
    setScreen("Leave_Screen");
    setText("Total", earnings);
  });
  onEvent("5A", "click", function() {
    setText("Total_Earnings5", earnings);
    earnings = Math.pow(10,5);
    setScreen("Question_6");
    setText("Total_Earnings6", earnings);});
  onEvent("5B", "click", function() {
    setScreen("Game_Over");
  });
  onEvent("5C", "click", function() {
    setScreen("Game_Over");
  });
  onEvent("5D", "click", function() {
    setScreen("Game_Over");
  });
}

function Question7(){
  onEvent("Leave7", "click", function(){
    setScreen("Leave_Screen");
    setText("Total", earnings);
  });
  onEvent("6A", "click", function() {
    setScreen("winning_screen");
  });
  onEvent("6B", "click", function() {
    setScreen("Game_Over");
  });
  onEvent("6C", "click", function() {
    setScreen("Game_Over");
  });
  onEvent("6D", "click", function (){
    setScreen("Game_Over");
  });
}

function LifeLine(){
  onEvent("Life_Line1", "click", function(){
    lifelines = lifelines - 1;
    setProperty("0B", "background-color", "red");
    setProperty("0D","background-color","red");
    console.log(lifelines);
  });
  onEvent("Life_Line2", "click", function(){
    lifelines = lifelines - 1 ;
    setProperty("1C","background-color","red");
    setProperty("1D","background-color","red");
    console.log(lifelines);
  });
  onEvent("Life_Line3", "click", function(){
    lifelines = lifelines - 1;
    setProperty("2C","background-color","red");
    setProperty("2B","background-color","red")});
  onEvent("Life_Line4", "click", function(){
    lifelines = lifelines - 1;
    setProperty("3B","background-color","red");
    setProperty("3D","background-color","red")});
  onEvent("Life_Line5", "click", function(){
    lifelines = lifelines - 1;
    setProperty("4C","background-color","red");
    setProperty("4D","background-color","red")});
  onEvent("Life_Line6", "click", function(){
    lifelines = lifelines - 1;
    setProperty("5C","background-color","red");
    setProperty("5B","background-color","red")});
  onEvent("Life_Line7", "click", function(){
    lifelines = lifelines - 1;
    setProperty("6C","background-color","red");
    setProperty("6D","background-color","red")});
}

function LifeLineFinished() {
  LifeLine();
  if (lifelines >= 0) {
    setProperty("Life_Line3","background-color","black");
    setProperty("Life_Line4","background-color","black");
    setProperty("Life_Line5","background-color","black");
    setProperty("Life_Line6","background-color","black");
    setProperty("Life_Line7","background-color","black");
    
    onEvent("Life_Line3", "click", function(){
      setScreen("Line_Line_Finished3");
      onEvent("return3", "click", function(){
        setScreen("Question_2");
        setProperty("2C","background-color","#362f49");
        setProperty("2B","background-color","#362f49");        
      });
    });
    onEvent("Life_Line4", "click", function(){
      setScreen("Life_Line_Finished4");
      onEvent("return4", "click", function() {
        setScreen("Question_3");
        setProperty("3D","background-color","#362f49");
        setProperty("3B","background-color","#362f49");        
      });
    });
    onEvent("Life_Line5", "click", function(){
      setScreen("Life_Line_Finished5");
      onEvent("return5", "click", function() {
        setScreen("Question_4");
        setProperty("4C","background-color","#362f49");
        setProperty("4D","background-color","#362f49");        
      });
    });
    onEvent("Life_Line6", "click", function(){
      setScreen("Life_Line_Finished6");
      onEvent("return6", "click", function() {
        setScreen("Question_5");
        setProperty("5C","background-color","#362f49");
        setProperty("5B","background-color","#362f49");        
      });
    });
    onEvent("Life_Line7", "click", function(){
      setScreen("Life_Line_Finished7");
      onEvent("return7", "click", function() {
        setScreen("Question_6");
        setProperty("6C","background-color","#362f49");
        setProperty("6D","background-color","#362f49");        
      });
    });
  }
}

