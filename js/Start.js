let userHp = 10 + d_12() + d_12() + d_12();
let userModInit = d_4();
let userAC = 11 + d_6();
let defoltNameI = "Иосиф"; // именит
let defoltNameR = "Иосифа"; // родит
let defoltNameD = "Иосифу"; // дат
let defoltNameV = "Иосифа"; // винит
let defoltNameT = "Иосифом"; // творит
let defoltNameP = "Иосифе"; // предлож
let YOU = new Character(userHp, userHp, defoltNameI, defoltNameR, defoltNameD, defoltNameV, defoltNameT, defoltNameP, userAC, 8, 20, "*", userModInit, 3, 5, 0);//характеристики героя
let userName = prompt("Введите имя персонажа", "Иосиф");
if (userName != null && userName != 'Иосиф') {
    YOU.characterNameI = userName;
    YOU.characterNameR = prompt("Как будет звучать ваше имя в родительном падеже? (кого?)", "Иосифа");
    YOU.characterNameD = prompt("Как будет звучать ваше имя в дательном падеже? (кому?)", "Иосифу");
    YOU.characterNameV = prompt("Как будет звучать ваше имя в винительном падеже? (кого?)", "Иосифа");
    YOU.characterNameT = prompt("Как будет звучать ваше имя в творительном падеже? (кем?)", "Иосифом");
    YOU.characterNameP = prompt("Как будет звучать ваше имя в предложном падеже? (о ком?)", "Иосифе");
    alert("Кинуть кубы для создания персонажа");
}
else {
    document.write('<p>Персонаж будет создан автоматически.</p>')
};
YOU.characterList();
document.write('<p>Вас зовут: ', YOU.characterNameI, '</p>');
let b = sklonenie(YOU.fullHp, ['пункт', 'пункта', 'пунктов']);
document.write('<p>Количество вашего здоровья: ', YOU.fullHp, ' ', b, '.</p>');
b = sklonenie(YOU.AC, ['пункт', 'пункта', 'пунктов'])
document.write('<p>Класс доспеха: ', YOU.AC, ' ', b, '.</p>');
sessionStorage.setItem("Iosif", JSON.stringify(YOU));