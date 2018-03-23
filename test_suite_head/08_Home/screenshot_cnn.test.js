"@fixture TestScreenshot";
"@page https://www.deepl.com/translator";

"@test"["Test 1"] = {
    "1.Wait 50 milliseconds": function() {
        act.wait(5000);
    },
    "1.Take a screenshot": function() {
        act.screenshot();
    }
};