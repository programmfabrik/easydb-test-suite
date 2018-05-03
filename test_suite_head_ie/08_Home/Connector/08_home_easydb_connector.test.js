"@fixture 08_Home_Easydb_Connector";
"@page http://10.122.4.25/search/?login=root&password=admin";

"@test"["01_Easydb_Connector"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    }
};

