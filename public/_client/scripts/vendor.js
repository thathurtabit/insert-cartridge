!function(t,e){"use strict";t.Scroller=t.Scroller||{},t.Scroller=function(){function e(t,e){u.push({el:t,callback:e})}function n(e){var n=e.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.bottom<=(t.innerHeight||document.documentElement.clientHeight)+e.clientHeight&&n.right<=(t.innerWidth||document.documentElement.clientWidth)}function i(t){return!t.el.classList.contains(s)}function r(t){n(t.el)&&(t.el.classList.add(s),t.callback())}function c(){var t=u.filter(i);t.forEach(r)}function o(){setTimeout(c,1e3)}function l(){c(),t.addEventListener("scroll",o,!1)}var u=[],s="in-viewport";return{init:l,addElement:e}}()}(window),function(t,e){"use strict";t.Typewriter=t.Typewriter||{},t.Typewriter=function(t){function e(n,i,r,c){r<i.length?(n.textContent=i.substring(0,r+1),r++,setTimeout(function(){e(n,i,r,c)},t.letterSpeed)):"undefined"!=typeof c&&c()}function n(t){c[t].style.visibility="visible"}function i(r){var r=r||0,l=c[r].querySelectorAll(t.contentSelector)[0],u=l.getAttribute(t.contentAttr);new Promise(function(t){e(l,u,0,t)}).then(function(){r++,r<=o&&(n(r),i(r))})}var r=document.querySelectorAll(t.selector)[0],c=r.querySelectorAll(t.rowSelector),o=c.length-1;return t.contentAttr=t.contentSelector.replace("[","").replace("]",""),{startTyping:i}}}(window);