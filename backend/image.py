from bs4 import BeautifulSoup
from selenium import webdriver
# from webdriver_manager.chrome import ChromeDriverManager
from webdrivermanager import ChromeDriverManager
import time
import re
import urllib.parse
import sys


class ImgCrawler:
    def __init__(self, searchlink=None):
        self.link = searchlink
        self.soupheader = {
            "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36"
        }
        self.scrolldown = None
        self.jsdriver = None

    def getPhantomJSDriver(self):
        # self.jsdriver = webdriver.Chrome(ChromeDriverManager().install())
        self.jsdriver = webdriver.ChromeDriverManager().version("2.46").setup()
        self.jsdriver.get(self.link)

    def scrollDownUsePhatomJS(self, scrolltimes=1, sleeptime=10):
        for i in range(scrolltimes):
            self.jsdriver.execute_script(
                "window.scrollTo(0,document.body.scrollHeight);"
            )
            time.sleep(sleeptime)

    def getSoup(self, parser=None):
        return BeautifulSoup(self.jsdriver.page_source, parser)

    def getActualUrl(self, soup=None):
        actualurl = []
        r = re.compile(r"/imgres\?imgurl=")

        for a in soup.find_all("a", href=r):
            parsed = urllib.parse.urlparse(a["href"])
            url = urllib.parse.parse_qs(parsed.query)["imgurl"]
            actualurl.append(url)
            return url

        return actualurl


def get_image(player_name):
    search_url = "https://www.google.com/search?q="
    queryword = player_name
    query = queryword.split()
    query = "+".join(query)
    weblink = search_url + query
    weblink += "&safe=strict&tbas=0&tbm=isch&source=lnt&tbs=isz:l&sa=X&ved=0ahUKEwiF_LLR3r_hAhVMCKwKHQkwDBAQpwUIIQ&biw=1280&bih=618&dpr=2"

    img = ImgCrawler(weblink)
    img.getPhantomJSDriver()
    img.scrollDownUsePhatomJS(1, 1)
    soup = img.getSoup("html.parser")

    return img.getActualUrl(soup)


print(get_image("James Harden"))
