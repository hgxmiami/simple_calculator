    function run1()  {
        document.frm.result.value += "1";
    }
    function run2()  {   
        document.frm.result.value += "2";
    }
    function run3()  {
        document.frm.result.value += "3";
    }
    function run4() {
        document.frm.result.value += "4";
    }
    function run5() {
        document.frm.result.value += "5";
    }
    function run6() {
        document.frm.result.value += "6";
    }
    function run7() {
        document.frm.result.value += "7";
    }
    function run8() {
        document.frm.result.value += "8";
    }
    function run9() {
        document.frm.result.value += "9";
    }
    function runplus() {
        document.frm.result.value += "+";
    }
    function runminus() {
        document.frm.result.value += "-";
    }
    function runtimes() {
        document.frm.result.value += "*";
    }
    function rundivide() {
        document.frm.result.value += "/";
    }
    function runclear() {
        document.frm.result.value = " ";
    }
    function run0() {
        document.frm.result.value += "0";
    }
    function runpoint() {
        document.frm.result.value += ".";
    }
    function runpercent() {
        document.frm.result.value += "%";
    }
    function evalu()
        {
          var evalo =  eval(document.frm.result.value)
          
          document.frm.result.value = evalo;
        }