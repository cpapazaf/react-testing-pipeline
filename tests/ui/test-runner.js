importClass(org.openqa.selenium.chrome.ChromeDriver);
importClass(org.openqa.selenium.chrome.ChromeOptions);
importClass(com.galenframework.utils.GalenUtils);
importClass(com.galenframework.browser.SeleniumBrowser);

this.devices = {
  remote_mobile: {
    tag: "mobile",
    deviceName: "iPhone 5S",
    browserName: "iPhone",
    platform: "MAC",
    device: "iPhone 5S",
    browser: "",
    browser_version: "",
    os: "",
    os_version: "",
    emulator: "true",
    remote: true,
    enabled: false
  },
  remote_desktop: {
    tag: "desktop",
    deviceName: "Win-Chrome 43",
    browserName: "",
    platform: "",
    device: "",
    browser: "Chrome",
    browser_version: "43",
    os: "Windows",
    os_version: "8.1",
    emulator: "",
    remote: true,
    enabled: false
  },
  local_chrome_1024x768: {
    deviceName: "chrome",
    tag: "desktop",
    size: "1024x768",
    browser: "chrome",
    remote: false,
    enabled: true
  },
  local_chrome_ios7: {
    deviceName: "ios7",
    tag: "desktop",
    size: "375x667",
    browser: "chrome",
    remote: false,
    enabled: true
  },
  local_chrome_ios7plus: {
    deviceName: "ios7plus",
    tag: "desktop",
    size: "414x736",
    browser: "chrome",
    remote: false,
    enabled: true
  },
  local_chrome_ipad_mini: {
    deviceName: "ipad_mini",
    tag: "desktop",
    size: "768x1024",
    browser: "chrome",
    remote: false,
    enabled: true
  },
  local_chrome_sgalaxy_s7: {
    deviceName: "sgalaxy_s7",
    tag: "desktop",
    size: "340x640",
    browser: "chrome",
    remote: false,
    enabled: true
  },
  local_chrome_sgalaxy_s7_landscape: {
    deviceName: "sgalaxy_s7_landscape",
    tag: "desktop",
    size: "640x340",
    browser: "chrome",
    remote: false,
    enabled: true
  }
};

forAll(devices, function (option) {
  if (option.enabled) {
    test("Test on ${deviceName}", function() {
      var page = String(System.getProperty("PAGE_URL"));
      var chromeOptions = new ChromeOptions();
      chromeOptions.addArguments("app=" + page);

      var driver = null;
        if (option.remote) {
          driver = createGridDriver("http://" +  System.getProperty("browserstack.username") + ":" +  System.getProperty("browserstack.key") + "@hub.browserstack.com/wd/hub", {
            desiredCapabilities: {
              browser: option.browser,
              browser_version: option.browser_version,
              os: option.os,
              os_version: option.os_version,
              browserName: option.browserName,
              platform: option.platform,
              device: option.device,
              emulator: option.emulator,
              "browserstack.debug": "true"
            }
          });
        } else {
          browser = new SeleniumBrowser(new ChromeDriver(chromeOptions));
          browser.changeWindowSize(GalenUtils.readSize(option.size));
          driver = browser.getDriver();
        }

        try {
          driver.get(page);
          driver.switchTo().frame("storybook-preview-iframe");

          checkLayout(driver, "register-form.gspec", [option.tag]);
        } catch(err) {

        } finally {
          driver.quit();
        }

    });
  }
});
