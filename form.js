class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2')
        title.html("car Racing Game")
        title.position(130,0)
        
        var input=createInput('name')
        input.position(130,160)
        var button=createButton('play')
        button.position(250,200)
        var greeting=createElement('h3')
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            playerCount+=1
            player.update(name)
            player.updatecount(playerCount)
            greeting.html("Hello,welcome"+name)
        greeting.position(130,360)
        })
    }
}