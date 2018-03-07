"@fixture 10_Vorreinstellungen NEW";
"@page http://10.122.4.25/rightpresetmanager/?login=root&password=admin";



"@test"["01_Mappen ReadOnly Voreinstellung"] = {
    "1.Wait 7000 milliseconds": function() {
        act.wait(7e3);
    },
    "2.Click div": function() {
        var actionTarget = function() {
            return $(".cui-tree-node-content").eq(0);
        };
        act.click(actionTarget);
    },
    "3.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-plus").eq(0);
        };
        act.click(actionTarget);
    },
    '4.Type in input "Name"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "ReadOnly (DE)");
    },
    "5.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "ReadOnly (US)");
    },
    "6.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > input:nth(0)", "ReadOnly (ES)");
    },
    "7.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > input:nth(0)", "ReadOnly (IT)");
    },
    '8.Type in text area "Beschreibung"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > textarea:nth(0)", "Mappen und deren Datensätze in allen Versionen ansehen (DE)");
    },
    "9.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > textarea:nth(0)", "Mappen und deren Datensätze in allen Versionen ansehen (US)");
    },
    "10.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > textarea:nth(0)", "Mappen und deren Datensätze in allen Versionen ansehen (ES)");
    },
    "11.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > textarea:nth(0)", "Mappen und deren Datensätze in allen Versionen ansehen (IT)");
    },
    '12.Click span "Berechtigungen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '13.Click span "Datensätze ansehen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '14.Click span "Versionen ansehen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '15.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    "16.Click span": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "17.Click span": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '18.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '19.Click span "1000px"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    "20.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1)");
    },
    '21.Click span "aac"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '22.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '23.Click span "1000px"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '24.Click span "1000px (watermark)"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '25.Click span "2000px"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '26.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '27.Click span "1000px"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '28.Click span "1000px (watermark)"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '29.Click span "pages"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '30.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '31.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '32.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '33.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    "34.Click span": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '35.Click span "720px (watermark)"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '36.Click span "1920px"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '37.Click span "360p"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(4) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    "38.Click span": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(5) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '39.Click span "1920p"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(6) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '40.Click span "Mappe ansehen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(9) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '41.Click span "Tagfilter"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '42.Click span "Speichern"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    }
};



"@test"["02_Mappen Ansehen und Bearbeiten"] = {
    "1.Wait 7000 milliseconds": function() {
        act.wait(7e3);
    },
    '2.Click span "Mappen"': function() {
        act.click(":containsExcludeChildren(Mappen)");
    },
    "3.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-plus").eq(0);
        };
        act.click(actionTarget);
    },
    '4.Type in input "Name"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "ReadAndEdit (DE)");
    },
    "5.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "ReadAndEdit (US)");
    },
    "6.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > input:nth(0)", "ReadAndEdit (ES)");
    },
    "7.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > input:nth(0)", "ReadAndEdit (IT)");
    },
    '8.Type in text area "Beschreibung"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > textarea:nth(0)", "Mappen ansehen und Datensätze bearbeiten (DE)");
    },
    "9.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > textarea:nth(0)", "Mappen ansehen und Datensätze bearbeiten (US)");
    },
    "10.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > textarea:nth(0)", "Mappen ansehen und Datensätze bearbeiten (ES)");
    },
    "11.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > textarea:nth(0)", "Mappen ansehen und Datensätze bearbeiten (IT)");
    },
    '12.Click span "Berechtigungen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '13.Click span "Datensätze ansehen..."': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '14.Click span "Versionen ansehen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '15.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '16.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '17.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '18.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '19.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '20.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '21.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '22.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    "23.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(10) > div:nth(0) > div:nth(0) > div:nth(0)");
    },
    '24.Click span "Tagfilter"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '25.Click span "Speichern"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    }
};


"@test"["03_Mappen Entfernen"] = {
    "1.Wait 7000 milliseconds": function() {
        act.wait(7e3);
    },
    '2.Click span "Mappen"': function() {
        act.click(":containsExcludeChildren(Mappen)");
    },
    "3.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-plus").eq(0);
        };
        act.click(actionTarget);
    },
    '4.Type in input "Name"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "Delete (DE)");
    },
    "5.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "Delete (US)");
    },
    "6.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > input:nth(0)", "Delete (ES)");
    },
    "7.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > input:nth(0)", "Delete (IT)");
    },
    '8.Type in text area "Beschreibung"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > textarea:nth(0)", "Mappen Entfernen (DE)");
    },
    "9.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > textarea:nth(0)", "Mappen Entfernen (US)");
    },
    "10.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > textarea:nth(0)", "Mappen Entfernen (ES)");
    },
    "11.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > textarea:nth(0)", "Mappen Entfernen (IT)");
    },
    '12.Click span "Berechtigungen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '13.Click span "Datensätze entfernen..."': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '14.Click span "Versionen ansehen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '15.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '16.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '17.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '18.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '19.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '20.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '21.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '22.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    "23.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(10) > div:nth(0) > div:nth(0) > div:nth(0)");
    },
    '24.Click span "Tagfilter"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '25.Click span "Speichern"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    }
};


"@test"["05_Datensatz ReadOnly"] = {
    "1.Wait 7000 milliseconds": function() {
        act.wait(7e3);
    },
    "2.Click div": function() {
        var actionTarget = function() {
            return $(".cui-label-content").eq(2);
        };
        act.click(actionTarget);
    },
    "3.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-plus").eq(0);
        };
        act.click(actionTarget);
    },
    '4.Type in input "Name"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "ReadOnly (DE)");
    },
    "5.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "ReadOnly (US)");
    },
    "6.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > input:nth(0)", "ReadOnly (ES)");
    },
    "7.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > input:nth(0)", "ReadOnly (IT)");
    },
    '8.Type in text area "Beschreibung"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > textarea:nth(0)", "Diese Voreinstellung kann einen Datensatz nur ansehen (DE)");
    },
    "9.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > textarea:nth(0)", "Diese Voreinstellung kann einen Datensatz nur ansehen (US)");
    },
    "10.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > textarea:nth(0)", "Diese Voreinstellung kann einen Datensatz nur ansehen (ES)");
    },
    "11.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > textarea:nth(0)", "Diese Voreinstellung kann einen Datensatz nur ansehen (IT)");
    },
    '12.Click span "Berechtigungen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '13.Click span "Datensatz ansehen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '14.Click span "Versionen ansehen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    "15.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1)", {
            ctrl: true
        });
    },
    '16.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '17.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '18.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '19.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '20.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '21.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '22.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '23.Click span "Tagfilter"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '24.Click span "Speichern"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    }
};




"@test"["04_Datensatz Ansehen & Bearbeiten"] = {
    "1.Wait 7000 milliseconds": function() {
        act.wait(7e3);
    },
    "2.Click div": function() {
        var actionTarget = function() {
            return $(".cui-lv-td.ez5-col-right-preset-manager-admin-list-context.cui-lv-td-max.cui-lv-0-cell.cui-tree-node-column.cui-tree-node-level-1").eq(1);
        };
        act.click(actionTarget);
    },
    "3.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-plus").eq(0);
        };
        act.click(actionTarget);
    },
    '4.Type in input "Name"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "ReadAndEdit (DE)");
    },
    "5.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "ReadAndEdit (US)");
    },
    "6.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > input:nth(0)", "ReadAndEdit (ES)");
    },
    "7.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > input:nth(0)", "ReadAndEdit (IT)");
    },
    '8.Type in text area "Beschreibung"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > textarea:nth(0)", "Ansehen und Bearbeiten (DE)");
    },
    "9.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > textarea:nth(0)", "Ansehen und Bearbeiten (US)");
    },
    "10.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > textarea:nth(0)", "Ansehen und Bearbeiten (ES)");
    },
    "11.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > textarea:nth(0)", "Ansehen und Bearbeiten (IT)");
    },
    '12.Click span "Berechtigungen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '13.Click span "Datensatz bearbeiten"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '14.Click span "Versionen ansehen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '15.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '16.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '17.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '18.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '19.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '20.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '21.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '22.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '23.Click span "Tagfilter"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '24.Click span "Speichern"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    }
};


"@test"["06_Datensatz Entfernen"] = {
    "1.Wait 7000 milliseconds": function() {
        act.wait(7e3);
    },
    "2.Click div": function() {
        var actionTarget = function() {
            return $(".cui-lv-td.ez5-col-right-preset-manager-admin-list-context.cui-lv-td-max.cui-lv-0-cell.cui-tree-node-column.cui-tree-node-level-1").eq(1);
        };
        act.click(actionTarget);
    },
    "3.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-plus").eq(0);
        };
        act.click(actionTarget);
    },
    '4.Type in input "Name"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "Delete (DE)");
    },
    "5.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "Delete (US)");
    },
    "6.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > input:nth(0)", "Delete (ES)");
    },
    "7.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > input:nth(0)", "Delete (IT)");
    },
    '8.Type in text area "Beschreibung"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > textarea:nth(0)", "Entfernen (DE)");
    },
    "9.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > textarea:nth(0)", "Entfernen (US)");
    },
    "10.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > textarea:nth(0)", "Entfernen (ES)");
    },
    "11.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > textarea:nth(0)", "Entfernen (IT)");
    },
    '12.Click span "Berechtigungen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '13.Click span "Datensatz entfernen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '14.Click span "Versionen ansehen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '15.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '16.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '17.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '18.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '19.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '20.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '21.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '22.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },
    '23.Click span "Tagfilter"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '24.Click span "Speichern"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    }
};