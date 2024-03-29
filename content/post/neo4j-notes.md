---
title: 图数据库Neo4j学习笔记
date: 2019-10-10
categories:
    - Notes
tags:
    - neo4j
    - database
---

## 背景

在众多不同的数据模型里，关系数据模型自20世纪80年代起就处于统治地位。它建立在严格的数学基础上, 具有较高的数据独立性和安全性, 使用简单，同时也是目前应用最为广泛的数据技术。然而，使用范围不断扩大的关系数据库，随着大数据时代的到来，也逐渐暴露出了一些它无法解决的问题，主要是数据建模中的一些缺陷，及其在大数据量和多服务器之上进行水平扩展的限制。同时，互联网的高速发展也催生了一些新的趋势变化：如用户、系统和传感器产生的数据量呈指数级增长，因大部分数据量集中在Amazon、Google和其他云服务的分布式系统上，其增长速度进一步加快；又如，数据内部依赖和复杂度急剧增加，这一问题因Web2.0、社交网络，以及对大量不同系统的数据源开放和标准化的访问而愈加明显。 

在应对这些趋势时，关系数据库产生了很多的不适应性，从而导致大量新技术的出现，以解决关系数据库无法高效处理的问题。这些技术往往针对问题中的某些特定方面，它们可以与现有RDBMS相互配合、或代替它们——亦被称为混合持久化。基于此，在过去几年间，大量的新项目或新产品出现，它们被统称为`NoSQL`（Not only SQL，不限于SQL）数据库。 

`NoSQL`数据库是一类涵盖范围非常广泛的持久化解决方案，它们不遵循关系数据库模型，也不使用SQL作为查询语言。它们的数据存储可以不需要固定的表格模式，经常避免使用SQL的JOIN操作，一般具有水平可扩展的特征。 

按照数据模型的不同，NoSQL数据库可分成4类，分别是键-值存储库、列存储数据库、文档数据库和图数据库。从最近十年的发展趋势来看，图数据库已经成为关注度最高、最有发展和应用潜力的数据库类型。

如下图所示，[DB-Engines](db-engines.com)对近六年来所有数据模型的数据库进行了发展趋势的分析，结果如下图所示：

![](https://image-bed-1253366698.cos.ap-guangzhou.myqcloud.com/post/neo4j/1.jpg)

可以明显的看出，**图数据库正获得越来越多的关注**。

## 简介

Neo4j是一个高性能、高可靠性、可扩展、支持ACID事务的图数据库，**它基本由Java语言实现**，支持数据平台的平滑扩展和过渡，同时能够在多种系统上完成部署。它使用Cypher查询语言对数据进行增删查改。**相对于关系数据模型而言，Neo4j重点解决了拥有大量连接的传统RDBMS在查询时出现的性能衰退问题。**

### 数据模型

![](https://image-bed-1253366698.cos.ap-guangzhou.myqcloud.com/post/neo4j/2.jpg)

Neo4j采用**属性图模型**对数据进行建模，能够以相同的速度遍历结点与边，其遍历速度与构成图形的数据量没有任何关系。属性图模型中包含四种构造元素：

+ 节点，即顶点，主要的数据元素
+ 关系，即边，具有方向和类型
+ 节点和关系上的属性，存储为键值对的形式
+ 标签，用于描述节点在图表中的角色，以及将节点分组

### 应用场景

图数据库主要有以下典型应用场景：

+ 欺诈检测和分析

传统的防欺诈措施侧重于离散数据点，如特定帐户，个人，设备或IP地址。然而，今天复杂的欺诈者通过形成由被盗和合成身份组成的欺诈环来逃避侦查。要发现此类欺诈响应，必须超越单个数据点以查找链接它们的连接。Neo4j可以揭示了难以检测的模式，因此很多企业组织使用Neo4j来增强其现有的欺诈检测功能，以实时打击各种金融犯罪，包括第一方银行欺诈，信用卡欺诈，电子商务欺诈，保险欺诈和洗钱。

+ 知识图谱

无论是利用已宣布的社交关系还是根据活动推断关系，Neo4j在创建社交网络或将当前社交图谱集成到企业应用程序中时都提供了新的可能性。社交媒体网络已经是图形，因此没有必要将图形转换为表格然后再转换回来。使用Neo4j可以减少花费数据建模的时间，从而提高社交网络应用程序的开发质量和速度。

+ 推荐引擎和产品推荐系统

实时推荐引擎是任何在线业务成功的关键。要实时提出相关建议，需要能够关联产品，客户，库存，供应商，物流甚至社会情绪数据。此外，实时推荐引擎需要能够即时捕获客户当前访问中显示的任何新兴趣 - 批处理无法完成的任务。匹配历史和会话数据对于像Neo4j这样的图形数据库来说是微不足道的。实现实时建议的关键技术是图形数据库，这种技术很快就会使传统的关系数据库落后。图形数据库轻松胜过关系型和其他NoSQL数据存储，用于连接大量买方和产品数据（以及一般的连接数据），以深入了解客户需求和产品趋势。

+ 社交媒体和社交网络图

管理组织不断增长的数字资产库需要高度上下文的搜索解决方案。使用Neo4j可以使用知识图谱（即基于图形的搜索功能）来增强企业搜索功能，从而仅提供相关结果。例如，可以使用与关键字相关的其他结果来扩充简单的关键字搜索，而无需在搜索中明确请求。基于Neo4j的知识图谱搜索被公司用于提高产品，服务，内容和知识目录的搜索能力。

### 开源协议

Neo4j分为社区版和企业版，企业版拥有更多的功能，而**社区版使用GPLv3 license，代码托管在GitHub**。

Neo4j社区版使用GPL v3许可证，意味着用户基于Neo4j数据库社区版构建的应用程序，若仅在机构内部运行，那么不管是否闭源，都可以免费使用。

Neo4j企业版有四种许可证，分别为：

（1）商业许可证（付费）：Neo4j商业许可证面向需要基于Neo4j数据库开发闭源软件应用程序的用户，此类用户需遵循认购协议。协议除提供Neo4j企业版的使用权之外，还提供世界级支持和Neo4j公司的商业支持。

（2）开发者许可证（免费）：在免费注册后，Neo4j可提供一个针对企业版的免费开发者许可证，允许用户在本地使用Neo4j企业版进行免费开发。在使用过程中，它也会连接到用户的生产服务器，同时也包括图形算法的安装程序，以及一些其他组件的安装，如Apoc或Java升级。

（3）试用版许可证（免费）：用户可选择试用许可证，在商业试用期内体验整套的Neo4j企业版功能。试用版除软件外，也提供专家支持。

（4）教育许可证（免费）：Neo4j社区版已经能够满足学生和教育工作者的大部分需求，如遇特殊情况需要Neo4j企业版的全套扩展和操作功能，可选择教学许可证版本。

### 工具和插件

#### 可视化工具

Neo4j Browser提供图形化界面来与图数据库进行交互。用户可以通过它执行cypher语句并得到图形化的查询结果。在Neo4j Browser中，可以看到当前数据库中的节点数目和关系数目、节点和关系的种类、属性键名、存储空间占用情况等。此外，它还提供了一些新手教程、样例数据等。

![](https://image-bed-1253366698.cos.ap-guangzhou.myqcloud.com/post/neo4j/3.jpeg)

#### 数据迁移工具

Neo4j ETL Tool可以将关系型数据库中的数据迁移到图数据库中。它通过JDBC连接关系型数据库，然后通过图形化界面来调整参数，最终将表结构的数据转换为图数据库中的节点、关系和属性。

![](https://image-bed-1253366698.cos.ap-guangzhou.myqcloud.com/post/neo4j/4.jpg)

#### 数据导入工具

Neo4j提供了一个命令行批量数据导入工具import-tool，支持百亿级数据，导入效率极高，但此工具只适用于将全量数据加载到空数据库中。

该工具对数据的要求较高，它需要CSV格式的节点数据文件和关系数据文件，且每个节点必须具有唯一标识符，即节点标识符。工具先创建所有的节点，然后通过节点标识符快速找到起点节点和终点节点从而迅速创建关系。

导入工具不能容忍不良实体（关系或节点），导入过程中若遇到不良的实体，会导致整个导入过程失败。因此使用工具时需要添加选项来指定忽略包含错误实体的行，如忽略缺少节点的关系和忽略标识符相同的节点。

#### 扩展插件

Neo4j目前提供了三个开源插件：APOC、graphAlgorithms和GraphQL。

Neo4j自3.x版本开始，引入了用户定义的过程和函数的概念，这些是某些功能的自定义实现，无法轻易地使用Cypher本身表达。由此 ，APOC（Awesome Procedures On Cypher）库诞生了，它由Java实现，可以轻松部署到Neo4j实例中，然后直接使用Cypher调用。该库包含约450个程序和函数，可支撑处理数据集成、图形算法或数据转换等多个细分领域的细分任务。

graphAlgorithms库提供有效实现的通用图算法的并行版本，它包含六大类图算法：

GraphQL 是一种用于 API 的查询语言，它针对数据提供了一套易于理解的完整描述，使得客户端能够准确地获得它需要的数据，而且没有任何冗余，也让API 更容易地随着时间推移而演进，还能用于构建强大的开发者工具。Neo4j基于GraphQL架构，开发了GraphQL-Endpoint扩展。它将GraphQL查询转换为Cypher语句并在Neo4j上执行它们。它提供HTTP API以及用于执行和管理GraphQL API的Neo4j Cypher过程。

### 社区情况

Neo4j的社区非常活跃，主要包括：

+ [Neo4j官网](neo4j.com)：涵盖对Neo4j的详细介绍、完善的使用文档、丰富的客户案例，以及软件、驱动的下载。

+ [Neo4j Online Community](https://community.neo4j.com/)：Neo4j官方问答论坛，根据问题类型划分为了十个大版块，每个大板块下又有若干个小版块。用户可以在里面提出在使用Neo4j过程中遇到的问题，会有热心网友和Neo4j认证的员工及时解答。平均每月都有两百多个问题被提出。

+ [Neo4j Blog](https://neo4j.com/blog/)：发布Neo4j的最新动态和发展趋势，是Neo4j前沿技术的首要发布平台。

+ [Neo4j Github](https://github.com/neo4j/neo4j)：Neo4j社区版、插件、各编程语言驱动、数据库内置工具、文档、docker镜像都托管在Github上，众多贡献者持续为Neo4j的代码仓库贡献着大量代码和知识。代码贡献者大部分都是Neo4j公司的员工。

+ [Neo4j 中文社区](http://neo4j.com.cn/)：国内最大的Neo4j中文社区，截止到2019年4月，问题总量达900条。

### 性能对比

使用关系型数据库MySQL和图数据库Neo4j分别去遍历同一个具有100万个顶点和400万条边的数据集，结果如下表所示：

| 遍历路径长度 | Neo4j     | MySQL     |
| ------ | --------- | --------- |
| 1      | 27 ms     | 124 ms    |
| 2      | 474 ms    | 922 ms    |
| 3      | 3366 ms   | 8851 ms   |
| 4      | 49312 ms  | 112930 ms |
| 5      | 862399 ms | 两小时内未完成   |

高度连接的数据非常适合使用属性图模型来进行建模。通常来讲图数据库比传统的关系型数据库更适合高度连接的数据的一些原因是：

（1）更好的性能。实践数据表明，高度连接的数据可能会产生大量的表连接，在超过7次的递归连接之后，与图数据库Neo4j相比，关系型数据库开始变得非常慢缓慢，具体原因下面会进行详细分析。

（2）灵活性。图数据库不受预定义结构的约束，因此可以轻松地对数据建模、随时添加和删除属性，这对于半结构化数据尤其有用。而关系型数据库中的表在第一次插入数据时需要预先设计一个完备详细的表结构。

（3）SQL查询困难。随着连接的增加，查询语法变得复杂和庞大。

 一般来说，时间复杂度是一个可以用来衡量查询效率的标准，复杂度越高，查询时间越久。下面通过计算关系型数据库主要应用的两种连接方式的时间复杂度，与图数据库的查询时间复杂度进行对比，从根本上说明图数据库查询复杂关系更高效的原因。

首先是嵌套循环连接，它是最简单的连接。内部表中的每一行数据的构建，将来源于外部表的所有行的遍历读取。如果为更多表结构建立扩展连接，则时间复杂度会急剧增加。嵌套循环连接仅适用于小型表或查询的最终结果较小。

另一种典型的多表连接方式为散列连接。散列连接是做大数据集连接时的常用方式，优化器使用两个表中数据量更小的那个表的连接键（JOIN KEY）在内存中建立临时散列表，然后遍历较大的表，找出与散列表匹配的行。

**图数据库Neo4j的优点在于，它根本不使用索引来进行连接，图数据库的节点本身存储了它第一个关系的id，通过它可以直接找到相邻节点，这种特性称为“无索引邻接”。**

### 同类产品对比

![](https://image-bed-1253366698.cos.ap-guangzhou.myqcloud.com/post/neo4j/5.jpg)

上图为著名的数据库排名网站DB-Engines.com根据搜索引擎查询的结果数量、Google Trends指数、提及的工作机会的数量和社交网络提及次数计算得出的流行程度得分对图数据库进行排名。可以看出，在过去六年里，Neo4j始终是最为流行的图数据库，其流行程度远远高于其他图数据库。

下面我们主要对目前较为流行的6个开源图数据库进行了横向分析和比较：

| 图数据库       | 开源协议               | 主要开发语言 | 关注度  | 贡献者数 |
| ---------- | ------------------ | ------ | ---- | ---- |
| Neo4j      | GPL v3             | Java   | 6310 | 170  |
| OrientDB   | Apache License 2.0 | Java   | 3824 | 121  |
| ArangoDB   | Apache License 2.0 | C++    | 7861 | 89   |
| JanusGraph | Apache License 2.0 | Java   | 2290 | 100  |
| Titan      | Apache License 2.0 | Java   | 4895 | 33   |
| Dgraph     | Apache License 2.0 | Golang | 9329 | 98   |
| FlockDB    | Apache License 2.0 | Scala  | 3188 | 12   |

综合比较来看，相比于其他图数据库，Neo4j的优势是：

+ 拥有极其活跃的社区
+ 发展速度快
+ 完善丰富的文档、驱动、插件
+ 提供高性能图形算法库
+ 更好的扩展性
+ 对新架构新技术有及时的跟进和适配

其劣势是：虽然社区版是开源免费的，但是缺少例如权限控制、热备份、分布式等一些重要功能。这些功能需要付费购买昂贵的企业版才能使用。

### 成功案例

目前，已经有越来越多的知名企业和政府机构开始使用图数据库Neo4j：

+ 世界十大零售商中的七家。像eBay和沃尔玛这样的顶级零售商依靠Neo4j来推动推荐，促销和简化物流。
+ 五大飞机制造商中的三家。空客和波音等飞机制造商依靠Neo4j来解决复杂的连接数据问题。
+ 十大保险公司中的八家。Bayerische和其他顶级保险公司依靠Neo4j打击欺诈和管理信息。
+ 北美前二十的所有银行。摩根大通，花旗和瑞银等银行依靠Neo4j实现数据沿袭。
+ 电信公司前十名中的七家。Verizon和AT＆T等领先的电信公司依靠Neo4j来管理网络和控制访问。

## 体系结构

### 内部结构

![](https://image-bed-1253366698.cos.ap-guangzhou.myqcloud.com/post/neo4j/6.jpg)

+ 记录文件（Record Files）：数据存储层，Neo4j 将图形数据存储在许多不同的存储文件中，每个存储文件都包含图形特定部分的数据 (例如, 节点、关系、标签和属性有单独的存储区)。存储责任的划分——特别是图形结构与属性数据的分离，促进了图的高性能遍历。但这也意味着用户对其图形的视图和磁盘上的实际记录在结构上是不同的。

+ 页面缓存（Page cache）：页面缓存用于缓存Neo4j数据和本机索引。将图形数据和索引缓存到内存中有助于避免昂贵的磁盘访问并获得最佳性能。

+ 事务日志（Transaction log）：记录每一次事务的提交与执行情况，可通过查询日志中的记录进行排错处理。当Neo4j突然效率低下、或者查询负载过高时，最好的办法就是先查看日志。

+ Cypher（查询语言）：Cypher是一种开源的图形查询语言，其ASCII艺术风格语法提供了一种熟悉的，可读的方式来匹配图形数据集中的节点和关系模式。与SQL一样，Cypher是一种声明性查询语言，允许用户在其图形数据上声明他们想要执行的操作（例如匹配，插入，更新或删除），而无需他们描述（或编程）确切的操作方法。

### 数据存储方式

Neo4j将节点、关系、属性分别存储在不同的文件中：

+ neostore.nodestore.db
+ neostore.relationshipstore.db
+ neostore.propertystore.db
+ neostore.propertystore.db.index
+ neostore.propertystore.db.strings
+ neostore.propertystore.db.arrays

其中，节点、关系和属性都采用固定大小的方式存储。固定大小的记录允许对存储文件中的节点与关系进行快速查找。如果我们有一个 id 为n的节点, 那么我们知道它的记录是从（n乘以节点字节大小）开始。根据这种格式, 数据库可以直接计算记录的位置, 时间复杂度为O(1), 而不是执行搜索, 时间复杂度将是O (log n)。

![](https://image-bed-1253366698.cos.ap-guangzhou.myqcloud.com/post/neo4j/7.jpg)

如上图所示，每个节点记录大小为15字节。第一个字节是正在使用的标志；接下来的四个字节表示连接到节点的第一个关系的 ID；后面的四个字节表示节点的第一个属性的 ID；节点标签占用五个字节，指向此节点的标签存储区；最后一个额外字节保留给标志。节点记录非常轻量级: 它实际上只是指向关系、标签和属性的几个指针。

关系存储结构不像节点存储那么简单。关系记录的大小为34个字节。每个关系记录都包含关系开始和结束时节点的 id、指向关系类型的指针、该关系的起点节点的下一个和上一个关系记录的指针、该关系的终点节点的下一个和上一个关系记录的指针、关系的第一个属性的ID以及指示当前关系是否是关系链中的第一个关系的标志。

属性记录的存储采用的是单链表结构，每个属性记录由四个属性块和下一条属性记录的 ID 组成。每个属性记录占用一个到四个属性块，一条属性记录最多可以记录四个属性。属性记录包含属性类型以及指向属性索引文件 (neostore.propertystore.db.index) 的指针, 该文件是存储属性名称的地方。对于每个属性的值, 记录包含指向动态存储记录的指针或内联值。动态存储允许存储较大的属性值。有两个动态存储: 动态字符串存储 (neostore.propertystore.db.strings) 和动态数组存储 (neostore.propertystore.db.arrays)。动态记录包括固定大小记录的链接列表;因此, 一个非常大的字符串或大数组可能会占用多个动态记录。

下图展示了Neo4j图数据库对数据的物理存储模式：

![](https://image-bed-1253366698.cos.ap-guangzhou.myqcloud.com/post/neo4j/8.jpg)

在图中我们可以看到：两个节点记录中的每一个都包含指向该节点的第一个属性和关系链中的第一个关系的指针。若要读取节点的属性,我们从节点指向的第一个属性开始遍历链表结构的属性。若要查找节点的关系,我们从该节点的关系指针到其第一个关系 (本例中的 LIKES 关系)。然后,在这里, 我们按照该特定节点 (即起点节点双链接列表或结束节点双链接列表)的关系的双链接列表进行操作, 直到找到我们感兴趣的关系。找到所需关系的记录后, 我们可以使用与节点属性相同的单独链接列表结构读取该关系的属性(如果有的话), 也可以检查关系所连接的两个节点的节点记录使用其起始节点和结束节点 Id。这些 Id 乘以节点记录大小,给出节点存储文件中每个节点的直接偏移量。

## Cypher查询语言

Cypher是一种声明性图形查询语言，允许对图形进行富有表现力和有效的查询和更新，十分适合开发人员和专业人员对针对业务场景完成一些应用。Cypher设计简单但功能强大，可以轻松完成对高度复杂的数据库的查询。Cypher查询语言的构建受到了多种方法的启发，并建立在表达性查询的既定实践基础之上。许多关键字的应用，例如“WHERR”和"ORDER BY"都受到SQL语句的启发。模式匹配借用了SPARQL中的表达式方法，而一些列表语义则是借用了Haskell和Python等语言的开发使用。 

Cypher语句借鉴SQL语句结构—使用各种子句构建查询。子句链接在一起，彼此之间提供中间结果集，查询语言由几个不同的子句组成：

+ MATCH：匹配的图形模式。 这是从图表中获取数据的最常用方法。
+ WHERE：本身不是一个子句，而是MATCH，OPTIONAL MATCH和WITH组成的一部分，用来添加对模式的约束，或过滤掉通过WITH的结果。
+ RETURN：返回操作。
+ CREATE：创建节点和关系。
+ DELETE：删除节点和关系。
+ SET 和 REMOVE：将值设置为属性并使用SET在节点上添加标签，使用REMOVE删除。
+ MERGE：匹配现有或创建新节点和模式。

## 配置数据库

### neo4j.conf

neo4j.conf是图数据库的配置文件，其中大多数配置直接应用于Neo4j本身，但也有一些设置适用于运行Neo4j的Java Runtime（JVM），其中：

+ 等号（=）将配置设置键映射到配置值；
+ 以数字符号（#）开头的行作为注释处理；
+ 空行被忽略；

配置设置没有顺序，neo4j.conf文件中的每个设置都必须唯一指定。如果有多个配置设置具有相同的键但值不同，则可能导致不可预测的行为。

### 常用配置

编辑neo4j.conf文件：

```
dbms.directories.import=<设置为要导入数据所在文件夹的绝对路径>

# 初始堆和最大堆大小，建议设置为相同值
dbms.memory.heap.initial_size=4g
dbms.memory.heap.max_size=4g

# 运行外网访问图数据库
dbms.connector.default_listen_address=0.0.0.0

# 允许从文件系统导入csv文件
dbms.security.allow_csv_import_from_file_urls=true
```

### 插件的安装与配置

1. 将下载的插件（jar文件）复制到‘$NEO4J_HOME/plugins’目录下。

2. 编辑neo4j.conf文件，添加以下内容：
   
   ```
   dbms.security.procedures.unrestricted=algo.*,apoc.*
   ```

3. 验证安装，运行以下查询：
   
   ```cypher
   call algo.list()
   return apoc.version()
   ```

## 写在最后

今年2月底，去了导师那里实习，导师给我布置的任务就是研究开源图数据库。经过一番搜索，`Neo4j`一词频频出现在我眼前，于是便选择了它作为主要研究对象。事实证明，我的选择并没有错，因为它是目前最流行的图数据库。

图数据库算是一个比较新的技术，国内在使用的公司很少，关于`Neo4j`的中文资料也很匮乏，因此`Neo4j`的[官网](neo4j.com)就成了资料的主要来源。

初步研究后，有幸参与到了相关产品的研发工作中，提前体验了一下`996`的生活；参加了一个相关的比赛，撰写了一个`Neo4j`技术白皮书，为集体做了一点微小的贡献。