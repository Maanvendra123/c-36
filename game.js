class Game{
    constructor(){

    }
    getstate(){
        var gamestateref=database.ref('gameState')
        gamestateref.on('value',function(data){
            gameState=data.val()
        })
    }
    update(state){
    database.ref('/').update({
        gameState:state
    })
    }
    start(){
        if (gameState===0){
            player=new Player()
            player.getcount()
            form=new Form()
            form.display()
        }
    }
}