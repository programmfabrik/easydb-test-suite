"@fixture 02_Rights_Managements_Workflows";
"@page http://10.122.4.25/tagmanager/?login=root&password=admin";



"@test"["01_Insert_Workflow"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '1.Click span "Workflows"': function() {
        act.click('[tab="transitions"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        act.click('[ez5-loca-key="transition.form.list.plus"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click span": function() {
        act.click('[row="2"] [col="1"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Objekttypen"': function() {
        act.click('[row="2"] [title="tag.transition.objecttype.button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Alle Felder (DE)"': function() {
        act.click(":containsExcludeChildren(Alle Felder DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Dateien (DE)"': function() {
        act.click(":containsExcludeChildren(Dateien DE)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Benutzer/Gruppe"': function() {
        act.click('[row="2"] [title="acl.manager.button.open_popover"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Click <i>": function() {
        act.click('[ez5-loca-key="acl.manager.button.plus"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Click input": function() {
        act.click(".ez5-query-element-input-search-input");
    },"1.Take a screenshot": function() {act.screenshot();},
    '11.Click div "Alle Benutzer"': function() {
        act.click(":containsExcludeChildren(Alle Benutzer)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "12.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '13.Click span "Tags anpassen"': function() {
        act.click('[row="2"] [col="7"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Click span": function() {
        var row = $(".ez5-tag-form-tag-row")[0];
        var actionTarget = function() {
            return $(row).find("span")[1];
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "15.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '16.Click span "Tags anpassen"': function() {
        act.click('[row="2"] [col="8"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Click span": function() {
        var row = $(".ez5-tag-form-tag-row")[1];
        var actionTarget = function() {
            return $(row).find("span")[1];
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "18.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '19.Click span "Bearbeiten"': function() {
        act.click('[row="2"] [col="9"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "20.Type in text area": function() {
        act.type("textarea", "Einfugen");
    },"1.Take a screenshot": function() {act.screenshot();},
    "21.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '22.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)").eq(2);
        };
        act.click(actionTarget);
    }
};

"@test"["02_Update_Workflow"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '1.Click span "Workflows"': function() {
        act.click('[tab="transitions"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        act.click('[ez5-loca-key="transition.form.list.plus"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click span": function() {
        act.click('[row="3"] [col="2"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Objekttypen"': function() {
        act.click('[row="3"] [title="tag.transition.objecttype.button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Alle Felder (DE)"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Felder DE)").eq(1);
        };
        act.click(actionTarget);
    
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Dateien (DE)"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Dateien DE)").eq(1);
        };
        act.click(actionTarget);
    
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Benutzer/Gruppe"': function() {
        act.click('[row="3"] [title="acl.manager.button.open_popover"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Click <i>": function() {
        act.click('[ez5-loca-key="acl.manager.button.plus"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Click input": function() {
        act.click(".ez5-query-element-input-search-input");
    },"1.Take a screenshot": function() {act.screenshot();},
    '11.Click div "Alle Benutzer"': function() {
        act.click(":containsExcludeChildren(Alle Benutzer)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "12.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '13.Click span "Tags anpassen"': function() {
        act.click('[row="3"] [col="7"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
   "5.Click span": function() {
        var row = $(".ez5-tag-form-tag-row")[1];
        var actionTarget = function() {
            return $(row).find("span")[1];
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "15.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    "15.Click div": function() {
        var actionTarget = function() {
            return $(".cui-horizontal-layout-center").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '16.Click span "Tags anpassen"': function() {
        act.click('[row="3"] [col="8"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Click span": function() {
        var row = $(".ez5-tag-form-tag-row")[2];
        var actionTarget = function() {
            return $(row).find("span")[1];
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "18.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '19.Click span "Bearbeiten"': function() {
        act.click('[row="3"] [col="9"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "20.Type in text area": function() {
        act.type("textarea", "Update");
    },"1.Take a screenshot": function() {act.screenshot();},
    "21.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '22.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)").eq(2);
        };
        act.click(actionTarget);
    }
};


"@test"["03_Delete_Workflow"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '1.Click span "Workflows"': function() {
        act.click('[tab="transitions"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        act.click('[ez5-loca-key="transition.form.list.plus"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click span": function() {
        act.click('[row="4"] [col="3"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Objekttypen"': function() {
        act.click('[row="4"] [title="tag.transition.objecttype.button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
   '5.Click span "Alle Felder (DE)"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Felder DE)").eq(2);
        };
        act.click(actionTarget);
    
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Dateien (DE)"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Dateien DE)").eq(2);
        };
        act.click(actionTarget);
    
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Benutzer/Gruppe"': function() {
        act.click('[row="4"] [title="acl.manager.button.open_popover"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Click <i>": function() {
        act.click('[ez5-loca-key="acl.manager.button.plus"] .fa-plus');
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Click input": function() {
        act.click(".ez5-query-element-input-search-input");
    },"1.Take a screenshot": function() {act.screenshot();},
    '11.Click div "Alle Benutzer"': function() {
        act.click(":containsExcludeChildren(Alle Benutzer)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "12.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
   
    '16.Click span "Tags anpassen"': function() {
        act.click('[row="4"] [col="8"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Click span": function() {
        var row = $(".ez5-tag-form-tag-row")[2];
        var actionTarget = function() {
            return $(row).find("span")[1];
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "18.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '19.Click span "Bearbeiten"': function() {
        act.click('[row="4"] [col="9"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "20.Type in text area": function() {
        act.type("textarea", "Delete");
    },"1.Take a screenshot": function() {act.screenshot();},
    "21.Click div": function() {
        act.click(".cui-layer-backdrop");
    },"1.Take a screenshot": function() {act.screenshot();},
    '22.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)").eq(2);
        };
        act.click(actionTarget);
    }
};

"@test"["04_Test_Upload_Workflow"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click plus": function() {
        act.click('[data-qa="root-menu-app-top-menu-new_objects"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Dateien"': function() {
        act.click('[for="cui-file-upload-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Upload "24_03_2015_BMW_R80_caferacer_IWC_motorcycles_05.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/24_03_2015_BMW_R80_caferacer_IWC_motorcycles_05.jpg");
    },"1.Take a screenshot": function() {act.screenshot();},
    
    '7.Click span "Weiter"': function() {
        act.click('[data-qa="editor-modal-new-next-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "8.Type in input": function() {
        act.type("[data-qa='text-column-editor-template-einzeiligertext'] input", "workflow test");
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Click div": function() {
        var actionTarget = function() {
            return $('[title="tags.field.button.open_popover"] .cui-button-center');
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Erstversion"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Erstversion)").eq(2);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '10.Click span "Speichern"': function() {
        act.click('[data-qa="editor-save-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '10.Click span "Speichern"': function() {
        act.click('[data-qa="editor-save-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '11.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    }
};

"@test"["05_Test_Delete_Workflow"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click recherche": function() {
        act.click('[data-qa="root-menu-app-top-menu-main"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Rclick div": function() {
        var actionTarget = function() {
            return $(".ez5-info").eq(0);
        };
        act.rclick(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Datensatz löschen..."': function() {
        act.click('[title="tool.object.delete_objects_from_server"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Löschen"': function() {
        act.click(":containsExcludeChildren(Löschen)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    }
};

"@test"["06_Remove_Workflow"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Workflows"': function() {
        act.click('[tab="transitions"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click div": function() {
        act.click('[row="2"] .ez5-col-admin-transitionform-col-update');
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click <i>": function() {
        act.click('[ez5-loca-key="transition.form.list.minus"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click div": function() {
        act.click('[row="1"] .ez5-col-admin-transitionform-col-update');
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click <i>": function() {
        act.click('[ez5-loca-key="transition.form.list.minus"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click div": function() {
        act.click('[row="1"] .ez5-col-admin-transitionform-col-update');
    },"1.Take a screenshot": function() {act.screenshot();},
    "4.Click <i>": function() {
        act.click('[ez5-loca-key="transition.form.list.minus"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Speichern"': function() {
        act.click(":containsExcludeChildren(Speichern)");
    }
};
