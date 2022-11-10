function Character(chFullHp, chHp, chCharacterNameI, chCharacterNameR, chCharacterNameD, chCharacterNameV, chCharacterNameT, chCharacterNameP, chAC, chDamageDice, chInitiative, chFraction, chModInit, chModHit, chModDamage, chExperience) //характеристики героя
{
    this.fullHp = chFullHp, //полные хп
        this.hp = chHp,//текущие хп
        this.characterNameI = chCharacterNameI, //имя героя. Именительный падеж.
        this.characterNameR = chCharacterNameR, //имя героя. Родительный падеж.
        this.characterNameD = chCharacterNameD, //имя героя. Дательный падеж.
        this.characterNameV = chCharacterNameV, //имя героя. Винительный падеж.
        this.characterNameT = chCharacterNameT, //имя героя. Творительный падеж.
        this.characterNameP = chCharacterNameP, //имя героя. Предложный падеж.
        this.AC = chAC,//кд
        this.damageDice = chDamageDice,//урон
        this.initiative = chInitiative,//инициатива
        this.fraction = chFraction,//фракция
        this.modInit = chModInit,//модификатор ловкости к инициативе
        this.modHit = chModHit,//модификатор к попаданию
        this.modDamage = chModDamage,//модификатор  к урону
        this.experience = chExperience,//экспа
        this.characterList = function () {
            console.log("");
            console.log("Имя: " + this.characterNameI);
            console.log("Фракция: " + this.fraction);
            console.log("Опыт: " + this.experience);
            console.log("Хиты: " + this.hp + "/" + this.fullHp);
            console.log("Инициатива: кубик D" + this.initiative);
            console.log("Класс доспеха: " + this.AC);
            console.log("Урон: кубик D" + this.damageDice);
            console.log("Модификатор к инициативе: +" + this.modInit);
            console.log("Модификатор к попаданию: +" + this.modHit);
            console.log("Модификатор к урону: +" + this.modDamage);
            console.log("");
        };
};

function sklonenie(number, txt) {
    var cases = [2, 0, 1, 1, 1, 2];
    return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
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
let nInit = [];
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
        participants[i].initiative = d_20() + participants[i].modInit;
    };
    for (i = 0, temporary = 0; i < participants.length - 1; i++) {
        for (let j = i + 1; j < participants.length; j++) {
            if (participants[i].initiative < participants[j].initiative) {
                temporary = participants[j];
                participants[j] = participants[i];
                participants[i] = temporary;
            }
            else if (participants[i].initiative == participants[j].initiative) {
                if (participants[i].modInit < participants[j].modInit) {
                    temporary = participants[j];
                    participants[j] = participants[i];
                    participants[i] = temporary;
                };
            };
        };
    };
    for (nInit = [], i = 0; i < participants.length; i++) {
        nInit.push([participants[i].characterNameI, participants[i].initiative, participants[i].modInit, participants[i].hp]);
    };
    console.log(nInit);
};

let listOfOpponents = [], randomEnemy = 0, hits = 0;
let gramm = ['хит', 'хита', 'хитов']
function massraund(participants, x) { /*раунд боя с несколькими противниками*/
    for (i = 0; i < participants.length; i++) {
        if (participants[i].hp <= 0) continue;
        console.log('Ходит: ', participants[i].characterNameI);
        if (participants[i].fraction == '*' && participants[i].hp <= 10 && participants[i].hp > 0) {
            document.write('<p>', participants[i].characterNameI, ' делает глоток зелья здоровья из походной фляги.</p>');
            hits = d_8() + d_8();
            if (participants[i].hp + hits > participants[i].fullHp) {

                console.log('Восстановлено: ', participants[i].fullHp - participants[i].hp, sklonenie(participants[i].fullHp - participants[i].hp), gramm);
                participants[i].hp = participants[i].fullHp;
                console.log('Текущие хиты: ', participants[i].hp, '/', participants[i].fullHp);
            }
            else {
                participants[i].hp += hits;
                console.log('Восстановлено: ', hits, sklonenie(hits, gramm));
                console.log('Текущие хиты: ', participants[i].hp, '/', participants[i].fullHp);
            };
        };
        if (participants[i].fraction == '*') {
            listOfOpponents = oppositionArray.filter(({ hp }) => hp > 0);
        }
        else {
            listOfOpponents = comradeArray.filter(({ hp }) => hp > 0);
        };
        randomEnemy = (Math.floor(Math.random() * listOfOpponents.length));
        console.log('Бьёт: ', listOfOpponents[randomEnemy].characterNameR);
        d_20();
        console.log('На кубике:', d20, ' + ', participants[i].modHit, 'итого: ', d20 + participants[i].modHit);
        if (d20 + participants[i].modHit >= listOfOpponents[randomEnemy].AC) {
            let uron = d_d(participants[i].damageDice) + participants[i].modDamage;
            console.log('Снесено ', uron, sklonenie(uron, gramm));
            if (listOfOpponents[randomEnemy].hp > 0 && listOfOpponents[randomEnemy].hp >= (2 * listOfOpponents[randomEnemy].fullHp / 3)) {
                document.write('<p>', participants[i].characterNameI, ' наносит по ', listOfOpponents[randomEnemy].characterNameD, ' хитрый удар!</p>');
            }
            else if (listOfOpponents[randomEnemy].hp > 0 && listOfOpponents[randomEnemy].hp < (2 * listOfOpponents[randomEnemy].fullHp / 3) && listOfOpponents[randomEnemy].hp >= listOfOpponents[randomEnemy].fullHp / 3) {
                document.write('<p>', participants[i].characterNameI, ' наносит по ', listOfOpponents[randomEnemy].characterNameD, ' ловкий удар!</p>');
            }
            else if (listOfOpponents[randomEnemy].hp > 0 && listOfOpponents[randomEnemy].hp < listOfOpponents[randomEnemy].fullHp / 3 && listOfOpponents[randomEnemy].hp > uron) {
                document.write('<p>', participants[i].characterNameI, ' наносит по ', listOfOpponents[randomEnemy].characterNameD, ' всем ударам удар!</p>');
            }
            else if (listOfOpponents[randomEnemy].hp > 0 && listOfOpponents[randomEnemy].hp <= uron) {
                document.write('<p>', participants[i].characterNameI, ' наносит по ', listOfOpponents[randomEnemy].characterNameD, ' добивающий удар!</p>');
            };
            listOfOpponents[randomEnemy].hp -= uron;
            if (listOfOpponents[randomEnemy].hp > 0) {
                console.log('Осталось:', listOfOpponents[randomEnemy].hp, sklonenie(listOfOpponents[randomEnemy].hp, gramm));
            };
            if (listOfOpponents[randomEnemy].hp <= 0) {
                if (listOfOpponents[randomEnemy].fraction == '*') {
                    if (listOfOpponents[randomEnemy].characterNameI != 'Гилдерой') {
                        document.write('<p>', listOfOpponents[randomEnemy].characterNameI, ' из последних сил активирует амулет.</p>');
                        console.log('Восстановлено: ', listOfOpponents[randomEnemy].fullHp - listOfOpponents[randomEnemy].hp, sklonenie(listOfOpponents[randomEnemy].fullHp - listOfOpponents[randomEnemy].hp, gramm));
                        listOfOpponents[randomEnemy].hp = listOfOpponents[randomEnemy].fullHp;
                        console.log('Текущие хиты: ', listOfOpponents[randomEnemy].hp, '/', listOfOpponents[randomEnemy].fullHp);
                    }
                    else {

                        deadAlly++;
                        document.write('<p>Погиб союзник!</p>');
                    };
                }
                else {
                    deadEnemy++;
                    document.write('<p>', listOfOpponents[randomEnemy].characterNameI, ' убит!</p>');
                    participants[i].experience += x;
                    fr(participants[i]);
                };
                if (listOfOpponents[randomEnemy].hp <= 0 && listOfOpponents.length == 1) {
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
    participants = participants.filter(({ hp }) => hp > 0);
    //participants = liveParticipants;
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