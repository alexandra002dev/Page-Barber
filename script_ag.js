const form = document.querySelector("#form");
const fullName = document.querySelector("#fullname");
const date = document.querySelector("#date");
const timeContent = document.querySelector(".times");
const btnAgendar = document.querySelector(".bt-schedule button");
const telaSucesso = document.querySelector(".finish ");
const telaAgendamento = document.querySelector(".container");
const btnback = document.querySelector(".bt-back button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (fullName.value != "" && date.value != "") {
    telaSucesso.style.display = "flex";
    telaAgendamento.style.display = "none";
  } else {
    checkName();
    checkDate();
  }
});

function checkName() {
  if (fullName.value == "") {
    errorInput(fullName, "*Campo vazio");
  } else {
    errorInput(fullName, "");
  }
}
function checkDate() {
  if (date.value == "") {
    errorInput(date, "*Campo vazio");
  } else {
    errorInput(date, "");
  }
}

fullName.addEventListener("keyup", () => {
  errorInput(fullName, "");
});

date.addEventListener("focus", () => {
  errorInput(date, "");
});

function errorInput(input, msg) {
  const formItem = input.parentElement;
  const textMensagem = formItem.querySelector("a");
  textMensagem.innerText = msg;
}
