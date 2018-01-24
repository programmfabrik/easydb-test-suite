"@fixture 02_ToolBoxTools";
"@page http://5.peter.pf-berlin.de/search/?login=root&password=admin";

"@test"["RClick ToolBoxTools"] = {
    "1.Wait 5 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Rclick div": function() {
        var actionTarget = function() {
            return $(".ez5-browser").find(" > div:nth(0)").eq(0);
        };
        act.rclick(actionTarget);
    },
    '3.Click span "Schnellanzeige"': function() {
        act.click('[title="tool.object.show.popover"] .cui-button-center');
    },
    "4.Click <i>": function() {
        act.click(":attrRegExp(class:/^fa\\s+fa\\-expand$/)");
    },
    "5.Click <i>": function() {
        act.click(":attrRegExp(class:/^fa\\s+fa\\-compress$/)");
    }
};
"@test"["test1"] = {
    "1.Wait 5 milliseconds": function() {
        act.wait(5e3);
    },
    "6.Rclick div": function() {
        var actionTarget = function() {
            return $(".ez5-browser").find(" > div:nth(0)").eq(0);
        };
        act.rclick(actionTarget);
    },
    '7.Click span "Anzeigen..."': function() {
        act.click('[title="tool.object.show.sidebar"] .cui-button-center');
    },
    "8.Click X": function() {
        act.click('[ez5-loca-key="detail.sidebar.button.close"] .svg-close');
    }
};
"@test"["test2"] = {
    "1.Wait 5 milliseconds": function() {
        act.wait(5e3);
    },
    "9.Rclick div": function() {
        var actionTarget = function() {
            return $(".ez5-browser").find(" > div:nth(0)").eq(0);
        };
        act.rclick(actionTarget);
    },
    '10.Click span "Anzeigen (Vollbild)"': function() {
        act.click('[title="tool.object.show.fullscreen"] .cui-button-center');
    },
    "11.Click X": function() {
        act.click('[ez5-loca-key="detail.fullscreen.closed-button"] .svg-close');
    }
};
"@test"["test3"] = {
    "1.Wait 5 milliseconds": function() {
        act.wait(5e3);
    },
    "6.Rclick div": function() {
        var actionTarget = function() {
            return $(".ez5-browser").find(" > div:nth(0)").eq(0);
        };
        act.rclick(actionTarget);
    },
    '7.Click span "Anzeigen..."': function() {
        act.click('[title="tool.object.show.sidebar"] .cui-button-center');
    },
    "8.Click X": function() {
        act.click('[ez5-loca-key="detail.sidebar.button.close"] .svg-close');
    }
};
"@test"["test4"] = {
    "1.Wait 5 milliseconds": function() {
        act.wait(5e3);
    },
    "12.Rclick div": function() {
        var actionTarget = function() {
            return $(".ez5-browser").find(" > div:nth(0)").eq(0);
        };
        act.rclick(actionTarget);
    },
    '13.Click span "Zu Mappe hinzufügen"': function() {
        act.click('[title="tool.object.add_to_collection"] .cui-button-center');
    },
    '14.Click span "Herunterladen..."': function() {
        act.click('[title="tool.object.download"] .cui-button-center');
    },
    '15.Click span "250px (small), 34 KB"': function() {
        act.click(":containsExcludeChildren(250px small)");
    },
    '19.Click span "Original-Dateiname"': function() {
        act.click(":containsExcludeChildren(OriginalDateiname)");
    },
    "20.Type in input": function() {
        act.type('.cui-input [placeholder="Dateiname"]', "polar");
    },
    '21.Click span "Herunterladen"': function() {
        act.click('[title="download.manager.modal.button.start"] .cui-button-center');
    }
};

"@test"["test5"] = {
    "1.Wait 5 milliseconds": function() {
        act.wait(5e3);
    },
    "22.Rclick div": function() {
        var actionTarget = function() {
            return $(".ez5-browser").find(" > div:nth(0)").eq(0);
        };
        act.rclick(actionTarget);
    },
    '23.Click span "Drucken..."': function() {
        act.click('[title="tool.object.print"] .cui-button-center');
    }
};

"@test"["main toolbar ToolBoxTools"] = {
    "1.Wait 5 milliseconds": function() {
        act.wait(5e3);
    },
    "2.Click div": function() {
        var actionTarget = function() {
            return $(".ez5-browser").find(" > div:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },
    "3.Click detail ansicht": function() {
        act.click('[data-qa="toolbox-tool-object-show-sidebar-button"] .cui-button-left');
    },
    "4.Click X": function() {
        act.click('[ez5-loca-key="detail.sidebar.button.close"] .svg-close');
    },
    "5.Click download": function() {
        act.click('[data-qa="toolbox-tool-object-download-button"] .cui-button-left');
    },
    "6.Click X": function() {
        act.click('[aria-label="Schließen"] .svg-close');
    },
    "7.Click edit pencil": function() {
        act.click('[data-qa="toolbox-tool-object-edit-button"] .cui-button-left');
    },
    '8.Click span "... neben der Suche"': function() {
        act.click('[title="tool.object.edit.sidebar"] .cui-button-center');
    },
    "9.Click X": function() {
        act.click('[data-qa="asset-browser-editor-sidebar-cancel-editor-button"] .svg-close');
    },
    "10.Click share": function() {
        act.click('[data-qa="toolbox-tool-search-present_share_url-button"] .cui-button-left');
    },
    "11.Click fertig": function() {
        act.click('[title="search.share_url.button.ok"] .cui-button-center');
    }
};