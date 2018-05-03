"@fixture 03_Werkzeuge_Migration";
"@page http://10.122.4.25/search?login=root&password=admin";

"@test"["01_Migration_Export"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-bars").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Werkzeuge"': function() {
        act.click(":containsExcludeChildren(Werkzeuge)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Werkzeuge"': function() {
        act.click(":containsExcludeChildren(Werkzeuge)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Migration"': function() {
        act.click(":containsExcludeChildren(Migration)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Export"': function() {
        act.click('[title="base.migration.choice.download"] .cui-button-center');
    }
};



"@test"["02_Migration_Import_wrong_datatype"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-bars").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Werkzeuge"': function() {
        act.click(":containsExcludeChildren(Werkzeuge)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Werkzeuge"': function() {
        act.click(":containsExcludeChildren(Werkzeuge)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Migration"': function() {
        act.click(":containsExcludeChildren(Migration)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Import"': function() {
        act.click('[for="cui-file-upload-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Upload "25_09_2017_Ironwood_Customs_BME_K100_cafe_racer_05.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/25_09_2017_Ironwood_Customs_BME_K100_cafe_racer_05.jpg");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Click <svg>": function() {
        act.click('[aria-label="Schließen"] .cui-button-visual');
    }
};

