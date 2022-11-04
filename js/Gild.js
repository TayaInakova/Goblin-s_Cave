let Elf = new Character(200, 200, 'Гилдерой', 15, 8, 20, '*', 3, 5, 4, 100);
Elf.character_list();
let temp04 = JSON.parse(localStorage.getItem("Iosif"));
let temp05 = JSON.parse(localStorage.getItem("GobboSwarm"));
let fightPlase = [temp04, temp05, Elf];
massfight(fightPlase, 10, 20);
if (r <= 10 && deadEnemy >= oppositionArray.length && deadAlly == 0) {
    document.write('<p>Вдвоём с эльфом вы довольно быстро раскидали отряд гоблинов, </br>но, лишь только пал последний противник, как будто из ниоткуда появился огромный огр. </br>Он был явно бешеный, и те, кто держал его здесь, знали об этом -</br> на шее болтался обрывок толстенной цепи</p>');
}
else {
    document.write('<p>Вдвоём с эльфом вы ловко режете гоблинов на зелёный салат, но, неожиданно слышите рёв. </br>Через секунду в битву врывается огромный огр. </br>Он был явно бешеный, и те, кто держал его здесь, знали об этом -</br> на шее болтался обрывок толстенной цепи</p>');
};
let ogr = new Character(100, 99, 'Бешеный огр', 5, 8, 20, '@', 0, 0, 2, 0);
orda.push(ogr);
massfight(orda, 0, 50);
console.log("Хиты: " + temp04.hp + "/" + temp04.full_hp);