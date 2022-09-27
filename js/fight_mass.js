let Gobbo1 = new Character(20, 18, 'Первый гоблин', 10, 4, 20, '#', 0, 0, 0, 0),
    Gobbo2 = new Character(20, 18, 'Второй гоблин', 10, 4, 20, '#', 0, 0, 0, 0),
    Gobbo3 = new Character(20, 19, 'Третий гоблин', 10, 4, 20, '#', 0, 0, 0, 0);
party = [Gobbo1, Gobbo2, Gobbo3];
party.push(YOU, Gobbo);
massfight(party, 0, 10);
document.write('<p>Все ', deadEnemy, ' гоббо мертвы</p>');