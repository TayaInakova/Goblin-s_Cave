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
    let svalka=0;
    if (b=='<'){
        for (;i<m.length-1;i++){
            for(let j=i+1;j<m.length;j++){
                if (m[i][e-1]>m[j][e-1]){
                svalka=m[j];
                m[j]=m[i];
                m[i]=svalka;
                };
            };
        };
    }
    else if(b=='>'){
        for (;i<m.length-1;i++){
            for(let j=i+1;j<m.length;j++){
                if (m[i][e--]<m[j][e--]){
                svalka=m[j];
                m[j]=m[i];
                m[i]=svalka;
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
function initiative(n){
    for (i=0;i<n.length;i++){
        n[i].initiative=d_20()+n[i].mod_init;
    };
    for (i=0,svalka=0;i<n.length-1;i++){
        for(let j=i+1;j<n.length;j++){
            if (n[i].initiative<n[j].initiative){
            svalka=n[j];
            n[j]=n[i];
            n[i]=svalka;
            }
            else if(n[i].initiative==n[j].initiative){
                if (n[i].mod_init<n[j].mod_init){
                    svalka=n[j];
                    n[j]=n[i];
                    n[i]=svalka;
                    };
                };
        };
    };
    for(n_init=[],i=0;i<n.length;i++){
        n_init.push([n[i].character_name,n[i].initiative,n[i].mod_init,n[i].hp]);
    };
    console.log(n_init);
};
function raund(n,x){ /*один удар по одному врагу в бою один на один*/
        document.write('<p>Ваша цель сейчас: ',n[2],'</p>');
        d_20();
        console.log('На кубике:',d20);
        console.log('Вы сносите ',d20,' хитов');
        if(n[1]>0 && n[1]>=(2*n[0]/3)){
            n[1]-=d20;
            console.log('У врага осталось:',n[1]);
            document.write('<p>Хитрый удар!</p>'); 
        }
        else if(n[1]>0 && n[1]<(2*n[0]/3) && n[1]>=n[0]/3){
            n[1]-=d20;
            console.log('У врага осталось:',n[1]);
            document.write('<p>Ловкий удар!</p>');
            }
            else if(n[1]>0 && n[1]<n[0]/3 && n[1]>d20){
                n[1]-=d20;
                console.log('У врага осталось:',n[1]);
                document.write('<p>Всем ударам удар!</p>');
                }
                else if(n[1]>0 && n[1]<=d20){
                    n[1]-=d20;
                    document.write('<p>Добивающий удар!</p>');
                    dd++;
                    document.write('<p>Этот готов!</p>');
                    xp+=x;
                    fr();
                    };
};
function fight(n,y,x){/*боёвка(массив врагов, через сколько раундов бой закончится автоматически, экспа за одного врага)*/
    for(dd=0,r=0;dd<n.length;r++){/*цикл раундов, счётчик трупов*/
        if(r>=y && y!==0) break;
    console.log('Раунд',r+1);
    raund(n,x);
    };
};
function massraund(n,x){ /*раунд боя с несколькими противниками*/
    for(i=0;i<n.length;i++){
        if(n[i].hp<=0) continue;
        console.log('Ходит: ',n[i].character_name);
        s=n.filter(({hp, fraction}) => hp>0 && fraction !== n[i].fraction);
        p=(Math.floor(Math.random()*s.length));
        console.log('Бьёт: ',s[p].character_name);
        d_20();
        console.log('На кубике:',d20,' + ',n[i].mod_hit,'итого: ',d20+n[i].mod_hit);
        if (d20+n[i].mod_hit>=s[p].AC){
            let uron=d_d(n[i].damage_dice)+n[i].mod_damage;
            console.log('Снесено ',uron,' хитов');
            if(s[p].hp>0 && s[p].hp>=(2*s[p].full_hp/3)){
                document.write('<p>',n[i].character_name,' наносит по ',s[p].character_name,' хитрый удар!</p>'); 
            }
            else if(s[p].hp>0 && s[p].hp<(2*s[p].full_hp/3) && s[p].hp>=s[p].full_hp/3){
                document.write('<p>',n[i].character_name,' наносит по ',s[p].character_name,' ловкий удар!</p>');
                }
                else if(s[p].hp>0 && s[p].hp<s[p].full_hp/3 && s[p].hp>uron){
                    document.write('<p>',n[i].character_name,' наносит по ',s[p].character_name,' всем ударам удар!</p>');
                    }
                    else if(s[p].hp>0 && s[p].hp<=uron){
                        document.write('<p>',n[i].character_name,' наносит по ',s[p].character_name,' добивающий удар!</p>');
                    };
                s[p].hp-=uron;
                console.log('У врага осталось:',s[p].hp);
                if (s[p].hp<=0){
                    if (s[p].fraction=='*'){
                        ds++;
                        document.write('<p>Погиб союзник!</p>');
                    }
                    else{
                        dp++;
                        document.write('<p>Враг убит!</p>');
                        n[i].experience+=x;
                        fr(n[i]);
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
function massfight(n,y,x){/*бой с несколькими противниками*/
    nt=n.filter(({hp}) => hp>0);
    n=nt;
    ns=n.filter(({hp,fraction}) => hp>0 && fraction =='*');
    console.log('Своих: ',ns.length);
    np=n.filter(({hp,fraction}) => hp>0 && fraction !=='*');
    console.log('Чужих: ',np.length);
    initiative(n);
    for(ds=0,dp=0,r=0;ds<ns.length && dp<np.length;r++){
    if(r>=y && y!==0) break;
    console.log('Раунд',r+1);
    massraund(n,x);
    };
};