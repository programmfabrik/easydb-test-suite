"@fixture Angemeldet";
"@page https://test-mediathek.lmz-bw.de/mediathek";

"@test"["Angemeldet"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(7e3);
    },
    '2.Click span "Anmelden"': function() {
        act.click(":containsExcludeChildren(Anmelden)");
    },
    '3.Type in input "login"': function() {
        var actionTarget = function() {
            return $("#login_form").find("[name='login']");
        };
        act.type(actionTarget, "user_karlsruhe");
    },
    '4.Type in password input "password"': function() {
        var actionTarget = function() {
            return $("#login_form").find("[name='password']");
        };
        act.type(actionTarget, "user_karlsruhe");
    },
    "5.Take a screenshot": function() {
        act.screenshot();
    },
    '6.Click span "Anmelden"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Anmelden)").eq(1);
        };
        act.click(actionTarget);
    },
    "7.Click div": function() {
        act.click(".cui-horizontal-layout-center.ez5-search-input-query");
    },
    "1.Wait 5000 milliseconds": function() {
        act.wait(3e3);
    },
    '8.Type in span "Alkohol am steu"': function() {
        act.type(".ez5-search-input-query span", "Alkohol am Steuer");
    },
    "3.Press key ENTER": function() {
        act.press("enter");
    },
    '11.Click span "Ansehen"': function() {
        act.click(":containsExcludeChildren(Ansehen)");
    },
    "12.Take a screenshot": function() {
        act.screenshot();
    },
    "4.Click use": function() {
         var actionTarget = function() {
            return  $('[aria-label="Schließen"] .svg-close');
        };
        act.click(actionTarget);
    },
    '14.Click span "Ausleihen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ausleihen)").eq(0);
        };
        act.click(actionTarget);
    },
    "15.Take a screenshot": function() {
        act.screenshot();
    },
    '17.Click span "Download"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Download)").eq(0);
        };
        act.click(actionTarget);
    },
    '18.Click span "Download Web-DVD"': function() {
        act.click(":containsExcludeChildren(Download WebDVD)");
    },
    "19.Take a screenshot": function() {
        act.screenshot();
    },
    "4.Click use": function() {
         var actionTarget = function() {
            return  $('[aria-label="Schließen"] .svg-close');
        };
        act.click(actionTarget);
    },
    '21.Click span "ZIP-Download"': function() {
        act.click(":containsExcludeChildren(ZIPDownload)");
    },
    "22.Take a screenshot": function() {
        act.screenshot();
    },
    "4.Click use": function() {
         var actionTarget = function() {
            return  $('[aria-label="Schließen"] .svg-close');
        };
        act.click(actionTarget);
    },
    '24.Click span "Einzelmedien"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Einzelmedien)").eq(0);
        };
        act.click(actionTarget);
    },
    "1.Wait 5000 milliseconds": function() {
        act.wait(3e3);
    },
    "25.Take a screenshot": function() {
        act.screenshot();
    },
    '26.Click span "Ansehen"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ansehen)").eq(7);
        };
        act.click(actionTarget);
    },
    "27.Take a screenshot": function() {
        act.screenshot();
    },
    "4.Click use": function() {
         var actionTarget = function() {
            return  $('[aria-label="Schließen"] .svg-close');
        };
        act.click(actionTarget);
    },
    '29.Click span "Download"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Download)").eq(10);
        };
        act.click(actionTarget);
    },
    "30.Take a screenshot": function() {
        act.screenshot();
    },
    "4.Click use": function() {
         var actionTarget = function() {
            return  $('[aria-label="Schließen"] .svg-close');
        };
        act.click(actionTarget);
    }
};

