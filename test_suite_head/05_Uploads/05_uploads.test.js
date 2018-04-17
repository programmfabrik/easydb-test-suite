"@fixture 05_Uploads";
"@page http://10.122.4.25/eventmanager/?login=root&password=admin";

"@test"["01_Bulk_Upload"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click(".cui-button[data-qa='root-menu-app-top-menu-new_objects'] .fa-plus");
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Verzeichnis"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Verzeichnis)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Upload "BMW-R80RT-Scrambler76.jpg", "BMW-R80RT-Scrambler29.jpg", "BMW-R80RT-Scrambler78.jpg", "BMW-R80RT-Scrambler145.jpg", "BMW-R80RT-Scrambler12.jpg", "BMW-R80RT-Scrambler66.jpg", "BMW-R80RT-Scrambler119.jpg", "BMW-R80RT-Scrambler79.jpg", "BMW-R80RT-Scrambler71.jpg", "BMW-R80RT-Scrambler149.jpg", "BMW-R80RT-Scrambler57.jpg", "BMW-R80RT-Scrambler41.jpg", "BMW-R80RT-Scrambler7.jpg", "BMW-R80RT-Scrambler24.jpg", "BMW-R80RT-Scrambler77.jpg", "BMW-R80RT-Scrambler55.jpg", "BMW-R80RT-Scrambler40.jpg", "BMW-R80RT-Scrambler134.jpg", "BMW-R80RT-Scrambler3.jpg", "BMW-R80RT-Scrambler148.jpg", "BMW-R80RT-Scrambler70.jpg", "BMW-R80RT-Scrambler86.jpg", "BMW-R80RT-Scrambler30.jpg", "BMW-R80RT-Scrambler48.jpg", "BMW-R80RT-Scrambler49.jpg", "BMW-R80RT-Scrambler126.jpg", "BMW-R80RT-Scrambler6.jpg", "BMW-R80RT-Scrambler8.jpg", "BMW-R80RT-Scrambler31.jpg", "BMW-R80RT-Scrambler67.jpg", "BMW-R80RT-Scrambler46.jpg", "BMW-R80RT-Scrambler97.jpg", "BMW-R80RT-Scrambler129.jpg", "BMW-R80RT-Scrambler81.jpg", "BMW-R80RT-Scrambler44.jpg", "BMW-R80RT-Scrambler45.jpg", "BMW-R80RT-Scrambler90.jpg", "BMW-R80RT-Scrambler2.jpg", "BMW-R80RT-Scrambler50.jpg", "BMW-R80RT-Scrambler22.jpg", "BMW-R80RT-Scrambler135.jpg", "BMW-R80RT-Scrambler103.jpg", "BMW-R80RT-Scrambler25.jpg", "BMW-R80RT-Scrambler132.jpg", "BMW-R80RT-Scrambler136.jpg", "BMW-R80RT-Scrambler35.jpg", "BMW-R80RT-Scrambler34.jpg", "BMW-R80RT-Scrambler94.jpg", "BMW-R80RT-Scrambler21.jpg", "BMW-R80RT-Scrambler143.jpg", "BMW-R80RT-Scrambler112.jpg", "BMW-R80RT-Scrambler127.jpg", "BMW-R80RT-Scrambler.jpg", "BMW-R80RT-Scrambler28.jpg", "BMW-R80RT-Scrambler65.jpg", "BMW-R80RT-Scrambler114.jpg", "BMW-R80RT-Scrambler75.jpg", "BMW-R80RT-Scrambler131.jpg", "BMW-R80RT-Scrambler128.jpg", "BMW-R80RT-Scrambler83.jpg", "BMW-R80RT-Scrambler69.jpg", "BMW-R80RT-Scrambler139.jpg", "BMW-R80RT-Scrambler4.jpg", "BMW-R80RT-Scrambler60.jpg", "BMW-R80RT-Scrambler18.jpg", "BMW-R80RT-Scrambler73.jpg", "BMW-R80RT-Scrambler1.jpg", "BMW-R80RT-Scrambler124.jpg", "BMW-R80RT-Scrambler32.jpg", "BMW-R80RT-Scrambler16.jpg", "BMW-R80RT-Scrambler108.jpg", "BMW-R80RT-Scrambler42.jpg", "BMW-R80RT-Scrambler116.jpg", "BMW-R80RT-Scrambler118.jpg", "BMW-R80RT-Scrambler5.jpg", "BMW-R80RT-Scrambler125.jpg", "BMW-R80RT-Scrambler54.jpg", "BMW-R80RT-Scrambler36.jpg", "BMW-R80RT-Scrambler87.jpg", "BMW-R80RT-Scrambler99.jpg", "BMW-R80RT-Scrambler117.jpg", "BMW-R80RT-Scrambler82.jpg", "BMW-R80RT-Scrambler110.jpg", "BMW-R80RT-Scrambler96.jpg", "BMW-R80RT-Scrambler17.jpg", "BMW-R80RT-Scrambler104.jpg", "BMW-R80RT-Scrambler88.jpg", "BMW-R80RT-Scrambler62.jpg", "BMW-R80RT-Scrambler141.jpg", "BMW-R80RT-Scrambler111.jpg", "BMW-R80RT-Scrambler106.jpg", "BMW-R80RT-Scrambler142.jpg", "BMW-R80RT-Scrambler98.jpg", "BMW-R80RT-Scrambler91.jpg", "BMW-R80RT-Scrambler52.jpg", "BMW-R80RT-Scrambler144.jpg", "BMW-R80RT-Scrambler74.jpg", "BMW-R80RT-Scrambler102.jpg", "BMW-R80RT-Scrambler26.jpg", "BMW-R80RT-Scrambler61.jpg", "BMW-R80RT-Scrambler59.jpg", "BMW-R80RT-Scrambler133.jpg", "BMW-R80RT-Scrambler123.jpg", "BMW-R80RT-Scrambler89.jpg", "BMW-R80RT-Scrambler146.jpg", "BMW-R80RT-Scrambler105.jpg", "BMW-R80RT-Scrambler64.jpg", "BMW-R80RT-Scrambler37.jpg", "BMW-R80RT-Scrambler13.jpg", "BMW-R80RT-Scrambler100.jpg", "BMW-R80RT-Scrambler47.jpg", "BMW-R80RT-Scrambler15.jpg", "BMW-R80RT-Scrambler39.jpg", "BMW-R80RT-Scrambler122.jpg", "BMW-R80RT-Scrambler27.jpg", "BMW-R80RT-Scrambler0.jpg", "BMW-R80RT-Scrambler20.jpg", "BMW-R80RT-Scrambler68.jpg", "BMW-R80RT-Scrambler84.jpg", "BMW-R80RT-Scrambler9.jpg", "BMW-R80RT-Scrambler10.jpg", "BMW-R80RT-Scrambler101.jpg", "BMW-R80RT-Scrambler19.jpg", "BMW-R80RT-Scrambler95.jpg", "BMW-R80RT-Scrambler33.jpg", "BMW-R80RT-Scrambler51.jpg", "BMW-R80RT-Scrambler147.jpg", "BMW-R80RT-Scrambler14.jpg", "BMW-R80RT-Scrambler140.jpg", "BMW-R80RT-Scrambler130.jpg", "BMW-R80RT-Scrambler80.jpg", "BMW-R80RT-Scrambler137.jpg", "BMW-R80RT-Scrambler109.jpg", "BMW-R80RT-Scrambler138.jpg", "BMW-R80RT-Scrambler53.jpg", "BMW-R80RT-Scrambler43.jpg", "BMW-R80RT-Scrambler113.jpg", "BMW-R80RT-Scrambler107.jpg", "BMW-R80RT-Scrambler56.jpg", "BMW-R80RT-Scrambler121.jpg", "BMW-R80RT-Scrambler115.jpg", "BMW-R80RT-Scrambler93.jpg", "BMW-R80RT-Scrambler72.jpg", "BMW-R80RT-Scrambler23.jpg", "BMW-R80RT-Scrambler38.jpg", "BMW-R80RT-Scrambler63.jpg", "BMW-R80RT-Scrambler120.jpg", "BMW-R80RT-Scrambler85.jpg", "BMW-R80RT-Scrambler58.jpg", "BMW-R80RT-Scrambler92.jpg", "BMW-R80RT-Scrambler11.jpg" files': function() {
        act.upload("#cui-file-upload-button", [ "./uploads/BMW-R80RT-Scrambler76.jpg", "./uploads/BMW-R80RT-Scrambler29.jpg", "./uploads/BMW-R80RT-Scrambler78.jpg", "./uploads/BMW-R80RT-Scrambler145.jpg", "./uploads/BMW-R80RT-Scrambler12.jpg", "./uploads/BMW-R80RT-Scrambler66.jpg", "./uploads/BMW-R80RT-Scrambler119.jpg", "./uploads/BMW-R80RT-Scrambler79.jpg", "./uploads/BMW-R80RT-Scrambler71.jpg", "./uploads/BMW-R80RT-Scrambler149.jpg", "./uploads/BMW-R80RT-Scrambler57.jpg", "./uploads/BMW-R80RT-Scrambler41.jpg", "./uploads/BMW-R80RT-Scrambler7.jpg", "./uploads/BMW-R80RT-Scrambler24.jpg", "./uploads/BMW-R80RT-Scrambler77.jpg", "./uploads/BMW-R80RT-Scrambler55.jpg", "./uploads/BMW-R80RT-Scrambler40.jpg", "./uploads/BMW-R80RT-Scrambler134.jpg", "./uploads/BMW-R80RT-Scrambler3.jpg", "./uploads/BMW-R80RT-Scrambler148.jpg", "./uploads/BMW-R80RT-Scrambler70.jpg", "./uploads/BMW-R80RT-Scrambler86.jpg", "./uploads/BMW-R80RT-Scrambler30.jpg", "./uploads/BMW-R80RT-Scrambler48.jpg", "./uploads/BMW-R80RT-Scrambler49.jpg", "./uploads/BMW-R80RT-Scrambler126.jpg", "./uploads/BMW-R80RT-Scrambler6.jpg", "./uploads/BMW-R80RT-Scrambler8.jpg", "./uploads/BMW-R80RT-Scrambler31.jpg", "./uploads/BMW-R80RT-Scrambler67.jpg", "./uploads/BMW-R80RT-Scrambler46.jpg", "./uploads/BMW-R80RT-Scrambler97.jpg", "./uploads/BMW-R80RT-Scrambler129.jpg", "./uploads/BMW-R80RT-Scrambler81.jpg", "./uploads/BMW-R80RT-Scrambler44.jpg", "./uploads/BMW-R80RT-Scrambler45.jpg", "./uploads/BMW-R80RT-Scrambler90.jpg", "./uploads/BMW-R80RT-Scrambler2.jpg", "./uploads/BMW-R80RT-Scrambler50.jpg", "./uploads/BMW-R80RT-Scrambler22.jpg", "./uploads/BMW-R80RT-Scrambler135.jpg", "./uploads/BMW-R80RT-Scrambler103.jpg", "./uploads/BMW-R80RT-Scrambler25.jpg", "./uploads/BMW-R80RT-Scrambler132.jpg", "./uploads/BMW-R80RT-Scrambler136.jpg", "./uploads/BMW-R80RT-Scrambler35.jpg", "./uploads/BMW-R80RT-Scrambler34.jpg", "./uploads/BMW-R80RT-Scrambler94.jpg", "./uploads/BMW-R80RT-Scrambler21.jpg", "./uploads/BMW-R80RT-Scrambler143.jpg", "./uploads/BMW-R80RT-Scrambler112.jpg", "./uploads/BMW-R80RT-Scrambler127.jpg", "./uploads/BMW-R80RT-Scrambler.jpg", "./uploads/BMW-R80RT-Scrambler28.jpg", "./uploads/BMW-R80RT-Scrambler65.jpg", "./uploads/BMW-R80RT-Scrambler114.jpg", "./uploads/BMW-R80RT-Scrambler75.jpg", "./uploads/BMW-R80RT-Scrambler131.jpg", "./uploads/BMW-R80RT-Scrambler128.jpg", "./uploads/BMW-R80RT-Scrambler83.jpg", "./uploads/BMW-R80RT-Scrambler69.jpg", "./uploads/BMW-R80RT-Scrambler139.jpg", "./uploads/BMW-R80RT-Scrambler4.jpg", "./uploads/BMW-R80RT-Scrambler60.jpg", "./uploads/BMW-R80RT-Scrambler18.jpg", "./uploads/BMW-R80RT-Scrambler73.jpg", "./uploads/BMW-R80RT-Scrambler1.jpg", "./uploads/BMW-R80RT-Scrambler124.jpg", "./uploads/BMW-R80RT-Scrambler32.jpg", "./uploads/BMW-R80RT-Scrambler16.jpg", "./uploads/BMW-R80RT-Scrambler108.jpg", "./uploads/BMW-R80RT-Scrambler42.jpg", "./uploads/BMW-R80RT-Scrambler116.jpg", "./uploads/BMW-R80RT-Scrambler118.jpg", "./uploads/BMW-R80RT-Scrambler5.jpg", "./uploads/BMW-R80RT-Scrambler125.jpg", "./uploads/BMW-R80RT-Scrambler54.jpg", "./uploads/BMW-R80RT-Scrambler36.jpg", "./uploads/BMW-R80RT-Scrambler87.jpg", "./uploads/BMW-R80RT-Scrambler99.jpg", "./uploads/BMW-R80RT-Scrambler117.jpg", "./uploads/BMW-R80RT-Scrambler82.jpg", "./uploads/BMW-R80RT-Scrambler110.jpg", "./uploads/BMW-R80RT-Scrambler96.jpg", "./uploads/BMW-R80RT-Scrambler17.jpg", "./uploads/BMW-R80RT-Scrambler104.jpg", "./uploads/BMW-R80RT-Scrambler88.jpg", "./uploads/BMW-R80RT-Scrambler62.jpg", "./uploads/BMW-R80RT-Scrambler141.jpg", "./uploads/BMW-R80RT-Scrambler111.jpg", "./uploads/BMW-R80RT-Scrambler106.jpg", "./uploads/BMW-R80RT-Scrambler142.jpg", "./uploads/BMW-R80RT-Scrambler98.jpg", "./uploads/BMW-R80RT-Scrambler91.jpg", "./uploads/BMW-R80RT-Scrambler52.jpg", "./uploads/BMW-R80RT-Scrambler144.jpg", "./uploads/BMW-R80RT-Scrambler74.jpg", "./uploads/BMW-R80RT-Scrambler102.jpg", "./uploads/BMW-R80RT-Scrambler26.jpg", "./uploads/BMW-R80RT-Scrambler61.jpg", "./uploads/BMW-R80RT-Scrambler59.jpg", "./uploads/BMW-R80RT-Scrambler133.jpg", "./uploads/BMW-R80RT-Scrambler123.jpg", "./uploads/BMW-R80RT-Scrambler89.jpg", "./uploads/BMW-R80RT-Scrambler146.jpg", "./uploads/BMW-R80RT-Scrambler105.jpg", "./uploads/BMW-R80RT-Scrambler64.jpg", "./uploads/BMW-R80RT-Scrambler37.jpg", "./uploads/BMW-R80RT-Scrambler13.jpg", "./uploads/BMW-R80RT-Scrambler100.jpg", "./uploads/BMW-R80RT-Scrambler47.jpg", "./uploads/BMW-R80RT-Scrambler15.jpg", "./uploads/BMW-R80RT-Scrambler39.jpg", "./uploads/BMW-R80RT-Scrambler122.jpg", "./uploads/BMW-R80RT-Scrambler27.jpg", "./uploads/BMW-R80RT-Scrambler0.jpg", "./uploads/BMW-R80RT-Scrambler20.jpg", "./uploads/BMW-R80RT-Scrambler68.jpg", "./uploads/BMW-R80RT-Scrambler84.jpg", "./uploads/BMW-R80RT-Scrambler9.jpg", "./uploads/BMW-R80RT-Scrambler10.jpg", "./uploads/BMW-R80RT-Scrambler101.jpg", "./uploads/BMW-R80RT-Scrambler19.jpg", "./uploads/BMW-R80RT-Scrambler95.jpg", "./uploads/BMW-R80RT-Scrambler33.jpg", "./uploads/BMW-R80RT-Scrambler51.jpg", "./uploads/BMW-R80RT-Scrambler147.jpg", "./uploads/BMW-R80RT-Scrambler14.jpg", "./uploads/BMW-R80RT-Scrambler140.jpg", "./uploads/BMW-R80RT-Scrambler130.jpg", "./uploads/BMW-R80RT-Scrambler80.jpg", "./uploads/BMW-R80RT-Scrambler137.jpg", "./uploads/BMW-R80RT-Scrambler109.jpg", "./uploads/BMW-R80RT-Scrambler138.jpg", "./uploads/BMW-R80RT-Scrambler53.jpg", "./uploads/BMW-R80RT-Scrambler43.jpg", "./uploads/BMW-R80RT-Scrambler113.jpg", "./uploads/BMW-R80RT-Scrambler107.jpg", "./uploads/BMW-R80RT-Scrambler56.jpg", "./uploads/BMW-R80RT-Scrambler121.jpg", "./uploads/BMW-R80RT-Scrambler115.jpg", "./uploads/BMW-R80RT-Scrambler93.jpg", "./uploads/BMW-R80RT-Scrambler72.jpg", "./uploads/BMW-R80RT-Scrambler23.jpg", "./uploads/BMW-R80RT-Scrambler38.jpg", "./uploads/BMW-R80RT-Scrambler63.jpg", "./uploads/BMW-R80RT-Scrambler120.jpg", "./uploads/BMW-R80RT-Scrambler85.jpg", "./uploads/BMW-R80RT-Scrambler58.jpg", "./uploads/BMW-R80RT-Scrambler92.jpg", "./uploads/BMW-R80RT-Scrambler11.jpg" ]);
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Auf alle anwenden"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Auf alle anwenden)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Alle Felder (DE)"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Importieren)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Alle Felder (DE)"': function() {
        act.click('[data-qa="editor-modal-new-objecttype-select"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Dateien (DE)"': function() {
         var actionTarget = function() {
            return $(":containsExcludeChildren(Dateien DE)");
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Wait 7000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Weiter"': function() {
        act.click('[data-qa="editor-modal-new-next-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "8.Click div": function() {
        var actionTarget = function() {
            return $(".cui-horizontal-layout.ez5-editor-pane.cui-maximize.cui-maximize-horizontal.cui-maximize-vertical").find(" > div:nth(1)");
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="text-column-editor-template-beschreibung"] input');
        };
        act.type(actionTarget, "150x bmw");
    },"1.Take a screenshot": function() {act.screenshot();},
    '10.Click span "Speichern"': function() {
        act.click('[data-qa="editor-save-button"] .cui-button-center');
    }
};


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
        act.click('[title="root.menu.top.menu.main"] .cui-button-center');
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

