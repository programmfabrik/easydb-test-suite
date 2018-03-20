"@fixture 01_Toolboxtools_Upload_Photo";
"@page http://10.122.4.25/search/?login=root&password=admin";



"@test"["01_Toolboxtools_Upload_Photo"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },
    '3.Click span "Dateien"': function() {
        var actionTarget = function() {
            return $('[for="cui-file-upload-button"] .cui-button-center');
        };
        act.click(actionTarget);
    },
    '4.Upload "pb2-2.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/15_BMW-R80-Scrambler.jpg");
    },
    '5.Click span "Weiter"': function() {
        act.click("[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },
    "6.Type in input": function() {
        act.type(".cui-input[data-qa='text-column-editor-template-einzeiligertext'] .cui-input", "15 bmw r80 scrambler");
    },
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};