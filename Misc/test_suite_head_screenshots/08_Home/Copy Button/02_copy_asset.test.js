"@fixture 02_Copy Asset";
"@page http://10.122.4.25/search/?login=root&password=admin";

"@test"["Copy Asset Sidebar Editor"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Dblclick div": function() {
        var actionTarget = function() {
            return $(".ez5-info").eq(1);
        };
        act.dblclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Bearbeiten"': function() {
        act.click('[data-qa="asset-browser-detail-sidebar-load-editor-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click <i>": function() {
        act.click('[data-qa="toolbox-tool-editor-copy-button"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Speichern"': function() {
        act.click('[data-qa="editor-save-button"] .cui-button-center');
    }
};

"@test"["Copy fullscreen Editor"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Dblclick div": function() {
        var actionTarget = function() {
            return $(".ez5-info").eq(0);
        };
        act.dblclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Bearbeiten"': function() {
        act.click('[data-qa="asset-browser-detail-sidebar-load-editor-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click <i>": function() {
        act.click('[data-qa="toolbox-tool-editor-sidebar-fullscreen-button"] .cui-button-left');
    }
};

