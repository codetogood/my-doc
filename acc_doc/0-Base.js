◆名词解释 
  'Integrated_Development_Environment',IDE 集成开发环境 
  'scripting_language'脚本语言 
    不具备开发操作系统的能力,只用来编写控制其他大型应用程序的'脚本';
  'Application_Programming_interfaces',API : 应用编程接口 
    API 一些预先定义的函数
      目的是给应用程序与开发人员基于某软件或硬件得以访问一组例程的能力,
      无需访问源码,或理解内部工作机制的细节;
      提供了一组对象,方法和属性,可以用来访问这些技术的所有功能
      API 是对象,拥有属性和方法.
    PS-Self:程序提供的操作它的一些函数、方法等.
      对方定义的一种互相交互信息的方式.
  'host_environment'宿主环境 ：语言在运行时的环境 
    对于JS,宿主环境最常见的是web浏览器,
    浏览器提供了一个JS运行的环境,
    这个环境里面,需要提供一些接口,
    好让JS引擎能够和宿主环境对接.
    但是环境不是唯一的,也就是JS不仅仅能够在浏览器里面跑,
    也能在其他提供了宿主环境的程序里面跑,最常见的就是nodejs.
    同样作为一个宿主环境,nodejs也有自己的JS引擎--V8.
    Node.js 官方的定义:
    Node.js is a platform built on Chrome’s JS runtime for easily building fast, scalable network applications
  'localhost' ：计算机网络中,localhost 意为'本地主机',指'这台计算机' 
    是给loopback回路网络接口的一个标准主机名;
    相对应的IP地址为'127.0.0.1'「IPv4」和'::1'「IPv6」
◆约定常识 
HSL 色彩模式,工业界的一种颜色标准 
  PS：通过对色相'H',饱和度'S',亮度'L'三个颜色通道的变化及其相互叠加来得到各种颜色,
    这个标准几乎包括了人类视力所能感知的所有颜色,目前运用最广的颜色系统之一 
  'hue',H分量,色调[0-360]        代表的是人眼所能感知的颜色范围
    颜色分布在一个平面的色相环上,取值范围是0°到360°的圆心角,每个角度可以代表一种颜色。
    六大主色作基本参照：360°/0°红、60°黄、120°绿、180°青、240°蓝、300°洋红
    0-119 表示红色,120-239 表示绿色,240-359 表示蓝色 
  'saturation',S分量,饱和度[0-100%] 指的是色彩的饱和度
    它用0%至100%的值描述了相同色相、明度下色彩纯度的变化。
    数值越大,颜色中的灰色越少,颜色越鲜艳,呈现一种从灰度到纯色的变化
  'lightness',L分量,亮度[0-100%]  指的是色彩的明度,作用是控制色彩的明暗变化。
    它同样使用了0%至100%的取值范围。
    数值越小,色彩越暗,越接近于黑色；数值越大,色彩越亮,越接近于白色。
--------------------------------------------------------------------------------
编码 
  ANSI  本地编码「不代表具体的编码」
    比如在简体版windows上它表示GB2312编码,
    在繁体版windows上它表示Big5编码,
    在日文操作系统上它表示JIS编码。
  UTF-8 
URI&URL&URN 资源标识定位 
  'Uniform_Resource_Identifier'URI : 统一资源标识符 
    一个用于标识某一互联网资源名称的字符串
    该种标识允许用户对任何（包括本地和互联网的）资源通过特定的协议进行交互操作
    URI由包括确定语法和相关协议的方案所定义。
    Web上可用的每种资源(HTML文档、图像、视频片段、程序等)由一个通用资源标识符进行定位
  'Uniform_Resource_Locator'URL : 统一资源定位符[也叫网址] 
    PS：从互联网上得到的资源的位置和访问方法的一种简洁的表示,是互联网上标准资源的地址
      互联网上的每个文件都有一个唯一的URL,它包含的信息指出文件的位置以及浏览器应该怎么处理它
      使用ASCII代码的一部分来表示互联网的地址,
      一般统一资源定位符的开始标志着一个计算机网络所使用的网络协议。
      可以由单词组成,或者是因特网协议「IP」地址如:'162.168.1.253';
      用于定位万维网上的文档或其他数据
    'scheme://host.domain:port/path/fileName'  语法规则
      scheme  定义因特网服务的类型
        http   超文本传输协议,以'http://'开头的普通网页,不加密
        https  安全超文本传输协议,安全网页,加密所有信息交换
        ftp    文件传输协议,用于将文件下载或上传至网站
        file   本地计算机上的文件
      host    定义域主机,http的默认主机是www
      domain  定义因特网域名,如W3school.com.cn
      port    定义主机上的端口号,http的默认端口号是80
      path    定义服务器上的路径,若省略,则文档必须位于网站的根目录中
      fileName  定义文档/资源的名称
    网页地址字符编码 : 将字符转换为可通过因特网传输的格式
      URL只能使用ASCII字符集来通过因特网进行发送,
      由于URL常常会包含ASCII集合之外的字符,URL必须转换为有效的ASCII格式
      URL编码使用%其后跟随两位的十六进制数来替换非ASCII字符
      URL不能包含空格,URL编码通常使用'20%'来替换空格
    'file_path'文件路径访问
      /fileName    表示根目录下的文件
      ./filename   表示当前文件夹中的某个文件
      ../filename  表示上一层文件夹中的某个文件
      绝对路径: 提供目标文档的完整主机名称、路径信息及文档全称
      相对路径:
        同级,直接书写目标文档全称: fileName,如 boo.js;
        上一级,书写为:folderName/fileName;
        ../ 表示上一级目录; ./ 表示当前目录; / 表示相对根路径
  'Uniform_Resource_Name'URN : 统一资源名称 
    标识一个实体的标识符
  区别
    URN 与地址无关; URL 和 URN 都是 URI 的子集
socket,套接字 
  源IP地址和目的IP地址以及源端口号和目的端口号的组合称为套接字。
  其用于标识客户端请求的服务器和服务。
  它是网络通信过程中端点的抽象表示,包含进行网络通信必需的五种信息：
  连接使用的协议,本地主机的IP地址,本地进程的协议端口,
  远地主机的IP地址,远地进程的协议端口。
HTTP 协议 
  PS：计算机通过网络进行通信的规则,是一种无状态协议,不建立持久的连接;
    使客户端[浏览器]能够向web服务器请求信息和服务
  Request,HTTP请求 
    一般由四部分组成:
    请求方法,如GET或POST请求
    请求的URL
    请求头,包含一些客户端环境信息,身份验证信息等
    请求体,即请求正文,其中可以包含客户提交的查询字符串信息,表单信息等等.
  Response,HTTP响应 
    一般由三部分组成:
    状态码: 一个数字和文字组成的,用于表示请求的状态(是成功还是失败等)
    响应头: 和请求头类似,包含许多的信息,如服务器类型、日期时间、内容类型和长度等.
    响应体: 响应正文.
  Headers,HTTP头信息
    PS：每个http请求和响应都会带有相应的头部信息
      xhr对象提供了操作头信息「请求头信息和响应头信息」的方法
      有的浏览器允许重写默认头信息,而有的浏览器则不允许.
      头信息中必须使用ASCII码.
    默认情况下,发送xhr请求的同时,还会发送下列头信息
      虽然不同浏览器发送的头部信息会有所不同,以下为共有的信息
      Accept          浏览器能够处理的内容类型
      Accept-Charset  浏览器能够显示的字符集
      Accept-Encoding 浏览器能够处理的压缩编码
      Accept-language 浏览器当前设置的语言
      Connection      浏览器父服务器之间连接的类型
      Cookie          当前页面设置的任何Cookie
      Host            发出请求的页面所在的域
      Referer         发出请求页面的URI
        注意,HTTP规范将这个头部字段拼写错了, 为了保证与规范一致,只能将错就错
       (该英文的正确拼法为referrer)
      User-Agent      浏览器的用户代理字符串
  网址的组成  
    协议 http、https(https为加密的https) 超文本传输协议(收发的信息是文本信息)
    主机/域名/ip地址
      ip地址 32 位2 进制的数字(4 个八位的数字)
      电脑通信靠ip地址,ip地址不好记使用域名
      进入DOS环境 输入 ping 域名来进行查询ip地址.
      e.g. :
        WWW.baidu.com 等网址
        WWW       子域名
        baidu.com 主域名
    端口 端口是一个16位的数字,范围0-65535
      http协议默认为80,因此一般不用填写.
      1024 以下的端口是系统保留端口,需要管理员权限才能使用;
      服务器的服务程序在启动的时候会向系统注册一个端口
    路径 /.../...等
    # hash
      #代表网页中的一个位置.在第一个#后面出现的任何字符,都会被浏览器解读为位置标识符
        Example:
        'http://www.example.com/index.html#print' 就代表网页index.html 的print位置.
        浏览器读取这个URL后,会自动将print位置滚动至可视区域.
        为网页位置指定标识符,有两个方法:
        一是使用锚点,比如<a name="print"></a>
        二是使用id属性,比如<div id="print">
      #是用来指导浏览器动作的,对服务器端完全无用.所以,HTTP请求中不包括#.
        比如,访问下面的网址,'http://www.example.com/index.html#print',
        浏览器实际发出的请求是这样的：
        GET /index.html HTTP/1.1
        Host: www.example.com
      单单改变#后的部分,浏览器只会滚动到相应位置,不会重新加载网页.若无该锚点则也无滚动
      改变#会改变浏览器的访问历史
        每一次改变#后的部分,都会在浏览器的访问历史中增加一个记录,
        使用"后退"按钮,就可以回到上一个位置.
        这对于ajax应用程序特别有用,可以用不同的#值,表示不同的访问状态,
        然后向用户给出可以访问某个状态的链接.
        值得注意的是,上述规则对IE6和IE7不成立,它们不会因为#的改变而增加历史记录.
    ? 查询字符串
      传递参数时用于连接
        & 不同参数的间隔符
        = 参数中名和值的连接
        Example:
        'http://www.xxx.com/Show.asp?id=77&nameid=2905210001&page=1'
      清除缓存
        Example:
        'http://www.xxxxx.com/index.html '
        'http://www.xxxxx.com/index.html?test123123'
        两个url打开的页面一样,但是后面这个有问号,说明不调用缓存的内容,
        而认为是一个新地址,重新读取.
  URL地址字符转换 
    url的可用字符： 0-9,a-z,A-Z ,其他用十六进制表示,并在每个字节前加%
    url编码:encodeURIComponent('字符')
    url解码:decodeURIComponent('字符')
  HTTP状态码 
    PS：由三位数值组成,第一位表示其类别
    '1XX' 表示请求已接收
    '2XX' 成功
    '3XX' 重定向,表示没有成功,客户必须采取进一步的动作
    '4XX' 客户端错误
    '5XX' 服务器端错误
    ◆常用状态码
    200 OK      正常返回信息
    304 Not Modified 自从上次请求后,请求的网页未修改过
    400 Bad Request  请求错误,不符合要求 
      服务器无法理解请求的格式,客户端不应再次使用相同的内容发起请求
    401   请求未授权 
    403 Forbidden    禁止访问
    404 Not Found    找不到匹配的资源
    500 Internal Server Error  最常见的服务器端错误
    503 Service Unavailable    服务器端暂时无法处理请求[可能是过载或维护] 
    其他状态码及说明
      100 Continue     继续,
        一般在发送post请求时,已发送了http header之后服务端将返回此信息,
        表示确认,之后发送具体参数信息
      201 Created   请求成功并且服务器创建了新的资源
      202 Accepted  服务器已接受请求,但尚未处理
      301 Moved Permanently  请求的网页已永久移动到新位置.
      302 Found        临时性重定向.
      303 See Other    临时性重定向,且总是使用 GET 请求新的 URI.
      401 Unauthorized      请求未授权.
  HTTP请求方法 :发送请求的类型
    PS：http 1.0 定义了8种方法,主要使用'GET'和'POST';
    GET  请求
      最常见的请求类型,常用于向服务器查询信息.
      一般用于信息获取.
      使用URL传递参数.(发送的信息可见)
      对发送信息的数量有限制,一般在2000个字符内.
      必要时可将查询字符串参数追加到URL的末尾以便将信息发送给服务器.
      对于xhr而言,位于open方法的URL末尾的查询字符串必须经过正确的编码才行,
      查询字符串中每个参数的名称和值都需使用encodeURIComponent()进行编码,
      名值对必须由&分割.
    POST 请求
      通常用于向服务器发送应该被保存的数据.
      一般用于修改服务器上的资源.
      对发送信息的数量无限制.
      Remarks:
        表单提交时 Content-Type 为 application/x-www-form-urlencoded
    PUT  请求更新服务器端数据
    HEAD 检查一个对象是否存在
    DELETE  请求删除数据
    CONNECT 对通道提供支持
    TRACE   跟踪到服务器的路径
    OPTIONS 查询Web服务器的性能
    GET 和 POST 的区别
      大体上讲,向服务器发送客户端数据有两种方式：查询字符串和请求正文.
      通常,若是使用查询字符串,就发起了一个GET请求；
      若是使用请求正文,就发起了一个POST请求
     (若你反过来做,HTTP协议并不会阻止你,但这是没有必要的：最好在这里坚持标准实践).
      有一种普遍的误解是POST请求是安全的,而GET请求不安全.
      事实上若使用HTTPS协议,两者都是安全的；若不使用,则都不安全.
      若不使用HTTPS协议,入侵者会像查看GET请求的查询字符串一样,轻松查看POST请求的报文数据.
      使用GET请求,用户会在查询字符串中看到所有的输入数据(包括隐藏域),这是丑陋而且凌乱的.
      浏览器会限制查询字符串的长度(对请求正文没有长度限制).
      基于这些原因,一般推荐使用POST进行表单提交.
  HTTP 和 TCP 的区别
    TPC/IP 协议是传输层协议
      主要解决数据如何在网络中传输,是一种“经过三次握手”的可靠的传输方式
    HTTP 协议即超文本传送协议(Hypertext Transfer Protocol ),应用层协议,
      是 Web 联网的基础,也是手机联网常用的协议之一
      HTTP 协议是建立在 TCP 协议之上的一种应用.
  HTTP 传输过程 
    建立TCP连接
      输入地址,然后回车
      Chrome搜索自身的DNS缓存 ,当没有找到或缓存失效时
      Chrome搜索操作系统自身的DNS缓存,若仍没找到,
      Chrome读取本地的HOST文件,若仍没找到,
      Chrome 发起一个DNS的一个系统调用 ,一般向宽带运营商查询DNS,
      宽带运营商服务器查找自身缓存,若未成功,
      运营商服务器发起一个迭代DNS解析的请求 ,逐层向上查询,
      运营商服务器把结果返回操作系统内核,同时缓存起来,
      操作系统内核把结果返回浏览器
      最终,浏览器得到 www.baidu.com 对应的ip地址,
      获取ip地址后,浏览器发起HTTP "三次握手",建立 TCP/IP 连接,
    浏览器就可以向服务器发送HTTP请求了,如get方法发送请求
      Web浏览器向Web服务器发送请求命令
      Web浏览器发送请求头信息
    服务器端接收到请求,根据路径参数,经过后端的处理之后,把结果数据发送给浏览器,如请求页面
      Web服务器发送应答信息
      Web服务器向浏览器发送数据
      Web服务器关闭TCP连接
    浏览器拿到完整的HTML页面代码,解析和渲染该页面,
    同时其中的JS、CSS、图片等静态资源,同样也是一个个HTTP请求都需要经过上面的步骤来获取.
    最终浏览器渲染成功呈现页面.
  HTTP 缓存 
    PS：缓存:存储指定资源的一份拷贝,并在下次请求该资源时提供该拷贝的技术 
    缓存控制 头信息 
      Cache-control 头 [HTTP/1.1] 
        PS：请求头和响应头都支持该属性,提供的不同的值来定义缓存策略; 
          当请求头的Cache-control优先级高于响应头中的;
        'no-store'  完全不支持缓存,每次由客户端发起的请求都会下载完整的响应内容 
        'no-cache'  不缓存内容,在释放缓存内容前向服务端源地址发送请求以验证缓存是否有效 
        'private'   私有缓存,响应的内容只能被唯一的用户缓存 
        'public'    公共缓存,响应可以被任何请求来源缓存 
        max-age=num  判断缓存是否过期,num为距离请求发起的时间的秒数 
        must-revalidate 缓存验证,在使用一些老的资源前强制验证状态判断其是否过期
      Expires 头 [HTTP/1.0]
        PS： Cache-Control的max-age值表示缓存文件的有效时间的秒数,
          时间根据系统的时间来进行判断;
          Expire的值是一个绝对时间点,表示缓存文件在某个时间点之前有效。
          Cache-Control优先级高于Expires;
      Pragma 头 [HTTP/1.0]
        PS：响应头不支持该属性,通常定义Pragma以向后兼容基于HTTP/1.0 的客户端 
        no-cache  通知客户端不要对该资源进行缓存 
      Last-Modified/If-Modified-Since 头  
        需配合Cache-Control使用,
        缓存过期后,请求头发出 If-Modified-Since 来判断是否更新缓存, 
        和上次请求响应头中的 Last-Modified 进行对比,
        如果相同,则响应HTTP304,从缓存读数据；
        如果不相同文件更新了,HTTP200,返回数据,
        同时通过响应头更新last-Modified的值,以备下次对比 
      Etag 根据文件的MD5值来判断是否读缓存,需服务器支持 
        在响应头中返回Etag,下次请求头中会默认发送 If-None-Match 值为上次响应头中的值
        服务器通过判断文件的MD5和请求头中的If-None-Match来执行响应,
        相同则返回304;否则响应新的内容,响应头中附带新的Etag
    无法被浏览器缓存的请求 
      浏览器发出的第一个请求的资源默认是不被缓存的; 
      HTTP信息头中包含Cache-Control:no-cache,
      pragma:no-cache,
      或Cache-Control:max-age=0 等告诉浏览器不用缓存的请求
      需要根据Cookie,认证信息等决定输入内容的动态请求是不能被缓存的
      POST请求无法被缓存
      HTTP响应头中不包含Last-Modified/Etag,也不包含Cache-Control/Expires的请求无法被缓存
    不使用缓存的方法 
      使用查询字符串来避免缓存,缓存以URL为依据 [古老的方法] 
--------------------------------------------------------------------------------
数据结构 
  数据结构就是存储数据的方式
  队列
  栈
  链表
    将零散的东西连起来,从而进行有序的操作.
    e.g.
      // 定义零散的东西
      var Node =function(e){
        this.element =e;
        this.next =null
      }
      var n1 =new Node(1);
      var n2 =new Node(2);
      var n3 =new Node(3);
      // 建立关系,连起来
      n1.next = n2;
      n2.next = n3;
      // 将零散东西输出
      var n = n1;
      while(n != null){
        console.log('遍历链表',n.element);
        n = n.next;
      }
  哈希表
    哈希表就是用 字符串 当下标,也就是 JS 中的对象的实现方式
    也是其他语言中的 字典
  树
  集合
  图
    如 点 线 互联 求路线
算法 
  复杂度 :对一个操作复杂程度的大致估计 
    五种常见时间复杂度 : 消耗的时间
    O(1)     常数复杂度,比如读取数组中的某一个元素
    O(logN)  比如二分搜索,常用于有序列表的查找
    O(N)     比如数组的遍历
    O(NlogN) 两个有序列表求交集,使用二分搜索
    O(N^2)   两个列表求交集
    空间复杂度 : 占用的内存
    O(1)     在数组中返回某一个元素
    O(N)     复制一个数组并返回
  15 个经典基础算法 
    Hash
    快速排序
    快递选择SELECT
    BFS/DFS （广度/深度优先遍历）
    红黑树 （一种自平衡的二叉查找树）
    KMP 字符串匹配算法
    DP (动态规划 dynamic programming)
    A*寻路算法： 求解最短路径
    Dijkstra：最短路径算法 
    遗传算法
    启发式搜索
    图像特征提取之SIFT算法
    傅立叶变换
    SPFA(shortest path faster algorithm) 单元最短路径算法
  算法设计思想 
    迭代法
    穷举搜索法
    递推法
    动态规划
    贪心算法
    回溯
    分治算法
二叉树 
