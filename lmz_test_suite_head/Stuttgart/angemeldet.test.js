"@fixture Angemeldet";
"@page http://lmz-stuttgart.5.easydb.de/as";
"@auth lmz-stuttgart:7zhysgnZ";
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
        act.type(actionTarget, "root");
    },
    '4.Type in password input "password"': function() {
        var actionTarget = function() {
            return $("#login_form").find("[name='password']");
        };
        act.type(actionTarget, "papaschlumpf666");
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
    "1.Wait 5000 milliseconds": function() {
        act.wait(3e3);
    }
};