let temp = JSON.parse(localStorage.getItem("Iosif"));
document.write('Преисполнившись уверенностью в победе, вы вкладываете все свои силы в последние удары:');
let hporc = 500, u = 0;
while (hporc > 250) {
    document.write('<p>Удар!</p>');
    hporc -= 50;
    u++;
}
document.write('<p>Орк ещё достаточно силён, чтобы выдержать сыплющиеся на него со всех сторон удары.<br>Требуется некоторое время, чтобы враг был повержен окончательно...</p>');
while (hporc <= 250 && hporc > 100) {
    document.write('<p>Удар!</p>');
    hporc -= 25;
    u++;
}
document.write('<p>Враг ослаб, вы видите, что его броня уже довольно помята, но он ещё стоит на ногах.</p>');
while (hporc <= 100 && hporc > 20) {
    document.write('<p>Удар!</p>');
    hporc -= 20;
    u++;
}
document.write('<p>Страшные раны покрывают тело врага, кровь из них хлещет на землю.</p>');
if (hporc <= 20 && hporc > 0) {
    hporc -= 20;
    document.write('<p>Вы наносите последний сокрушающий удар, и враг падает замертво...</p>');
    u++;
}
document.write('<p>Это был тяжёлый бой... Понадобилось ', u, ' ударов, чтобы одолеть врага.</p>');
temp.experience += 50;
fr(temp);
localStorage.Iosif = JSON.stringify(temp);