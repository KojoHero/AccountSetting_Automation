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
		Given user navigates to the login page and signs in
			And user clicks on the profile dropdown menu and select account setting
			When user clicks on edit
			And user enters a "<o_password>"
			 And user enters a "<n_password>"
			 And user enters a "<c_password>"
			And user clicks on save
			Then the user should be presented with the following prompt alert "<message>"
			
			
			Examples:
				| 		o_password		| 	n_password   |c_password |		 message		   		  |
				|    $$yLaable      |   $%Sjfkm      | GJHdf88   | change successful      |
