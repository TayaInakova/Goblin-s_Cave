let userName = prompt("Введите имя персонажа", "Иосиф");
while (userName == null) { userName = prompt("Введите имя персонажа", "Иосиф"); };
alert ("Кинуть кубы для создания персонажа");
let userHp = 10+ d_12();
let userModInit = d_4();
let userAC = 11 + d_6();
let YOU = new Character(2*userHp, userHp, userName, userAC, 8, 20, "*", userModInit, 3, 5, 0);//характеристики героя
YOU.character_list();
localStorage.setItem("Iosif", JSON.stringify(YOU));