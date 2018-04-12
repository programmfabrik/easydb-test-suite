"@fixture 01_Login";
"@page http://10.122.4.25/login";


"@test"["01_root"] = {
    "1.Wait 7000 milliseconds": function() {
        act.wait(7e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Type in input "login"': function() {
        var actionTarget = function() {
            return $("#login_form").find("[name='login']");
        };
        act.type(actionTarget, "root");
    },"1.Take a screenshot": function() {act.screenshot();},
    "Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Type in password input "password"': function() {
        var actionTarget = function() {
            return $("#login_form").find("[name='password']");
        };
        act.type(actionTarget, "admin");
    },"1.Take a screenshot": function() {act.screenshot();},
    "Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Anmelden"': function() {
        var actionTarget = function() {
            return $(".cui-button-center").find(" > span:nth(0)").eq(4);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    "5.Assert": function() {
        eq($(".cui-button-center").find(" > span:nth(0)").eq(0).text(), "Root");
    }
};


"@test"["02_root_keep_logged_in"] = {
    "1.Wait 7000 milliseconds": function() {
        act.wait(7e3);
    },"1.Take a screenshot": function() {act.screenshot();},
    '2.Type in input "login"': function() {
        var actionTarget = function() {
            return $("#login_form").find("[name='login']");
        };
        act.type(actionTarget, "root");
    },"1.Take a screenshot": function() {act.screenshot();},
    "Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    '3.Type in password input "password"': function() {
        var actionTarget = function() {
            return $("#login_form").find("[name='password']");
        };
        act.type(actionTarget, "admin");
    },"1.Take a screenshot": function() {act.screenshot();},
    "Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    '4.Click span "Angemeldet bleiben..."': function() {
        var actionTarget = function() {
            return $(".cui-button-center").find(" > span:nth(0)").eq(3);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    '5.Click span "Anmelden"': function() {
        var actionTarget = function() {
            return $(".cui-button-center").find(" > span:nth(0)").eq(4);
        };
        act.click(actionTarget);
    },"1.Take a screenshot": function() {act.screenshot();},
    "Take a screenshot": function() {
        act.screenshot();
    },"1.Take a screenshot": function() {act.screenshot();},
    "6.Assert": function() {
        eq($(".cui-button-center").find(" > span:nth(0)").eq(0).text(), "Root");
    }
};