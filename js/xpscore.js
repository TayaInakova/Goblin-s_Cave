let YOU = new Character(500, 500, "Иосиф", 15, 8, 20, "*", 4, 3, 5, 0);//характеристики героя
YOU.character_list();
for (; YOU.experience < 100; YOU.experience += 20) {
alert('Привратник: "Ты ещё недостаточно опытен. Приходи позже."');
alert('Ничего не поделать, вы возвращаетесь в деревню, но после некоторого времени, потраченного на усиленные тренировки, возвращаетесь.')
};
document.write('</p>Привратник: "Тебе хватает знаний и умений, чтобы пройти дальше, путник."</p>');
console.log('У вас ', YOU.experience, ' опыта.');
let you = JSON.stringify(YOU)
localStorage.setItem("Iosif", you);