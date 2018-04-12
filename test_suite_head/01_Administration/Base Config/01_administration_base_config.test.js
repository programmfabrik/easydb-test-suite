"@fixture 01_Administration_Base_Config";
"@page http://10.122.4.25/?login=root&password=admin";

"@test"["00_Wait_for_server_initialization"] = {
    "1.Wait 8 seconds": function() {
        act.wait(8000);
    }
};
 
"@test"["01_Click_Around"] = {
    "1.Wait 50 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Click <i>": function() {
        act.click('[ez5-loca-key="root.menu.submenu.administration"] .fa-cogs');
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "BasisKonfiguration"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BasisKonfiguration)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Allgemein"': function() {
        act.click('[data-qa="base-config-manager-general-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Hochladen"': function() {
        act.click('[data-qa="base-config-manager-upload-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Anmelden"': function() {
        act.click('[data-qa="base-config-manager-login-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Design"': function() {
        act.click('[data-qa="base-config-manager-css-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Export und OAI/PMH"': function() {
        act.click('[data-qa="base-config-manager-export-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Cloud-Dienstleister"': function() {
        act.click('[data-qa="base-config-manager-cloud_services-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Click span "CMS"': function() {
        act.click('[data-qa="base-config-manager-cms-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "1.Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    '10.Click span "Server-Config"': function() {
        act.click('[data-qa="base-config-manager-server-config-tab-button"] .cui-button-center');
    }
};


"@test"["02_Allgemein_Settings"] = {
    "1.Wait 50 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click div": function() {
        act.click('[ez5-loca-key="root.menu.submenu.administration"] .fa-cogs');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "BasisKonfiguration"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BasisKonfiguration)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Allgemein"': function() {
        act.click('[data-qa="base-config-manager-general-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Type in input": function() {
        act.type('[data-qa="base-config-manager-value-multiinput"] [cui-data-field-name="de-DE"] input', "TestCafe");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Api Calls": function() {
        act.click('[data-qa="base-config-manager-enabled-select"] .cui-button-visual');
    },"1.Take a screenshot": function() {act.screenshot();},
    
    '8.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='base-config-manager-save-button'] .cui-button-center");
    }
};





"@test"["03_Hochladen_Settings"] = {
    "1.Wait 50 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click('[ez5-loca-key="root.menu.submenu.administration"] .fa-cogs');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "BasisKonfiguration"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BasisKonfiguration)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Hochladen"': function() {
        act.click('[data-qa="base-config-manager-upload-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click input "Limit (bytes)"': function() {
        var actionTarget = function() {
            return $("[data-qa='base-config-manager-value-number-input']").find(" > input:nth(0)");
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Type in input "Limit (bytes)"': function() {
        var actionTarget = function() {
            return $("[data-qa='base-config-manager-value-number-input']").find(" > input:nth(0)");
        };
        act.type(actionTarget, "50000");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='base-config-manager-save-button'] .cui-button-center");
    }
};


"@test"["04_Remove_Upload_Limit"] = {
    "1.Wait 50 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click('[ez5-loca-key="root.menu.submenu.administration"] .fa-cogs');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "BasisKonfiguration"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BasisKonfiguration)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Hochladen"': function() {
        act.click('[data-qa="base-config-manager-upload-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click input "Limit (bytes)"': function() {
        var actionTarget = function() {
            return $("[data-qa='base-config-manager-value-number-input']").find(" > input:nth(0)");
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Press key BACKSPACE": function() {
        act.press("backspace");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Press key BACKSPACE": function() {
        act.press("backspace");
    },"1.Take a screenshot": function() {act.screenshot();},
    "7.Press key BACKSPACE": function() {
        act.press("backspace");
    },"1.Take a screenshot": function() {act.screenshot();},
    "8.Press key BACKSPACE": function() {
        act.press("backspace");
    },"1.Take a screenshot": function() {act.screenshot();},
    "9.Press key BACKSPACE": function() {
        act.press("backspace");
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Press key BACKSPACE": function() {
        act.press("backspace");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Speichern"': function() {
        act.click(".cui-button[data-qa='base-config-manager-save-button'] .cui-button-center");
    }
};



"@test"["05_Allow_All_Types_for_Upload"] = {
    "1.Wait 50 milliseconds": function() {
        act.wait(5000);
    },"1.Take a screenshot": function() {act.screenshot();},
    "2.Click <i>": function() {
        act.click('[ez5-loca-key="root.menu.submenu.administration"] .fa-cogs');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "BasisKonfiguration"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(BasisKonfiguration)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Hochladen"': function() {
        act.click('[data-qa="base-config-manager-upload-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Alle Typen erlauben"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Typen erlauben)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Alle Typen erlauben"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Typen erlauben)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Alle Typen erlauben"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Typen erlauben)").eq(2);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Alle Typen erlauben"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Typen erlauben)").eq(3);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Click span "Alle Typen erlauben"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Typen erlauben)").eq(4);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '10.Click span "Alle Typen erlauben"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Typen erlauben)").eq(5);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '11.Click span "Alle Typen erlauben"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alle Typen erlauben)").eq(6);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Speichern"': function() {
        var actionTarget = function() {
            return $("[data-qa='base-config-manager-save-button'] .cui-button-center");
        };
        act.click(actionTarget);
    }
};


"@test"["06_Anmelden_Click_Everything"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Anmelden"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Anmelden)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Cookie-Absicherung..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(CookieAbsicherung für Session aktivieren)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Anonym über..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Anonym über Internet erlaubt)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Anonym über..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Anonym über Intranet erlaubt)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Vergessene..."': function() {
        act.click(":containsExcludeChildren(Vergessene Passwörter können angefordert werden)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Im Login-Dialog..."': function() {
        act.click(":containsExcludeChildren(Im LoginDialog anzeigen)");
    },"1.Take a screenshot": function() {act.screenshot();},
    "8.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-ellipsis-v").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '9.Upload "Nine-T-BMW-CLUTCH-MOTORCYCLES-4.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/Nine-T-BMW-CLUTCH-MOTORCYCLES-4.jpg");
    },"1.Take a screenshot": function() {act.screenshot();},
    "10.Type in text area": function() {
        act.type('[data-qa="base-config-manager-value-multiline-multiinput"] [cui-data-field-name="de-DE"] textarea', "Hello");
    },"1.Take a screenshot": function() {act.screenshot();},
    '11.Type in text area "Hinweis"': function() {
        act.type('[data-qa="base-config-manager-hint-multiline-multiinput"] [cui-data-field-name="de-DE"] textarea', "Passwort");
    },"1.Take a screenshot": function() {act.screenshot();},
    '12.Click input "Anzahl der..."': function() {
        act.click('[data-qa="base-config-manager-count-number-input"] input');
    },"1.Take a screenshot": function() {act.screenshot();},
    "13.Press key BACKSPACE": function() {
        act.press("backspace");
    },"1.Take a screenshot": function() {act.screenshot();},
    "14.Type in input": function() {
        act.type('[data-qa="base-config-manager-count-number-input"] input', "5");
    },"1.Take a screenshot": function() {act.screenshot();},
    '16.Click div "base.config.manager..."': function() {
        act.click('[data-qa="base-config-manager-save-button"] .cui-button-center');
    }
};

"@test"["07_Anmelden_Reset"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Anmelden"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Anmelden)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Cookie-Absicherung..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(CookieAbsicherung für Session aktivieren)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Anonym über..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Anonym über Internet erlaubt)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Anonym über..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Anonym über Intranet erlaubt)").eq(1);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "Vergessene..."': function() {
        act.click(":containsExcludeChildren(Vergessene Passwörter können angefordert werden)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Im Login-Dialog..."': function() {
        act.click(":containsExcludeChildren(Im LoginDialog anzeigen)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '16.Click div "base.config.manager..."': function() {
        act.click('[data-qa="base-config-manager-save-button"] .cui-button-center');
    }
};

"@test"["08_Design_Settings"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Design"': function() {
        act.click('[data-qa="base-config-manager-css-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    "3.Click <i>": function() {
        act.click('[data-qa="eas-column-editor-logo-button"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Upload "BMW-R80RT-Scrambler.jpg" file': function() {
        act.upload("#cui-file-upload-button", "./uploads/BMW-R80RT-Scrambler.jpg");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Type in input "Hintergrundfarbe..."': function() {
        act.type('[data-qa="base-config-manager-background_color-input"] input', "#FCF2CF");
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Click div": function() {
        act.click('[data-qa="base-config-manager-scss_variable_cui-highlight-color-select"] .cui-button-left');
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Graphit"': function() {
        act.click(":containsExcludeChildren(Graphit)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '8.Click span "Speichern"': function() {
        act.click('[data-qa="base-config-manager-save-button"] .cui-button-center');
    }
};

"@test"["09_Export_Settings"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Dblclick span "Export und OAI/PMH"': function() {
        act.dblclick('[data-qa="base-config-manager-export-tab-button"] .cui-button-center');
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Click span "Erlauben"': function() {
        act.click(":containsExcludeChildren(Erlauben)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Inklusive..."': function() {
        act.click(":containsExcludeChildren(Inklusive sichtbarer Referenz auf ID)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Inklusive..."': function() {
        act.click(":containsExcludeChildren(Inklusive sichtbarer Referenz auf eindeutiges Feld)");
    },"1.Take a screenshot": function() {act.screenshot();},
    '6.Click span "EAS-URLs anzeigen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(EASURLs anzeigen)").eq(0);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    '7.Click span "Speichern"': function() {
        act.click('[data-qa="base-config-manager-save-button"] .cui-button-center');
    }
};

"@test"["10_Cloud_Dienstleister"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Click span "Cloud-Dienstleister"': function() {
        act.click('[data-qa="base-config-manager-cloud_services-tab-button"] .cui-button-center');
    }
};