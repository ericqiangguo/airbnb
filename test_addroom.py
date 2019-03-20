import sys
import re
from splinter.browser import Browser

CLOASE_AFTER_TEST = False

def resultMsg(x):
        assert x == True
        print 'pass'

def testLogin(desc, housename, street, city, province, postalcode, beds, price, result):
    print desc
    browser.fill('name', housename)
    browser.fill('street', street)
    browser.fill('city', city)
    browser.fill('Provinces', province)
    browser.fill('code', postalcode)
    browser.fill('beds', beds)
    browser.fill('price', price)
    browser.fill('des', "I have a bed")

    date_start = browser.find_by_name("date_start")


    browser.find_by_value('create').first.click()
    checkresult(result)

def checkresult(x):
    resultMsg(browser.is_text_present(x))

__testUrl = 'http://ubuntu1604-006.student.cs.uwaterloo.ca:19488/addroom.html'

browser = Browser('chrome', headless=True)
browser.visit(__testUrl)

print 'test page:' + browser.title



testLogin('no housename', '', '315 king street North', 'Waterloo', 'ON', 'N2J2Z1','2', '100', 'please enter your house name')
testLogin('no street', 'preston house', '', 'Waterloo', 'ON', 'N2J2Z1','2', '100', 'please enter your street')
testLogin('no city', 'preston house', '315 king street North', '', 'ON', 'N2J2Z1','2', '100', 'please enter your city')
testLogin('no province', 'preston house', '315 king street North', 'Waterloo', '', 'N2J2Z1','2', '100', 'please enter your province')
testLogin('no postal code', 'preston house', '315 king street North', 'Waterloo', 'ON', '','2', '100', 'please enter your postal code')
testLogin('no beds', 'preston house', '315 king street North', 'Waterloo', 'ON', 'N2J2Z1','', '100', 'please enter your beds')
testLogin('no price', 'preston house', '315 king street North', 'Waterloo', 'ON', 'N2J2Z1','2', '', 'please enter your price')
testLogin('check price', 'preston house', '315 king street North', 'Waterloo', 'ON', 'N2J2Z1','-1', '100', 'please enter your correct number')
testLogin('check price', 'preston house', '315 king street North', 'Waterloo', 'ON', 'N2J2Z1','2', '-100', 'please enter your correct price')

if CLOASE_AFTER_TEST:
    browser.quit()

