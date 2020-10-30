@COMMUNITY-370
@REQ_COMMUNITY-2
Feature: Marketplace

	#Tests As a user, I want to update the settings of my account in case I have changed my email/phone number or password.
	#
	#Acceptance Criteria:
	#
	## When the user clicks Account settings in the profile section, the account settings page loads up
	## user clicks Edit for email after click saves the system prompts the user to enter his/her password and save the update if the password is correct.
	## If the password is incorrect the system prompts the user.
	## User clicks Edit for the password, the system prompts for old password, new password, confirm password. if all entries are correct, then the user saves it.
	## if the old password entered is incorrect the system shows an error message that the old password is incorrect.
	## If the password strength does not match the password strength criteria the system prompts the user to make amendments.
	## If the new password and confirm password do not match then the system prompts the user.
	@TEST_COMMUNITY-447 @REQ_COMMUNITY-30 @TESTSET_COMMUNITY-439
	Scenario Outline: Verify if User can change password successfully with valid or invalid credentials
		Given user goes to the login page and logs in
			And user clicks on dropdown menu and select account setting
			When user clicks on edit button
			And user entersthe old password  "<current_password>" and  "<n_password>" 
			And user enters new "<c_password>" 
			And user clicks on save button
			Then the user should be prompted with this alert "<message>"
			
			
			Examples:
				| 	 current_password		| 	n_password   |c_password     |		 message		  |
				|    QWERTY!12345    |  12345678!Aa | 12345678!Aa   | Wrong password|
				|    12345678!Aa   |   12345678!Aa  | QWERTY!12345  | Password does not match|
				|    1234567896321  |   1234567896321| 1234567896321 | Check Password: There should be at least one uppercase character|
				|    aaaaaaaaaaaaA  |   aaaaaaaaaaaaA| aaaaaaaaaaaaA | Check Password: There should be at least one numeric character|
				|    12345678!AaB  |   12345678!Aa  | 12345678!Aa   | Password changed successfully|
