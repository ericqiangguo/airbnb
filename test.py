import sys
import re
from splinter.browser import Browser

CLOASE_AFTER_TEST = False

def resultMsg(x):
        assert x == True
        print 'pass'

def testLogin(desc, username, password, result):
    print desc
    browser.fill('email', username)
    browser.fill('pass', password)
    browser.find_by_value('login').first.click()
    checkresult(result)

def checkresult(x):
    resultMsg(browser.is_text_present(x))

__testUrl = 'http://ubuntu1604-006.student.cs.uwaterloo.ca:19487/'

browser = Browser('chrome', headless=True)
browser.visit(__testUrl)

print 'test page:' + browser.title

testLogin('no username', '', '', 'please enter your email')
testLogin('no password', 'lyuboxin@gmail', '', 'please enter your password')
testLogin('unexist username', 'lyuboxin1@gmail', '', 'username or password is wrong')

if CLOASE_AFTER_TEST:
    browser.quit()
