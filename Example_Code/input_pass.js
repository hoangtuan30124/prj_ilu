var $ = (s, o = document) => o.querySelector(s);
var $$ = (s, o = document) => o.querySelectorAll(s);

$(".password-input").addEventListener("input", value, false);
window.addEventListener("load", value, false);

function value() { 
  $(".password-text").textContent = $(".password-input").value;
  charming($(".password-text"));
  $(".password-dots").textContent = $(".password-input").value;
  charming($(".password-dots"));
};

$(".monkey").addEventListener("click", function() {
  $(".password").classList.toggle("show");
});

$(".password-input").addEventListener("focusin", function() {
  $$(".password-text, .password-dots").forEach(el => el.classList.add('cursor'))
});

$(".password-input").addEventListener("focusout", function() {
  $$(".password-text, .password-dots").forEach(el => el.classList.remove('cursor'))
});



