package steps;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ECSteps {

	
	WebDriver driver;
	  
	@Before()
	public void setup() {
		System.setProperty("webdriver.chrome.driver",
				"F:\\account_setting\\Account_setting\\src\\test\\java\\resources\\chromedriver.exe");
		this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);

	}
	
	@After()
	public void end() {
	driver.manage().deleteAllCookies();
	driver.quit();
	}
	
	@Given("^user navigates to the login page and signs in$")
	public void user_navigates_to_the_login_page_and_signs_in() throws Throwable {
		driver.get("http://20.52.44.20/auth/login");
		driver.findElement(By.id("InputEmail")).sendKeys("testing.amalitech@gmail.com");
		driver.findElement(By.id("InputPassword1")).sendKeys("QWERTY!12345");
		driver.findElement(By.id("signin_button")).click();
	}

	@Given("^user clicks on the profile dropdown menu and select account setting$")
	public void user_clicks_on_the_profile_dropdown_menu_and_select_account_setting() throws Throwable {
		Thread.sleep(5000);
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[1]/div/div/div[3]/div/a/div/span")).click();
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[1]/div/div/div[3]/div/div/a[2]")).click();
	}

	@When("^user clicks on edit$")
	public void user_clicks_on_edit() throws Throwable {
		Thread.sleep(5000);
		driver.findElement(By.id("account-edit-mail")).click();
		
	}

	@When("^user enters a \"([^\"]*)\"$")
	public void user_enters_a(String email) throws Throwable {
		Thread.sleep(5000);
		driver.findElement(By.id("account-input-mail")).sendKeys(email);
		driver.findElement(By.id("account-input-password")).sendKeys("QWERTY!12345");
		
	}

	@When("^user clicks on save$")
	public void user_clicks_on_save() throws Throwable {
		driver.findElement(By.id("account-mail-save")).click();
	}

	@Then("^the user should be presented with the following prompt alert \"([^\"]*)\"$")
	public void the_user_should_be_presented_with_the_following_prompt_alert(String message) throws Throwable {
		Thread.sleep(5000);
		String prompt = driver.findElement(By.xpath("//*[@id=\"myModal\"]/div[2]/div/p")).getText();   
		Assert.assertEquals(message,prompt);
	}

}
