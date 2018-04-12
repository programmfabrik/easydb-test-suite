"@fixture 02_Editor";
"@page http://10.122.4.25/?login=root&password=admin";




"@test"["02_01 Add Data"] = {
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


"@test"["02_02 Rotate"] = {
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



"@test"["02_03 Change Picture"] = {
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




"@test"["02_04 Vorschau"] = {
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

"@test"["02_05 Delete Version from Version Editor (Incomplete)"] = {
    "2.Wait 1 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Wait 1 milliseconds": function() {
        act.wait(1);
    }
};

"@test"["02_06 Delete Versions from Editor"] = {
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