"@fixture Easydb Connector";
"@page http://5.peter.pf-berlin.de/search/?login=root&password=admin";

"@test"["Easydb Connector"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    }
};

