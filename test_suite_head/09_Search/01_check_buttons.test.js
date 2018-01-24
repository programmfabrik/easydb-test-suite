"@fixture 01_Check Buttons";
"@page http://5.peter.pf-berlin.de/search?login=root&password=admin";

"@test"["01_filter search buttons"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Click span "Objekttypen/Pools"': function() {
        act.click('[data-qa="search-type-selector-button"] .cui-button-center');
    },
    '3.Click span "Alle Felder (DE)"': function() {
        act.click('.cui-list-view-grid-quadrant [row="0"] .fa-check');
    },
    '4.Click span "Dateien (DE)"': function() {
        act.click('.cui-list-view-grid-quadrant [row="1"] .fa-check');
    },
    '6.Click span "Übernehmen"': function() {
        act.click('[title="search.type.selector.button.apply"] .cui-button-center');
    }
};





"@test"["04_expert search"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click expert search": function() {
        act.click('[data-qa="search-expert-button"] .fa-sliders');
    }
};




"@test"["05_click info circle"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-angle-down").eq(1);
        };
        act.click(actionTarget);
    },
    "3.Click <i>": function() {
        act.click('.cui-list-view-grid-quadrant [row="0"] [ez5-loca-key="search.type.selector.node.button.info"] .fa-info-circle');
    },
    "4.Click <i>": function() {
        act.click('.cui-list-view-grid-quadrant [row="1"] [ez5-loca-key="search.type.selector.node.button.info"] .fa-info-circle');
    }
};