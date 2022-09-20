const newHeader = document.createElement("h1");

const main = document.getElementById("main");
main.remove();

newHeader.setAttribute('id', 'victory');


newHeader.textContent = "Grace Durant is the champion";
document.body.append(newHeader);