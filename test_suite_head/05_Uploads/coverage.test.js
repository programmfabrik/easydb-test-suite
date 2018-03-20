"@fixture Coverage";
"@page http://10.122.4.25/eventmanager?login=root&password=admin";



"@test"["Upload_Full_Coverage"] = {
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
    '4.Upload "Nine-T-BMW-CLUTCH-MOTORCYCLES-4.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/BMW-K100RS-Cafe-Racer-By-Hageman-Motorcycles-00.jpg");
    },
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },
    "1.Wait 1 milliseconds": function() {
        act.wait(3000);
    },
    "2.Click <i>": function() {
        act.click('[ez5-loca-key="editor.pullout.asset_browser"] .cui-button-left');
    },
    "3.Click <i>": function() {
        act.click('[ez5-loca-key="editor.pullout.asset_browser"] .cui-button-left');
    },
    "4.Click div": function() {
        var actionTarget = function() {
            return $(".eas-image.landscape").eq(1);
        };
        act.click(actionTarget);
    },
    '5.Click span "Info"': function() {
        act.click('[ez5-loca-key="asset.browser.info.control.info_button"] .cui-button-center');
    },
    '6.Click span "Erweitert"': function() {
        act.click(":containsExcludeChildren(Erweitert)");
    },
    '7.Click span "Allgemein"': function() {
        act.click(":containsExcludeChildren(Allgemein)");
    },
    '8.Click span "Info"': function() {
        act.click('[ez5-loca-key="asset.browser.info.control.info_button"] .cui-button-center');
    },
    "9.Click <i>": function() {
        act.click('[ez5-loca-key="zoomer.button.title"] .fa-search-plus');
    },
    "10.Drag div": function() {
        act.drag(".zoomer-map-cursor-inner", -79, 4, {
            offsetX: 114,
            offsetY: 76
        });
    },
    "11.Click <i>": function() {
        act.click('[ez5-loca-key="zoomer.button.zoom_out"] .fa-search-minus');
    },
    "12.Click <i>": function() {
        act.click('[ez5-loca-key="asset.detail.button.fullscreen"] .fa-expand');
    },
    "13.Click <svg>": function() {
        act.click('[ez5-loca-key="asset.detail.button.close"] svg');
    },
    '14.Click span "Benutzer/Gruppe"': function() {
        act.click('[title="acl.manager.button.open_popover"] .cui-button-center');
    },
    "15.Click <i>": function() {
        act.click('[ez5-loca-key="acl.manager.button.plus"] .fa-plus');
    },
    "16.Click input": function() {
        var actionTarget = function() {
            return $(".ez5-query-element-input-search-input").eq(1);
        };
        act.click(actionTarget);
    },
    '17.Click div "Admin Gruppe (DE)"': function() {
        act.click(":containsExcludeChildren(Admin Gruppe DE)");
    },
    '18.Click span "ReadOnly (DE)"': function() {
        act.click(":containsExcludeChildren(ReadOnly DE)");
    },
    '19.Click span "ReadAndEdit (DE)"': function() {
        act.click(":containsExcludeChildren(ReadAndEdit DE)");
    },
    "20.Click <i>": function() {
        act.click('[ez5-loca-key="acl.manager.button.copy"] .cui-button-left');
    },
    "21.Click div": function() {
        var actionTarget = function() {
            return $(".cui-layer-backdrop").eq(1);
        };
        act.click(actionTarget);
    },
    "22.Type in input": function() {
        act.type('[data-qa="text-column-editor-einzeiligertext"] input', "bmw k100 black");
    },
    "23.Click <i>": function() {
        act.click('[ez5-loca-key="editor.modal.new.sidebar.plus-button"] .cui-button-left');
    },
    '24.Click span "5 neue Datensätze"': function() {
        act.click(":containsExcludeChildren(5 neue Datensätze)");
    },
    "25.Click <i>": function() {
        act.click('[ez5-loca-key="editor.modal.new.sidebar.plus-button"] .cui-button-left');
    },
    '26.Click span "1 neuen Datensatz"': function() {
        act.click(":containsExcludeChildren(1 neuen Datensatz)");
    },
    '27.Click span "Speichern"': function() {
        act.click('[data-qa="editor-save-button"] .cui-button-center');
    }
};

"@test"["Upload_Verwerfen"] = {
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
    '4.Upload "Nine-T-BMW-CLUTCH-MOTORCYCLES-4.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/lion.png");
    },
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },
    '6.Click span "Abbrechen"': function() {
        act.click('[data-qa="editor-cancel-button"] .cui-button-center');
    },
    '7.Click span "Verwerfen"': function() {
        act.click(":containsExcludeChildren(Verwerfen)");
    }
};

"@test"["Upload_All_Filetypes"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },
    
};
