"@fixture 05_Uploads";
"@page http://10.122.4.25/eventmanager/?login=root&password=admin";




"@test"["02_Upload_Full_Coverage"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Dateien"': function() {
        var actionTarget = function() {
            return $('[for="cui-file-upload-button"] .fa-plus');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Upload "Nine-T-BMW-CLUTCH-MOTORCYCLES-4.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/BMW-K100RS-Cafe-Racer-By-Hageman-Motorcycles-00.jpg");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Wait 1 milliseconds": function() {
        act.wait(3000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click('[ez5-loca-key="editor.pullout.asset_browser"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click <i>": function() {
        act.click('[ez5-loca-key="editor.pullout.asset_browser"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click div": function() {
        var actionTarget = function() {
            return $(".eas-image.landscape").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Info"': function() {
        act.click('[ez5-loca-key="asset.browser.info.control.info_button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Erweitert"': function() {
        act.click(":containsExcludeChildren(Erweitert)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Allgemein"': function() {
        act.click(":containsExcludeChildren(Allgemein)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Info"': function() {
        act.click('[ez5-loca-key="asset.browser.info.control.info_button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Click <i>": function() {
        act.click('[ez5-loca-key="zoomer.button.title"] .fa-search-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Drag div": function() {
        act.drag(".zoomer-map-cursor-inner", -79, 4, {
            offsetX: 114,
            offsetY: 76
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    "11.Click <i>": function() {
        act.click('[ez5-loca-key="zoomer.button.zoom_out"] .fa-search-minus');
    },"1.Take a screenshot": function() {act.screenshot();},
    "12.Click <i>": function() {
        act.click('[ez5-loca-key="asset.detail.button.fullscreen"] .fa-expand');
    },"1.Take a screenshot": function() {act.screenshot();},
    "13.Click <svg>": function() {
        act.click('[ez5-loca-key="asset.detail.button.close"] svg');
    },"1.Take a screenshot": function() {act.screenshot();},
    '14.Click span "Benutzer/Gruppe"': function() {
        act.click('[title="acl.manager.button.open_popover"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "15.Click <i>": function() {
        act.click('[ez5-loca-key="acl.manager.button.plus"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    "16.Click input": function() {
        var actionTarget = function() {
            return $(".ez5-query-element-input-search-input").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '17.Click div "Admin Gruppe (DE)"': function() {
        act.click(":containsExcludeChildren(Admin Gruppe DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '18.Click span "ReadOnly (DE)"': function() {
        act.click(":containsExcludeChildren(ReadOnly DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '19.Click span "ReadAndEdit (DE)"': function() {
        act.click(":containsExcludeChildren(ReadAndEdit DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "20.Click <i>": function() {
        act.click('[ez5-loca-key="acl.manager.button.copy"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    "21.Click div": function() {
        var actionTarget = function() {
            return $(".cui-layer-backdrop").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "22.Type in input": function() {
        act.type('[data-qa="text-column-editor-einzeiligertext"] input', "bmw k100 black");
    },"1.Take a screenshot": function() {act.screenshot();},
    "23.Click <i>": function() {
        act.click('[ez5-loca-key="editor.modal.new.sidebar.plus-button"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '24.Click span "5 neue Datensätze"': function() {
        act.click(":containsExcludeChildren(5 neue Datensätze)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "25.Click <i>": function() {
        act.click('[ez5-loca-key="editor.modal.new.sidebar.plus-button"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '26.Click span "1 neuen Datensatz"': function() {
        act.click(":containsExcludeChildren(1 neuen Datensatz)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '27.Click span "Speichern"': function() {
        act.click('[data-qa="editor-save-button"] .cui-button-center');
    }
};

"@test"["03_Upload_Verwerfen"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Dateien"': function() {
        var actionTarget = function() {
            return $('[for="cui-file-upload-button"] .fa-plus');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Upload "Nine-T-BMW-CLUTCH-MOTORCYCLES-4.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/lion.png");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Abbrechen"': function() {
        act.click('[data-qa="editor-cancel-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Verwerfen"': function() {
        act.click(":containsExcludeChildren(Verwerfen)");
    }
};

"@test"["04_Upload_All_Filetypes"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    
};


"@test"["05_Upload_SVG"] = {
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

"@test"["06_Dowload_SVG"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Recherche"': function() {
        act.click('[title="root.menu.top.menu.main"] .cui-button-left');
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

