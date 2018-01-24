"@fixture 01_upload";
"@page http://5.peter.pf-berlin.de/?login=root&password=admin";









"@test"["01_upload"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },
    '3.Click span "Dateien"': function() {
        var actionTarget = function() {
            return $('[for="cui-file-upload-button"] .fa-plus');
        };
        act.click(actionTarget);
    },
    '4.Upload "pb2-2.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/pb2-2.jpg");
    },
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },
    "6.Type in input": function() {
        act.type(".cui-input[data-qa='text-column-editor-template-einzeiligertext'] .cui-input", "Polar Bear");
    },
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};