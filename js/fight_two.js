let Gobbo = new Character(50, 28, "Разъярённый гоблин", 10, 4, 20, "#", 0, 0, 0, 0);
YOU.character_list();
Gobbo.character_list();
let pole = [Gobbo, YOU];
massfight(pole, 3, 10);
if (Gobbo.hp > 0) {
    document.write('<p>Враг сбежал!</br> Не успели вы перевести дух, как он вернулся с подмогой в виде ещё трёх гоблинов.<br>Бой продолжился в более тяжёлых условиях</p>');
}
else {
    document.write('<p> На звуки боя прибежали ещё трое.<br>Бой продолжился в более тяжёлых условиях.</p>');
};