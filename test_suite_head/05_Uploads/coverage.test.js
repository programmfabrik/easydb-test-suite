"@fixture Coverage";
"@page http://10.122.4.25/?login=root&password=admin";

"@test"["Upload and Fill Data"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    }
};