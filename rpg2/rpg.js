function char(hp,atk){
  this.hp=hp;
  this.atk=atk;
}

player= new char(10,5)

enemy= new char(8,4)

function attack(){
  enemy.hp -=player.atk
  if(enemy.hp>0){
    $(".log").append("<p>player attacks for "+player.atk+" damage!</p>")
    $(".enemyhp").text(enemy.hp)
  }else{
    enemy.hp=0
    $(".enemyhp").text(enemy.hp)
    $(".log").append("<p>player attacks for "+player.atk+" damage! you killed him!</p>")
  }
}

//gameloop
$('document').ready(
  function(){
    //set up character stats
    $(".playerhp").text(player.hp)
    $(".playeratk").text(player.atk)

    $(".enemyhp").text(enemy.hp)
    $(".enemyatk").text(enemy.atk)

    //attack
    $(".attack").click(function(){attack()})
  }
)
