"@fixture 02_Rights_Management_Presets";
"@page http://10.122.4.25/rightpresetmanager/?login=root&password=admin";



"@test"["01_Mappen_ReadOnly_Voreinstellung"] = {
    "1.Wait 7000 milliseconds": function() {
        act.wait(7e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        var actionTarget = function() {
            return $(".cui-tree-node-content").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-plus").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Type in input "Name"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "ReadOnly (DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "ReadOnly (US)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > input:nth(0)", "ReadOnly (ES)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > input:nth(0)", "ReadOnly (IT)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Type in text area "Beschreibung"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > textarea:nth(0)", "Mappen und deren Datensätze in allen Versionen ansehen (DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > textarea:nth(0)", "Mappen und deren Datensätze in allen Versionen ansehen (US)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > textarea:nth(0)", "Mappen und deren Datensätze in allen Versionen ansehen (ES)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "11.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > textarea:nth(0)", "Mappen und deren Datensätze in allen Versionen ansehen (IT)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '12.Click span "Berechtigungen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '13.Click span "Datensätze ansehen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '14.Click span "Versionen ansehen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '15.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "16.Click span": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "17.Click span": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '18.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '19.Click span "1000px"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "20.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '21.Click span "aac"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '22.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '23.Click span "1000px"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '24.Click span "1000px (watermark)"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '25.Click span "2000px"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '26.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '27.Click span "1000px"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '28.Click span "1000px (watermark)"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '29.Click span "pages"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '30.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '31.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '32.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '33.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "34.Click span": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '35.Click span "720px (watermark)"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '36.Click span "1920px"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '37.Click span "360p"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(4) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "38.Click span": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(5) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '39.Click span "1920p"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(6) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '40.Click span "Mappe ansehen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(9) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '41.Click span "Tagfilter"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '42.Click span "Speichern"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    }
};



"@test"["02_Mappen_Ansehen_und_Bearbeiten"] = {
    "1.Wait 7000 milliseconds": function() {
        act.wait(7e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Mappen"': function() {
        act.click(":containsExcludeChildren(Mappen)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-plus").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Type in input "Name"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "ReadAndEdit (DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "ReadAndEdit (US)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > input:nth(0)", "ReadAndEdit (ES)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > input:nth(0)", "ReadAndEdit (IT)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Type in text area "Beschreibung"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > textarea:nth(0)", "Mappen ansehen und Datensätze bearbeiten (DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > textarea:nth(0)", "Mappen ansehen und Datensätze bearbeiten (US)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > textarea:nth(0)", "Mappen ansehen und Datensätze bearbeiten (ES)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "11.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > textarea:nth(0)", "Mappen ansehen und Datensätze bearbeiten (IT)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '12.Click span "Berechtigungen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '13.Click span "Datensätze ansehen..."': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '14.Click span "Versionen ansehen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '15.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '16.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '17.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '18.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '19.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '20.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '21.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '22.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    "23.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(10) > div:nth(0) > div:nth(0) > div:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '24.Click span "Tagfilter"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '25.Click span "Speichern"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    }
};


"@test"["03_Mappen_Entfernen"] = {
    "1.Wait 7000 milliseconds": function() {
        act.wait(7e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Mappen"': function() {
        act.click(":containsExcludeChildren(Mappen)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-plus").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Type in input "Name"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "Delete (DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "Delete (US)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > input:nth(0)", "Delete (ES)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > input:nth(0)", "Delete (IT)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Type in text area "Beschreibung"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > textarea:nth(0)", "Mappen Entfernen (DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > textarea:nth(0)", "Mappen Entfernen (US)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > textarea:nth(0)", "Mappen Entfernen (ES)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "11.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > textarea:nth(0)", "Mappen Entfernen (IT)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '12.Click span "Berechtigungen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '13.Click span "Datensätze entfernen..."': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '14.Click span "Versionen ansehen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '15.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '16.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '17.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '18.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '19.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '20.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '21.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '22.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    "23.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(10) > div:nth(0) > div:nth(0) > div:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '24.Click span "Tagfilter"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '25.Click span "Speichern"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    }
};


"@test"["04_Datensatz_ReadOnly"] = {
    "1.Wait 7000 milliseconds": function() {
        act.wait(7e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        var actionTarget = function() {
            return $(".cui-label-content").eq(2);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-plus").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Type in input "Name"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "ReadOnly (DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "ReadOnly (US)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > input:nth(0)", "ReadOnly (ES)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > input:nth(0)", "ReadOnly (IT)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Type in text area "Beschreibung"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > textarea:nth(0)", "Diese Voreinstellung kann einen Datensatz nur ansehen (DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > textarea:nth(0)", "Diese Voreinstellung kann einen Datensatz nur ansehen (US)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > textarea:nth(0)", "Diese Voreinstellung kann einen Datensatz nur ansehen (ES)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "11.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > textarea:nth(0)", "Diese Voreinstellung kann einen Datensatz nur ansehen (IT)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '12.Click span "Berechtigungen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '13.Click span "Datensatz ansehen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '14.Click span "Versionen ansehen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "15.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '16.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '17.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '18.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '19.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '20.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '21.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '22.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '23.Click span "Tagfilter"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '24.Click span "Speichern"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    }
};




"@test"["05_Datensatz_Ansehen_Bearbeiten"] = {
    "1.Wait 7000 milliseconds": function() {
        act.wait(7e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        var actionTarget = function() {
            return $(".cui-lv-td.ez5-col-right-preset-manager-admin-list-context.cui-lv-td-max.cui-lv-0-cell.cui-tree-node-column.cui-tree-node-level-1").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-plus").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Type in input "Name"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "ReadAndEdit (DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "ReadAndEdit (US)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > input:nth(0)", "ReadAndEdit (ES)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > input:nth(0)", "ReadAndEdit (IT)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Type in text area "Beschreibung"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > textarea:nth(0)", "Ansehen und Bearbeiten (DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > textarea:nth(0)", "Ansehen und Bearbeiten (US)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > textarea:nth(0)", "Ansehen und Bearbeiten (ES)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "11.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > textarea:nth(0)", "Ansehen und Bearbeiten (IT)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '12.Click span "Berechtigungen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '13.Click span "Datensatz bearbeiten"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '14.Click span "Versionen ansehen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '15.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '16.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '17.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '18.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '19.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '20.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '21.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '22.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '23.Click span "Tagfilter"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '24.Click span "Speichern"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    }
};


"@test"["06_Datensatz_Entfernen"] = {
    "1.Wait 7000 milliseconds": function() {
        act.wait(7e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        var actionTarget = function() {
            return $(".cui-lv-td.ez5-col-right-preset-manager-admin-list-context.cui-lv-td-max.cui-lv-0-cell.cui-tree-node-column.cui-tree-node-level-1").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-plus").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Type in input "Name"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "Delete (DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "Delete (US)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > input:nth(0)", "Delete (ES)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > input:nth(0)", "Delete (IT)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Type in text area "Beschreibung"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > textarea:nth(0)", "Entfernen (DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > textarea:nth(0)", "Entfernen (US)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > textarea:nth(0)", "Entfernen (ES)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "11.Type in text area": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > textarea:nth(0)", "Entfernen (IT)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '12.Click span "Berechtigungen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '13.Click span "Datensatz entfernen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '14.Click span "Versionen ansehen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '15.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '16.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '17.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '18.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '19.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '20.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '21.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '22.Click span "Original"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)", {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    '23.Click span "Tagfilter"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > span:nth(0)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '24.Click span "Speichern"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    }
};