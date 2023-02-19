localStorage.setItem('propertyName','value');
localStorage.getItem('propertyName');
localStorage.removeItem('propertyName');
var menu =["rau xào","thịt luộc","gà rán"]

function Create(){
    n = prompt("Mời người dùng nhập món ăn muốn thêm vào menu")
    menu.push(n)
    localStorage.setItem("menu", n);
}

function Read(){
    let text = menu.join();
    document.getElementById("demo").innerHTML = text;
}

