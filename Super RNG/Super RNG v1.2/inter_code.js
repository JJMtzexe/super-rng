let cv = document.querySelector("#line_1").getContext("2d");
let canvas = document.querySelector("#line_1");

let party_pooper_m = document.querySelector("#party_pooper_mode");
let party_pooper_label = document.querySelector("#party_pooper");
let intense = document.querySelector("#intense");
let gen_button = document.querySelector("#generate_random")
let h3_space = document.querySelector("#lol");
let change_sets = document.querySelector("#oof");
var h4_space;
var random_color;
var lot_val = 0;
var terminate = false;
var col_state = true;
var button_state = 0;
var min_num = 0;
var range_button, max_num, change1, change2, rnd_num1, rnd_num2, random_num, random_number, more_less;
var o = "O";
var cycle_times = 30;
var cycle_speed = 10;
var max_chars = 9;

gen_button.addEventListener("mouseup", mainButtonFunction);

rnd_num1 = intense.appendChild(document.createElement("input"));
rnd_num1.id = "random_number";
rnd_num1.type = "button";

intense.appendChild(document.createTextNode("números aleatorios"));

rnd_num2 = intense.appendChild(document.createElement("input"));
rnd_num2.id = "random_number";
rnd_num2.type = "button";

more_less = intense.appendChild(document.createElement("input"));
more_less.type = "button";
more_less.value = " más ";
more_less.id =  "more_less";

todavia_mas_intenso = intense.appendChild(document.createElement("input"));

todavia_mas_intenso.type = "button";
todavia_mas_intenso.id = "intenso";
todavia_mas_intenso.value = "INTENSO";
colorAssign();
intense.appendChild(document.createTextNode(" que podrás posiblemente experimentar en tu vida, te lo aseguro."));

function randomNumGive(min, max) {
  random_number = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
  return random_number;
}

function randomAssign() {
  rnd_num1.style.width = "20px";
  rnd_num2.style.width = "20px";
  if (!terminate) {
    randomNumGive(0, 9);
    rnd_num1.value = random_number;
    randomNumGive(0, 9);
    rnd_num2.value = random_number;
    setTimeout(randomAssign, 50);
  }
  else {
    rnd_num1.style.width = "0px";
    rnd_num2.style.width = "0px";
  }
}

function colorAssign() {
  if (!terminate) {
    rainbow();
    setTimeout(colorAssign, 50);
    todavia_mas_intenso.style.color = random_color;
  }
  else {
    todavia_mas_intenso.style.color = "white";
  }
}

function mainButtonFunction() {
  setTimeout(function wxyz() {
    gen_button.blur();
    range_button.focus();
  },100);
  if (button_state == 0) {
    buttonState1();
    gen_button.value = "¡ENVIAR MIN!";
    window.scrollTo(0, 700);
  }

  if (button_state == 1) {
    if(Math.abs(parseInt(range_button.value)) + 1) {
      buttonState2();
      min_num = parseInt(range_button.value);

      gen_button.value = "¡ENVIAR MÁX!";
      range_button.value = "";
      window.scrollTo(0, 700);
    }

    else {
      if (range_button.value.toLowerCase() == "no") {
        alert("Oh...");
        button_state = 0;
      }
      else {
        alert("Escribe un número");
        button_state = 0;
      }
      range_button.value = "";
    }
  }

  if(button_state == 2) {

    if(Math.abs(parseInt(range_button.value)) + 1 && parseInt(range_button.value) > min_num) {
      max_num = parseInt(range_button.value)

      gen_button.value = "¡GENERAR NUM!";
      buttonState3();
    }
    else {
      if (range_button.value.toLowerCase() == "no") {
          alert("Oh...");
          button_state = 1;
          range_button.value = "";
      }

      if (parseInt(range_button.value) <= min_num) {
        alert("El número debe ser mayor a " + parseInt(min_num))
        button_state = 1;
      }

      if (!Math.abs(parseInt(range_button.value) + 1)) {
          alert("Escribe un número");
          button_state = 1;
          range_button.value = "";
        }
      }
  }

  if (button_state == 3) {
    h4_space = h3_space.appendChild(document.createElement("h4"));
    h4_space.id = "h4_space_id";
    if (!terminate)
      lot_val = 0;
    else if (terminate)
      lot_val = cycle_times;
    lottery();
    window.scrollTo(0, 800);
    gen_button.value = "¡OTRA VEZ!";
    gen_button.style.marginBottom = "0px";
    quickChange();
  }

  if (button_state == 4) {
    if (!terminate)
      lot_val = 0;
    else if (terminate)
      lot_val = cycle_times;
    lottery();
    button_state = 3;
  }

  if (button_state == 5) {
    gen_button.value = "¡OTRA VEZ!"
    lot_val = 0;

    if (parseInt(change1.value) < parseInt(change2.value) && Math.abs(parseInt(change1.value)) + 1 && Math.abs(parseInt(change2.value)) + 1) {

      if (change1.value.substring(0, 1) == "-") {
        min_num = parseInt(change1.value.substring(0, (max_chars + 1)));
      }
      else {
        min_num = parseInt(change1.value.substring(0, max_chars));

      }
      if (change2.value.substring(0, 1) == "-") {
        max_num = parseInt(change2.value.substring(0, (max_chars + 1)));
      }
      else {
        max_num = parseInt(change2.value.substring(0, max_chars));
      }

      if (!terminate)
        lot_val = 0;
      else if (terminate)
        lot_val = cycle_times;
      lottery();
    }

    else {
      if (parseInt(change1.value) >= parseInt(change2.value)) {
        alert("El número de la izquierda debe ser menor a " + parseInt(change2.value));
      }

      else if (!parseInt(change1.value) || !parseInt(change2.value)) {
        alert("Escribe un número");
      }
    }
    button_state = 4;
  }
  button_state++
}

document.querySelector("#intenso").addEventListener("mouseup", function xyz() {
  if (!terminate)
    alert("¡INTENS" + o.repeat(randomNumGive(1, 300)) + "!");
  else if (terminate)
    alert("No intenso :(");
});

party_pooper_m.addEventListener("mouseup", function xy() {
  if (!terminate)
    setColorTo(false);

  else if (terminate)
    setColorTo(true);
});

gen_button.addEventListener("mouseenter", function x() {
  col_state = true;
  writeBorder();
});

gen_button.addEventListener("mouseleave", () => col_state = false);

function buttonState1() {
  gen_button.addEventListener("focus", function x() {
    setTimeout(function wxyz() {
      gen_button.blur();
      range_button.focus();
    }, 500);
  });

  var xxx = h3_space.appendChild(document.createElement("h5"));
  xxx.id = "h5_html"
  xxx.textContent = "Primero, escribe aquí abajo tu número mínimo";
  range_button = h3_space.appendChild(document.createElement("input"));
  range_button.type = "text";
  range_button.id = "xd";
  range_button.width = "100px";
  range_button = document.querySelector("#xd");

  range_button.addEventListener("keyup", function xxx(event) {

    if (event.keyCode < 48 || event.keyCode > 57) {
      if (range_button.value != "-" && event.keyCode != 13) {
        if (!parseInt(range_button.value))
          range_button.value = "";
        else
          range_button.value = parseInt(range_button.value);
      }
    }

    if (event.keyCode == 13) {
      mainButtonFunction();
    }

    if (range_button.value.length > max_chars) {
      if (range_button.value.substring(0, 1) == "-")
        range_button.value = (range_button.value.substring(0, max_chars + 1));
      else
        range_button.value = (range_button.value.substring(0, max_chars));
    }
  });
}

function buttonState2() {
  var xxx = document.getElementById("h5_html");
  xxx.textContent = "Bien, ahora escribe tu número máximo";
}

function buttonState3() {
  var xxx = document.getElementById("h5_html");
  xxx.textContent = "Listo, tus datos fueron enviados, ¡a darle!";
  h3_space.removeChild(document.getElementById("xd"));
}

function quickChange() {
  change_sets.appendChild(document.createTextNode("Generando del "));
  change1 = change_sets.appendChild(document.createElement("input"));
  change_sets.appendChild(document.createTextNode(" al "));
  change2 = change_sets.appendChild(document.createElement("input"));
  change_sets.appendChild(document.createTextNode("."));
  change1.type = "text";
  change1.value = min_num;
  change1.id = "change_1"

  change2.type = "text";
  change2.value = max_num;
  change2.id = "change_2"

  change1.addEventListener("focus", x);
  change2.addEventListener("focus", x);

  change1.addEventListener("keyup", function xxx(event) {
    if(event.keyCode == 13) {
      change2.focus();
    }

    if (event.keyCode < 48 || event.keyCode > 57) {
      if (change1.value != "-" && event.keyCode != 13) {
        if (!parseInt(change1.value))
          change1.value = "";
        else
          change1.value = parseInt(change1.value);
      }
    }
    if (change1.value.length > max_chars) {
      if (change1.value.substring(0, 1) == "-")
        change1.value = (change1.value.substring(0, max_chars + 1));
      else
        change1.value = (change1.value.substring(0, max_chars));
    }

  });
  change2.addEventListener("keyup", function xxx(event) {
    if(event.keyCode == 13) {
      mainButtonFunction();
    }

    if (event.keyCode < 48 || event.keyCode > 57) {
      if (change2.value != "-" && event.keyCode != 13) {
        if (!parseInt(change2.value))
          change2.value = "";

        else
          change2.value = parseInt(change2.value);
      }
    }

    if (change2.value.length > max_chars) {
      if (change2.value.substring(0, 1) == "-")
        change2.value = (change2.value.substring(0, max_chars + 1));
      else
        change2.value = (change2.value.substring(0, max_chars));
    }
  });
}

function x() {
  gen_button.value = "¡ACTUALIZAR!";
  button_state = 5;
  lot_val = 0;
}

function lottery() {
  random_num = parseInt(Math.floor(Math.random() * (max_num - min_num + 1)) + min_num);
  if(lot_val <= cycle_times) {
    rainbow();
    if (!terminate && lot_val < cycle_times) {
      h4_space.style.color = random_color;
    }

    else if (terminate || lot_val == cycle_times) {
      h4_space.style.color = "white";
    }

    h4_space.textContent = "";
    h4_space.appendChild(document.createTextNode(random_num));
    lot_val++
    setTimeout(lottery, cycle_speed);
  }
}

function setColorTo(state){
  if (!state) {
    terminate = true;
    party_pooper_label.style.color = "lawngreen";
    more_less.value = " menos ";
}
  else if (state) {
    terminate = false;
    party_pooper_label.style.color = "maroon";
    more_less.value = " más ";
    col_state = false;
    writeCanvas1();
    writeBorder();
    randomAssign();
    colorAssign();
  }
}

function r_color(v, num, c) {
  if (v == num)
    random_color = c;
}

function rainbow() {
  n = Math.floor(Math.random() * 17);
  r_color(n, 0, "red");
  r_color(n, 1, "orange");
  r_color(n, 2, "yellow");
  r_color(n, 3, "green");
  r_color(n, 4, "blue");
  r_color(n, 5, "purple");
  r_color(n, 6, "pink");
  r_color(n, 7, "lightblue");
  r_color(n, 8, "lightgreen");
  r_color(n, 9, "magenta");
  r_color(n, 10, "cyan");
  r_color(n, 12, "gold");
  r_color(n, 13, "lawngreen");
  r_color(n, 14, "indigo");
  r_color(n, 15, "palevioletred");
  r_color(n, 16, "crimson");
  setTimeout(rainbow, 300);
  return random_color;
}

function writeBorder() {
  rainbow();
  gen_button.style.color = random_color;
  gen_button.style.borderColor = random_color;
  gen_button.style.textDecoration = "underline";
  if (!terminate && col_state)
    setTimeout(writeBorder, 200);

  else if (terminate || col_state == false) {
    gen_button.style.borderColor = "crimson";
    gen_button.style.color = "crimson";
    gen_button.style.textDecoration = "none";
  }
}

function writeCanvas1() {
  rainbow();
  cv.beginPath();
  cv.strokeStyle = random_color;
  cv.lineWidth = parseInt(canvas.height);
  cv.moveTo(0, (canvas.height / 2));
  cv.lineTo(canvas.width, canvas.height / 2);
  cv.stroke();
  cv.closePath();
  if (!terminate)
    setTimeout(writeCanvas1, 1000);

  else if (terminate) {
  cv.beginPath();
  cv.strokeStyle = "white";
  cv.lineWidth = parseInt(cv.height);
  cv.moveTo(0, (canvas.height / 2));
  cv.lineTo(canvas.width, canvas.height / 2);
  cv.stroke();
  cv.closePath();
  }
}

rainbow();
writeCanvas1();
randomAssign();
