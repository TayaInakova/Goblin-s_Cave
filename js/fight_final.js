console.log('DAS BUGURT!!!');
let temp02 = JSON.parse(localStorage.getItem("Iosif"));
console.log("Хиты: " + temp02.hp + "/" + temp02.full_hp);
let GobboSwarm = [Gob01 = new Character(20, 20, 'Первый гоблин', 10, 4, 20, '#', 0, 0, 0, 0),
Gob02 = new Character(20, 17, 'Второй гоблин', 10, 4, 20, '#', 0, 0, 0, 0),
Gob03 = new Character(20, 18, 'Третий гоблин', 10, 4, 20, '#', 0, 0, 0, 0),
Gob04 = new Character(20, 19, 'Четвёртый гоблин', 10, 4, 20, '#', 0, 0, 0, 0),
Gob05 = new Character(20, 16, 'Пятый гоблин', 10, 4, 20, '#', 0, 0, 0, 0),
Gob06 = new Character(20, 17, 'Шестой гоблин', 10, 4, 20, '#', 0, 0, 0, 0),
Gob07 = new Character(20, 19, 'Седьмой гоблин', 10, 4, 20, '#', 0, 0, 0, 0),
Gob08 = new Character(20, 10, 'Восьмой гоблин', 10, 4, 20, '#', 0, 0, 0, 0),
Gob09 = new Character(20, 17, 'Девятый гоблин', 10, 4, 20, '#', 0, 0, 0, 0),
Gob10 = new Character(20, 16, 'Десятый гоблин', 10, 4, 20, '#', 0, 0, 0, 0)];
let orda = GobboSwarm;
orda.push(temp02);
massfight(orda, 10, 11);
document.write('<p>Противники готовы порезать вас на ленточки,<br> но вам уже почти нечего им противопоставить - силы на исходе.</p>');
localStorage.setItem("Gobbo", JSON.stringify(GobboSwarm));
localStorage.Iosif = JSON.stringify(temp02);