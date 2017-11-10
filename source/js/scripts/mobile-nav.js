var btn = $('.nav__menu');
var menu = $('.nav__list');

btn.click(function() {
  menu.toggleClass('nav__list--visible');
});
