"@fixture 03_Filters";
"@page http://10.122.4.25/search/?login=root&password=admin";

"@test"["Filter Objekttyp"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Click span "Filter"': function() {
        act.click('[title="search.main.button.filter"] .cui-button-center');
    },
    '3.Click span "Dateien (DE)"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Felder DE)").eq(0);
        };
        act.click(actionTarget);
    },
    '4.Click span "Bilder"': function() {
        act.click(":containsExcludeChildren(Bilder)");
    },
    '5.Click span "JPG"': function() {
        act.click(":containsExcludeChildren(JPG)");
    }
};

"@test"["Filter Pictures Filetype"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Click span "Filter"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Filter)").eq(0);
        };
        act.click(actionTarget);
    },
    '3.Click span "Bilder"': function() {
        act.click(":containsExcludeChildren(Bilder)");
    },
    '4.Click span "Aktueller Monat"': function() {
        act.click(":containsExcludeChildren(JPG)");
    }
};



"@test"["Filter Upload (Critical Test)"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    }
};