function receivesAFunction(spy){
    spy()
}
function returnsANamedFunction(){
    return function newName(){

    }
}

function returnsAnAnonymousFunction(){
    return ()=> console.log ("Mariam")
}



