function typeWr() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWr, speed);
  }
}
module.exports= {
    i: "",
    txt: 'MISSION: Sustained Release of Limitless Potential',
    speed: 150,
    typeWr
}