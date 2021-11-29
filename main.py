from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome("C:\\Users\\dav_1\\Documents\\chromedriver_win32\\chromedriver.exe")
driver.maximize_window()

driver.get("http://localhost:3000/")

driver.find_element(By.ID, "initsession").click()
driver.find_element(By.ID, "email").send_keys("selenium@selenium.com")
driver.find_element(By.ID, "password").send_keys("selenium")
driver.find_element(By.ID, "ingresar").click()
