"@fixture Easydb Connector";
"@page http://10.122.4.25/search/?login=root&password=admin";

"@test"["Easydb Connector"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    }
};

