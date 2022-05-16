const t1 = document.getElementById("rangeinput1");
const t2 = document.getElementById("rangeinput2");
const t3 = document.getElementById("rangeinput3");

const text1 = document.getElementById("input_text1");
const text2 = document.getElementById("input_text2");
const text3 = document.getElementById("input_text3");

function sync() {
  const { value } = this;

  this.value = this.value
    .replace("-0", "0")
    .replace(/\D/g, (sign) => (sign === "-" ? sign : ""))
    .replace(/-{1,}/, "-")
    .replace(/(?<=\d)-+$/, "");

  if (value.length > 0 && value <= 100 && value >= -100) {
    this.nextElementSibling.value = this.value;
    sendValue();
  }
  if (value.length > 0 && value <= -100) {
    this.value = -100;
    this.nextElementSibling.value = this.value;
  }

  if (value.length > 0 && value >= 100) {
    this.value = 100;
    this.nextElementSibling.value = this.value;
  }
}

text1.addEventListener("input", sync);
text2.addEventListener("change", sync);
text3.addEventListener("change", sync);

t1.addEventListener("input", function () {
  this.previousElementSibling.value = this.value;
  sendValue();
});

t2.addEventListener("input", function () {
  this.previousElementSibling.value = this.value;
  sendValue();
});

t3.addEventListener("input", function () {
  this.previousElementSibling.value = this.value;
  sendValue();
});

function sendValue() {
  $.ajax({
    type: "POST",
    url: "/get_value",
    data: $("form").serialize(),
    cache: false,
    async: true,
    enctype: "mutipart/form-data",
    type: "POST",
    success: function (data) {
      var json = jQuery.parseJSON(data);
      $("#len").html(json.len);
    },
    error: function (error) {
      console.log(error);
    },
    timeout: 0,
  });
}
