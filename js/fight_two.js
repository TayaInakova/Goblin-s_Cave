let temp00 = JSON.parse(sessionStorage.getItem("Iosif"));
let Gobbo = new Character(50, 28, "Разъярённый гоблин", "Разъярённого гоблина", "Разъярённому гоблину", "Разъярённого гоблина", "Разъярённым гоблином", "Разъярённом гоблине", 10, 4, 20, "#", 0, 0, 0, 0);
Gobbo.characterList();
console.log("Хиты: " + temp00.hp + "/" + temp00.fullHp);
let pole = [Gobbo, temp00];
massfight(pole, 3, 10);
if (Gobbo.hp > 0) {
    document.write('<p>Враг сбежал!</br> Не успели вы перевести дух, как он вернулся с подмогой в виде ещё трёх гоблинов.</p>');
}
else {
    document.write('<p> На звуки боя прибежали ещё трое.</p>');
};
sessionStorage.setItem("angryGoblin", JSON.stringify(Gobbo));
sessionStorage.Iosif = JSON.stringify(temp00);