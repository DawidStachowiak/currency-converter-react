(this["webpackJsonpcurrency-calculator"]=this["webpackJsonpcurrency-calculator"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),s=n.n(a),i=(n(9),n(2)),l=(n(10),n(11),n(0)),u=function(e){var t=e.children;return Object(l.jsx)("div",{className:"container",children:t})},o=(n(13),function(e){var t=e.currencies,n=e.calculateResult,r=Object(c.useState)(""),a=Object(i.a)(r,2),s=a[0],u=a[1],o=Object(c.useState)(t[2].name),j=Object(i.a)(o,2),m=j[0],b=j[1];return Object(l.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),n(s,m)},children:[Object(l.jsxs)("fieldset",{className:"form__fieldset",children:[Object(l.jsx)("legend",{children:"Kalkulator walut"}),Object(l.jsx)("label",{className:"form__label",children:"Wybierz kwot\u0119 w PLN"}),Object(l.jsx)("input",{className:"form__input",placeholder:"wpisz kwot\u0119",type:"number",min:"1",value:s,required:!0,onChange:function(e){var t=e.target;return u(t.value)}})]}),Object(l.jsxs)("fieldset",{children:[Object(l.jsx)("label",{className:"form__label",children:"Wybierz walut\u0119"}),Object(l.jsx)("select",{className:"form__select",value:m,onChange:function(e){var t=e.target;return b(t.value)},children:t.map((function(e){return Object(l.jsx)("option",{value:e.name,children:e.name},e.id)}))})]}),Object(l.jsx)("button",{className:"form__button",type:"submit",children:"Przelicz"}),Object(l.jsx)("button",{className:"form__button",type:"reset",children:"Wyczy\u015b\u0107 formularz"})]})}),j=[{id:"USD",price:4.56,name:"Dolar ameryka\u0144ski"},{id:"EUR",price:4.56,name:"Euro"},{id:"GBP",price:5.24,name:"Funt szterling"},{id:"SEK",price:3.77,name:"Korona szwedzka"},{id:"CHF",price:4.15,name:"Frank szwajcarski"}],m=(n(14),function(e){var t=e.result;return Object(l.jsx)("div",{class:"form__resultBox",children:void 0!==t&&Object(l.jsxs)("p",{className:"form__resultParagraph",children:["Otrzymasz:\xa0",t.targetAmount.toFixed(2),"\xa0",t.selectedCurrency]})})});var b=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)(u,{children:[Object(l.jsx)(o,{currencies:j,calculateResult:function(e,t){var n=j.find((function(e){return e.name===t})).price;r({sourceAmount:+e,targetAmount:e/n,selectedCurrency:t})}}),Object(l.jsx)(m,{result:n})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),d()}],[[15,1,2]]]);
//# sourceMappingURL=main.aa639205.chunk.js.map