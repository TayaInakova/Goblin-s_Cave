function Character(chFull_hp,chHP,chCharacter_name,chAC,chDamage_dice,chInitiative,chFraction,chMod_init,chMod_hit,chMod_damage,chExperience) {//характеристики героя
    this.full_hp=chFull_hp, //полные хп
    this.hp=chHP,//текущие хп
    this.character_name=chCharacter_name, //введите имя героя
    this.AC=chAC,//кд
    this.damage_dice=chDamage_dice,//урон
    this.initiative=chInitiative,//инициатива
    this.fraction=chFraction,//фракция
    this.mod_init=chMod_init,//модификатор ловкости к инициативе
    this.mod_hit=chMod_hit,//модификатор к попаданию
    this.mod_damage=chMod_damage,//модификатор  к урону
    this.experience=chExperience,//экспа
    this.character_list=function(){
        console.log("Имя: " + this.character_name + "; Фракция: " + this.fraction + "; Опыт: " + this.experience + "; Хиты: " + this.hp + "/" + this.full_hp + "; Инициатива: кубик D" + this.initiative + "; Класс доспеха: " + this.AC + "; Урон: кубик D" + this.damage_dice + "; Модификатор к инициативе: " + this.mod_init + "; Модификатор к попаданию: " + this.mod_hit + "; Модификатор к урону: " + this.mod_damage);
    };
};
function fr(a){/*вывод количества экспы после фрага в консоль*/
    console.log('Фраг! Теперь у вас ',a.experience,' опыта!')
};
function sorthp(m,e,b){/*сортировка массива по конкретному элементу В разных направлениях*/
    i=0;
    let temporary=0;
    if (b=='<'){
        for (;i<m.length-1;i++){
            for(let j=i+1;j<m.length;j++){
                if (m[i][e-1]>m[j][e-1]){
                temporary=m[j];
                m[j]=m[i];
                m[i]=temporary;
                };
            };
        };
    }
    else if(b=='>'){
        for (;i<m.length-1;i++){
            for(let j=i+1;j<m.length;j++){
                if (m[i][e--]<m[j][e--]){
                temporary=m[j];
                m[j]=m[i];
                m[i]=temporary;
                };
            };
        };
    };
    console.log(m);
};
let n_init=[];
/*броски кубиков:*/
let d0=0,d100=0,d20=0,d12=0,d10=0,d8=0,d6=0,d4=0;
function d_100(){
    d100=(Math.floor(Math.random()*(100+1-1)+1));
    return d100;
};
function d_20(){
    d20=(Math.floor(Math.random()*(20+1-1)+1));
    return d20;
};
function d_12(){
    d12=(Math.floor(Math.random()*(12+1-1)+1));
    return d12;
};
function d_10(){
    d10=(Math.floor(Math.random()*(10+1-1)+1));
    return d10;
};
function d_8(){
    d8=(Math.floor(Math.random()*(8+1-1)+1));
    return d8;
};
function d_6(){
    d6=(Math.floor(Math.random()*(6+1-1)+1));
    return d6;
};
function d_4(){
    d4=(Math.floor(Math.random()*(4+1-1)+1));
    return d4;
};
function d_d(a){
    d0=(Math.floor(Math.random()*(a+1-1)+1));
    return d0;
};
let s=[],p=0;
function initiative(participants){
    for (i=0;i<participants.length;i++){
        participants[i].initiative=d_20()+participants[i].mod_init;
    };
    for (i=0,temporary=0;i<participants.length-1;i++){
        for(let j=i+1;j<participants.length;j++){
            if (participants[i].initiative<participants[j].initiative){
            temporary=participants[j];
            participants[j]=participants[i];
            participants[i]=temporary;
            }
            else if(participants[i].initiative==participants[j].initiative){
                if (participants[i].mod_init<participants[j].mod_init){
                    temporary=participants[j];
                    participants[j]=participants[i];
                    participants[i]=temporary;
                    };
                };
        };
    };
    for(n_init=[],i=0;i<participants.length;i++){
        n_init.push([participants[i].character_name,participants[i].initiative,participants[i].mod_init,participants[i].hp]);
    };
    console.log(n_init);
};
function raund(participants,x){ /*один удар по одному врагу в бою один на один*/
        document.write('<p>Ваша цель сейчас: ',participants[2],'</p>');
        d_20();
        console.log('На кубике:',d20);
        console.log('Вы сносите ',d20,' хитов');
        if(participants[1]>0 && participants[1]>=(2*participants[0]/3)){
            participants[1]-=d20;
            console.log('У врага осталось:',participants[1]);
            document.write('<p>Хитрый удар!</p>'); 
        }
        else if(participants[1]>0 && participants[1]<(2*participants[0]/3) && participants[1]>=participants[0]/3){
            participants[1]-=d20;
            console.log('У врага осталось:',participants[1]);
            document.write('<p>Ловкий удар!</p>');
            }
            else if(participants[1]>0 && participants[1]<participants[0]/3 && participants[1]>d20){
                participants[1]-=d20;
                console.log('У врага осталось:',participants[1]);
                document.write('<p>Всем ударам удар!</p>');
                }
                else if(participants[1]>0 && participants[1]<=d20){
                    participants[1]-=d20;
                    document.write('<p>Добивающий удар!</p>');
                    dd++;
                    document.write('<p>Этот готов!</p>');
                    xp+=x;
                    fr();
                    };
};
function fight(participants,y,x){/*боёвка(массив врагов, через сколько раундов бой закончится автоматически, экспа за одного врага)*/
    for(dd=0,r=0;dd<participants.length;r++){/*цикл раундов, счётчик трупов*/
        if(r>=y && y!==0) break;
    console.log('Раунд',r+1);
    raund(participants,x);
    };
};
function massraund(participants,x){ /*раунд боя с несколькими противниками*/
    for(i=0;i<participants.length;i++){
        if(participants[i].hp<=0) continue;
        console.log('Ходит: ',participants[i].character_name);
        s=participants.filter(({hp, fraction}) => hp>0 && fraction !== participants[i].fraction);
        p=(Math.floor(Math.random()*s.length));
        console.log('Бьёт: ',s[p].character_name);
        d_20();
        console.log('На кубике:',d20,' + ',participants[i].mod_hit,'итого: ',d20+participants[i].mod_hit);
        if (d20+participants[i].mod_hit>=s[p].AC){
            let uron=d_d(participants[i].damage_dice)+participants[i].mod_damage;
            console.log('Снесено ',uron,' хитов');
            if(s[p].hp>0 && s[p].hp>=(2*s[p].full_hp/3)){
                document.write('<p>',participants[i].character_name,' наносит по ',s[p].character_name,' хитрый удар!</p>'); 
            }
            else if(s[p].hp>0 && s[p].hp<(2*s[p].full_hp/3) && s[p].hp>=s[p].full_hp/3){
                document.write('<p>',participants[i].character_name,' наносит по ',s[p].character_name,' ловкий удар!</p>');
                }
                else if(s[p].hp>0 && s[p].hp<s[p].full_hp/3 && s[p].hp>uron){
                    document.write('<p>',participants[i].character_name,' наносит по ',s[p].character_name,' всем ударам удар!</p>');
                    }
                    else if(s[p].hp>0 && s[p].hp<=uron){
                        document.write('<p>',participants[i].character_name,' наносит по ',s[p].character_name,' добивающий удар!</p>');
                    };
                s[p].hp-=uron;
                console.log('У врага осталось:',s[p].hp);
                if (s[p].hp<=0){
                    if (s[p].fraction=='*'){
                        deadAlly++;
                        document.write('<p>Погиб союзник!</p>');
                    }
                    else{
                        deadEnemy++;
                        document.write('<p>Враг убит!</p>');
                        participants[i].experience+=x;
                        fr(participants[i]);
                    };
                    if (s.length==1){
                        console.log('Бой окончен');
                        break;
                    };
                };
        }
        else {console.log('Промах')};
        
        s.splice(0,s.length);
    };
};
function massfight(participants,y,x){/*бой с несколькими противниками*/
    liveParticipants=participants.filter(({hp}) => hp>0);
    participants=liveParticipants;
    comradeArray=participants.filter(({hp,fraction}) => hp>0 && fraction =='*');
    console.log('Своих: ',comradeArray.length);
    oppositionArray=participants.filter(({hp,fraction}) => hp>0 && fraction !=='*');
    console.log('Чужих: ',oppositionArray.length);
    initiative(participants);
    for(deadAlly=0,deadEnemy=0,r=0;deadAlly<comradeArray.length && deadEnemy<oppositionArray.length;r++){
    if(r>=y && y!==0) break;
    console.log('Раунд',r+1);
    massraund(participants,x);
    };
};