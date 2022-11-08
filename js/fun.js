function Character(chFull_hp, chHP, chCharacter_name, chAC, chDamage_dice, chInitiative, chFraction, chMod_init, chMod_hit, chMod_damage, chExperience) //характеристики героя
{
    this.full_hp = chFull_hp, //полные хп
        this.hp = chHP,//текущие хп
        this.character_name = chCharacter_name, //введите имя героя
        this.AC = chAC,//кд
        this.damage_dice = chDamage_dice,//урон
        this.initiative = chInitiative,//инициатива
        this.fraction = chFraction,//фракция
        this.mod_init = chMod_init,//модификатор ловкости к инициативе
        this.mod_hit = chMod_hit,//модификатор к попаданию
        this.mod_damage = chMod_damage,//модификатор  к урону
        this.experience = chExperience,//экспа
        this.character_list = function () {
            console.log("");
            console.log("Имя: " + this.character_name);
            console.log("Фракция: " + this.fraction);
            console.log("Опыт: " + this.experience);
            console.log("Хиты: " + this.hp + "/" + this.full_hp);
            console.log("Инициатива: кубик D" + this.initiative);
            console.log("Класс доспеха: " + this.AC);
            console.log("Урон: кубик D" + this.damage_dice);
            console.log("Модификатор к инициативе: " + this.mod_init);
            console.log("Модификатор к попаданию: " + this.mod_hit);
            console.log("Модификатор к урону: " + this.mod_damage);
            console.log("");
        };
};

function fr(person) {/*вывод количества экспы после фрага в консоль*/
    console.log('Фраг! Теперь у вас ', person.experience, ' опыта!')
};
function sorting(array, element, mathOperator) {/*сортировка массива по конкретному элементу В разных направлениях*/
    i = 0;
    let temporary = 0;
    if (mathOperator == '<') {
        for (; i < array.length - 1; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i][element - 1] > array[j][element - 1]) {
                    temporary = array[j];
                    array[j] = array[i];
                    array[i] = temporary;
                };
            };
        };
    }
    else if (mathOperator == '>') {
        for (; i < array.length - 1; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i][element--] < array[j][element--]) {
                    temporary = array[j];
                    array[j] = array[i];
                    array[i] = temporary;
                };
            };
        };
    };
    console.log(array);
};
let n_init = [];
/*броски кубиков:*/
let d0 = 0, d100 = 0, d20 = 0, d12 = 0, d10 = 0, d8 = 0, d6 = 0, d4 = 0;
function d_100() {
    d100 = (Math.floor(Math.random() * (100 + 1 - 1) + 1));
    return d100;
};
function d_20() {
    d20 = (Math.floor(Math.random() * (20 + 1 - 1) + 1));
    return d20;
};
function d_12() {
    d12 = (Math.floor(Math.random() * (12 + 1 - 1) + 1));
    return d12;
};
function d_10() {
    d10 = (Math.floor(Math.random() * (10 + 1 - 1) + 1));
    return d10;
};
function d_8() {
    d8 = (Math.floor(Math.random() * (8 + 1 - 1) + 1));
    return d8;
};
function d_6() {
    d6 = (Math.floor(Math.random() * (6 + 1 - 1) + 1));
    return d6;
};
function d_4() {
    d4 = (Math.floor(Math.random() * (4 + 1 - 1) + 1));
    return d4;
};
function d_d(a) {
    d0 = (Math.floor(Math.random() * (a + 1 - 1) + 1));
    return d0;
};
function initiative(participants) {
    for (i = 0; i < participants.length; i++) {
        participants[i].initiative = d_20() + participants[i].mod_init;
    };
    for (i = 0, temporary = 0; i < participants.length - 1; i++) {
        for (let j = i + 1; j < participants.length; j++) {
            if (participants[i].initiative < participants[j].initiative) {
                temporary = participants[j];
                participants[j] = participants[i];
                participants[i] = temporary;
            }
            else if (participants[i].initiative == participants[j].initiative) {
                if (participants[i].mod_init < participants[j].mod_init) {
                    temporary = participants[j];
                    participants[j] = participants[i];
                    participants[i] = temporary;
                };
            };
        };
    };
    for (n_init = [], i = 0; i < participants.length; i++) {
        n_init.push([participants[i].character_name, participants[i].initiative, participants[i].mod_init, participants[i].hp]);
    };
    console.log(n_init);
};

let listOfOpponents = [], randomEnemy = 0, hits = 0;

function massraund(participants, x) { /*раунд боя с несколькими противниками*/
    for (i = 0; i < participants.length; i++) {
        if (participants[i].hp <= 0) continue;
        console.log('Ходит: ', participants[i].character_name);
        listOfOpponents = participants.filter(({ hp, fraction }) => hp > 0 && fraction !== participants[i].fraction);
        randomEnemy = (Math.floor(Math.random() * listOfOpponents.length));
        console.log('Бьёт: ', listOfOpponents[randomEnemy].character_name);
        d_20();
        console.log('На кубике:', d20, ' + ', participants[i].mod_hit, 'итого: ', d20 + participants[i].mod_hit);
        if (d20 + participants[i].mod_hit >= listOfOpponents[randomEnemy].AC) {
            let uron = d_d(participants[i].damage_dice) + participants[i].mod_damage;
            console.log('Снесено ', uron, ' хитов');
            if (listOfOpponents[randomEnemy].hp > 0 && listOfOpponents[randomEnemy].hp >= (2 * listOfOpponents[randomEnemy].full_hp / 3)) {
                document.write('<p>', participants[i].character_name, ' наносит по ', listOfOpponents[randomEnemy].character_name, ' хитрый удар!</p>');
            }
            else if (listOfOpponents[randomEnemy].hp > 0 && listOfOpponents[randomEnemy].hp < (2 * listOfOpponents[randomEnemy].full_hp / 3) && listOfOpponents[randomEnemy].hp >= listOfOpponents[randomEnemy].full_hp / 3) {
                document.write('<p>', participants[i].character_name, ' наносит по ', listOfOpponents[randomEnemy].character_name, ' ловкий удар!</p>');
            }
            else if (listOfOpponents[randomEnemy].hp > 0 && listOfOpponents[randomEnemy].hp < listOfOpponents[randomEnemy].full_hp / 3 && listOfOpponents[randomEnemy].hp > uron) {
                document.write('<p>', participants[i].character_name, ' наносит по ', listOfOpponents[randomEnemy].character_name, ' всем ударам удар!</p>');
            }
            else if (listOfOpponents[randomEnemy].hp > 0 && listOfOpponents[randomEnemy].hp <= uron) {
                document.write('<p>', participants[i].character_name, ' наносит по ', listOfOpponents[randomEnemy].character_name, ' добивающий удар!</p>');
            };
            listOfOpponents[randomEnemy].hp -= uron;
            console.log('Осталось:', listOfOpponents[randomEnemy].hp);
            if (listOfOpponents[randomEnemy].fraction == '*' && listOfOpponents[randomEnemy].hp <= 10 && listOfOpponents[randomEnemy].hp > 0) {
                document.write('<p>', listOfOpponents[randomEnemy].character_name, ' делает глоток зелья здоровья из походной фляги.</p>');
                hits += d_8() + d_8();
                listOfOpponents[randomEnemy].hp += hits;
                console.log('Восстановлено: ', hits, ' хитов.');
                console.log('Текущие хиты: ', listOfOpponents[randomEnemy].hp, '/', listOfOpponents[randomEnemy].full_hp);
            };
            if (listOfOpponents[randomEnemy].hp <= 0) {
                if (listOfOpponents[randomEnemy].fraction == '*') {
                    deadAlly++;
                    document.write('<p>Погиб союзник!</p>');
                }
                else {
                    deadEnemy++;
                    document.write('<p>', listOfOpponents[randomEnemy].character_name, ' убит!</p>');
                    participants[i].experience += x;
                    fr(participants[i]);
                };
                if (listOfOpponents.length == 1) {
                    console.log('Бой окончен');
                    break;
                };
            };
        }
        else { console.log('Промах') };

        listOfOpponents.splice(0, listOfOpponents.length);
    };
};
function massfight(participants, y, x) {/*бой с несколькими противниками*/
    liveParticipants = participants.filter(({ hp }) => hp > 0);
    participants = liveParticipants;
    comradeArray = participants.filter(({ hp, fraction }) => hp > 0 && fraction == '*');
    console.log('Своих: ', comradeArray.length);
    oppositionArray = participants.filter(({ hp, fraction }) => hp > 0 && fraction !== '*');
    console.log('Чужих: ', oppositionArray.length);
    initiative(participants);
    for (deadAlly = 0, deadEnemy = 0, r = 0; deadAlly < comradeArray.length && deadEnemy < oppositionArray.length; r++) {
        if (r >= y && y !== 0) break;
        console.log('Раунд', r + 1);
        massraund(participants, x);
    };
};