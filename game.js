class Game{
    constructor(){

    }
    getState(){
        var gs_1=database.ref('GameState');
        gs_1.on("value",(data)=>{
        gs=data.val();
        })
    }
    updateState(x){
        database.ref('/').update({
            GameState:x
        })
    }
    async start(){
        if(gs===0){
            form=new Form();
            form.display();
            player=new Player();
            player.getPlayerCount();
        }
    }
}