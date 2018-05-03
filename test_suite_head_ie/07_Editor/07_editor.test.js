"@fixture 07_Editor";
"@page http://10.122.4.25/?login=root&password=admin";



"@test"["01_Upload_in_Editor"] = {
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
    '4.Upload "pb2-2.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/pb2-2.jpg");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Type in input": function() {
        act.type(".cui-input[data-qa='text-column-editor-template-einzeiligertext'] .cui-input", "Polar Bear");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};


"@test"["02_Add_Data_in_Editor"] = {
    "2.Wait 1 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Wait 1 milliseconds": function() {
        act.wait(1);
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Dblclick div": function() {
        var actionTarget = function() {
            return $(".ez5-browser").find(" > div:nth(0)").eq(0);
        };
        act.dblclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Bearbeiten"': function() {
        act.click(".cui-button[data-qa='asset-browser-detail-sidebar-load-editor-button'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Type in input": function() {
        act.type(".cui-input[data-qa='text-column-editor-mehrzeiligertext'] textarea", "Polar Bear");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Click <i>": function() {
        act.click(".cui-input[data-cui-date-time-format='date-short'] .cui-button-left");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};


"@test"["03_Rotate_in_Editor"] = {
    "2.Wait 1 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Wait 1 milliseconds": function() {
        act.wait(1);
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Dblclick div": function() {
        var actionTarget = function() {
            return $(".ez5-browser").find(" > div:nth(0)").eq(0);
        };
        act.dblclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Bearbeiten"': function() {
        act.click(".cui-button[data-qa='asset-browser-detail-sidebar-load-editor-button'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Click div": function() {
        
        var actionTarget = function() {
            return $('[data-qa="eas-column-editor-datei-button"] .cui-button-left');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Drehen links"': function() {
        var actionTarget = function() {
            return $('[data-qa="eas-column-menu-option-rotate-left-button"] .cui-button-center');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};



"@test"["04_Change_Picture_in_Editor"] = {
    "2.Wait 1 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Wait 1 milliseconds": function() {
        act.wait(1);
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Dblclick div": function() {
        var actionTarget = function() {
            return $(".ez5-browser").find(" > div:nth(0)").eq(0);
        };
        act.dblclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Bearbeiten"': function() {
        act.click(".cui-button[data-qa='asset-browser-detail-sidebar-load-editor-button'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Click div": function() {
        
        var actionTarget = function() {
            return $('[data-qa="eas-column-editor-datei-button"] .cui-button-left');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Hochladen"': function() {
        var actionTarget = function() {
            return $('[data-qa="eas-column-menu-option-upload-button"] .cui-button-center');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Upload "swQucrP.png" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/swQucrP.png");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};




"@test"["05_Vorschau_in_Editor"] = {
    "2.Wait 1 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Wait 1 milliseconds": function() {
        act.wait(1);
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Dblclick div": function() {
        var actionTarget = function() {
            return $(".ez5-browser").find(" > div:nth(0)").eq(0);
        };
        act.dblclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Bearbeiten"': function() {
        act.click(".cui-button[data-qa='asset-browser-detail-sidebar-load-editor-button'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Click div": function() {
        
        var actionTarget = function() {
            return $('[data-qa="eas-column-editor-datei-button"] .cui-button-left');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Versionen"': function() {
        var actionTarget = function() {
            return $('[data-qa="eas-column-menu-option-manage-versions-button"] .cui-button-center');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Click <i>": function() {
        act.click(".cui-button[ez5-loca-key='asset.versions.tool.rotate_left'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "8.Click <i>": function() {
        act.click(".cui-button[ez5-loca-key='asset.versions.tool.rotate_right'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.vertical spiegeln": function() {
        act.click(".cui-button[ez5-loca-key='asset.versions.tool.rotate_vertical'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.rot hor": function() {
        act.click(".cui-button[ez5-loca-key='asset.versions.tool.rotate_horizontal'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "11.crop": function() {
        act.click(".cui-button[ez5-loca-key='asset.versions.tool.crop'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "12.Drag div": function() {
        var actionTarget = function() {
            return $(".asset-crop-tool-inner").eq(0);
        };
        act.drag(actionTarget, 5, -204, {
            offsetX: 123,
            offsetY: 98
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    "13.reset": function() {
        act.click(".cui-button[ez5-loca-key='asset.versions.tool.reset'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    '14.Click input "Name"': function() {
        act.click("input[placeholder='Name der Version']");
    },"1.Take a screenshot": function() {act.screenshot();},
    '15.Type in input "Name"': function() {
        act.type("input[placeholder='Name der Version']", "v1");
    },"1.Take a screenshot": function() {act.screenshot();},
    "16.Click div": function() {
        var actionTarget = function() {
            return $(".ez5-asset-element.ez5-lassoable.ez5-eas-column.asset-instance").eq(3);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '17.Type in input "Name"': function() {
        act.type("input[placeholder='Name der Version']", "v2");
    },"1.Take a screenshot": function() {act.screenshot();},
    '18.Click span "Übernehmen"': function() {
        act.click(":containsExcludeChildren(Übernehmen)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '19.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};

"@test"["06_Delete_Version_from_Version_Editor"] = {
    "2.Wait 1 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Wait 1 milliseconds": function() {
        act.wait(1);
    }
};

"@test"["07_Delete_Versions_from_Editor"] = {
    "2.Wait 1 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Wait 1 milliseconds": function() {
        act.wait(1);
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Dblclick div": function() {
        var actionTarget = function() {
            return $(".ez5-browser").find(" > div:nth(0)").eq(0);
        };
        act.dblclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Bearbeiten"': function() {
        act.click(".cui-button[data-qa='asset-browser-detail-sidebar-load-editor-button'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-ellipsis-v").eq(2);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Löschen"': function() {
        act.click(".cui-button[ez5-loca-key='eas.column.button.asset_remove'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Click div": function() {
        var actionTarget = function() {
            return $(".fa.fa-ellipsis-v").eq(2);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Löschen"': function() {
        act.click(".cui-button[ez5-loca-key='eas.column.button.asset_remove'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};

"@test"["08_Upload_Multiple_for_Group_Editor"] = {
    "1.Wait 1 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Dateien"': function() {
        act.click('.cui-file-upload-button  .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Upload "193@e84132d0-9173-444c-ab66-cbd7cce0baf4_1000764983_original.png", "200@e84132d0-9173-444c-ab66-cbd7cce0baf4_1000764990_original.png" files': function() {
        act.upload("#cui-file-upload-button", [ "./uploads/193@e84132d0-9173-444c-ab66-cbd7cce0baf4_1000764983_original.png", "./uploads/200@e84132d0-9173-444c-ab66-cbd7cce0baf4_1000764990_original.png" ]);
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Weiter"': function() {
        act.click(".cui-button[data-qa='editor-modal-new-next-button'] .cui-button-center");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Type in input": function() {
        act.type(".cui-input[data-qa='text-column-editor-template-einzeiligertext'] .cui-input", "Colours");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};




"@test"["09_Group_Editor"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        var actionTarget = function() {
            return $(".ez5-browser").find(" > div:nth(0)").eq(0);
        };
        act.click(actionTarget, {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click <i>": function() {
        var actionTarget = function() {
            return $(".ez5-browser").find(" > div:nth(0)").eq(1);
        };
        act.click(actionTarget, {
            ctrl: true
        });
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.click pencil": function() {
        act.click(".cui-button[data-qa='toolbox-tool-selection-bulk-edit-button'] .cui-button-left");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "2 Alle Felder..."': function() {
        act.click(":containsExcludeChildren(2 Alle Felder DE bearbeiten)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click div "main.editor.template"': function() {
        act.click(".cui-label.cui-loca-label.ez5-result-object-no-asset-browser.cui-dom-element-has-tooltip-on-hover.cui-label-centered[title='main.editor.template']");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Einzeiliger Text..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Einzeiliger Text DE)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "8.Type in input": function() {
        act.type(".cui-input.cui-data-field.cui-data-field-input.cui-input-has-no-user-input[data-qa='text-column-editor-bulk-einzeiligertext']", "Two nice Colors");
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Click span "Einzeiliger Text..."': function() {
        act.click(":containsExcludeChildren(Einzeiliger Text mehrsprachig DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '10.Click span "Suchen & Ersetzen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Suchen Ersetzen)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "11.Type in input": function() {
        var actionTarget = function() {
            return $(".cui-input.cui-data-field.cui-data-field-input.cui-input-has-no-user-input").find(" > input:nth(0)").eq(4);
        };
        act.type(actionTarget, "Colors");
    },"1.Take a screenshot": function() {act.screenshot();},
    '12.Click span "Ganze Worte"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ganze Worte)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '13.Click span "Groß- und..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Groß und Kleinschreibung beachten)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '14.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='editor-save-button'] .cui-button-center");
    }
};