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

public class PCSteps {
	
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
	
	@Given("^user goes to the login page and logs in$")
	public void user_goes_to_the_login_page_and_logs_in() throws Throwable {
		driver.get("http://20.52.44.20/auth/login");
		driver.findElement(By.id("InputEmail")).sendKeys("testing@gmail.com");
		driver.findElement(By.id("InputPassword1")).sendKeys("12345678!AaB");
		driver.findElement(By.id("signin_button")).click();  
	}

	@Given("^user clicks on dropdown menu and select account setting$")
	public void user_clicks_on_dropdown_menu_and_select_account_setting() throws Throwable {
		Thread.sleep(10000);
		driver.findElement(By.cssSelector("body.parent:nth-child(2) div.page div.page-main div.hor-header.header.d-flex.navbar-collapse.sticky.sticky-pin div.container div.d-flex div.d-flex.order-lg-2.ml-auto.header-right:nth-child(5) div.dropdown.header-profile a.nav-link.pr-0.leading-none.d-flex.pt-1 div.ml-3 span:nth-child(1) > i.fe.fe-chevron-down.ml-1\r\n" + 
				"")).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("//*[@id=\"__next\"]/div/div/div[1]/div/div/div[3]/div/div/a[2]")).click();
	}

	@When("^user clicks on edit button$")
	public void user_clicks_on_edit_button() throws Throwable {
		Thread.sleep(5000);
		driver.findElement(By.xpath("//*[@id=\"account-edit-pass\"]/strong")).click();
	}

//	@When("^user enters(\\d+)  \"([^\"]*)\"$")
//	public void user_enters(String current_password) throws Throwable {
//		Thread.sleep(5000);
//		driver.findElement(By.id("password")).sendKeys(current_password);    
//	}
//	
//	
//
//	@When("^user enters  \"([^\"]*)\"and \"([^\"]*)\"$")
//	public void user_enters_and(String c_password, String n_password) throws Throwable {
//		Thread.sleep(5000);
//		driver.findElement(By.id("newpassword")).sendKeys(n_password);
//		driver.findElement(By.id("confirmnewpassword")).sendKeys(c_password);
//	    
//	}
	@When("^user entersthe old password  \"([^\"]*)\" and  \"([^\"]*)\"$")
	public void user_entersthe_old_password_and(String current_password, String n_password) throws InterruptedException {
		Thread.sleep(5000);
		driver.findElement(By.id("password")).sendKeys(current_password);
		driver.findElement(By.id("newpassword")).sendKeys(n_password);
	}

	@When("^user enters new \"([^\"]*)\"$")
	public void user_enters_new(String c_password) throws InterruptedException  {
		Thread.sleep(5000);
		driver.findElement(By.id("confirmnewpassword")).sendKeys(c_password);
	}
	

	@When("^user clicks on save button$")
	public void user_clicks_on_save_button() throws Throwable {
		driver.findElement(By.id("account-pass-save")).click();
	    
	}

	@Then("^the user should be prompted with this alert \"([^\"]*)\"$")
	public void the_user_should_be_prompted_with_this_alert(String message) throws Throwable {
		Thread.sleep(5000);
		String prompt = driver.findElement(By.xpath("//*[@id=\"myModal\"]/div[2]/div")).getText();   
		Assert.assertEquals(message,prompt);
	    
	}
}
