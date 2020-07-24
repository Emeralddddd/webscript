// ==UserScript==
// @name         AutoEva
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      http://applicationnewjw.ecnu.edu.cn/eams/evaluateStd.action
// @grant        none
// @require      http://libs.baidu.com/jquery/1.7.2/jquery.min.js
// ==/UserScript==
var $ = window.jQuery;
function auto() {
    var j = 0;
    var timer = window.setInterval(function () {
        if ($("table.gridtable a")[j] === undefined) {
            window.clearInterval(timer);
        }
        $("table.gridtable a")[j].click();
        console.log(j);
        window.setTimeout(function () {
            for (var i = 0, len = 6; i < len; i++) {
                $("input:radio[value=4]")[i].click();
            }
            $("input:radio[value=133]")[0].click();
            var realConfirm = window.confirm;
            window.confirm = function () {
                window.confirm = realConfirm;
                return true;
            };
            $("input#btnSave")[0].click();
        }, 5000);
        j++;
    }, 10000)
}

(function () {
    var x = document.createElement("button")
    x.innerHTML = '自动评教'
    x.id = 'autoeva'
    document.documentElement.appendChild(x)
    // Your code here...
    x.addEventListener("click", auto)
})();
