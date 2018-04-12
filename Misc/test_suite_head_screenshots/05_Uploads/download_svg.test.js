"@fixture Download SVG";
"@page  http://10.122.4.25/?login=root&password=admin";

"@test"["01_Upload SVG"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click('[title="root.menu.top.menu.new_objects"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click div": function() {
        act.click('[for="cui-file-upload-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Upload "kiwi.svg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/kiwi.svg");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Weiter"': function() {
        act.click('[title="main.editor.new.button.next"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Type in input": function() {
        act.type('[data-qa="text-column-editor-template-einzeiligertext"] input', "svg");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Speichern"': function() {
        act.click('[data-qa="editor-save-button"] .cui-button-center');
    }
};

"@test"["02_Dowload SVG"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Rclick span "svg"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(svg)").eq(3);
        };
        act.rclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Herunterladen..."': function() {
        act.click(":containsExcludeChildren(Herunterladen)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Herunterladen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Herunterladen)").eq(1);
        };
        act.click(actionTarget);
    }
};

