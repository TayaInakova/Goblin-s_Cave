let Elf = new Character(50, 50, 'Гилдерой', 'Гилдероя', 'Гилдерою', 'Гилдероя', 'Гилдероем', 'Гилдерое', 15, 8, 20, '*', 3, 5, 4, 100);
Elf.characterList();
let temp04 = JSON.parse(sessionStorage.getItem("Iosif"));
let temp05 = JSON.parse(sessionStorage.getItem("Gobbo01"));
let temp06 = JSON.parse(sessionStorage.getItem("Gobbo02"));
let temp07 = JSON.parse(sessionStorage.getItem("Gobbo03"));
let temp08 = JSON.parse(sessionStorage.getItem("Gobbo04"));
let temp09 = JSON.parse(sessionStorage.getItem("Gobbo05"));
let temp10 = JSON.parse(sessionStorage.getItem("Gobbo06"));
let temp11 = JSON.parse(sessionStorage.getItem("Gobbo07"));
let temp12 = JSON.parse(sessionStorage.getItem("Gobbo08"));
let temp13 = JSON.parse(sessionStorage.getItem("Gobbo09"));
let temp14 = JSON.parse(sessionStorage.getItem("Gobbo10"));
let fightPlaсe = [temp04, temp05, temp06, temp07, temp08, temp09, temp10, temp11, temp12, temp13, temp14, Elf];
massfight(fightPlaсe, 10, 20);
if (r <= 10 && deadEnemy >= oppositionArray.length && deadAlly == 0) {
    document.write('<p>Вдвоём с эльфом вы довольно быстро раскидали отряд гоблинов, </br>но, лишь только пал последний противник, как будто из ниоткуда появился огромный огр. </br>Он был явно бешеный, и те, кто держал его здесь, знали об этом -</br> на шее болтался обрывок толстенной цепи</p>');
}
else {
    document.write('<p>Вдвоём с эльфом вы ловко режете гоблинов на зелёный салат, но, неожиданно слышите рёв. </br>Через секунду в битву врывается огромный огр. </br>Он был явно бешеный, и те, кто держал его здесь, знали об этом -</br> на шее болтался обрывок толстенной цепи</p>');
};
sessionStorage.setItem("Gilderoy", JSON.stringify(Elf));
sessionStorage.Iosif = JSON.stringify(temp04);
sessionStorage.Gobbo01 = JSON.stringify(temp05);
sessionStorage.Gobbo02 = JSON.stringify(temp06);
sessionStorage.Gobbo03 = JSON.stringify(temp07);
sessionStorage.Gobbo04 = JSON.stringify(temp08);
sessionStorage.Gobbo05 = JSON.stringify(temp09);
sessionStorage.Gobbo06 = JSON.stringify(temp10);
sessionStorage.Gobbo07 = JSON.stringify(temp11);
sessionStorage.Gobbo08 = JSON.stringify(temp12);
sessionStorage.Gobbo09 = JSON.stringify(temp13);
sessionStorage.Gobbo10 = JSON.stringify(temp14);
