"use strict";

function triggerResize() {
  var ev = document.createEvent('HTMLEvents');
  ev.initEvent('resize', true, false);
  window.dispatchEvent(ev);
}

;
document.addEventListener('DOMContentLoaded', () => {
  var canvas = document.getElementById("glslCanvas");
  var sandbox = new GlslCanvas(canvas);
  var loading = document.getElementById("loading_screen");
  setTimeout(function () {
    canvas.classList.add('show');
  }, 0);
  setTimeout(function () {
    triggerResize();
    console.log("aaaaaaaaaaaaaa");
    loading.classList.add('hide');
  }, 1000);
});