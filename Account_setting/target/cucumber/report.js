$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/account_setting/Account_setting/src/test/java/Account_Setting/PassChange.feature");
formatter.feature({
  "line": 3,
  "name": "Marketplace",
  "description": "",
  "id": "marketplace",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@COMMUNITY-370"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 5,
      "value": "#Tests As a user, I want to update the settings of my account in case I have changed my email/phone number or password."
    },
    {
      "line": 6,
      "value": "#"
    },
    {
      "line": 7,
      "value": "#Acceptance Criteria:"
    },
    {
      "line": 8,
      "value": "#"
    },
    {
      "line": 9,
      "value": "## When the user clicks Account settings in the profile section, the account settings page loads up"
    },
    {
      "line": 10,
      "value": "## user clicks Edit for email after click saves the system prompts the user to enter his/her password and save the update if the password is correct."
    },
    {
      "line": 11,
      "value": "## If the password is incorrect the system prompts the user."
    },
    {
      "line": 12,
      "value": "## User clicks Edit for the password, the system prompts for old password, new password, confirm password. if all entries are correct, then the user saves it."
    },
    {
      "line": 13,
      "value": "## if the old password entered is incorrect the system shows an error message that the old password is incorrect."
    },
    {
      "line": 14,
      "value": "## If the password strength does not match the password strength criteria the system prompts the user to make amendments."
    },
    {
      "line": 15,
      "value": "## If the new password and confirm password do not match then the system prompts the user."
    }
  ],
  "line": 17,
  "name": "Verify if User can change password successfully with valid or invalid credentials",
  "description": "",
  "id": "marketplace;verify-if-user-can-change-password-successfully-with-valid-or-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@TEST_COMMUNITY-447"
    },
    {
      "line": 16,
      "name": "@REQ_COMMUNITY-30"
    },
    {
      "line": 16,
      "name": "@TESTSET_COMMUNITY-439"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user goes to the login page and logs in",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user clicks on dropdown menu and select account setting",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user clicks on edit button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user entersthe old password  \"\u003ccurrent_password\u003e\" and  \"\u003cn_password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user enters new \"\u003cc_password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user should be prompted with this alert \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "marketplace;verify-if-user-can-change-password-successfully-with-valid-or-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "current_password",
        "n_password",
        "c_password",
        "message"
      ],
      "line": 28,
      "id": "marketplace;verify-if-user-can-change-password-successfully-with-valid-or-invalid-credentials;;1"
    },
    {
      "cells": [
        "QWERTY!12345",
        "12345678!Aa",
        "12345678!Aa",
        "Wrong password"
      ],
      "line": 29,
      "id": "marketplace;verify-if-user-can-change-password-successfully-with-valid-or-invalid-credentials;;2"
    },
    {
      "cells": [
        "12345678!Aa",
        "12345678!Aa",
        "QWERTY!12345",
        "Password does not match"
      ],
      "line": 30,
      "id": "marketplace;verify-if-user-can-change-password-successfully-with-valid-or-invalid-credentials;;3"
    },
    {
      "cells": [
        "1234567896321",
        "1234567896321",
        "1234567896321",
        "Check Password: There should be at least one uppercase character"
      ],
      "line": 31,
      "id": "marketplace;verify-if-user-can-change-password-successfully-with-valid-or-invalid-credentials;;4"
    },
    {
      "cells": [
        "aaaaaaaaaaaaA",
        "aaaaaaaaaaaaA",
        "aaaaaaaaaaaaA",
        "Check Password: There should be at least one numeric character"
      ],
      "line": 32,
      "id": "marketplace;verify-if-user-can-change-password-successfully-with-valid-or-invalid-credentials;;5"
    },
    {
      "cells": [
        "12345678!AaB",
        "12345678!Aa",
        "12345678!Aa",
        "Password changed successfully"
      ],
      "line": 33,
      "id": "marketplace;verify-if-user-can-change-password-successfully-with-valid-or-invalid-credentials;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6093584300,
  "status": "passed"
});
formatter.before({
  "duration": 5380224300,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify if User can change password successfully with valid or invalid credentials",
  "description": "",
  "id": "marketplace;verify-if-user-can-change-password-successfully-with-valid-or-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@REQ_COMMUNITY-30"
    },
    {
      "line": 16,
      "name": "@TESTSET_COMMUNITY-439"
    },
    {
      "line": 16,
      "name": "@TEST_COMMUNITY-447"
    },
    {
      "line": 1,
      "name": "@COMMUNITY-370"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user goes to the login page and logs in",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user clicks on dropdown menu and select account setting",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user clicks on edit button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user entersthe old password  \"QWERTY!12345\" and  \"12345678!Aa\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user enters new \"12345678!Aa\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user should be prompted with this alert \"Wrong password\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PCSteps.user_goes_to_the_login_page_and_logs_in()"
});
formatter.result({
  "duration": 7224966800,
  "status": "passed"
});
formatter.match({
  "location": "PCSteps.user_clicks_on_dropdown_menu_and_select_account_setting()"
});
formatter.result({
  "duration": 15118707200,
  "status": "passed"
});
formatter.match({
  "location": "PCSteps.user_clicks_on_edit_button()"
});
formatter.result({
  "duration": 5047296400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QWERTY!12345",
      "offset": 30
    },
    {
      "val": "12345678!Aa",
      "offset": 50
    }
  ],
  "location": "PCSteps.user_entersthe_old_password_and(String,String)"
});
formatter.result({
  "duration": 5177708700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678!Aa",
      "offset": 17
    }
  ],
  "location": "PCSteps.user_enters_new(String)"
});
formatter.result({
  "duration": 5083643500,
  "status": "passed"
});
formatter.match({
  "location": "PCSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 41321700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wrong password",
      "offset": 45
    }
  ],
  "location": "PCSteps.the_user_should_be_prompted_with_this_alert(String)"
});
formatter.result({
  "duration": 5025100700,
  "status": "passed"
});
formatter.after({
  "duration": 583878300,
  "status": "passed"
});
formatter.after({
  "duration": 599299600,
  "status": "passed"
});
formatter.before({
  "duration": 5270146600,
  "status": "passed"
});
formatter.before({
  "duration": 5301580500,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify if User can change password successfully with valid or invalid credentials",
  "description": "",
  "id": "marketplace;verify-if-user-can-change-password-successfully-with-valid-or-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@REQ_COMMUNITY-30"
    },
    {
      "line": 16,
      "name": "@TESTSET_COMMUNITY-439"
    },
    {
      "line": 16,
      "name": "@TEST_COMMUNITY-447"
    },
    {
      "line": 1,
      "name": "@COMMUNITY-370"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user goes to the login page and logs in",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user clicks on dropdown menu and select account setting",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user clicks on edit button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user entersthe old password  \"12345678!Aa\" and  \"12345678!Aa\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user enters new \"QWERTY!12345\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user should be prompted with this alert \"Password does not match\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PCSteps.user_goes_to_the_login_page_and_logs_in()"
});
formatter.result({
  "duration": 5219423500,
  "status": "passed"
});
formatter.match({
  "location": "PCSteps.user_clicks_on_dropdown_menu_and_select_account_setting()"
});
formatter.result({
  "duration": 15118804400,
  "status": "passed"
});
formatter.match({
  "location": "PCSteps.user_clicks_on_edit_button()"
});
formatter.result({
  "duration": 5072809200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678!Aa",
      "offset": 30
    },
    {
      "val": "12345678!Aa",
      "offset": 49
    }
  ],
  "location": "PCSteps.user_entersthe_old_password_and(String,String)"
});
formatter.result({
  "duration": 5190817200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QWERTY!12345",
      "offset": 17
    }
  ],
  "location": "PCSteps.user_enters_new(String)"
});
formatter.result({
  "duration": 5093842900,
  "status": "passed"
});
formatter.match({
  "location": "PCSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 44611600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password does not match",
      "offset": 45
    }
  ],
  "location": "PCSteps.the_user_should_be_prompted_with_this_alert(String)"
});
formatter.result({
  "duration": 5030518600,
  "status": "passed"
});
formatter.after({
  "duration": 624695800,
  "status": "passed"
});
formatter.after({
  "duration": 577792000,
  "status": "passed"
});
formatter.before({
  "duration": 5248620500,
  "status": "passed"
});
formatter.before({
  "duration": 5432588900,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify if User can change password successfully with valid or invalid credentials",
  "description": "",
  "id": "marketplace;verify-if-user-can-change-password-successfully-with-valid-or-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@REQ_COMMUNITY-30"
    },
    {
      "line": 16,
      "name": "@TESTSET_COMMUNITY-439"
    },
    {
      "line": 16,
      "name": "@TEST_COMMUNITY-447"
    },
    {
      "line": 1,
      "name": "@COMMUNITY-370"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user goes to the login page and logs in",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user clicks on dropdown menu and select account setting",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user clicks on edit button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user entersthe old password  \"1234567896321\" and  \"1234567896321\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user enters new \"1234567896321\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user should be prompted with this alert \"Check Password: There should be at least one uppercase character\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PCSteps.user_goes_to_the_login_page_and_logs_in()"
});
formatter.result({
  "duration": 12381081700,
  "status": "passed"
});
formatter.match({
  "location": "PCSteps.user_clicks_on_dropdown_menu_and_select_account_setting()"
});
formatter.result({
  "duration": 15121054300,
  "status": "passed"
});
formatter.match({
  "location": "PCSteps.user_clicks_on_edit_button()"
});
formatter.result({
  "duration": 5070588900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567896321",
      "offset": 30
    },
    {
      "val": "1234567896321",
      "offset": 51
    }
  ],
  "location": "PCSteps.user_entersthe_old_password_and(String,String)"
});
formatter.result({
  "duration": 5204965700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567896321",
      "offset": 17
    }
  ],
  "location": "PCSteps.user_enters_new(String)"
});
formatter.result({
  "duration": 5090101700,
  "status": "passed"
});
formatter.match({
  "location": "PCSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 40807000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check Password: There should be at least one uppercase character",
      "offset": 45
    }
  ],
  "location": "PCSteps.the_user_should_be_prompted_with_this_alert(String)"
});
formatter.result({
  "duration": 5052707400,
  "status": "passed"
});
formatter.after({
  "duration": 595414700,
  "status": "passed"
});
formatter.after({
  "duration": 603466600,
  "status": "passed"
});
formatter.before({
  "duration": 5294797900,
  "status": "passed"
});
formatter.before({
  "duration": 5405812500,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify if User can change password successfully with valid or invalid credentials",
  "description": "",
  "id": "marketplace;verify-if-user-can-change-password-successfully-with-valid-or-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@REQ_COMMUNITY-30"
    },
    {
      "line": 16,
      "name": "@TESTSET_COMMUNITY-439"
    },
    {
      "line": 16,
      "name": "@TEST_COMMUNITY-447"
    },
    {
      "line": 1,
      "name": "@COMMUNITY-370"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user goes to the login page and logs in",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user clicks on dropdown menu and select account setting",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user clicks on edit button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user entersthe old password  \"aaaaaaaaaaaaA\" and  \"aaaaaaaaaaaaA\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user enters new \"aaaaaaaaaaaaA\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user should be prompted with this alert \"Check Password: There should be at least one numeric character\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PCSteps.user_goes_to_the_login_page_and_logs_in()"
});
formatter.result({
  "duration": 8494322000,
  "status": "passed"
});
formatter.match({
  "location": "PCSteps.user_clicks_on_dropdown_menu_and_select_account_setting()"
});
formatter.result({
  "duration": 15141431500,
  "status": "passed"
});
formatter.match({
  "location": "PCSteps.user_clicks_on_edit_button()"
});
formatter.result({
  "duration": 5058959400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aaaaaaaaaaaaA",
      "offset": 30
    },
    {
      "val": "aaaaaaaaaaaaA",
      "offset": 51
    }
  ],
  "location": "PCSteps.user_entersthe_old_password_and(String,String)"
});
formatter.result({
  "duration": 5186481200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aaaaaaaaaaaaA",
      "offset": 17
    }
  ],
  "location": "PCSteps.user_enters_new(String)"
});
formatter.result({
  "duration": 5113447600,
  "status": "passed"
});
formatter.match({
  "location": "PCSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 40728900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check Password: There should be at least one numeric character",
      "offset": 45
    }
  ],
  "location": "PCSteps.the_user_should_be_prompted_with_this_alert(String)"
});
formatter.result({
  "duration": 5046896500,
  "status": "passed"
});
formatter.after({
  "duration": 625970800,
  "status": "passed"
});
formatter.after({
  "duration": 603772900,
  "status": "passed"
});
formatter.before({
  "duration": 5495438400,
  "status": "passed"
});
formatter.before({
  "duration": 5218547500,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify if User can change password successfully with valid or invalid credentials",
  "description": "",
  "id": "marketplace;verify-if-user-can-change-password-successfully-with-valid-or-invalid-credentials;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@REQ_COMMUNITY-30"
    },
    {
      "line": 16,
      "name": "@TESTSET_COMMUNITY-439"
    },
    {
      "line": 16,
      "name": "@TEST_COMMUNITY-447"
    },
    {
      "line": 1,
      "name": "@COMMUNITY-370"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user goes to the login page and logs in",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user clicks on dropdown menu and select account setting",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user clicks on edit button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user entersthe old password  \"12345678!AaB\" and  \"12345678!Aa\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user enters new \"12345678!Aa\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user clicks on save button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user should be prompted with this alert \"Password changed successfully\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PCSteps.user_goes_to_the_login_page_and_logs_in()"
});
formatter.result({
  "duration": 4556825200,
  "status": "passed"
});
formatter.match({
  "location": "PCSteps.user_clicks_on_dropdown_menu_and_select_account_setting()"
});
formatter.result({
  "duration": 15138344700,
  "status": "passed"
});
formatter.match({
  "location": "PCSteps.user_clicks_on_edit_button()"
});
formatter.result({
  "duration": 5044989500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678!AaB",
      "offset": 30
    },
    {
      "val": "12345678!Aa",
      "offset": 50
    }
  ],
  "location": "PCSteps.user_entersthe_old_password_and(String,String)"
});
formatter.result({
  "duration": 5175149400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678!Aa",
      "offset": 17
    }
  ],
  "location": "PCSteps.user_enters_new(String)"
});
formatter.result({
  "duration": 5107327100,
  "status": "passed"
});
formatter.match({
  "location": "PCSteps.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 40227200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password changed successfully",
      "offset": 45
    }
  ],
  "location": "PCSteps.the_user_should_be_prompted_with_this_alert(String)"
});
formatter.result({
  "duration": 5032252000,
  "status": "passed"
});
formatter.after({
  "duration": 597788400,
  "status": "passed"
});
formatter.after({
  "duration": 640647400,
  "status": "passed"
});
});