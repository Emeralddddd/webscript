window.setInterval(function(){
    var j=0;
    $("table.gridtable a")[j].click();
    window.setTimeout(function(){
        for (var i=0,len=6; i<len; i++)
    {
        $("input:radio[value=4]")[i].click();
    }
    $("input:radio[value=133]")[0].click();
    $("input#btnSave")[0].click();
    window.confirm = function(){return !0;};
    },2000);
    j++;
},2000)