!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="tjUo")}({tjUo:function(e,t,n){const o=n("y/BS"),r=(e,t)=>{const n=document.getElementById("numerals"),o=n.querySelectorAll("input")[0];o.focus(),o.addEventListener("input",(function(){const o=parseInt(this.value,10)===e;n.querySelectorAll(".tick")[0].style.display=o?"":"none",n.querySelectorAll(".cross")[0].style.display=o?"none":"",o&&setTimeout(t,500)}))};let l;const i=e=>Number(e)||0,u=e=>0===e.length,s=e=>t=>t.slice(0,e),c=e=>t=>t.slice(e),d=e=>e.slice(0).reverse(),a=e=>t=>n=>e(t(n)),y=e=>!e,f=e=>t=>u(t)?[]:[s(e)(t),...f(e)(c(e)(t))],m=e=>{let t=["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],n=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"],o=["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion"];return"number"==typeof e?m(String(e)):"0"===e?"zero":a(f(3))(d)((r=e,Array.from(r))).map(([e,o,r])=>[0===i(r)?"":t[r]+" hundred ",0===i(e)?n[o]:n[o]&&n[o]+"-"||"",t[o+e]||t[e]].join("")).map((e,t)=>""===e?e:`${e} ${o[t]}`).filter(a(y)(u)).reverse().join(" ");var r},p=(e,t)=>function(){o.hide("#numerals",document),o.hide("#initial-number",document);const n=document.getElementById("done");n.querySelectorAll(".result")[0].innerHTML=t+" says "+e,n.querySelectorAll("button")[0].innerHTML="Awesome work! Again?",(()=>{const e=document.getElementById("cat-gif");e.innerHTML="",e.appendChild(l)})(),o.show("#done",document)},h=()=>{(()=>{let e="https://thecatapi.com/api/images/get?format=src&type=gif";e+="&cacheBuster="+(new Date).getTime();const t=new Image;t.style.width="100%",t.onload=function(){console.log(e,"preloaded!"),l=t},t.src=e})();const e=Math.floor(999*Math.random())+1,t=m(e);o.show("#numerals",document),o.hide(".mark-holder span",document),o.hide("#done",document),o.resetAllInputs(document),(e=>{const t=document.getElementById("initial-number");t.style.display="",t.innerHTML="Your number is "+e})(t),r(e,p(e,t))};document.getElementById("done").addEventListener("click",h),h()},"y/BS":function(e,t){e.exports={hide:(e,t)=>{const n=t.querySelectorAll(e);for(let e=0;e<n.length;e++)n[e].style.display="none"},show:(e,t)=>{const n=t.querySelectorAll(e);for(let e=0;e<n.length;e++)n[e].style.display=""},resetAllInputs:e=>{const t=e.querySelectorAll("input");for(let e=0;e<t.length;e++)t[e].value=""}}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9kb20uanMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJkb20iLCJzZXR1cFJvdyIsImV4cGVjdGVkTnVtZXJhbCIsIm9uQ29ycmVjdCIsInJvdyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0aGVJbnB1dCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb2N1cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbnN3ZXJDb3JyZWN0IiwicGFyc2VJbnQiLCJ0aGlzIiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0VGltZW91dCIsIm5leHRJbWFnZSIsIm51bSIsIngiLCJOdW1iZXIiLCJpc0VtcHR5IiwieHMiLCJsZW5ndGgiLCJ0YWtlIiwic2xpY2UiLCJkcm9wIiwicmV2ZXJzZSIsImNvbXAiLCJmIiwiZyIsIm5vdCIsImNodW5rIiwibnVtVG9Xb3JkcyIsImEiLCJiIiwiU3RyaW5nIiwiQXJyYXkiLCJmcm9tIiwibWFwIiwib25lcyIsInRlbnMiLCJodW5zIiwiam9pbiIsImdyb3VwIiwiZmlsdGVyIiwic2hvd0RvbmVCdXR0b24iLCJudW1lcmFscyIsIndvcmRzIiwiaGlkZSIsImJ1dHRvbkhvbGRlciIsImlubmVySFRNTCIsInRoZUdpZiIsImFwcGVuZENoaWxkIiwiYWRkQ2F0SW1hZ2UiLCJzaG93Iiwic2V0dXBQYWdlIiwiY2F0R2lmVXJsIiwiRGF0ZSIsImdldFRpbWUiLCJJbWFnZSIsIndpZHRoIiwib25sb2FkIiwiY29uc29sZSIsImxvZyIsInNyYyIsInByZWxvYWROZXh0Q2F0VXJsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmVzZXRBbGxJbnB1dHMiLCJpbml0aWFsUm93Iiwic2hvd1dvcmRUb0h1bWFuIiwic2VsZWN0b3IiLCJub2RlcyJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFHbkMsSUFBSUMsRUFBU0osRUFBaUJFLEdBQVksQ0FDekNHLEVBQUdILEVBQ0hJLEdBQUcsRUFDSEgsUUFBUyxJQVVWLE9BTkFJLEVBQVFMLEdBQVVNLEtBQUtKLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNGLEdBRy9ERyxFQUFPRSxHQUFJLEVBR0pGLEVBQU9ELFFBS2ZGLEVBQW9CUSxFQUFJRixFQUd4Qk4sRUFBb0JTLEVBQUlWLEVBR3hCQyxFQUFvQlUsRUFBSSxTQUFTUixFQUFTUyxFQUFNQyxHQUMzQ1osRUFBb0JhLEVBQUVYLEVBQVNTLElBQ2xDRyxPQUFPQyxlQUFlYixFQUFTUyxFQUFNLENBQUVLLFlBQVksRUFBTUMsSUFBS0wsS0FLaEVaLEVBQW9Ca0IsRUFBSSxTQUFTaEIsR0FDWCxvQkFBWGlCLFFBQTBCQSxPQUFPQyxhQUMxQ04sT0FBT0MsZUFBZWIsRUFBU2lCLE9BQU9DLFlBQWEsQ0FBRUMsTUFBTyxXQUU3RFAsT0FBT0MsZUFBZWIsRUFBUyxhQUFjLENBQUVtQixPQUFPLEtBUXZEckIsRUFBb0JzQixFQUFJLFNBQVNELEVBQU9FLEdBRXZDLEdBRFUsRUFBUEEsSUFBVUYsRUFBUXJCLEVBQW9CcUIsSUFDL0IsRUFBUEUsRUFBVSxP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YWxFLFNBQVNDLGVBQWUsa0JBQzNDaUUsRUFBV3pELE1BQU1DLFFBQVUsR0FDM0J3RCxFQUFXcEIsVUFBWSxrQkFBb0JILEdBYzNDd0IsQ0FBZ0J4QixHQUVoQi9DLEVBQVM4QyxFQUFVRCxFQUFlQyxFQUFVQyxLQUc5QzNDLFNBQVNDLGVBQWUsUUFBUUksaUJBQWlCLFFBQVM4QyxHQUUxREEsSyxxQkM3R0F6RixFQUFPRCxRQUFVLENBQ2ZtRixLQXRCVyxDQUFDd0IsRUFBVXBFLEtBQ3RCLE1BQU1xRSxFQUFRckUsRUFBU0csaUJBQWlCaUUsR0FDeEMsSUFBSyxJQUFJekcsRUFBSSxFQUFHQSxFQUFJMEcsRUFBTW5ELE9BQVF2RCxJQUNoQzBHLEVBQU0xRyxHQUFHOEMsTUFBTUMsUUFBVSxRQW1CckJ3QyxLQWZLLENBQUNrQixFQUFVcEUsS0FDdEIsTUFBTXFFLEVBQVFyRSxFQUFTRyxpQkFBaUJpRSxHQUN4QyxJQUFLLElBQUl6RyxFQUFJLEVBQUdBLEVBQUkwRyxFQUFNbkQsT0FBUXZELElBQ2hDMEcsRUFBTTFHLEdBQUc4QyxNQUFNQyxRQUFVLElBWWZ1RCxlQVJVakUsSUFDdEIsTUFBTXFFLEVBQVFyRSxFQUFTRyxpQkFBaUIsU0FDeEMsSUFBSyxJQUFJeEMsRUFBSSxFQUFHQSxFQUFJMEcsRUFBTW5ELE9BQVF2RCxJQUNoQzBHLEVBQU0xRyxHQUFHaUIsTUFBUSIsImZpbGUiOiJtYWluLjUxYjhiYTQ0OGE4ZDRhMWY0NDhkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwidGpVb1wiKTtcbiIsImNvbnN0IGRvbSA9IHJlcXVpcmUoJy4vZG9tJylcblxuY29uc3Qgc2V0dXBSb3cgPSAoZXhwZWN0ZWROdW1lcmFsLCBvbkNvcnJlY3QpID0+IHtcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJudW1lcmFsc1wiKTtcblxuICBjb25zdCB0aGVJbnB1dCA9IHJvdy5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIilbMF07XG4gIHRoZUlucHV0LmZvY3VzKCk7XG4gIHRoZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFuc3dlciA9IHBhcnNlSW50KHRoaXMudmFsdWUsIDEwKTtcbiAgICBjb25zdCBhbnN3ZXJDb3JyZWN0ID0gYW5zd2VyID09PSBleHBlY3RlZE51bWVyYWw7XG4gICAgcm93LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGlja1wiKVswXS5zdHlsZS5kaXNwbGF5ID0gYW5zd2VyQ29ycmVjdCA/IFwiXCIgOiBcIm5vbmVcIjtcbiAgICByb3cucXVlcnlTZWxlY3RvckFsbChcIi5jcm9zc1wiKVswXS5zdHlsZS5kaXNwbGF5ID0gYW5zd2VyQ29ycmVjdCA/IFwibm9uZVwiIDogXCJcIjtcblxuICAgIGlmIChhbnN3ZXJDb3JyZWN0KSB7XG4gICAgICBzZXRUaW1lb3V0KG9uQ29ycmVjdCwgNTAwKVxuICAgIH1cbiAgfSk7XG59O1xuXG5sZXQgbmV4dEltYWdlO1xuY29uc3QgcHJlbG9hZE5leHRDYXRVcmwgPSAoKSA9PiB7XG5cbiAgbGV0IGNhdEdpZlVybCA9IFwiaHR0cHM6Ly90aGVjYXRhcGkuY29tL2FwaS9pbWFnZXMvZ2V0P2Zvcm1hdD1zcmMmdHlwZT1naWZcIjtcbiAgY2F0R2lmVXJsICs9IFwiJmNhY2hlQnVzdGVyPVwiICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgY29uc3QgaSA9IG5ldyBJbWFnZSgpO1xuICBpLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICBpLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhjYXRHaWZVcmwsICdwcmVsb2FkZWQhJylcbiAgICBuZXh0SW1hZ2UgPSBpO1xuXG4gIH1cbiAgaS5zcmMgPSBjYXRHaWZVcmw7XG59O1xuXG5jb25zdCBhZGRDYXRJbWFnZSA9ICgpID0+IHtcbiAgY29uc3QgdGhlR2lmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXQtZ2lmXCIpO1xuICB0aGVHaWYuaW5uZXJIVE1MID0gJyc7XG4gIHRoZUdpZi5hcHBlbmRDaGlsZChuZXh0SW1hZ2UpO1xufTtcblxuY29uc3QgYXJyID0geCA9PiBBcnJheS5mcm9tKHgpO1xuY29uc3QgbnVtID0geCA9PiBOdW1iZXIoeCkgfHwgMDtcbmNvbnN0IGlzRW1wdHkgPSB4cyA9PiB4cy5sZW5ndGggPT09IDA7XG5jb25zdCB0YWtlID0gbiA9PiB4cyA9PiB4cy5zbGljZSgwLCBuKTtcbmNvbnN0IGRyb3AgPSBuID0+IHhzID0+IHhzLnNsaWNlKG4pO1xuY29uc3QgcmV2ZXJzZSA9IHhzID0+IHhzLnNsaWNlKDApLnJldmVyc2UoKTtcbmNvbnN0IGNvbXAgPSBmID0+IGcgPT4geCA9PiBmKGcoeCkpO1xuY29uc3Qgbm90ID0geCA9PiAheDtcbmNvbnN0IGNodW5rID0gbiA9PiB4cyA9PlxuICBpc0VtcHR5KHhzKSA/IFtdIDogW3Rha2UobikoeHMpLCAuLi5jaHVuayhuKShkcm9wKG4pKHhzKSldO1xuXG5jb25zdCBudW1Ub1dvcmRzID0gbiA9PiB7XG5cbiAgbGV0IGEgPSBbXG4gICAgJycsICdvbmUnLCAndHdvJywgJ3RocmVlJywgJ2ZvdXInLFxuICAgICdmaXZlJywgJ3NpeCcsICdzZXZlbicsICdlaWdodCcsICduaW5lJyxcbiAgICAndGVuJywgJ2VsZXZlbicsICd0d2VsdmUnLCAndGhpcnRlZW4nLCAnZm91cnRlZW4nLFxuICAgICdmaWZ0ZWVuJywgJ3NpeHRlZW4nLCAnc2V2ZW50ZWVuJywgJ2VpZ2h0ZWVuJywgJ25pbmV0ZWVuJ1xuICBdO1xuXG4gIGxldCBiID0gW1xuICAgICcnLCAnJywgJ3R3ZW50eScsICd0aGlydHknLCAnZm9ydHknLFxuICAgICdmaWZ0eScsICdzaXh0eScsICdzZXZlbnR5JywgJ2VpZ2h0eScsICduaW5ldHknXG4gIF07XG5cbiAgbGV0IGcgPSBbXG4gICAgJycsICd0aG91c2FuZCcsICdtaWxsaW9uJywgJ2JpbGxpb24nLCAndHJpbGxpb24nLCAncXVhZHJpbGxpb24nLFxuICAgICdxdWludGlsbGlvbicsICdzZXh0aWxsaW9uJywgJ3NlcHRpbGxpb24nLCAnb2N0aWxsaW9uJywgJ25vbmlsbGlvbidcbiAgXTtcblxuICAvLyB0aGlzIHBhcnQgaXMgcmVhbGx5IG5hc3R5IHN0aWxsXG4gIC8vIGl0IG1pZ2h0IGVkaXQgdGhpcyBhZ2FpbiBsYXRlciB0byBzaG93IGhvdyBNb25vaWRzIGNvdWxkIGZpeCB0aGlzIHVwXG4gIGxldCBtYWtlR3JvdXAgPSAoW29uZXMsIHRlbnMsIGh1bnNdKSA9PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgIG51bShodW5zKSA9PT0gMCA/ICcnIDogYVtodW5zXSArICcgaHVuZHJlZCAnLFxuICAgICAgbnVtKG9uZXMpID09PSAwID8gYlt0ZW5zXSA6IGJbdGVuc10gJiYgYlt0ZW5zXSArICctJyB8fCAnJyxcbiAgICAgIGFbdGVucyArIG9uZXNdIHx8IGFbb25lc11cbiAgICBdLmpvaW4oJycpO1xuICB9O1xuXG4gIGxldCB0aG91c2FuZCA9IChncm91cCwgaSkgPT4gZ3JvdXAgPT09ICcnID8gZ3JvdXAgOiBgJHtncm91cH0gJHtnW2ldfWA7XG5cbiAgaWYgKHR5cGVvZiBuID09PSAnbnVtYmVyJylcbiAgICByZXR1cm4gbnVtVG9Xb3JkcyhTdHJpbmcobikpO1xuICBlbHNlIGlmIChuID09PSAnMCcpXG4gICAgcmV0dXJuICd6ZXJvJztcbiAgZWxzZVxuICAgIHJldHVybiBjb21wKGNodW5rKDMpKShyZXZlcnNlKShhcnIobikpXG4gICAgICAubWFwKG1ha2VHcm91cClcbiAgICAgIC5tYXAodGhvdXNhbmQpXG4gICAgICAuZmlsdGVyKGNvbXAobm90KShpc0VtcHR5KSlcbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5qb2luKCcgJyk7XG59O1xuXG5jb25zdCBzaG93RG9uZUJ1dHRvbiA9IChudW1lcmFscywgd29yZHMpID0+IGZ1bmN0aW9uICgpIHtcbiAgZG9tLmhpZGUoXCIjbnVtZXJhbHNcIiwgZG9jdW1lbnQpO1xuICBkb20uaGlkZShcIiNpbml0aWFsLW51bWJlclwiLCBkb2N1bWVudClcbiAgY29uc3QgYnV0dG9uSG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb25lXCIpO1xuICBidXR0b25Ib2xkZXIucXVlcnlTZWxlY3RvckFsbChcIi5yZXN1bHRcIilbMF0uaW5uZXJIVE1MID0gd29yZHMgKyBcIiBzYXlzIFwiICsgbnVtZXJhbHM7XG4gIGJ1dHRvbkhvbGRlci5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpWzBdLmlubmVySFRNTCA9IFwiQXdlc29tZSB3b3JrISBBZ2Fpbj9cIjtcbiAgYWRkQ2F0SW1hZ2UoKTtcbiAgZG9tLnNob3coJyNkb25lJywgZG9jdW1lbnQpXG59O1xuXG5jb25zdCBzaG93V29yZFRvSHVtYW4gPSB3b3JkcyA9PiB7XG4gIGNvbnN0IGluaXRpYWxSb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRpYWwtbnVtYmVyXCIpO1xuICBpbml0aWFsUm93LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICBpbml0aWFsUm93LmlubmVySFRNTCA9ICdZb3VyIG51bWJlciBpcyAnICsgd29yZHM7XG59O1xuXG5jb25zdCBzZXR1cFBhZ2UgPSAoKSA9PiB7XG4gIHByZWxvYWROZXh0Q2F0VXJsKCk7XG5cbiAgY29uc3QgbnVtZXJhbHMgPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5KSArIDEpO1xuICBjb25zdCB3b3JkcyA9IG51bVRvV29yZHMobnVtZXJhbHMpO1xuXG4gIGRvbS5zaG93KFwiI251bWVyYWxzXCIsIGRvY3VtZW50KTtcbiAgZG9tLmhpZGUoXCIubWFyay1ob2xkZXIgc3BhblwiLCBkb2N1bWVudCk7XG4gIGRvbS5oaWRlKFwiI2RvbmVcIiwgZG9jdW1lbnQpO1xuICBkb20ucmVzZXRBbGxJbnB1dHMoZG9jdW1lbnQpO1xuXG4gIHNob3dXb3JkVG9IdW1hbih3b3Jkcyk7XG5cbiAgc2V0dXBSb3cobnVtZXJhbHMsIHNob3dEb25lQnV0dG9uKG51bWVyYWxzLCB3b3JkcykpO1xufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb25lXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXR1cFBhZ2UpO1xuXG5zZXR1cFBhZ2UoKTtcbiIsImNvbnN0IGhpZGUgPSAoc2VsZWN0b3IsIGRvY3VtZW50KSA9PiB7XG4gIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBub2Rlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbn07XG5cbmNvbnN0IHNob3cgPSAoc2VsZWN0b3IsIGRvY3VtZW50KSA9PiB7XG4gIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBub2Rlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgfVxufTtcblxuY29uc3QgcmVzZXRBbGxJbnB1dHMgPSAoZG9jdW1lbnQpID0+IHtcbiAgY29uc3Qgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBub2Rlc1tpXS52YWx1ZSA9IFwiXCI7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBoaWRlLCBzaG93LCByZXNldEFsbElucHV0c1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==