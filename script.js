var apiget = fetch("https://anapioficeandfire.com/api/characters/583");

var apiget1 = apiget.then((msg) => msg.json()).then((msg2) => {

    var apiget1 = fetch(msg2.povBooks[0]).then((msg3) => msg3.json()).then((msg4) => {
        console.log(msg4.characters);
        var len = msg4.characters.length;

        for (var i = 0; i < len; i++) {
            console.log(msg4.characters[i]);
            var apiget2 = fetch(msg4.characters[i]).then((msg3) => msg3.json()).then((msg4) =>{
                

                var create_ele = document.createElement("p");
                create_ele.innerHTML=msg4.name;
                document.body.append(create_ele);
            })
        }
    });

});