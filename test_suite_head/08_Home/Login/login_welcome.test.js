"@fixture 02_Login Welcome";
"@page http://5.master.pf-berlin.de/search/";

"@test"["Welcome Message"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Dblclick span "easydb Startseite!"': function() {
        act.dblclick(":containsExcludeChildren(easydb Startseite)");
    },
    '3.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    },
    '4.Dblclick span "Herzlich willkommen!"': function() {
        act.dblclick(":containsExcludeChildren(Herzlich willkommen)");
    }
};

"@test"["Login Welcome Message"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    },
    '2.Click span "Ok"': function() {
        act.click(":containsExcludeChildren(Ok)");
    },
    '3.Click span "Anmelden"': function() {
        act.click('[title="session.tray.login"] .cui-button-center');
    },
    '4.Dblclick <h1> "Herzlich willkommen!"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Herzlich willkommen)").eq(1);
        };
        act.dblclick(actionTarget);
    },
    '5.Type in input "login"': function() {
        var actionTarget = function() {
            return $("#login_form").find("[name='login']");
        };
        act.type(actionTarget, "root");
    },
    '6.Type in password input "password"': function() {
        var actionTarget = function() {
            return $("#login_form").find("[name='password']");
        };
        act.type(actionTarget, "admin");
    },
    '7.Click span "Anmelden"': function() {
        act.click('[title="auth.button.login"] .cui-button-center');
    },
    '8.Dblclick span "Herzlich willkommen!"': function() {
        act.dblclick(":containsExcludeChildren(Herzlich willkommen)");
    }
};

