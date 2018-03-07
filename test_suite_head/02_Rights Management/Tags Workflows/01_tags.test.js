"@fixture 01_Tags";
"@page http://10.122.4.25/tagmanager/?login=root&password=admin";


"@test"["01_Redaktions Tags"] = {
    "1.Wait 7000 milliseconds": function() {
        act.wait(6e3);
    },
    '2.Click span "+"': function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="tag.form.list.plus"]').find(".fa-plus")[0];
        };
        act.click(actionTarget);
    },
    '3.Click span "Alle Felder (DE)"': function() {
        var elm = $('[ez5-loca-key="datamodel.list.button.plus"]').find(".fa-plus")
        var actionTarget = function() {
            return $('.cui-item-list-body span').filter(function(index, span) { return span.textContent === "Tag-Gruppe"; })[0]
        };
        act.click(actionTarget);
    },
    "4.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "Redaktions Tags (DE)");
    },
    "5.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "Redaktions Tags (US)");
    },
    "6.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > input:nth(0)", "Redaktions Tags (ES)");
    },
    "7.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > input:nth(0)", "Redaktions Tags (IT)");
    },
    "8.Click div": function() {
        var actionTarget = function() {
            return $(".cui-button-right").eq(1);
        };
        act.click(actionTarget);
    },
    '9.Click span "Alle Felder (DE)"': function() {
        var actionTarget = function() {
            return $('.cui-item-list-body span').filter(function(index, span) { return span.textContent === "Tag"; })[0]
        };
        act.click(actionTarget);
    },
    "10.Click div": function() {
        var actionTarget = function() {
            return $(".cui-button-right").eq(5);
        };
        act.click(actionTarget);
    },
    '11.Click span "Alle Felder (DE)"': function() {
        var actionTarget = function() {
            return $('.cui-item-list-body span').filter(function(index, span) { return span.textContent === "Tag"; })[0]
        };
        act.click(actionTarget);
    },
    "12.Click div": function() {
        var actionTarget = function() {
            return $(".cui-button-right").eq(9);
        };
        act.click(actionTarget);
    },
    '13.Click span "Alle Felder (DE)"': function() {
        var actionTarget = function() {
            return $('.cui-item-list-body span').filter(function(index, span) { return span.textContent === "Tag"; })[0]
        };
        act.click(actionTarget);
    },
    "14.Click div": function() {
        var actionTarget = function() {
            return $(".cui-button-right").eq(13);
        };
        act.click(actionTarget);
    },
    '15.Click span "Alle Felder (DE)"': function() {
        var actionTarget = function() {
            return $('.cui-item-list-body span').filter(function(index, span) { return span.textContent === "Tag"; })[0]
        };
        act.click(actionTarget);
    },
    "16.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "Entwurf (DE)");
    },
    "17.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "Entwurf (US)");
    },
    "18.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > input:nth(0)", "Entwurf (ES)");
    },
    "19.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > input:nth(0)", "Entwurf (IT)");
    },
    "20.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "Erstversion (DE)");
    },
    "21.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "Erstversion (US)");
    },
    "22.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > input:nth(0)", "Erstversion (ES)");
    },
    "23.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > input:nth(0)", "Erstversion (IT)");
    },
    "24.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "Redaktion (DE)");
    },
    "25.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "Redaktion (US)");
    },
    "26.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > input:nth(0)", "Redaktion (ES)");
    },
    "27.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > input:nth(0)", "Redaktion (IT)");
    },
    "28.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "Veröffentlichen (DE)");
    },
    "29.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "Veröffentlichen (US)");
    },
    "30.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > input:nth(0)", "Veröffentlichen (ES)");
    },
    "31.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > input:nth(0)", "Veröffentlichen (IT)");
    },
    "32.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },
    "33.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(9) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2)");
    },
    "34.Click div": function() {
        act.click("body > div:nth(5) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(0) > div:nth(0)");
    },
    "35.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(9) > div:nth(0) > div:nth(0) > div:nth(0)");
    },
    "36.Click div": function() {
        act.click("body > div:nth(5) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(0)");
    },
    "37.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(9) > div:nth(0) > div:nth(0) > div:nth(0)");
    },
    "38.Click div": function() {
        act.click("body > div:nth(5) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(0)");
    },
    "39.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(9) > div:nth(0) > div:nth(0) > div:nth(0)");
    },
    "40.Click div": function() {
        act.click("body > div:nth(5) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0)");
    },
    '41.Click span "Checkbox"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '42.Click span "Auswahl"': function() {
        var actionTarget = function() {
            return $('.cui-button-center span').filter(function(index, span) { return span.textContent === "Auswahl"; })[0]
        };
        act.click(actionTarget);
    },
    "43.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(8) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1)");
    },
    "44.Click div": function() {
        act.click("body > div:nth(5) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(15) > div:nth(0)");
    },
    "45.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(8) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1)");
    },
    "46.Click div": function() {
        act.click("body > div:nth(5) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(9) > div:nth(0)");
    },
    "47.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(8) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2)");
    },
    "48.Click div": function() {
        act.click("body > div:nth(5) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(14) > div:nth(0)");
    },
    "49.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(8) > div:nth(0) > div:nth(0) > div:nth(0)");
    },
    "50.Click div": function() {
        act.click("body > div:nth(5) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(10) > div:nth(0)");
    },
    '51.Click span "Speichern"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "52.Assert": function() {
        eq($("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)").val(), "Redaktions Tags (DE)");
    }
};



"@test"["02_Sonderzeichen Tags"] = {
    "1.Wait 7000 milliseconds": function() {
        act.wait(6e3);
    },
    '2.Click span "+"': function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="tag.form.list.plus"]').find(".fa-plus")[0];
        };
        act.click(actionTarget);
    },
    '3.Click span "Alle Felder (DE)"': function() {
        var actionTarget = function() {
            return $('.cui-item-list-body span').filter(function(index, span) { return span.textContent === "Tag-Gruppe"; })[0]
        };
        act.click(actionTarget);
    },
    "4.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="tag.form.list.plus"]').find(".fa-plus")[0];
        };
        act.click(actionTarget);
    },
    '5.Click span "Tag"': function() {
        var actionTarget = function() {
            return $('.cui-item-list-body span').filter(function(index, span) { return span.textContent === "Tag"; })[0]
        };
        act.click(actionTarget);
    },
    "6.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="tag.form.list.plus"]').find(".fa-plus")[0];
        };
        act.click(actionTarget);
    },
    "7.Click div": function() {
        var actionTarget = function() {
            return $('.cui-item-list-body span').filter(function(index, span) { return span.textContent === "Tag"; })[0]
        };
        act.click(actionTarget);
    },
    "8.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="tag.form.list.plus"]').find(".fa-plus")[0];
        };
        act.click(actionTarget);
    },
    '9.Click span "Tag"': function() {
        var actionTarget = function() {
            return $('.cui-item-list-body span').filter(function(index, span) { return span.textContent === "Tag"; })[0]
        };
        act.click(actionTarget);
    },
    "10.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", 'Sonderzeichen Tags - ÄÖÜ!"§$%&/()=? (DE)');
    },
    "11.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", 'Sonderzeichen Tags - ÄÖÜ!"§$%&/()=? (US)');
    },
    "12.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > input:nth(0)", 'Sonderzeichen Tags - ÄÖÜ!"§$%&/()=? (ES)');
    },
    "13.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > input:nth(0)", 'Sonderzeichen Tags - ÄÖÜ!"§$%&/()=? (IT)');
    },
    "14.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "*__* - `__´ - $_§ - @_@ (DE)");
    },
    "15.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "*__* - `__´ - $_§ - @_@ (US)");
    },
    "16.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > input:nth(0)", "*__* - `__´ - $_§ - @_@ (ES)");
    },
    "17.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > input:nth(0)", "*__* - `__´ - $_§ - @_@ (IT)");
    },
    "18.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "☀ ☯ ☢ (DE)");
    },
    "19.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "☀ ☯ ☢ (US)");
    },
    "20.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > input:nth(0)", "☀ ☯ ☢ (ES)");
    },
    "21.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > input:nth(0)", "☀ ☯ ☢ (IT)");
    },
    "22.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "धबब (DE)");
    },
    "23.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "धबब (US)");
    },
    "24.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > input:nth(0)", "धबब (ES)");
    },
    "25.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > input:nth(0)", "धबब (IT)");
    },
    "26.Click span": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(8) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    "27.Click div": function() {
        act.click("body > div:nth(5) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0)");
    },
    "28.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(8) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1)");
    },
    "29.Click div": function() {
        act.click("body > div:nth(5) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0)");
    },
    "30.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(8) > div:nth(0) > div:nth(0) > div:nth(0)");
    },
    "31.Click div": function() {
        act.click("body > div:nth(5) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(0)");
    },
    "32.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },
    "33.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(1);
        };
        act.click(actionTarget);
    },
    "34.Click span": function() {
        var actionTarget = function() {
            return $(".cui-button-left").find(" > span:nth(0)").eq(2);
        };
        act.click(actionTarget);
    },
    '35.Click span "Speichern"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "36.Assert": function() {
        eq($("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)").val(), 'Sonderzeichen Tags - ÄÖÜ!"§$%&/()=? (DE)');
    }
};