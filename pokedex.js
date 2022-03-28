const fetchPokemon = () => {
    const pokeNameInput = ((document.getElementById("pokeName")||{}).value)||"";
    let pokeName = pokeNameInput.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeNombre("404");
            pokeImage("./notfound.jpg")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeName2 = data.forms[0].name;
            let type= data.types[0].type.name;
            let stathp = data.stats[0].base_stat;
            let statatck = data.stats[1].base_stat;
            let statdef = data.stats[2].base_stat;
            let statsatck = data.stats[3].base_stat;
            let statsdef = data.stats[4].base_stat;
            let statspeed = data.stats[5].base_stat;
            let move1= data.moves[0].move.name;
            let we= data.weight;
            let he= data.height;
            if(data.moves[1] ===undefined)
            {
                pokemove2("-");
                pokemove3("-");
                pokemove4("-");
            }

            else if(data.moves[2] ===undefined)
            {
                move2=data.moves[1].move.name;
                pokemove2(move2);
                pokemove3("-");
                pokemove4("-");   
            }

            else if(data.moves[3] ===undefined)
            {
                move2=data.moves[1].move.name;
                pokemove2(move2);
                move3=data.moves[2].move.name;
                pokemove3(move3);
                pokemove4("-");
            }

            else
            {
                move2=data.moves[1].move.name;
                pokemove2(move2);
                move3=data.moves[2].move.name;
                pokemove3(move3);
                move4=data.moves[4].move.name;
                pokemove4(move4);

            }

               
            pokeImage(pokeImg);
            pokeNombre(pokeName2);
            pokeType(type);
            pokestat1(stathp);
            pokestat1l(stathp);
            pokestat2(statatck);
            pokestat2l(statatck);
            pokestat3(statdef);
            pokestat3l(statdef);
            pokestat4(statsatck);
            pokestat4l(statsatck);
            pokestat5(statsdef);
            pokestat5l(statsdef);
            pokestat6(statspeed);
            pokestat6l(statspeed);
            pokemove1(move1);
            pokeWe(we);
            pokeHe(he);


        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeNombre = (url) => {
    const textopon = document.getElementById("pon");
    textopon.textContent = url;
    textopon.textContent= textopon.textContent.toUpperCase().charAt(0) + textopon.textContent.slice(1);
    console.log(textopon.textContent);
}

const pokeWe = (url) => {
    const textw = document.getElementById("w");
    textw.textContent = "Weight: " +url;
}

const pokeHe = (url) => {
    const texth = document.getElementById("h");
    texth.textContent = "Height: " +url;
}


const pokeType = (url) => {
    const textotype = document.getElementById("ptype");
    textotype.textContent = url;
    textotype.textContent= "Type: " + textotype.textContent.toUpperCase().charAt(0) + textotype.textContent.slice(1);
    console.log(textotype.textContent);
}


const pokestat1 = (url) => {
    const hpValue = document.getElementById("Hp");
    hpValue.value = url;
    hpValue.textContent= url;
    console.log(hpValue.textContent);
}

const pokestat1l = (url) => {
    const hpValuel = document.getElementById("Hpl");
    hpValuel.textContent= url;

}


const pokestat2 = (url) => {
    const atckValue = document.getElementById("Attack");
    atckValue.value = url;
    atckValue.textContent= url;
    console.log(atckValue.textContent);
}

const pokestat2l = (url) => {
    const atckValuel = document.getElementById("Attackl");
    atckValuel.textContent= url;

}


const pokestat3 = (url) => {
    const DefValue = document.getElementById("Defense");
    DefValue.value = url;
    DefValue.textContent= url;
    console.log(DefValue.textContent);
}

const pokestat3l = (url) => {
    const DefValuel = document.getElementById("Defensel");
    DefValuel.textContent= url;
}


const pokestat4 = (url) => {
    const SatckValue = document.getElementById("SAttack");
    SatckValue.value = url;
    SatckValue.textContent= url;
    console.log(SatckValue.textContent);
}

const pokestat4l = (url) => {
    const SatckValuel = document.getElementById("SAttackl");
    SatckValuel.textContent= url;

}


const pokestat5 = (url) => {
    const SpdefValue = document.getElementById("SDefense");
    SpdefValue.value= url;
    SpdefValue.textContent= url;
    console.log(SpdefValue.textContent);
}

const pokestat5l = (url) => {
    const SpdefValuel = document.getElementById("SDefensel");
    SpdefValuel.textContent= url;

}


const pokestat6 = (url) => {
    const spdValue = document.getElementById("Speed");
    spdValue.value = url;
    spdValue.textContent= url;
    console.log(spdValue.textContent);
}

const pokestat6l = (url) => {
    const spdValuel = document.getElementById("Speedl");
    spdValuel.textContent= url;

}


const pokemove1 = (url) => {
    const textm1 = document.getElementById("Mov1");
    textm1.textContent = url;
    textm1.textContent= textm1.textContent.toUpperCase().charAt(0) + textm1.textContent.slice(1);
    console.log(textm1.textContent);
}

const pokemove2 = (url) => {
    const textm2 = document.getElementById("Mov2");
    textm2.textContent = url;
    textm2.textContent= textm2.textContent.toUpperCase().charAt(0) + textm2.textContent.slice(1);
    console.log(textm2.textContent);
}

const pokemove3 = (url) => {
    const textm3 = document.getElementById("Mov3");
    textm3.textContent = url;
    textm3.textContent= textm3.textContent.toUpperCase().charAt(0) + textm3.textContent.slice(1);
    console.log(textm3.textContent);
}


const pokemove4 = (url) => {
    const textm4 = document.getElementById("Mov4");
    textm4.textContent = url;
    textm4.textContent= textm4.textContent.toUpperCase().charAt(0) + textm4.textContent.slice(1);
    console.log(textm4.textContent);
}