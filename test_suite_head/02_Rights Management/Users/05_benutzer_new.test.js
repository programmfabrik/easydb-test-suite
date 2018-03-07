"@fixture 05_Benutzer NEW";
"@page http://10.122.4.25/usermanager/?login=root&password=admin";







"@test"["01_NoRights"] = {
    "1.Wait 7000 milliseconds": function() {
        act.wait(7e3);
    },
    "2.Click <i>": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > i:nth(0)");
    },
    '3.Type in input "Login"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > input:nth(0)", "norights");
    },
    '4.Type in input "Vorname"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(1) > div:nth(0) > input:nth(0)", "Noemi");
    },
    '5.Type in input "Nachname"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(1) > div:nth(0) > input:nth(0)", "Rights");
    },
    '6.Type in input "Anzeigename"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > input:nth(0)", "NoRights");
    },
    '7.Type in input "Unternehmen"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > input:nth(0)", "Mustercompany");
    },
    '8.Type in input "Abteilung"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(8) > div:nth(1) > div:nth(0) > input:nth(0)", "Rightsmanagement");
    },
    '9.Type in input "Telefon"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(9) > div:nth(1) > div:nth(0) > input:nth(0)", "+49 30 232 149 382 129");
    },
    '10.Type in text area "Bemerkungen"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(11) > div:nth(1) > div:nth(0) > textarea:nth(0)", "Ich habe keine Rechte");
    },
    '11.Click span "Adresse"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '12.Type in input "Adress-Zusatz"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "Hinterhaus");
    },
    '13.Type in input "Straße"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > input:nth(0)", "Musterstraße");
    },
    '14.Type in input "Hausnummer"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > input:nth(0)", "34a");
    },
    '15.Type in input "PLZ"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > input:nth(0)", "10939");
    },
    '16.Type in input "Stadt"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(1) > div:nth(0) > input:nth(0)", "Berlin");
    },
    '17.Type in input "Land"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(1) > div:nth(0) > input:nth(0)", "Deutschland");
    },
    '18.Click span "E-Mails"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "19.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-plus").eq(1);
        };
        act.click(actionTarget);
    },
    "20.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "noemi-rights@mustercompany.com");
    },
    "21.Click span": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "22.Click span": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "23.Click span": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(8) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "24.Click span": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(9) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '25.Click span "Passwortverwaltung"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '26.Click span "Passwort vergeben"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    "27.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1)");
    },
    '28.Click span "Gruppen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '29.Click span "Systemrechte"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '30.Click span "Berechtigungen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '31.Click span "Speichern"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    }
};




"@test"["02_RigthManager"] = {
    "1.Wait 7000 milliseconds": function() {
        act.wait(7e3);
    },
    "2.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-plus").eq(0);
        };
        act.click(actionTarget);
    },
    '3.Type in input "Login"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > input:nth(0)", "rigthmanager");
    },
    '4.Type in input "Vorname"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(1) > div:nth(0) > input:nth(0)", "Robert");
    },
    '5.Type in input "Nachname"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(1) > div:nth(0) > input:nth(0)", "Rechtemanager");
    },
    '6.Type in input "Anzeigename"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > input:nth(0)", "RightManager");
    },
    '7.Type in input "Unternehmen"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > input:nth(0)", "Controllingcompany");
    },
    '8.Type in input "Abteilung"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(8) > div:nth(1) > div:nth(0) > input:nth(0)", "Verwaltung");
    },
    '9.Type in input "Telefon"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(9) > div:nth(1) > div:nth(0) > input:nth(0)", "+33 24 23 234 105");
    },
    '10.Type in text area "Bemerkungen"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(11) > div:nth(1) > div:nth(0) > textarea:nth(0)", "Ich kümmere mich um die ganzen Rechte");
    },
    '11.Click span "Adresse"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '12.Type in input "Adress-Zusatz"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "Queenbuilding");
    },
    '13.Type in input "Straße"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > input:nth(0)", "Buckerhamacker");
    },
    '14.Type in input "Hausnummer"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > input:nth(0)", "99");
    },
    '15.Type in input "PLZ"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > input:nth(0)", "342451");
    },
    '16.Type in input "Stadt"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(1) > div:nth(0) > input:nth(0)", "London");
    },
    '17.Type in input "Land"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(1) > div:nth(0) > input:nth(0)", "Großbritannien");
    },
    '18.Click span "E-Mails"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "19.Click <i>": function() {
        var actionTarget = function() {
            return $(".fa.fa-plus").eq(1);
        };
        act.click(actionTarget);
    },
    "20.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "rightmanager@queencompany.queer");
    },
    "21.Click span": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "22.Click span": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "23.Click span": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '24.Click span "Mittwoch"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    "25.Click span": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(6) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '26.Click span "Freitag"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(5) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '27.Click span "Sonntag"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '28.Click span "Passwortverwaltung"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '29.Click span "Passwort vergeben"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '30.Type in input "Passwort"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > input:nth(0)", "ddeeddee");
    },
    '31.Click span "Gruppen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '32.Click span "Rightsmanagement..."': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '33.Click span "Systemrechte"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '35.Click span "Speichern"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "36.Assert": function() {
        eq($(".cui-lv-tr").find(":containsExcludeChildren(RightManager)").length, 1);
    }
};

"@test"["03_Basic User 1"] = {
    "1.Wait 7000 milliseconds": function() {
        act.wait(7e3);
    },
    "2.Click div": function() {
        var actionTarget = function() {
            return $(".cui-loca-button.cui-button-button.cui-button.cui-first-visible-child").find(" > div:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },
    '3.Type in input "Login"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > input:nth(0)", "basicuser1");
    },
    '4.Type in input "Vorname"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(1) > div:nth(0) > input:nth(0)", "Basiel");
    },
    '5.Type in input "Nachname"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(1) > div:nth(0) > input:nth(0)", "Icov");
    },
    '6.Type in input "Anzeigename"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > input:nth(0)", "BasicUser1");
    },
    '7.Type in input "Unternehmen"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(7) > div:nth(1) > div:nth(0) > input:nth(0)", "Standartcompany");
    },
    '8.Type in input "Abteilung"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(8) > div:nth(1) > div:nth(0) > input:nth(0)", "Spezialwerkzeuge");
    },
    '9.Type in input "Telefon"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(9) > div:nth(1) > div:nth(0) > input:nth(0)", "+49 800 0815 0815");
    },
    '10.Type in text area "Bemerkungen"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(11) > div:nth(1) > div:nth(0) > textarea:nth(0)", "Basic EasyDB Benutzer");
    },
    '11.Click span "Adresse"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '12.Type in input "Adress-Zusatz"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > input:nth(0)", "Basement");
    },
    '13.Type in input "Straße"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > input:nth(0)", "Basisstraße");
    },
    '14.Type in input "Hausnummer"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > input:nth(0)", "1");
    },
    '15.Type in input "PLZ"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(1) > div:nth(0) > input:nth(0)", "08150815");
    },
    '16.Type in input "Stadt"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(1) > div:nth(0) > input:nth(0)", "Potsdam");
    },
    '17.Type in input "Land"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(1) > div:nth(0) > input:nth(0)", "Deutschland");
    },
    '18.Click span "E-Mails"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "19.Click div": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0)");
    },
    "20.Type in input": function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > input:nth(0)", "basil@icov.nov");
    },
    "21.Click span": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "22.Click span": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(8) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "23.Click span": function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '24.Click span "Mittwoch"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '25.Click span "Freitag"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(5) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '26.Click span "Passwortverwaltung"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '27.Click span "Passwort vergeben"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '28.Type in input "Passwort"': function() {
        act.type("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(3) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(1) > div:nth(0) > input:nth(0)", "manuellespasswort");
    },
    '29.Click span "Gruppen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '30.Click span "Basic User Gruppe..."': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(1) > span:nth(0)");
    },
    '31.Click span "Systemrechte"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(5) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '32.Click span "Berechtigungen"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(6) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    '33.Click span "Speichern"': function() {
        act.click("body > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > span:nth(0)");
    },
    "34.Assert": function() {
        eq($(".cui-lv-tr").find(":containsExcludeChildren(BasicUser1)").length, 1);
    }
};