const logFileOutput = {
  'kh.google.com': 1,
  'personal.avira-update.com': 1,
  'www.shukumaku.com': 1,
  'www.p33p.com': 3,
  'l.addthiscdn.com': 1,
  'clic-diffusion.com': 1,
  'beacon-1.newrelic.com': 1,
  'd2.50dd.net': 1,
  'ohmilfs.com': 1,
  'www.google.com': 4,
  'www.supervpn.net': 2
}

const parsedFile = {
  fields: [
    'date',           'time',
    'time-taken',     'c-ip',
    'cs-username',    'cs-auth-group',
    'x-exception-id', 'sc-filter-result',
    'cs-categories',  'cs(Referer)',
    'sc-status',      's-action',
    'cs-method',      'rs(Content-Type)',
    'cs-uri-scheme',  'cs-host',
    'cs-uri-port',    'cs-uri-path',
    'cs-uri-query',   'cs-uri-extension',
    'cs(User-Agent)', 's-ip',
    'sc-bytes',       'cs-bytes',
    'x-virus-id'
  ],
  rows: [
    '2011-08-04 21:00:00 11 0.0.0.0 - - - OBSERVED "unavailable" -  200 TCP_HIT GET application/octet-stream http kh.google.com 80 /flatfile ?f1-020300031202230-d.50200.391 - "GoogleEarth/6.0.3.2197(Windows;Microsoft Windows (5.1.2600.3);en-US;kml:2.2;client:Free;type:default)" 82.137.200.42 16827 406 -',
    '2011-08-04 21:00:00 9311 0.0.0.0 - - - OBSERVED "unavailable" -  200 TCP_NC_MISS GET application/x-gzip http personal.avira-update.com 80 /update/wks_avira10/win32/en/pecl/en-us/avwin.chm.gz - gz "AntiVir-NGUpd/10.0.0.37 (PERS; WKS; EN; AVE 8.2.4.192; VDF 7.11.5.161; Windows 7; ; Syria; 273f27fe2dcb34b53c75441c4c0e56765a336283; 0000149996-ADJIE-0000001; SY; 10.0.0.648)" 82.137.200.42 875853 384 -',
    '2011-08-04 21:00:00 1705 0.0.0.0 - - - OBSERVED "unavailable" http://www.shukumaku.com/Content.php?id=30873  200 TCP_NC_MISS GET text/html http www.shukumaku.com 80 /quick.php - php "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; InfoPath.1; AskTbPTV2/5.8.0.12304)" 82.137.200.42 279 638 -',
    '2011-08-04 21:00:00 19 0.0.0.0 - - - OBSERVED "unavailable" http://www.p33p.com/p33p-798.html  200 TCP_HIT GET application/x-shockwave-flash http www.p33p.com 80 /AFG_PRO_Plus_v10.swf ?pub=6265800474906769&swfURL=http://www.p33p.com/files/file/a6f2032f.swf swf "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.2; BRI/2)" 82.137.200.42 2006 809 -',
    '2011-08-04 21:00:00 168 0.0.0.0 - - - OBSERVED "unavailable" http://s7.addthis.com/static/r07/sh47.html  200 TCP_NC_MISS GET image/gif http l.addthiscdn.com 80 /live/t00/250lo.gif ?euys1x&uid=4de5b81aa16972b8&pub=addxvideos&rev=102809&si=4e293d0aea730a77&lc=MDAwMDBBU1NZMDAyMTM1MjE2MzAwMDAwMDAwVg%3D%3D&ln=ar&pc=men&cb=1&uf=0&ct=1&lt=49&pi=2&dp=www.xvideos.com&fp=new%2F44%2F%26usg%3DALkJrhgVhqh5vy2fCRlCsTetuyHQgUeCwg gif "Mozilla/5.0 (Windows NT 5.1; rv:5.0) Gecko/20100101 Firefox/5.0" 82.137.200.42 389 594 -',
    '2011-08-04 21:00:00 100 0.0.0.0 - - - OBSERVED "unavailable" http://www.annoncez-moi.fr/index.php?light=&param=1&codepays=rien&pseu=  200 TCP_NC_MISS GET image/gif http clic-diffusion.com 80 /show.php ?z=44&pl=2048&adn=464-1&cc=1310409687 php "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2) Gecko/20100115 Firefox/3.6" 82.137.200.42 357 511 -',
    '2011-08-04 21:00:00 171 0.0.0.0 - - - OBSERVED "unavailable" http://avaxhome.ws/banners/bottom1  204 TCP_NC_MISS GET image/gif http beacon-1.newrelic.com 80 /1/49b4096f2e ?a=143004&qt=0&ap=233&dc=15&fe=4078&to=XkVZXF5eFFcG&v=12 - "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 2.0.50727)" 82.137.200.42 209 350 -',
    '2011-08-04 21:00:00 258 0.0.0.0 - - - OBSERVED "unavailable" http://www.sexyama.com/spanking/  200 TCP_MISS GET image/jpeg http d2.50dd.net 80 /st/thumbs/462/nYJxpcJ3Zu.jpg - jpg "Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 NokiaX6-00/32.0.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/525 (KHTML, like Gecko) Version/3.0 BrowserNG/7.2.7.4 3gpp-gba" 82.137.200.42 9570 641 -',
    '2011-08-04 21:00:00 1 0.0.0.0 - - - OBSERVED "unavailable" http://ohmilfs.com/gallery/check-my-milg-gf/351fac1802f76442abb63497abc95ce1/index.html?28x1x6980  304 TCP_HIT GET image/jpeg http ohmilfs.com 80 /scj/top/tt/perfect-milf.com.jpg - jpg "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET CLR 1.1.4322; .NET4.0C)" 82.137.200.42 252 926 -',
    '2011-08-04 21:00:00 121 0.0.0.0 - - - OBSERVED "unavailable" http://www.google.com/  200 TCP_NC_MISS GET application/json;%20charset=UTF-8 http www.google.com 80 /s ?hl=en&xhr=t&q=%D8%A8%D9%86%D9%83%20%D8%B9%D9%88%D8%AF%D8%A9%20%D8%B3%D9%88%D8%B1&cp=12&pf=p&sclient=psy&source=hp&aq=&aqi=&aql=&oq=&pbx=1&bav=on.2,or.r_gc.r_pw.&fp=68b3f9ae28a95316&biw=1075&bih=398&tch=4&ech=23&psi=Fwg7Tvy2A8OOswaxtuXmDw.1312491551617.2&wrapid=tljp1312491551617022 - "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; HPNTDF; .NET4.0C)" 82.137.200.42 785 876 -',
    '2011-08-04 21:00:00 2040 0.0.0.0 - - - OBSERVED "unavailable" http://www.supervpn.net/  200 TCP_MISS GET image/gif http www.supervpn.net 80 /images/new.gif - gif "Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; GT-I9100 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1" 82.137.200.42 571 521 -',
    '2011-08-04 21:00:00 1988 0.0.0.0 - - - OBSERVED "unavailable" http://www.supervpn.net/  200 TCP_MISS GET image/gif http www.supervpn.net 80 /images/foot.gif - gif "Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; GT-I9100 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1" 82.137.200.42 1268 522 -',
    '2011-08-04 21:00:00 121 0.0.0.0 - - - OBSERVED "unavailable" http://www.google.com/  200 TCP_NC_MISS GET application/json;%20charset=UTF-8 http www.google.com 80 /s ?hl=en&xhr=t&q=%D8%A8%D9%86%D9%83%20%D8%B9%D9%88%D8%AF%D8%A9%20%D8%B3%D9%88%D8%B1&cp=12&pf=p&sclient=psy&source=hp&aq=&aqi=&aql=&oq=&pbx=1&bav=on.2,or.r_gc.r_pw.&fp=68b3f9ae28a95316&biw=1075&bih=398&tch=4&ech=23&psi=Fwg7Tvy2A8OOswaxtuXmDw.1312491551617.2&wrapid=tljp1312491551617022 - "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; HPNTDF; .NET4.0C)" 82.137.200.42 785 876 -',
    '2011-08-04 21:00:00 121 0.0.0.0 - - - OBSERVED "unavailable" http://www.google.com/  200 TCP_NC_MISS GET application/json;%20charset=UTF-8 http www.google.com 80 /s ?hl=en&xhr=t&q=%D8%A8%D9%86%D9%83%20%D8%B9%D9%88%D8%AF%D8%A9%20%D8%B3%D9%88%D8%B1&cp=12&pf=p&sclient=psy&source=hp&aq=&aqi=&aql=&oq=&pbx=1&bav=on.2,or.r_gc.r_pw.&fp=68b3f9ae28a95316&biw=1075&bih=398&tch=4&ech=23&psi=Fwg7Tvy2A8OOswaxtuXmDw.1312491551617.2&wrapid=tljp1312491551617022 - "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; HPNTDF; .NET4.0C)" 82.137.200.42 785 876 -',
    '2011-08-04 21:00:00 121 0.0.0.0 - - - OBSERVED "unavailable" http://www.google.com/  200 TCP_NC_MISS GET application/json;%20charset=UTF-8 http www.google.com 80 /s ?hl=en&xhr=t&q=%D8%A8%D9%86%D9%83%20%D8%B9%D9%88%D8%AF%D8%A9%20%D8%B3%D9%88%D8%B1&cp=12&pf=p&sclient=psy&source=hp&aq=&aqi=&aql=&oq=&pbx=1&bav=on.2,or.r_gc.r_pw.&fp=68b3f9ae28a95316&biw=1075&bih=398&tch=4&ech=23&psi=Fwg7Tvy2A8OOswaxtuXmDw.1312491551617.2&wrapid=tljp1312491551617022 - "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; HPNTDF; .NET4.0C)" 82.137.200.42 785 876 -',
    '2011-08-04 21:00:00 19 0.0.0.0 - - - OBSERVED "unavailable" http://www.p33p.com/p33p-798.html  200 TCP_HIT GET application/x-shockwave-flash http www.p33p.com 80 /AFG_PRO_Plus_v10.swf ?pub=6265800474906769&swfURL=http://www.p33p.com/files/file/a6f2032f.swf swf "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.2; BRI/2)" 82.137.200.42 2006 809 -',
    '2011-08-04 21:00:00 19 0.0.0.0 - - - OBSERVED "unavailable" http://www.p33p.com/p33p-798.html  200 TCP_HIT GET application/x-shockwave-flash http www.p33p.com 80 /AFG_PRO_Plus_v10.swf ?pub=6265800474906769&swfURL=http://www.p33p.com/files/file/a6f2032f.swf swf "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.2; BRI/2)" 82.137.200.42 2006 809 -'
  ]
}
  module.exports = {
    logFileOutput,
    parsedFile
  }