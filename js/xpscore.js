let you = JSON.parse(localStorage.getItem("Iosif"));
for (; you.experience < 100; you.experience += 20) {
    alert('Привратник: "Ты ещё недостаточно опытен. Приходи позже."');
    alert('Ничего не поделать, вы возвращаетесь в деревню, но после некоторого времени, потраченного на усиленные тренировки, возвращаетесь.')
};
document.write('</p>Привратник: "Тебе хватает знаний и умений, чтобы пройти дальше, путник."</p>');
console.log('У вас ', you.experience, ' опыта.');
localStorage.Iosif = JSON.stringify(you);