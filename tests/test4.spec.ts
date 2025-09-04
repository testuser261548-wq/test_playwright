import com.microsoft.playwright.junit.UsePlaywright;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.options.*;

import org.junit.jupiter.api.*;
import static com.microsoft.playwright.assertions.PlaywrightAssertions.*;

@UsePlaywright
public class TestExample {
  @Test
  void test(Page page) {
    page.navigate("https://stage2user:RodeteQuakenDuttDreherAf@mini-de-awsint-m3.int.miniweb.eu-central-1.aws.bmw.cloud/de_DE/home.html");
    page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Alle akzeptieren")).click();
    page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Zubehӧr & Service")).click();
    page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Close")).click();
  }
}