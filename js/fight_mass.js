let temp01 = JSON.parse(sessionStorage.getItem("Iosif"));
let Gobbo0 = JSON.parse(sessionStorage.getItem("angryGoblin")),
    Gobbo1 = new Character(20, 18, 'Первый гоблин', "Первого гоблина", "Первому гоблину", "Первого гоблина", "Первым гоблином", "Первом гоблине", 10, 4, 20, '#', 0, 0, 0, 0),
    Gobbo2 = new Character(20, 18, 'Второй гоблин', "Второго гоблина", "Второму гоблину", "Второго гоблина", "Вторым гоблином", "Втором гоблине", 10, 4, 20, '%', 0, 0, 0, 0),
    Gobbo3 = new Character(20, 19, 'Третий гоблин', "Третьего гоблина", "Третьему гоблину", "Третьего гоблина", "Третьим гоблином", "Третьем гоблине", 10, 4, 20, '@', 0, 0, 0, 0);
party = [Gobbo1, Gobbo2, Gobbo3];
party.push(temp01, Gobbo0);
massfight(party, 0, 10);
let grammar = ['гоблин', 'гоблина', 'гоблинов']
document.write('<p>Все ', deadEnemy, ' ', sklonenie(deadEnemy, grammar), ' мертвы</p>');
sessionStorage.Iosif = JSON.stringify(temp01);