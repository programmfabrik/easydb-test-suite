"@fixture 01_Objekttypen erstellen_DE_EN";
"@page http://10.122.4.25/datamodel/?login=root&password=admin";

"@test"["01_Alle Felder Objekttyp"] = {
    "1.Wait 4000 milliseconds": function() {
        act.wait(7e3);
    },
    "2.Click <i>": function() {
        var actionTarget = function() {
            return $(".cui-pane-footer").find(".fa-plus");
        };
        act.click(actionTarget);
    },
    '3.Click span "Neuer Objekttyp"': function() {
        act.click(":containsExcludeChildren(Neuer Objekttyp)");
    },
    '4.Type in input "Name"': function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--name").find("input");
        };
        act.type(actionTarget, "allefelder");
    },
    '5.Type in input "Bezeichnung"': function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--displayname_l10n").find("input").eq(0);
        };
        act.type(actionTarget, "Alle Felder (DE)");
    },
    "6.Type in input": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--displayname_l10n").find("input").eq(1);
        };
        act.type(actionTarget, "Alle Felder (US)");
    },
    '9.Type in text area "Kommentar (intern)"': function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--comment").find("textarea");
        };
        act.type(actionTarget, "Alle Felder die möglich sind");
    },
    "10.Click span": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--in_main_search").find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "11.Click span": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--acl_table").find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "12.Click span": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--has_tags").find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    '13.Click span "Felder"': function() {
        var actionTarget = function() {
            return $('span').filter(function(index, span) { return span.textContent === "Felder"; })[0];
        };
        act.click(actionTarget);
    },
     "145.Wait 4000 milliseconds": function() {
        act.wait(3e3);
    },
    "14.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "15.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(0);
        };
        act.click(actionTarget);
    },
    "16.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "einzeiligertext");
    },
    "17.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Einzeiliger Text (DE)");
    },
    "18.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Einzeiliger Text (US)");
    },
    "21.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "22.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(0);
        };
        act.click(actionTarget);
    },
    '23.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    '24.Click span "Einzeiliger Text..."': function() {
        act.click(":containsExcludeChildren(Einzeiliger Text mehrsprachig)");
    },
    "11.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "26.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "einzeiligertextmehrsprachig");
    },
    "27.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Einzeiliger Text (mehrsprachig) (DE)");
    },
    "28.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Einzeiliger Text (mehrsprachig) (US)");
    },
    "31.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left")[0];
        };
        act.click(actionTarget);
    },
    "32.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(0);
        };
        act.click(actionTarget);
    },
    '33.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    "34.Click Mehzeiliger Text": function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Mehrzeiliger Text"; })[0];
        };
        act.click(actionTarget);
    },
    "11.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "36.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "mehrzeiligertext");
    },
    "37.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Mehrzeiliger Text (DE)");
    },
    "38.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Mehrzeiliger Text (US)");
    },
    "41.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "42.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(0);
        };
        act.click(actionTarget);
    },
    '43.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    "44.Click Mehrzeiliger Text (mehrsprachig)": function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Mehrzeiliger Text (mehrsprachig)"; })[0];
        };
        act.click(actionTarget);
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "46.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "mehrzeiligertextmehrprachig");
    },
    "47.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Mehrzeiliger Text (mehrprachig) (US)");
    },
    "51.Click <i>": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "52.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(0);
        };
        act.click(actionTarget);
    },
    '53.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="5"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    "54.Click Einfacher Text (string)": function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Einfacher Text (String)"; })[0];
        };
        act.click(actionTarget);
    },
    "55.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "56.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="5"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "einfachertext");
    },
    "57.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="5"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Einfacher Text (DE)");
    },
    "58.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="5"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Einfacher Text (US)");
    },
    "61.Click <i>": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "62.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(0);
        };
        act.click(actionTarget);
    },
    '63.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="6"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    "64.Click Einfacher Text (string)": function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Datum"; })[0];
        };
        act.click(actionTarget);
    },
    "65.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "66.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="6"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "datum");
    },
    "67.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="6"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Datum (DE)");
    },
    "68.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="6"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Datum (US)");
    },
    "71.Click <i>": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "72.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(0);
        };
        act.click(actionTarget);
    },
    '73.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="7"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    "74.Click Einfacher Text (string)": function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Datum (Bereich)"; })[0];
        };
        act.click(actionTarget);
    },

    "75.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "76.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="7"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "datumbereich");
    },
    "77.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="7"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Datum (Bereich) (DE)");
    },
    "78.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="7"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Datum (Bereich) (US)");
    },
    "81.Click <i>": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "82.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(0);
        };
        act.click(actionTarget);
    },
    '83.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="8"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    "84.Click Einfacher Text (string)": function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Zahl (ganzzahlig)"; })[0];
        };
        act.click(actionTarget);
    },

    "85.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "86.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="8"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "zahlganzzahlig");
    },
    "87.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="8"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Zahl (ganzzahlig) (DE)");
    },
    "88.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="8"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Zahl (ganzzahlig) (DE)");
    },
    "91.Click <i>": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "92.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(0);
        };
        act.click(actionTarget);
    },
    '93.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="9"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    "94.Click Einfacher Text (string)": function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Kommazahl (2 Stellen)"; })[0];
        };
        act.click(actionTarget);
    },
    "95.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "96.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="9"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "kommazahl2stellen");
    },
    "97.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="9"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Kommazahl (2 Stellen) (DE)");
    },
    "98.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="9"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Kommazahl (2 Stellen) (DE)");
    },
    "101.Click <i>": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "102.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(0);
        };
        act.click(actionTarget);
    },
    '103.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="10"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    "104.Click Einfacher Text (string)": function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Datei"; })[0];
        };
        act.click(actionTarget);
    },
    "105.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "106.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="10"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "datei");
    },
    "107.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="10"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Datei (DE)");
    },
    "108.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="10"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Datei (US)");
    },
    "111.Click <i>": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "112.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(0);
        };
        act.click(actionTarget);
    },
    '113.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="11"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    '114.Click Einfacher Text (string)"': function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Ja/Nein-Feld (Boolesch)"; })[0];
        };
        act.click(actionTarget);
    },
    "115.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "116.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="11"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "boolesch");
    },
    "117.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="11"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Boolesch (DE)");
    },
    "118.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="11"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Boolesch (DE)");
    },
    '113.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)");
        };
        act.click(actionTarget);
    },
    
};


"@test"["03_Nested einfach Flat"] = {
    "1.Wait 4000 milliseconds": function() {
        act.wait(4e3);
    },
    "2.Click <i>": function() {
        var actionTarget = function() {
            return $(".cui-pane-footer").find(".fa-plus");
        };
        act.click(actionTarget);
    },
    '3.Click span "Neuer Objekttyp"': function() {
        act.click(":containsExcludeChildren(Neuer Objekttyp)");
    },
    '4.Type in input "Name"': function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--name").find("input");
        };
        act.type(actionTarget, "nestedeinfachflat");
    },
    '5.Type in input "Bezeichnung"': function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--displayname_l10n").find("input").eq(0);
        };
        act.type(actionTarget, "Nested einfach Flat (DE)");
    },
    "6.Type in input": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--displayname_l10n").find("input").eq(1);
        };
        act.type(actionTarget, "Nested einfach Flat (US)");
    },
    '9.Type in text area "Kommentar (intern)"': function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--comment").find("textarea");
        };
        act.type(actionTarget, "Nested einfach Flat (DE)");
    },
    "10.Click span": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--in_main_search").find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "11.Click span": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--acl_table").find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "12.Click span": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--has_tags").find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    '13.Click span "Felder"': function() {
        var actionTarget = function() {
            return $('span').filter(function(index, span) { return span.textContent === "Felder"; })[0];
        };
        act.click(actionTarget);
    },
     "145.Wait 4000 milliseconds": function() {
        act.wait(3e3);
    },
    "14.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "15.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(0);
        };
        act.click(actionTarget);
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "16.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "notnested");
    },
    "17.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Not Nested (DE)");
    },
    "18.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Not Nested (US)");
    },
    "21.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "22.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_nested_table"]').find(".cui-button-center").eq(0);
        };
        act.click(actionTarget);
    },
    
    
    "26.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "nestedfeld");
    },
    "27.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Nested Feld (DE)");
    },
    "28.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Nested Feld (US)");
    },
    "31.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "32.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(1);
        };
        act.click(actionTarget);
    },
    '33.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    '34.Click span "Einzeiliger Text..."': function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Alle Felder (DE)"; })[0];
        };
        act.click(actionTarget);
    },
    "35.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "36.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "nestedlinkedallefelder");
    },
    "37.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Nested linked Alle Felder (DE)");
    },
    "38.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Nested linked Alle Felder (US)");
    },
    "41.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "42.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(1);
        };
        act.click(actionTarget);
    },
    '23.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    '24.Click span "Einzeiliger Text..."': function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Einzeiliger Text"; })[0];
        };
        act.click(actionTarget);
    },
    "45.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "46.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "nestedeinztext");
    },
    "47.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Nested einzeilger Text (DE)");
    },
    "48.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Nested einzeilger Text (DE)");
    },
    "49.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(2);
        };
        act.type(actionTarget, "Nested einzeilger Text (DE)");
    },
    "50.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(3);
        };
        act.type(actionTarget, "Nested einzeilger Text (DE)");
    },
    '51.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)");
        };
        act.click(actionTarget);
    },
    
};

"@test"["02_Nested einfach Hierarchisch"] = {
    "1.Wait 4000 milliseconds": function() {
        act.wait(4e3);
    },
    "2.Click <i>": function() {
        var actionTarget = function() {
            return $(".cui-pane-footer").find(".fa-plus");
        };
        act.click(actionTarget);
    },
    '3.Click span "Neuer Objekttyp"': function() {
        act.click(":containsExcludeChildren(Neuer Objekttyp)");
    },
    '4.Type in input "Name"': function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--name").find("input");
        };
        act.type(actionTarget, "nestedeinfachhierarchisch");
    },
    '5.Type in input "Bezeichnung"': function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--displayname_l10n").find("input").eq(0);
        };
        act.type(actionTarget, "Nested einfach Hierarchisch (DE)");
    },
    "6.Type in input": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--displayname_l10n").find("input").eq(1);
        };
        act.type(actionTarget, "Nested einfach Hierarchisch (US)");
    },
    '9.Type in text area "Kommentar (intern)"': function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--comment").find("textarea");
        };
        act.type(actionTarget, "Nested einfach Hierarchisch (DE)");
    },
    "10.Click span": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--in_main_search").find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "105.Click span": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--is_hierarchical").find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "11.Click span": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--acl_table").find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "12.Click span": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--has_tags").find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    '13.Click span "Felder"': function() {
        var actionTarget = function() {
            return $('span').filter(function(index, span) { return span.textContent === "Felder"; })[0];
        };
        act.click(actionTarget);
    },
     "145.Wait 4000 milliseconds": function() {
        act.wait(3e3);
    },
    "14.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "15.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(0);
        };
        act.click(actionTarget);
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "16.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "notnested");
    },
    "17.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Not Nested (DE)");
    },
    "18.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Not Nested (US)");
    },
    "21.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "22.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_nested_table"]').find(".cui-button-center").eq(0);
        };
        act.click(actionTarget);
    },
    
    
    "26.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "nestedfeld");
    },
    "27.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Nested Feld (DE)");
    },
    "28.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Nested Feld (US)");
    },
    "31.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "32.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(1);
        };
        act.click(actionTarget);
    },
    '33.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    '34.Click span "Einzeiliger Text..."': function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Alle Felder (DE)"; })[0];
        };
        act.click(actionTarget);
    },
    "35.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "36.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "nestedlinkedallefelder");
    },
    "37.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Nested linked Alle Felder (DE)");
    },
    "38.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Nested linked Alle Felder (US)");
    },
    "41.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "42.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(1);
        };
        act.click(actionTarget);
    },
    '23.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    '24.Click span "Einzeiliger Text..."': function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Einzeiliger Text"; })[0];
        };
        act.click(actionTarget);
    },
    "45.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "46.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "nestedeinztext");
    },
    "47.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Nested einzeilger Text (DE)");
    },
    "48.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Nested einzeilger Text (DE)");
    },
    "49.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(2);
        };
        act.type(actionTarget, "Nested einzeilger Text (DE)");
    },
    "50.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(3);
        };
        act.type(actionTarget, "Nested einzeilger Text (DE)");
    },
    '51.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)");
        };
        act.click(actionTarget);
    },
    
};

"@test"["05_Nested Mehrfach Flat"] = {
    "1.Wait 4000 milliseconds": function() {
        act.wait(4e3);
    },
    "2.Click <i>": function() {
        var actionTarget = function() {
            return $(".cui-pane-footer").find(".fa-plus");
        };
        act.click(actionTarget);
    },
    '3.Click span "Neuer Objekttyp"': function() {
        act.click(":containsExcludeChildren(Neuer Objekttyp)");
    },
    '4.Type in input "Name"': function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--name").find("input");
        };
        act.type(actionTarget, "nestedmehrfachflat");
    },
    '5.Type in input "Bezeichnung"': function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--displayname_l10n").find("input").eq(0);
        };
        act.type(actionTarget, "Nested Mehrfach Flat (DE)");
    },
    "6.Type in input": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--displayname_l10n").find("input").eq(1);
        };
        act.type(actionTarget, "Nested Mehrfach Flat (DE)");
    },
    "7.Type in input": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--displayname_l10n").find("input").eq(2);
        };
        act.type(actionTarget, "Nested Mehrfach Flat (DE)");
    },
    "8.Type in input": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--displayname_l10n").find("input").eq(3);
        };
        act.type(actionTarget, "Nested Mehrfach Flat (DE)");
    },
    '9.Type in text area "Kommentar (intern)"': function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--comment").find("textarea");
        };
        act.type(actionTarget, "Nested Mehrfach Flat (DE)");
    },
    "10.Click span": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--in_main_search").find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "11.Click span": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--acl_table").find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "12.Click span": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--has_tags").find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    '13.Click span "Felder"': function() {
        var actionTarget = function() {
            return $('span').filter(function(index, span) { return span.textContent === "Felder"; })[0];
        };
        act.click(actionTarget);
    },
     "145.Wait 4000 milliseconds": function() {
        act.wait(3e3);
    },
    "14.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "15.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_nested_table"]').find(".cui-button-center").eq(0);
        };
        act.click(actionTarget);
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "16.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "outernested");
    },
    "17.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Outer Nested (DE)");
    },
    "18.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Outer Nested (DE)");
    },
    "19.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(2);
        };
        act.type(actionTarget, "Outer Nested (DE)");
    },
    "20.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(3);
        };
        act.type(actionTarget, "Outer Nested (DE)");
    },
    "21.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "22.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_nested_table"]').find(".cui-button-center").eq(1);
        };
        act.click(actionTarget);
    },
    
    
    "26.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "secondnested");
    },
    "27.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Second Nested (DE)");
    },
    "28.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Second Nested (DE)");
    },
    "29.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(2);
        };
        act.type(actionTarget, "Second Nested (DE)");
    },
    "30.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(3);
        };
        act.type(actionTarget, "Second Nested (DE)");
    },
    "31.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "32.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(1);
        };
        act.click(actionTarget);
    },
    '33.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    '34.Click span "Einzeiliger Text..."': function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Alle Felder (DE)"; })[0];
        };
        act.click(actionTarget);
    },
    "35.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "36.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "nestedlinkedallefelder");
    },
    "37.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Nested linked Alle Felder (DE)");
    },
    "38.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Nested linked Alle Felder (US)");
    },
    "41.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "42.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(1);
        };
        act.click(actionTarget);
    },
    '23.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    '24.Click span "Einzeiliger Text..."': function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Einzeiliger Text"; })[0];
        };
        act.click(actionTarget);
    },
    "45.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "46.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "nestedeinztext");
    },
    "47.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Nested einzeilger Text (DE)");
    },
    "48.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Nested einzeilger Text (DE)");
    },
    "49.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(2);
        };
        act.type(actionTarget, "Nested einzeilger Text (DE)");
    },
    "50.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(3);
        };
        act.type(actionTarget, "Nested einzeilger Text (DE)");
    },
    "51.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "52.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(0);
        };
        act.click(actionTarget);
    },
    '53.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    '54.Click span "Einzeiliger Text..."': function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Einzeiliger Text"; })[0];
        };
        act.click(actionTarget);
    },
    "55.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "56.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="5"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "outernestedtext");
    },
    "57.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="5"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Outer Nested Text (DE)");
    },
    "58.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="5"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Outer Nested Text (DE)");
    },
    "59.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="5"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(2);
        };
        act.type(actionTarget, "Outer Nested Text (DE)");
    },
    "60.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="5"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(3);
        };
        act.type(actionTarget, "Outer Nested Text (DE)");
    },
    '61.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)");
        };
        act.click(actionTarget);
    },
    
};

"@test"["04_Nested Mehrfach Hierarchisch"] = {
    "1.Wait 4000 milliseconds": function() {
        act.wait(4e3);
    },
    "2.Click <i>": function() {
        var actionTarget = function() {
            return $(".cui-pane-footer").find(".fa-plus");
        };
        act.click(actionTarget);
    },
    '3.Click span "Neuer Objekttyp"': function() {
        act.click(":containsExcludeChildren(Neuer Objekttyp)");
    },
    '4.Type in input "Name"': function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--name").find("input");
        };
        act.type(actionTarget, "nestedmehrfachhierarchisch");
    },
    '5.Type in input "Bezeichnung"': function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--displayname_l10n").find("input").eq(0);
        };
        act.type(actionTarget, "Nested Mehrfach Hierarchisch (DE)");
    },
    "6.Type in input": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--displayname_l10n").find("input").eq(1);
        };
        act.type(actionTarget, "Nested Mehrfach Hierarchisch (DE)");
    },
    "7.Type in input": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--displayname_l10n").find("input").eq(2);
        };
        act.type(actionTarget, "Nested Mehrfach Hierarchisch (DE)");
    },
    "8.Type in input": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--displayname_l10n").find("input").eq(3);
        };
        act.type(actionTarget, "Nested Mehrfach Hierarchisch (DE)");
    },
    '9.Type in text area "Kommentar (intern)"': function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--comment").find("textarea");
        };
        act.type(actionTarget, "Nested Mehrfach Hierarchisch (DE)");
    },
    "10.Click span": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--in_main_search").find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "105.Click span": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--is_hierarchical").find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "11.Click span": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--acl_table").find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "12.Click span": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--has_tags").find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    '13.Click span "Felder"': function() {
        var actionTarget = function() {
            return $('span').filter(function(index, span) { return span.textContent === "Felder"; })[0];
        };
        act.click(actionTarget);
    },
     "145.Wait 4000 milliseconds": function() {
        act.wait(3e3);
    },
    "14.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "15.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_nested_table"]').find(".cui-button-center").eq(0);
        };
        act.click(actionTarget);
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "16.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "outernested");
    },
    "17.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Outer Nested (DE)");
    },
    "18.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Outer Nested (DE)");
    },
    "19.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(2);
        };
        act.type(actionTarget, "Outer Nested (DE)");
    },
    "20.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(3);
        };
        act.type(actionTarget, "Outer Nested (DE)");
    },
    "21.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "22.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_nested_table"]').find(".cui-button-center").eq(1);
        };
        act.click(actionTarget);
    },
    
    
    "26.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "secondnested");
    },
    "27.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Second Nested (DE)");
    },
    "28.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Second Nested (DE)");
    },
    "29.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(2);
        };
        act.type(actionTarget, "Second Nested (DE)");
    },
    "30.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(3);
        };
        act.type(actionTarget, "Second Nested (DE)");
    },
    "31.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "32.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(1);
        };
        act.click(actionTarget);
    },
    '33.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    '34.Click span "Einzeiliger Text..."': function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Alle Felder (DE)"; })[0];
        };
        act.click(actionTarget);
    },
    "35.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "36.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "nestedlinkedallefelder");
    },
    "37.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Nested linked Alle Felder (DE)");
    },
    "38.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Nested linked Alle Felder (US)");
    },
    "41.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "42.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(1);
        };
        act.click(actionTarget);
    },
    '23.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    '24.Click span "Einzeiliger Text..."': function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Einzeiliger Text"; })[0];
        };
        act.click(actionTarget);
    },
    "45.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "46.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "nestedeinztext");
    },
    "47.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Nested einzeilger Text (DE)");
    },
    "48.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Nested einzeilger Text (DE)");
    },
    "49.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(2);
        };
        act.type(actionTarget, "Nested einzeilger Text (DE)");
    },
    "50.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(3);
        };
        act.type(actionTarget, "Nested einzeilger Text (DE)");
    },
    "51.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "52.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(0);
        };
        act.click(actionTarget);
    },
    '53.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    '54.Click span "Einzeiliger Text..."': function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Einzeiliger Text"; })[0];
        };
        act.click(actionTarget);
    },
    "55.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "56.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="5"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "outernestedtext");
    },
    "57.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="5"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Outer Nested Text (DE)");
    },
    "58.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="5"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Outer Nested Text (DE)");
    },
    "59.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="5"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(2);
        };
        act.type(actionTarget, "Outer Nested Text (DE)");
    },
    "60.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="5"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(3);
        };
        act.type(actionTarget, "Outer Nested Text (DE)");
    },
    '61.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)");
        };
        act.click(actionTarget);
    },
    
};

"@test"["06_Dateien"] = {
    "1.Wait 4000 milliseconds": function() {
        act.wait(6e3);
    },
    "2.Click <i>": function() {
        var actionTarget = function() {
            return $(".cui-pane-footer").find(".fa-plus");
        };
        act.click(actionTarget);
    },
    '3.Click span "Neuer Objekttyp"': function() {
        act.click(":containsExcludeChildren(Neuer Objekttyp)");
    },
    '4.Type in input "Name"': function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--name").find("input");
        };
        act.type(actionTarget, "dateien");
    },
    '5.Type in input "Bezeichnung"': function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--displayname_l10n").find("input").eq(0);
        };
        act.type(actionTarget, "Dateien (DE)");
    },
    "6.Type in input": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--displayname_l10n").find("input").eq(1);
        };
        act.type(actionTarget, "Dateien (US)");
    },
    '9.Type in text area "Kommentar (intern)"': function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--comment").find("textarea");
        };
        act.type(actionTarget, "Dateien");
    },
    "10.Click span": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--in_main_search").find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    '13.Click span "Felder"': function() {
        var actionTarget = function() {
            return $('span').filter(function(index, span) { return span.textContent === "Felder"; })[0];
        };
        act.click(actionTarget);
    },
     "145.Wait 4000 milliseconds": function() {
        act.wait(3e3);
    },
    "14.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "15.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(0);
        };
        act.click(actionTarget);
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "16.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "beschreibung");
    },
    "17.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Beschreibung (DE)");
    },
    "18.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Beschreibung (DE)");
    },
    "31.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "32.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(1);
        };
        act.click(actionTarget);
    },
    '33.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    '34.Click span "Einzeiliger Text..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Datei)").eq(0);
        };
        act.click(actionTarget);
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "36.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "datei");
    },
    "37.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Datei (DE)");
    },
    "38.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Datei (DE)");
    },
    '61.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)");
        };
        act.click(actionTarget);
    },
    
};

"@test"["07_EAS File Test"] = {
    "1.Wait 4000 milliseconds": function() {
        act.wait(4e3);
    },
    "2.Click <i>": function() {
        var actionTarget = function() {
            return $(".cui-pane-footer").find(".fa-plus");
        };
        act.click(actionTarget);
    },
    '3.Click span "Neuer Objekttyp"': function() {
        act.click(":containsExcludeChildren(Neuer Objekttyp)");
    },
    '4.Type in input "Name"': function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--name").find("input");
        };
        act.type(actionTarget, "easfiletest");
    },
    '5.Type in input "Bezeichnung"': function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--displayname_l10n").find("input").eq(0);
        };
        act.type(actionTarget, "EAS File Test (DE)");
    },
    "6.Type in input": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--displayname_l10n").find("input").eq(1);
        };
        act.type(actionTarget, "EAS File Test (DE)");
    },
    "7.Type in input": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--displayname_l10n").find("input").eq(2);
        };
        act.type(actionTarget, "EAS File Test (DE)");
    },
    "8.Type in input": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--displayname_l10n").find("input").eq(3);
        };
        act.type(actionTarget, "EAS File Test (DE)");
    },
    '9.Type in text area "Kommentar (intern)"': function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--comment").find("textarea");
        };
        act.type(actionTarget, "EAS File Test (DE)");
    },
    "10.Click span": function() {
        var actionTarget = function() {
            return $(".cui-form-field-name--in_main_search").find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    '13.Click span "Felder"': function() {
        var actionTarget = function() {
            return $('span').filter(function(index, span) { return span.textContent === "Felder"; })[0];
        };
        act.click(actionTarget);
    },
     "145.Wait 4000 milliseconds": function() {
        act.wait(3e3);
    },
    "14.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "15.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(0);
        };
        act.click(actionTarget);
    },
    "16.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "first");
    },
    "17.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "First (DE)");
    },
    "18.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "First (DE)");
    },
    "19.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(2);
        };
        act.type(actionTarget, "First (DE)");
    },
    "20.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="1"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(3);
        };
        act.type(actionTarget, "First (DE)");
    },
    "31.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "32.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(1);
        };
        act.click(actionTarget);
    },
    '33.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    '34.Click span "Einzeiliger Text..."': function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Nested einfach Flat (DE)"; })[0];
        };
        act.click(actionTarget);
    },
    "35.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "36.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "second");
    },
    "37.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Second (DE)");
    },
    "38.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Second (DE)");
    },
    "39.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(2);
        };
        act.type(actionTarget, "Second (DE)");
    },
    "40.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="2"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(3);
        };
        act.type(actionTarget, "Second (DE)");
    },
    "31.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "32.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(1);
        };
        act.click(actionTarget);
    },
    '33.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    '34.Click span "Einzeiliger Text..."': function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Dateien (DE)"; })[0];
        };
        act.click(actionTarget);
    },
    "35.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "36.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "third");
    },
    "37.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Third (DE)");
    },
    "38.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Third (DE)");
    },
    "39.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(2);
        };
        act.type(actionTarget, "Third (DE)");
    },
    "40.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="3"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(3);
        };
        act.type(actionTarget, "Third (DE)");
    },
    "31.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="datamodel.fields.button.plus"]').find(".cui-button-left");
        };
        act.click(actionTarget);
    },
    "32.Click div": function() {
        var actionTarget = function() {
            return $('[ez5-loca-key="admin.datamodel.new_field"]').find(".cui-button-center").eq(1);
        };
        act.click(actionTarget);
    },
    '33.Click span "Einzeiliger Text"': function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-type .cui-button-center")[0]
        };
        act.click(actionTarget);
    },
    '34.Click span "Einzeiliger Text..."': function() {
        var actionTarget = function() {
            return $('.cui-form-table span').filter(function(index, span) { return span.textContent === "Nested Mehrfach Flat (DE)"; })[0];
        };
        act.click(actionTarget);
    },
    "35.Click div": function() {
        act.click(".cui-layer-backdrop");
    },
    "11111.Click off": function() {
        var actionTarget = function() {
            return $('.ez5-root-layout-top .cui-horizontal-layout-center');
        };
        act.click(actionTarget);
    },
    "36.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-name input").eq(0);
        };
        act.type(actionTarget, "fourth");
    },
    "37.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(0);
        };
        act.type(actionTarget, "Fourth (DE)");
    },
    "38.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(1);
        };
        act.type(actionTarget, "Fourth (DE)");
    },
    "39.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(2);
        };
        act.type(actionTarget, "Fourth (DE)");
    },
    "40.Type in input": function() {
        var actionTarget = function() {
            return $('[data-qa="datamodel-columns-table-listview"] [row="4"]').find(".ez5-col-admin-datamodel-col-displayname_l10n input").eq(3);
        };
        act.type(actionTarget, "Fourth (DE)");
    },
    '61.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Speichern)");
        };
        act.click(actionTarget);
    },
    
};

"@test"["08_Datenmodell speichern"] = {
    "1.Wait 4000 milliseconds": function() {
        act.wait(4e3);
    },
    "2.Click div": function() {
        var actionTarget = function() {
            return $(".cui-button-left .fa-cog");
        };
        act.click(actionTarget);
    },
    '3.Click span "Änderungen..."': function() {
        var actionTarget = function() {
            return $('.cui-button-center span').filter(function(index, span) { return span.textContent === "Änderungen aktivieren"; })[0];
        };
        act.click(actionTarget);
    },
    '4.Click span "Übernehmen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Übernehmen)").eq(1);
        };
        act.click(actionTarget);
    },
    '5.Click span "Neu Laden"': function() {
        act.click(":containsExcludeChildren(Neu Laden)");
    }
};