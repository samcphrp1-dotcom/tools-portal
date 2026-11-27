// Voltage divider calculator: Vout = Vin * R2 / (R1 + R2)

// Turns raw field text and a unit multiplier into a number in ohms.
// Returns null if the field is empty or not a number.
function readNumber(text) {
  if (text.trim() === "") return null;
  var n = Number(text);
  return isFinite(n) ? n : null;
}

// Pure calculation. Returns { error } or { vout, ratio }.
function calculateDivider(vin, r1, r2) {
  if (vin === null || r1 === null || r2 === null) {
    return { error: "Enter Vin, R1 and R2 to see the result." };
  }
  if (r1 < 0 || r2 < 0) {
    return { error: "Resistor values can't be negative." };
  }
  if (r1 + r2 === 0) {
    return { error: "R1 and R2 can't both be zero (that would divide by zero)." };
  }
  var ratio = r2 / (r1 + r2);
  return { vout: vin * ratio, ratio: ratio };
}

// Rounds to 4 significant digits and drops trailing zeros.
function formatNumber(n) {
  if (n === 0) return "0";
  return String(Number(n.toPrecision(4)));
}

function update() {
  var vin = readNumber(document.getElementById("vin").value);
  var r1 = readNumber(document.getElementById("r1").value);
  var r2 = readNumber(document.getElementById("r2").value);
  if (r1 !== null) r1 *= Number(document.getElementById("r1-unit").value);
  if (r2 !== null) r2 *= Number(document.getElementById("r2-unit").value);

  var result = calculateDivider(vin, r1, r2);
  var message = document.getElementById("message");
  var outputs = document.getElementById("outputs");

  if (result.error) {
    message.textContent = result.error;
    outputs.hidden = true;
    return;
  }
  message.textContent = "";
  outputs.hidden = false;
  document.getElementById("vout").textContent = formatNumber(result.vout) + " V";
  document.getElementById("ratio").textContent = formatNumber(result.ratio);
}

document.getElementById("divider-form").addEventListener("input", update);
document.getElementById("divider-form").addEventListener("submit", function (e) { e.preventDefault(); });
update();
