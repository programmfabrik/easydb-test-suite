"@fixture Coverage";
"@page http://5.peter.pf-berlin.de/?login=root&password=admin";

"@test"["Upload and Fill Data"] = {
    "1.Wait 5000 milliseconds": function() {
        act.wait(5e3);
    }
};