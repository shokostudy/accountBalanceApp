// ダイアログ表示・非表示
var BANK_OBJ = "";

function show(dlg, obj) {
  ons.createDialog(dlg).then(function(dialog) {
    dialog.show();
    if(obj.id == "label01"){
        document.getElementById("bank").value = document.getElementById("bank1").innerHTML;
        BANK_OBJ = document.getElementById("bank1");
    } else if(obj.id == "label02"){
        document.getElementById("bank").value = document.getElementById("bank2").innerHTML;
        BANK_OBJ = document.getElementById("bank2");
    } else if(obj.id == "label03"){
        document.getElementById("bank").value = document.getElementById("bank3").innerHTML;
        BANK_OBJ = document.getElementById("bank3");
    } else if(obj.id == "label04"){
        document.getElementById("bank").value = document.getElementById("bank4").innerHTML;
        BANK_OBJ = document.getElementById("bank4");
    }
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    document.getElementById("year").value = year;
    document.getElementById("month").value = month;
  });
}

function hideCancel(id) {
    document.getElementById(id).remove();
};

function hideOK(id) {
    var str = document.getElementById("bank").value;
    BANK_OBJ.innerHTML = str;
    var banks = JSON.parse(localStorage.getItem("bankList"));
    if(BANK_OBJ.id == "bank1"){
        banks.bank1 = str;
        
        var balanceList = JSON.parse(localStorage.getItem("balanceList1"));
        var year = document.getElementById("year").value;
        var month = document.getElementById("month").value;
        var balance = document.getElementById("balance").value;
        balanceList[year][month]['y'] = balance;        
        localStorage.setItem("balanceList1", JSON.stringify(balanceList));        
        
    } else if(BANK_OBJ.id == "bank2"){
        banks.bank2 = str;
    } else if(BANK_OBJ.id == "bank3"){
        banks.bank3 = str;
    } else if(BANK_OBJ.id == "bank4"){
        banks.bank4 = str;
    }
    localStorage.setItem("bankList", JSON.stringify(banks));
    
    var balanceList = JSON.parse(localStorage.getItem("balanceList1"));
    console.log(balanceList['2017'][8]['y']);
    
    document.getElementById(id).remove();
};


