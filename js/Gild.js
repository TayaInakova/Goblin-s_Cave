let Elf = new Character(200, 200, 'Гилдерой', 15, 8, 20, '*', 3, 5, 4, 100);
Elf.character_list();
let temp04 = JSON.parse(localStorage.getItem("Iosif"));
let temp05 = JSON.parse(localStorage.getItem("Gobbo01"));
let temp06 = JSON.parse(localStorage.getItem("Gobbo02"));
let temp07 = JSON.parse(localStorage.getItem("Gobbo03"));
let temp08 = JSON.parse(localStorage.getItem("Gobbo04"));
let temp09 = JSON.parse(localStorage.getItem("Gobbo05"));
let temp10 = JSON.parse(localStorage.getItem("Gobbo06"));
let temp11 = JSON.parse(localStorage.getItem("Gobbo07"));
let temp12 = JSON.parse(localStorage.getItem("Gobbo08"));
let temp13 = JSON.parse(localStorage.getItem("Gobbo09"));
let temp14 = JSON.parse(localStorage.getItem("Gobbo10"));
let fightPlaсe = [temp04, temp05, temp06, temp07, temp08, temp09, temp10, temp11, temp12, temp13,temp14, Elf];
massfight(fightPlaсe, 10, 20);
if (r <= 10 && deadEnemy >= oppositionArray.length && deadAlly == 0) {
    document.write('<p>Вдвоём с эльфом вы довольно быстро раскидали отряд гоблинов, </br>но, лишь только пал последний противник, как будто из ниоткуда появился огромный огр. </br>Он был явно бешеный, и те, кто держал его здесь, знали об этом -</br> на шее болтался обрывок толстенной цепи</p>');
}
else {
    document.write('<p>Вдвоём с эльфом вы ловко режете гоблинов на зелёный салат, но, неожиданно слышите рёв. </br>Через секунду в битву врывается огромный огр. </br>Он был явно бешеный, и те, кто держал его здесь, знали об этом -</br> на шее болтался обрывок толстенной цепи</p>');
};
localStorage.setItem("Gilderoy", JSON.stringify(Elf));
localStorage.Iosif = JSON.stringify(temp04);
localStorage.Gobbo01 = JSON.stringify(temp05);
localStorage.Gobbo02 = JSON.stringify(temp06);
localStorage.Gobbo03 = JSON.stringify(temp07);
localStorage.Gobbo04 = JSON.stringify(temp08);
localStorage.Gobbo05 = JSON.stringify(temp09);
localStorage.Gobbo06 = JSON.stringify(temp10);
localStorage.Gobbo07 = JSON.stringify(temp11);
localStorage.Gobbo08 = JSON.stringify(temp12);
localStorage.Gobbo09 = JSON.stringify(temp13);
localStorage.Gobbo10 = JSON.stringify(temp14);
