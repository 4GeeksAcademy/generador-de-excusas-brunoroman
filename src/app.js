function generateExcuse() {
    let who = ["El perro", "Mi abuela", "El cartero", "Mi loro"];
    let action = ["se comió", "rompió", "robó", "aplastó"];
    let what = ["mi tarea", "mi celular", "el coche", "mi sándwich"];
    let when = ["antes de la clase", "mientras dormía", "durante el almuerzo", "mientras rezaba"];

    let excuse = who[Math.floor(Math.random() * who.length)] + " " +
                 action[Math.floor(Math.random() * action.length)] + " " +
                 what[Math.floor(Math.random() * what.length)] + " " +
                 when[Math.floor(Math.random() * when.length)] + ".";

    document.getElementById("excuse").innerHTML = excuse;
}