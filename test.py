import sys
import re
from splinter.browser import Browser

CLOASE_AFTER_TEST =False
GBK = "gbk"
UTF8 = "utf8"

reload(sys)
sys.setdefaultencoding(UTF8)

encoding = lambda x:x.encode('gbk')

def output(x):
    print encoding(x)

def resultMsg(x):
    if x == True:
        print 'PASS'
        assert(x)
    else:
        print '[X] not pass'
        assert(x)
    print '---------------------'

def testLogin(desc, username, password, result):
    output(desc)
    browser.fill('email',username.decode(UTF8))
    browser.fill('pass',password.decode(UTF8))
    browser.find_by_value('login').first.click()
    checkresult(result)

def checkresult(x):
    resultMsg(browser.is_text_present(x))

__testUrl = 'http://ubuntu1604-006.student.cs.uwaterloo.ca:19487/'

browser = Browser('chrome',headless=True)
browser.visit(__testUrl)

output("test page:"+ browser.title)


try:
    testLogin("no username",'','','please enter your email')
    testLogin('no password','lyuboxin@gmail','','please enter your password')
    testLogin('unexist username','lyuboxin1@gmail','','your email is not exist')
    testLogin('successful log in','lyuboxin@gmail','123456','success')

except Exception,x:
    print x

if CLOASE_AFTER_TEST:
    browser.quit()




