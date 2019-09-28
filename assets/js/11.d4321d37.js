(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{309:function(s,a,t){s.exports=t.p+"assets/img/1563708062724.cd4f16b2.png"},344:function(s,a,t){"use strict";t.r(a);var r=[function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("div",{staticClass:"content"},[r("h2",{attrs:{id:"概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),r("p",[s._v("MySQL调优是一个非常棘手的问题，多数情况都是因为对数据库出现问题的情况和处理思路不清晰。在进行MySQL的优化之前必须要了解的就是MySQL的查询过程，很多的查询优化工作实际上就是遵循一些原则让MySQL的优化器能够按照预想的合理方式运行而已。")]),s._v(" "),r("p",[r("img",{attrs:{src:t(309),alt:"MySQL查询过程"}})]),s._v(" "),r("h2",{attrs:{id:"优化的哲学"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化的哲学","aria-hidden":"true"}},[s._v("#")]),s._v(" 优化的哲学")]),s._v(" "),r("p",[s._v("优化有风险，涉足需谨慎！")]),s._v(" "),r("h3",{attrs:{id:"优化可能带来的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化可能带来的问题","aria-hidden":"true"}},[s._v("#")]),s._v(" 优化可能带来的问题")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("优化不总是对一个单纯的环境进行，还很可能是一个复杂的已投产的系统。")])]),s._v(" "),r("li",[r("p",[s._v("优化手段本来就有很大的风险，只不过你没能力意识到和预见到！")])]),s._v(" "),r("li",[r("p",[s._v("任何的技术可以解决一个问题，但必然存在带来一个问题的风险！")])]),s._v(" "),r("li",[r("p",[s._v("对于优化来说解决问题而带来的问题,控制在可接受的范围内才是有成果。")])]),s._v(" "),r("li",[r("p",[s._v("保持现状或出现更差的情况都是失败！")])])]),s._v(" "),r("h3",{attrs:{id:"优化的需求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化的需求","aria-hidden":"true"}},[s._v("#")]),s._v(" 优化的需求")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("稳定性和业务可持续性,通常比性能更重要！")])]),s._v(" "),r("li",[r("p",[s._v("优化不可避免涉及到变更，变更就有风险！")])]),s._v(" "),r("li",[r("p",[s._v("优化使性能变好，维持和变差是等概率事件！")])]),s._v(" "),r("li",[r("p",[s._v("切记优化,应该是各部门协同，共同参与的工作，任何单一部门都不能对数据库进行优化！")])]),s._v(" "),r("li",[r("p",[s._v("所以优化工作,是由业务需要驱使的！！！")])])]),s._v(" "),r("h3",{attrs:{id:"优化由谁参与"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化由谁参与","aria-hidden":"true"}},[s._v("#")]),s._v(" 优化由谁参与")]),s._v(" "),r("p",[s._v("在进行数据库优化时，应由数据库管理员、业务部门代表、应用程序架构师、应用程序设计人员、应用程序开发人员、硬件及系统管理员、存储管理员等，业务相关人员共同参与")]),s._v(" "),r("h2",{attrs:{id:"优化思路"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化思路","aria-hidden":"true"}},[s._v("#")]),s._v(" 优化思路")]),s._v(" "),r("h3",{attrs:{id:"优化什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化什么","aria-hidden":"true"}},[s._v("#")]),s._v(" 优化什么")]),s._v(" "),r("p",[s._v("在数据库优化上有两个主要方面：即安全与性能。")]),s._v(" "),r("ul",[r("li",[s._v("安全 ---\x3e 数据可持续性")]),s._v(" "),r("li",[s._v("性能 ---\x3e 数据的高性能访问")])]),s._v(" "),r("h3",{attrs:{id:"优化的范围有哪些"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化的范围有哪些","aria-hidden":"true"}},[s._v("#")]),s._v(" 优化的范围有哪些")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("存储、主机和操作系统方面:")]),s._v(" "),r("ul",[r("li",[s._v("主机架构稳定性2、I/O规划及配置")]),s._v(" "),r("li",[s._v("Swap交换分区")]),s._v(" "),r("li",[s._v("OS内核参数和网络问题")])])]),s._v(" "),r("li",[r("p",[s._v("应用程序方面:")]),s._v(" "),r("ul",[r("li",[s._v("应用程序稳定性")]),s._v(" "),r("li",[s._v("SQL语句性能")]),s._v(" "),r("li",[s._v("串行访问资源")]),s._v(" "),r("li",[s._v("性能欠佳会话管理")]),s._v(" "),r("li",[s._v("这个应用适不适合用MySQL")])])]),s._v(" "),r("li",[r("p",[s._v("数据库优化方面:")]),s._v(" "),r("ul",[r("li",[s._v("内存")]),s._v(" "),r("li",[s._v("数据库结构(物理&逻辑)")]),s._v(" "),r("li",[s._v("实例配置")])])])]),s._v(" "),r("p",[s._v("说明：不管是在，设计系统，定位问题还是优化，都可以按照这个顺序执行。")]),s._v(" "),r("h3",{attrs:{id:"优化维度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化维度","aria-hidden":"true"}},[s._v("#")]),s._v(" 优化维度")]),s._v(" "),r("p",[s._v("数据库优化维度有四个：")]),s._v(" "),r("p",[s._v("硬件、系统配置、数据库表结构、SQL及索引。")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("优化选择：")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("优化成本: 硬件>系统配置>数据库表结构>SQL及索引")])]),s._v(" "),r("li",[r("p",[s._v("优化效果: 硬件<系统配置<数据库表结构<SQL及索引")])])])])]),s._v(" "),r("h2",{attrs:{id:"优化工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化工具","aria-hidden":"true"}},[s._v("#")]),s._v(" 优化工具")]),s._v(" "),r("h3",{attrs:{id:"数据库层面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据库层面","aria-hidden":"true"}},[s._v("#")]),s._v(" 数据库层面")]),s._v(" "),r("h4",{attrs:{id:"检查问题常用工具："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#检查问题常用工具：","aria-hidden":"true"}},[s._v("#")]),s._v(" 检查问题常用工具：")]),s._v(" "),r("div",{staticClass:"language-sql extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sql"}},[r("code",[s._v("mysql\n\nmsyqladmin                        mysql客户端，可进行管理操作\n\nmysqlshow                         功能强大的查看shell命令\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SESSION")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GLOBAL")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" variables         查看数据库参数信息\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SESSION")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GLOBAL")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("STATUS")]),s._v("           查看数据库的状态信息\n\ninformation_schema                   获取元数据的方法\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INNODB")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("STATUS")]),s._v("               "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Innodb")]),s._v("引擎的所有状态\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" PROCESSLIST                     查看当前所有连接"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("session")]),s._v("状态\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("explain")]),s._v("                           获取查询语句的执行计划\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" \t\t\t\t\t\t\t\t\t  查看表的索引信息\n\nslow"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("log \t\t\t\t\t\t\t\t\t  记录慢查询语句\n\nmysqldumpslow                       分析slowlog文件的\n")])])]),r("h4",{attrs:{id:"不常用但好用的工具："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不常用但好用的工具：","aria-hidden":"true"}},[s._v("#")]),s._v(" 不常用但好用的工具：")]),s._v(" "),r("div",{staticClass:"language-mipsasm extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("zabbix                  监控主机、系统、数据库（部署zabbix监控平台）\n\npt-query-digest         分析慢日志\n\nmysqlslap               分析慢日志\n\nsysbench                压力测试工具\n\nmysql profiling         统计数据库整体状态工具\n\nPerformance Schema mysql   性能状态统计的数据\n\nworkbench               管理、备份、监控、分析、优化工具（比较费资源）\n")])])]),r("h4",{attrs:{id:"数据库层面问题解决思路"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据库层面问题解决思路","aria-hidden":"true"}},[s._v("#")]),s._v(" 数据库层面问题解决思路")]),s._v(" "),r("p",[r("strong",[s._v("一般应急调优的思路：")])]),s._v(" "),r("p",[s._v("针对突然的业务办理卡顿，无法进行正常的业务处理！需要立马解决的场景！")]),s._v(" "),r("div",{staticClass:"language-sql extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sql"}},[r("code",[r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" processlist\n\n"),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("explain")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("name "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" stu "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'clsn'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ALL id name age sex")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("name "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" stu "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 函数 结果集"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、通过执行计划判断，索引问题（有没有、合不合理）或者语句本身问题\n\n"),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("、"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%lock%'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询锁状态")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("kill")]),s._v(" SESSION_ID"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 杀掉有问题的session")]),s._v("\n")])])]),r("p",[r("strong",[s._v("常规调优思路：")])]),s._v(" "),r("p",[s._v("针对业务周期性的卡顿，例如在每天10-11点业务特别慢，但是还能够使用，过了这段时间就好了。")]),s._v(" "),r("p",[s._v("1、查看slowlog，分析slowlog，分析出查询慢的语句。\n2、按照一定优先级，进行一个一个的排查所有慢语句。\n3、分析top sql，进行explain调试，查看语句执行时间。\n4、调整索引或语句本身。")]),s._v(" "),r("h3",{attrs:{id:"系统层面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#系统层面","aria-hidden":"true"}},[s._v("#")]),s._v(" 系统层面")]),s._v(" "),r("ul",[r("li",[s._v("cpu方面：")])]),s._v(" "),r("p",[s._v("vmstat、sar top、htop、nmon、mpstat")]),s._v(" "),r("ul",[r("li",[s._v("内存：")])]),s._v(" "),r("p",[s._v("free 、ps -aux 、")]),s._v(" "),r("ul",[r("li",[s._v("IO设备（磁盘、网络）：")])]),s._v(" "),r("p",[s._v("iostat 、 ss 、 netstat 、 iptraf、iftop、lsof、")]),s._v(" "),r("p",[s._v("vmstat 命令说明：")]),s._v(" "),r("p",[s._v("Procs：r显示有多少进程正在等待CPU时间。b显示处于不可中断的休眠的进程数量。在等待I/OMemory：swpd显示被交换到磁盘的数据块的数量。未被使用的数据块，用户缓冲数据块，用于操作系统的数据块的数量Swap：操作系统每秒从磁盘上交换到内存和从内存交换到磁盘的数据块的数量。s1和s0最好是0Io：每秒从设备中读入b1的写入到设备b0的数据块的数量。反映了磁盘I/OSystem：显示了每秒发生中断的数量(in)和上下文交换(cs)的数量Cpu：显示用于运行用户代码，系统代码，空闲，等待I/O的CPU时间")]),s._v(" "),r("p",[s._v("iostat命令说明")]),s._v(" "),r("p",[s._v("实例命令：iostat -dk 1 5")]),s._v(" "),r("p",[s._v("iostat -d -k -x 5 （查看设备使用率（%util）和响应时间（await））")]),s._v(" "),r("p",[s._v("1、tps：该设备每秒的传输次数。“一次传输”意思是“一次I/O请求”。多个逻辑请求可能会被合并为“一次I/O请求”。")]),s._v(" "),r("p",[s._v('2、iops ：硬件出厂的时候，厂家定义的一个每秒最大的IO次数,"一次传输"请求的大小是未知的。')]),s._v(" "),r("p",[s._v("3、kBread/s：每秒从设备（drive expressed）读取的数据量；")]),s._v(" "),r("p",[s._v("4、KBwrtn/s：每秒向设备（drive expressed）写入的数据量；")]),s._v(" "),r("p",[s._v("5、kBread：读取的总数据量；7、kBwrtn：写入的总数量数据量；这些单位都为Kilobytes。")]),s._v(" "),r("h4",{attrs:{id:"系统层面问题解决办法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#系统层面问题解决办法","aria-hidden":"true"}},[s._v("#")]),s._v(" 系统层面问题解决办法")]),s._v(" "),r("p",[s._v("在实际的生产中，一般认为 cpu只要不超过90%都没什么问题 。")]),s._v(" "),r("p",[s._v("当然不排除下面这些特殊情况：")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("问题一：cpu负载高，IO负载低")]),s._v(" "),r("p",[s._v("1、内存不够\n2、磁盘性能差\n3、SQL问题 ------\x3e去数据库层，进一步排查sql问题\n4、IO出问题了（磁盘到临界了、raid设计不好、raid降级、锁、在单位时间内tps过高）\n5、tps过高: 大量的小数据IO、大量的全表扫描")])]),s._v(" "),r("li",[r("p",[s._v("问题二：IO负载高，cpu负载低")]),s._v(" "),r("p",[s._v("1、大量小的IO 写操作：2、autocommit ，产生大量小IO\n3、IO/PS,磁盘的一个定值，硬件出厂的时候，厂家定义的一个每秒最大的IO次数。\n4、大量大的IO 写操作\n5、SQL问题的几率比较大")])]),s._v(" "),r("li",[r("p",[s._v("问题三：IO和cpu负载都很高")]),s._v(" "),r("p",[s._v("硬件不够了或sql存在问题")]),s._v(" "),r("h2",{attrs:{id:"基础优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基础优化","aria-hidden":"true"}},[s._v("#")]),s._v(" 基础优化")]),s._v(" "),r("h3",{attrs:{id:"优化思路-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化思路-2","aria-hidden":"true"}},[s._v("#")]),s._v(" 优化思路")])]),s._v(" "),r("li",[r("p",[s._v("定位问题点:")]),s._v(" "),r("p",[s._v("硬件 --\x3e 系统 --\x3e 应用 --\x3e 数据库 --\x3e 架构（高可用、读写分离、分库分表）")])]),s._v(" "),r("li",[r("p",[s._v("处理方向：")]),s._v(" "),r("p",[s._v("明确优化目标、性能和安全的折中、防患未然")]),s._v(" "),r("h3",{attrs:{id:"硬件优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#硬件优化","aria-hidden":"true"}},[s._v("#")]),s._v(" 硬件优化")])]),s._v(" "),r("li",[r("p",[s._v("主机方面：")]),s._v(" "),r("p",[s._v("1、根据数据库类型，主机CPU选择、内存容量选择、磁盘选择\n2、平衡内存和磁盘资源\n3、随机的I/O和顺序的I/O\n4、主机 RAID卡的BBU(Battery Backup Unit)关闭")])]),s._v(" "),r("li",[r("p",[s._v("cpu的选择：")]),s._v(" "),r("p",[s._v("1、cpu的两个关键因素：核数、主频\n2、根据不同的业务类型进行选择：3、cpu密集型：计算比较多，OLTP 主频很高的cpu、核数还要多\n4、IO密集型：查询比较，OLAP 核数要多，主频不一定高的")])]),s._v(" "),r("li",[r("p",[s._v("内存的选择：")]),s._v(" "),r("p",[s._v("1、OLAP类型数据库，需要更多内存，和数据获取量级有关。2、OLTP类型数据一般内存是cpu核心数量的2倍到4倍，没有最佳实践。")])]),s._v(" "),r("li",[r("p",[s._v("存储方面：")]),s._v(" "),r("p",[s._v("1、根据存储数据种类的不同，选择不同的存储设备\n2、配置合理的RAID级别(raid5、raid10、热备盘)\n3、对与操作系统来讲，不需要太特殊的选择，最好做好冗余（raid1）（ssd、sas 、sata）")])]),s._v(" "),r("li",[r("p",[s._v("raid卡：主机raid卡选择：")]),s._v(" "),r("p",[s._v("1、实现操作系统磁盘的冗余（raid1）\n2、平衡内存和磁盘资源\n3、随机的I/O和顺序的I/O\n4、主机 RAID卡的BBU(Battery Backup Unit)要关闭。")])]),s._v(" "),r("li",[r("p",[s._v("网络设备方面：")]),s._v(" "),r("p",[s._v("使用流量支持更高的网络设备（交换机、路由器、网线、网卡、HBA卡）")])])]),s._v(" "),r("p",[s._v("注意：以上这些规划应该在初始设计系统时就应该考虑好。")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("服务器硬件优化")]),s._v(" "),r("p",[s._v("1、物理状态灯：")]),s._v(" "),r("p",[s._v("2、自带管理设备：远程控制卡（FENCE设备：ipmi ilo idarc），开关机、硬件监控。")]),s._v(" "),r("p",[s._v("3、第三方的监控软件、设备（snmp、agent）对物理设施进行监控")]),s._v(" "),r("p",[s._v("4、存储设备：自带的监控平台。EMC2（hp收购了）， 日立（hds），IBM低端OEM hds，高端存储是自己技术，华为存储")]),s._v(" "),r("h3",{attrs:{id:"系统优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#系统优化","aria-hidden":"true"}},[s._v("#")]),s._v(" 系统优化")])]),s._v(" "),r("li",[r("p",[s._v("Cpu：")]),s._v(" "),r("p",[s._v("基本不需要调整，在硬件选择方面下功夫即可。")])]),s._v(" "),r("li",[r("p",[s._v("内存：")]),s._v(" "),r("p",[s._v("基本不需要调整，在硬件选择方面下功夫即可。")])]),s._v(" "),r("li",[r("p",[s._v("SWAP：")]),s._v(" "),r("p",[s._v("MySQL尽量避免使用swap。阿里云的服务器中默认swap为0")])]),s._v(" "),r("li",[r("p",[s._v("IO ：")])]),s._v(" "),r("li",[r("p",[s._v("raid、no lvm、 ext4或xfs、ssd、IO调度策略")])]),s._v(" "),r("li",[r("p",[s._v("Swap调整(不使用swap分区)")])])]),s._v(" "),r("div",{staticClass:"language-groovy extra-class"},[r("pre",{pre:!0,attrs:{class:"language-groovy"}},[r("code",[r("span",{pre:!0,attrs:{class:"token string regex"}},[s._v("/proc/")]),s._v("sys"),r("span",{pre:!0,attrs:{class:"token string regex"}},[s._v("/vm/")]),s._v("swappiness的内容改成"),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("（临时）\n\n"),r("span",{pre:!0,attrs:{class:"token string regex"}},[s._v("/etc/")]),s._v("sysctl"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("conf上添加vm"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("swappiness"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("（永久）\n")])])]),r("p",[s._v("这个参数决定了Linux是倾向于使用swap，还是倾向于释放文件系统cache。在内存紧张的情况下，数值越低越倾向于释放文件系统cache。当然，这个参数只能减少使用swap的概率，并不能避免Linux使用swap。修改MySQL的配置参数innodbflushmethod，开启O_DIRECT模式。这种情况下，InnoDB的buffer pool会直接绕过文件系统cache来访问磁盘，但是redo log依旧会使用文件系统cache。值得注意的是，Redo log是覆写模式的，即使使用了文件系统的cache，也不会占用太多。")]),s._v(" "),r("ul",[r("li",[s._v("IO调度策略：")])]),s._v(" "),r("div",{staticClass:"language-stata extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("vi /boot/grub/grub.conf\n")])])]),r("p",[s._v("更改到如下内容:")]),s._v(" "),r("div",{staticClass:"language-javascript extra-class"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[s._v("kernel "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("boot"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("vmlinuz"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.6")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v(".18")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.")]),s._v("el5 ro root"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LABEL")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" elevator"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("deadline rhgb quiet\n")])])]),r("ul",[r("li",[s._v("系统参数调整\n"),r("ul",[r("li",[s._v("Linux系统内核参数优化：")])])])]),s._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("vim /etc/sysctl.conf\n\nnet.ipv4.ip_local_port_range = 1024 65535\n \n# 用户端口范围\n# 系统最大文件句柄，控制的是能打开文件最大数量\nnet.ipv4.tcp_max_syn_backlog = 4096\nnet.ipv4.tcp_fin_timeout = 30\nfs.file-max=65535\n")])])]),r("p",[s._v("用户限制参数（mysql可以不设置以下配置）：")]),s._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("vim    /etc/security/limits.conf \n* soft nproc 65535\n* hard nproc 65535\n* soft nofile 65535\n* hard nofile 65535\n")])])]),r("h3",{attrs:{id:"应用优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#应用优化","aria-hidden":"true"}},[s._v("#")]),s._v(" 应用优化")]),s._v(" "),r("p",[s._v("业务应用和数据库应用独立,防火墙：iptables、selinux等其他无用服务(关闭)等")]),s._v(" "),r("h3",{attrs:{id:"数据库优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据库优化","aria-hidden":"true"}},[s._v("#")]),s._v(" 数据库优化")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("SQL优化方向：")]),s._v(" "),r("p",[s._v("执行计划、索引、SQL改写")])]),s._v(" "),r("li",[r("p",[s._v("架构优化方向：")]),s._v(" "),r("p",[s._v("高可用架构、高性能架构、分库分表")])]),s._v(" "),r("li",[r("p",[s._v("数据库参数优化")])]),s._v(" "),r("li",[r("p",[s._v("实例整体（高级优化，扩展）")])])]),s._v(" "),r("div",{staticClass:"language-stylus extra-class"},[r("pre",{pre:!0,attrs:{class:"language-stylus"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property-declaration"}},[r("span",{pre:!0,attrs:{class:"token property"}},[s._v("thread_concurrency")]),s._v("       # 并发线程数量个数")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token property-declaration"}},[r("span",{pre:!0,attrs:{class:"token property"}},[s._v("sort_buffer_size")]),s._v("         # 排序缓存")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token property-declaration"}},[r("span",{pre:!0,attrs:{class:"token property"}},[s._v("read_buffer_size")]),s._v("         # 顺序读取缓存")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token property-declaration"}},[r("span",{pre:!0,attrs:{class:"token property"}},[s._v("read_rnd_buffer_size")]),s._v("     # 随机读取缓存")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token property-declaration"}},[r("span",{pre:!0,attrs:{class:"token property"}},[s._v("key_buffer_size")]),s._v("          # 索引缓存")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token property-declaration"}},[r("span",{pre:!0,attrs:{class:"token property"}},[s._v("thread_cache_size")]),s._v("        # "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("G—"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("G—"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("G—"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("G—"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v("\n")])])]),r("ul",[r("li",[s._v("连接层（基础优化）")])]),s._v(" "),r("p",[s._v("设置合理的连接客户和连接方式")]),s._v(" "),r("div",{staticClass:"language-stylus extra-class"},[r("pre",{pre:!0,attrs:{class:"language-stylus"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property-declaration"}},[r("span",{pre:!0,attrs:{class:"token property"}},[s._v("max_connections")]),s._v("           # 最大连接数，看交易笔数设置")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token property-declaration"}},[r("span",{pre:!0,attrs:{class:"token property"}},[s._v("max_connect_errors")]),s._v("        # 最大错误连接数，能大则大")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token property-declaration"}},[r("span",{pre:!0,attrs:{class:"token property"}},[s._v("connect_timeout")]),s._v("           # 连接超时")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token property-declaration"}},[r("span",{pre:!0,attrs:{class:"token property"}},[s._v("max_user_connections")]),s._v("      # 最大用户连接数")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token property-declaration"}},[r("span",{pre:!0,attrs:{class:"token property"}},[s._v("skip-name-resolve")]),s._v("         # 跳过域名解析")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token property-declaration"}},[r("span",{pre:!0,attrs:{class:"token property"}},[s._v("wait_timeout")]),s._v("              # 等待超时")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token property-declaration"}},[r("span",{pre:!0,attrs:{class:"token property"}},[s._v("back_log")]),s._v("                  # 可以在堆栈中的连接数量")]),s._v("\n\n")])])]),r("ul",[r("li",[s._v("SQL层（基础优化）")])]),s._v(" "),r("p",[s._v("querycachesize：查询缓存--\x3e>>OLAP类型数据库,需要重点加大此内存缓存.")]),s._v(" "),r("p",[s._v("1、但是一般不会超过GB.")]),s._v(" "),r("p",[s._v("2、对于经常被修改的数据，缓存会立马失效。")]),s._v(" "),r("p",[s._v("3、我们可以实用内存数据库（redis、memecache），替代他的功能。")]),s._v(" "),r("ul",[r("li",[s._v("存储引擎层（innodb基础优化参数）")])]),s._v(" "),r("div",{staticClass:"language-javascript extra-class"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[s._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("storage"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("engine\n\ninnodb_buffer_pool_size # 没有固定大小，"),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("测试值，看看情况再微调。但是尽量设置不要超过物理内存"),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("70")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("\ninnodb_file_per_table"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ninnodb_flush_log_at_trx_commit"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" # "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("是最安全的，"),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("是性能最高，"),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("折中\nbinlog_sync\nInnodb_flush_method"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),r("span",{pre:!0,attrs:{class:"token constant"}},[s._v("O_DIRECT")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" fdatasync"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ninnodb_log_buffer_size # "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("M以下\ninnodb_log_file_size          # "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("M 以下\ninnodb_log_files_in_group     # "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("个成员以下"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("一般"),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("个够用（iblogfile0"),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),r("span",{pre:!0,attrs:{class:"token constant"}},[s._v("N")]),s._v("）\ninnodb_max_dirty_pages_pct   # 达到百分之"),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("75")]),s._v("的时候刷写 内存脏页到磁盘。\nlog_bin max_binlog_cache_size # 可以不设置\nmax_binlog_size               # 可以不设置\nnnodb_additional_mem_pool_size    #小于"),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("G内存的机器，推荐值是"),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("M。"),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("G内存以上"),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("M\n")])])])])}],e=t(1),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},r,!1,null,null,null);a.default=n.exports}}]);