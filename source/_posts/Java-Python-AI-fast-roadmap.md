---
title: "Java + Python + AI 项目驱动学习路线"
date: 2026-04-26 13:06:39
categories:
  - 学习路线
tags:
  - Java
  - Python
  - AI
  - 项目实战
  - 后端开发
description: "通过项目学习 Java 后端、Python 工程化和 AI / RAG 应用开发，整理适合 2026 企业需求的项目路线、技术点和配套学习资源。"
---
# Java + Python + AI 项目驱动学习路线

更新时间：2026-05-07

补充：如果走在线教育 + AI 路线，黑马 2026-04-27 更新的 `天机学堂 AI 版` 可以替换原计划里的 `学成在线`。但当前更推荐走 `谷粒商城 + AI 商品知识库 / AI 客服`，因为它更贴近国内企业常见 Java 后端和 AI 业务落地。

这份文档的核心目标：不要靠纯理论硬背，而是通过项目学习 Java、Python、AI 相关技术。遇到项目里不会的知识点，就临时去看对应的视频资源，补完再回到项目继续做。

这里不再把 `Itlias` 当成主线升级项目。`Itlias` 只说明你已经完成过 JavaWeb / Spring Boot 基础 CRUD，不需要继续重复做类似管理系统。后面要做的是更能接近 2026 企业需求的新项目。

## 学习方法

项目驱动学习的节奏建议是：

1. 先选一个项目，明确它能学到哪些技术。
2. 跟项目时遇到不会的知识点，暂停项目，去看对应专题视频。
3. 专题视频只看能解决当前问题的部分，不要陷入“把所有理论看完再写代码”。
4. 回到项目，把这个知识点真正用进去。
5. 每完成一个模块，写一段复盘：业务场景、技术方案、踩坑、为什么这样设计。

判断一个项目值不值得做，看它是不是能学到这些能力：

- 不只是简单 CRUD。
- 有缓存、消息队列、搜索、文件、权限、部署、测试、AI 等真实工程能力。
- 有业务流程，比如订单、支付、课程发布、审核、秒杀、资料问答。
- 做完后能讲清楚技术为什么用、解决了什么问题。

## 2026 企业仍然重要的技术

| 方向 | 重点技术 | 适合通过什么项目学 |
|---|---|---|
| Java 后端基础 | Spring Boot 3、RESTful API、参数校验、异常处理、接口文档、分层架构 | 苍穹外卖、谷粒商城、尚品甄选 |
| 数据库 | MySQL、索引、事务、慢 SQL、批量导入、读写一致性 | 电商、在线教育、企业后台 |
| 缓存与高并发 | Redis、缓存穿透、击穿、雪崩、分布式锁、限流、秒杀 | 黑马点评、谷粒商城 |
| 消息队列 | RabbitMQ、RocketMQ、Kafka、异步解耦、死信队列、幂等消费 | 谷粒商城、天机学堂 AI 版、电商订单 |
| 搜索 | Elasticsearch、倒排索引、分词、高亮、数据同步 | 谷粒商城、黑马头条、电商搜索 |
| 文件与媒资 | MinIO / OSS、视频上传、文件预览、资料管理、异步处理 | AI 知识库、天机学堂 AI 版、企业文档系统 |
| 权限安全 | Spring Security、Sa-Token、JWT、RBAC、数据权限、接口防刷 | RuoYi-Vue-Plus、JeecgBoot |
| 微服务 | Spring Cloud Alibaba、Nacos、Gateway、OpenFeign、Sentinel、Seata | 谷粒商城、尚品甄选、天机学堂 AI 版 |
| 工程化 | Docker、Docker Compose、Nginx、CI/CD、日志、Actuator、监控 | 谷粒商城、mall、mall-swarm |
| Python 工程化 | FastAPI、pandas、openpyxl、pytest、异步接口、脚本自动化 | FastAPI 服务、Excel 工具、日志分析 |
| AI 应用 | Spring AI、LangChain4j、RAG、Embedding、向量数据库、Tool Calling、MCP、Agent、多智能体 | AI 商品知识库、AI 客服、企业知识库、AI 数据分析助手 |

## 基础知识视频资源学习重点

这一部分不是让你把所有基础视频从头到尾刷完，而是告诉你：看基础视频时要抓哪些核心内容。目标是适配国内 Java 后端、企业后台、微服务、AI 应用开发的真实需求。

### 1. Java 基础

重点学：

- 面向对象：类、对象、封装、继承、多态、接口、抽象类。
- 集合框架：List、Set、Map、HashMap、ArrayList、LinkedList 的使用场景。
- 泛型、异常、枚举、注解、反射基础。
- Lambda、Stream、Optional、日期时间 API。
- IO、文件读写、序列化、JSON 转换。
- 基础并发：线程、线程池、synchronized、volatile、CompletableFuture 的基本使用。

企业重点：

- 能写清楚业务实体、DTO、VO、枚举和工具类。
- 能熟练处理集合、时间、异常、对象转换。
- 能看懂框架里的注解、反射、泛型。

### 2. Spring Boot 基础

重点学：

- Controller、Service、Mapper 分层。
- RESTful API 设计。
- 参数接收：PathVariable、RequestParam、RequestBody。
- 参数校验：Validation、分组校验、自定义校验。
- 统一返回结果、统一异常处理、全局拦截器。
- 配置文件、环境隔离、日志配置。
- Swagger / Knife4j 接口文档。
- 定时任务、异步任务、事务注解。

企业重点：

- 国内企业最常见的后端入口就是 Spring Boot + MyBatis / MyBatis-Plus + MySQL。
- 不要只会写 CRUD，要会统一异常、参数校验、接口文档、分层结构。

### 3. MyBatis / MyBatis-Plus

重点学：

- Mapper 接口、XML 映射、注解 SQL。
- 条件查询、分页查询、排序、模糊查询。
- 动态 SQL：if、where、set、foreach。
- resultMap 手动映射、一对多查询。
- 批量新增、批量更新、逻辑删除。
- MyBatis-Plus 的 Wrapper、分页插件、自动填充、乐观锁。

企业重点：

- 企业后台、电商、教育、SaaS 系统都大量依赖 MyBatis。
- 必须能写复杂查询，不能只依赖自动生成的单表 CRUD。

### 4. MySQL

重点学：

- 表设计、字段类型、主键、唯一索引、普通索引。
- SQL 基础：增删改查、关联查询、分组、排序、分页。
- 事务 ACID、隔离级别、脏读、不可重复读、幻读。
- 索引原理、联合索引、最左前缀、覆盖索引、索引失效。
- explain、慢 SQL 分析、分页优化。
- 锁：行锁、表锁、间隙锁、乐观锁、悲观锁。
- 批量导入、数据一致性、读写分离基础。

企业重点：

- MySQL 是国内 Java 面试和开发的高频重点。
- 订单、库存、权限、日志、报表这类业务都绕不开表设计、事务和索引。

### 5. Redis

重点学：

- String、Hash、List、Set、ZSet 的使用场景。
- 登录态、验证码、Token、Session 共享。
- 缓存穿透、缓存击穿、缓存雪崩。
- 缓存与数据库一致性。
- 分布式锁、Redisson、Lua 脚本。
- 秒杀库存、一人一单、异步下单。
- BitMap、HyperLogLog、GEO、Stream。
- Redis 持久化、过期策略、淘汰策略基础。

企业重点：

- Redis 对应国内企业最关心的高并发、缓存、秒杀、排行榜、会话共享。
- 面试时要能讲清楚为什么用 Redis，以及它解决了什么业务问题。

### 6. 消息队列

重点学：

- MQ 的作用：异步、解耦、削峰。
- RabbitMQ：交换机、队列、路由键、确认机制、死信队列、延迟消息。
- 消息可靠投递、重复消费、幂等消费。
- 订单超时取消、异步通知、日志处理、积分发放。
- RocketMQ / Kafka 的基础概念，知道它们适合什么场景。

企业重点：

- 国内 Java 企业常见 RabbitMQ、RocketMQ、Kafka。
- 先把 RabbitMQ 学扎实，再补 RocketMQ 的事务消息、延迟消息和顺序消息。

### 7. Elasticsearch

重点学：

- 倒排索引、分词器、文档、索引、映射。
- 关键词搜索、条件过滤、分页、高亮、排序。
- 中文分词、相关性评分。
- MySQL 数据同步到 ES。
- 商品搜索、课程搜索、内容搜索、知识库检索。

企业重点：

- ES 不是数据库替代品，而是解决复杂搜索和全文检索。
- 电商、在线教育、内容平台、企业知识库都容易用到。

### 8. 权限安全

重点学：

- 登录认证、JWT、Token 刷新、登录态过期。
- RBAC：用户、角色、菜单、按钮、接口权限。
- 数据权限：部门数据、本人数据、租户隔离。
- Spring Security / Sa-Token 的核心流程。
- 接口防刷、权限注解、密码加密。

企业重点：

- 国内企业后台系统非常重视权限。
- RuoYi、RuoYi-Vue-Plus、JeecgBoot 这类项目适合拿来读权限设计。

### 9. Spring Cloud Alibaba 微服务

重点学：

- 服务拆分、注册中心、配置中心。
- Nacos 服务注册、配置管理。
- OpenFeign 服务调用。
- Gateway 网关、路由、鉴权、限流。
- Sentinel 熔断、降级、限流。
- Seata 分布式事务基础。
- 微服务链路中的 Redis、MQ、ES、文件服务、认证服务的位置。

企业重点：

- 国内 Java 微服务常见 Spring Cloud Alibaba + Nacos。
- 学微服务时不要只背组件名，要能讲清楚一个订单、课程发布、支付流程怎么跨服务协作。

### 10. 工程化和部署

重点学：

- Linux 常用命令、日志查看、进程管理、端口排查。
- Git 分支、提交、合并、冲突处理。
- Maven 依赖管理、模块拆分、打包。
- Docker 镜像、容器、数据卷、网络。
- Docker Compose 编排 MySQL、Redis、Nginx、后端服务。
- Nginx 反向代理、静态资源部署、负载均衡。
- 日志、Actuator、监控、CI/CD 基础。

企业重点：

- 企业不会只让你写代码，还需要你能部署、看日志、定位问题。
- 最低目标是：能把一个 Spring Boot 服务和常用中间件用 Docker Compose 跑起来。

### 11. Python 工程化

重点学：

- Python 基础语法、虚拟环境、依赖管理。
- 文件读写、路径处理、异常处理。
- pandas、openpyxl、CSV / Excel 数据处理。
- requests 调用接口。
- FastAPI 路由、参数校验、响应模型、接口文档。
- pytest、日志、配置管理。
- Java 通过 HTTP 调用 Python 服务。

企业重点：

- 对 Java 岗来说，Python 不一定是主语言，但很适合做数据清洗、Excel 批处理、日志分析、AI 服务封装。
- 目标不是转 Python 后端，而是让 Python 成为 Java 项目的辅助能力。

### 12. AI / RAG 应用基础

重点学：

- Prompt、System Prompt、上下文窗口、结构化输出。
- Embedding、向量、相似度检索。
- RAG：文档解析、切片、向量化、召回、重排、答案生成。
- 向量数据库：Redis Stack、Milvus、pgvector、ES Vector 的基本概念。
- 流式输出 SSE。
- Tool Calling / Function Calling，让 AI 调用业务接口。
- 会话记忆、用户隔离、知识库权限隔离。
- Spring AI、Spring AI Alibaba、LangChain4j、Dify 的定位。
- DeepSeek、通义千问、阿里云百炼等国内常见模型和平台。

企业重点：

- 企业 AI 应用不是简单聊天，而是把大模型接入业务系统、知识库、报表和工作流。
- 最有价值的方向是：企业知识库问答、AI 客服、AI 报表助手、课程资料问答、业务流程智能体。

## 总体项目选择

这条路线建议改成：Java 用来证明你具备国内企业正常后端能力，Python 用来补数据处理和 AI 服务能力，AI 项目作为主要差异化。不要贪多完整敲十几个项目，最终围绕“1 个 Java 主项目 + 1 个高并发专题 + 2 到 3 个 AI 扩展作品”沉淀。

| 优先级 | 项目 | 主要学习价值 | 是否建议完整做 |
|---|---|---|---|
| S | 黑马点评 | Redis、高并发、缓存、分布式锁、秒杀 | Redis 阶段重点做，作为高并发专题 |
| S | 谷粒商城 | 电商微服务、商品、库存、订单、支付、搜索、MQ、Redis | Java 主项目优先，适合国内企业后端 |
| S | AI 商品知识库 / AI 客服 | 把 AI 接到商城业务，做商品问答、售后问答、导购推荐 | 最推荐的 AI 扩展，和谷粒商城天然衔接 |
| S | 企业知识库 / 课程资料问答系统 | RAG、Embedding、文档解析、向量检索、引用来源、权限隔离 | 作为最终 AI 主作品之一 |
| A | FastAPI 文档解析 / AI 服务 | Python 服务化、文档解析、摘要、Embedding、Java 调 Python | 必做小服务，给 AI 项目提供能力 |
| A | Python RAG 知识库 Demo | 快速理解 RAG 链路、LangChain / LlamaIndex、向量库 | 建议先做轻量版，再接入 Java |
| A | AI 数据分析助手 | Tool Calling、Text-to-SQL、报表、数据权限、结构化输出 | 适合企业后台和面试表达 |
| A | RuoYi-Vue-Plus | 权限、系统管理、数据权限、企业后台基础设施 | 读源码，不建议从零重写 |
| A | mall / mall-swarm | 成熟电商开源结构、Docker、权限、Redis、ES、MQ | 读源码和部署，补真实工程结构 |
| B | 天机学堂 AI 版 | 在线教育微服务 + Spring AI + RAG + Tool Calling + 多智能体 | 如果想走教育/AI 课程路线再完整做 |
| B | 尚品甄选 | 电商微服务，可替代谷粒商城 | 二选一，优先谷粒商城 |
| B | 小谷充电宝 | Java + IoT + MQTT + Spring AI + DeepSeek | 想扩展 IoT + AI 时再看 |
| B | 学成在线 | 在线教育微服务、媒资、搜索、MQ、支付 | 作为旧版业务参考，不建议主做 |
| B | 黑马头条 | 内容平台、审核、ES、MQ、推荐思想 | 可选专题 |
| B | 苍穹外卖 | Spring Boot 业务流程、WebSocket、定时任务 | 只看增量模块 |
| B | JeecgBoot | 低代码、工作流、AI、知识库、MCP 趋势 | 读架构和思想 |

## 推荐路线

### 主路线：Java 企业后端 + Python 工程化 + AI 应用，最推荐

适合你现在的目标：Java 不追求花哨，够国内企业后端岗位使用；真正拉开差距的是 Python 工程化和 AI 应用落地。

1. Java 基础 + Spring Boot + MyBatis-Plus + MySQL：把企业后端基本功补稳。
2. 黑马点评：集中补 Redis、高并发、分布式锁、秒杀。
3. 谷粒商城：作为 Java 主项目，补微服务、电商业务、订单、库存、支付、ES、MQ、Docker。
4. RuoYi-Vue-Plus / mall：读源码，补权限、后台管理、部署结构和企业工程习惯。
5. Python 工程化：做 Excel 数据清洗、日志分析、FastAPI 文档解析服务。
6. Python RAG Demo：先用 Python 快速跑通文档解析、切片、Embedding、向量检索、问答。
7. Java + AI 扩展：在商城或企业后台上接 AI 商品知识库、AI 客服、企业知识库、AI 数据分析助手。

最终作品组合：

- 黑马点评：证明 Redis 和高并发能力。
- 谷粒商城：证明正常企业 Java 微服务能力。
- FastAPI 文档解析 / AI 服务：证明 Python 工程化能力。
- AI 商品知识库 / AI 客服：证明 AI 能接入真实业务。
- 企业知识库或 AI 数据分析助手：证明 RAG / Tool Calling / 数据权限能力。

### 备选路线一：教育系统 + AI 知识库

如果你更喜欢在线教育、课程资料、知识库问答，可以把谷粒商城换成天机学堂 AI 版。

1. 黑马点评：Redis 和高并发。
2. 天机学堂 AI 版：在线教育微服务 + Spring AI + RAG + Tool Calling。
3. FastAPI 文档解析服务：课程资料解析、切片、Embedding。
4. AI 课程资料问答系统：作为自研扩展，补引用来源、权限隔离、知识库管理。

最终作品组合：

- 在线教育 AI 助手。
- AI 课程资料问答系统。
- Python 文档解析服务。

### 备选路线二：企业后台 + AI 数据分析

适合你想走企业内部系统、SaaS、低代码、管理平台方向。

1. RuoYi-Vue-Plus：权限、系统管理、数据权限。
2. mall / JeecgBoot：读成熟后台和低代码架构。
3. FastAPI 日志分析 / 报表服务：补 Python 数据处理。
4. AI 报表助手：自然语言查数据、生成统计分析。
5. 企业知识库：制度、接口文档、项目文档问答。

最终作品组合：

- 企业后台权限系统。
- AI 报表 / 数据分析助手。
- 企业知识库。

## Java 项目清单

当前主线优先级是：`黑马点评` 作为 Redis / 高并发专题，`谷粒商城` 作为 Java 企业微服务主项目。`天机学堂 AI 版` 适合在线教育 + AI 路线，保留为备选；其他 Java 项目主要用来补模块或读源码。

### 1. 黑马点评

定位：Redis 和高并发训练场。

项目价值：这个项目的重点不是点评业务，而是 Redis 企业场景非常集中，适合从普通 Spring Boot CRUD 进入缓存、高并发、分布式锁。

能学到的技术：

- Redis String / Hash / List / Set / ZSet
- Redis BitMap、HyperLogLog、GEO
- Redis Stream
- 登录态共享
- 缓存穿透、缓存击穿、缓存雪崩
- 缓存与数据库一致性
- 分布式锁
- Redisson
- Lua 脚本
- 秒杀、一人一单、库存扣减
- Feed 流
- 滚动分页

建议重点做的模块：

- 用户登录。
- 商户缓存。
- 优惠券秒杀。
- 分布式锁。
- Redis Stream 异步下单。
- 达人探店 Feed 流。

配套视频资源：

| 用途 | 资源 |
|---|---|
| 项目主线 | [黑马点评项目实战](https://www.bilibili.com/video/BV1NV411u7GE/) |
| Redis 专题 | [黑马 Redis 入门到实战](https://www.bilibili.com/video/BV1cr4y1671t/) |
| RabbitMQ 后续补充 | [黑马 RabbitMQ 入门到实战](https://www.bilibili.com/video/BV1mN4y1Z7t9/) |

学完后的复盘问题：

- 为什么缓存不能随便加？
- 缓存击穿和缓存穿透区别是什么？
- 为什么秒杀要用 Redis 预扣库存？
- 分布式锁为什么要考虑误删？
- MQ 异步下单如何保证最终一致性？

### 2. 天机学堂 AI 版

定位：在线教育微服务 + Java AI 应用实战。

替换关系：优先替换 `学成在线`。如果你做了天机学堂 AI 版，就不需要再完整做学成在线；学成在线最多作为补充资料或旧版业务参考。

项目价值：天机学堂 AI 版比传统在线教育项目更适合 2026 的学习目标。它不是只做课程、订单、搜索这些微服务业务，而是在真实在线教育项目里加入 Spring AI、流式对话、Redis 会话记忆、Tool Calling、RAG 知识库、ES / Redis 向量检索、多智能体协同等 AI 落地能力。它刚好把“Java 微服务”和“Java AI 应用”合在一起。

能学到的技术：

- Spring Boot
- Spring Cloud / Spring Cloud Alibaba
- Nacos
- Redis
- Elasticsearch
- Spring AI
- 阿里云百炼
- 流式对话
- 对话停止生成
- Redis / MySQL / MongoDB 会话记忆
- Prompt / System Prompt
- Tool Calling
- AI 调用业务接口
- RAG 检索增强生成
- ES 知识库
- Redis Stack 向量库
- 多智能体架构
- 路由工作流智能体
- 课程咨询智能体
- 课程推荐智能体
- 课程购买智能体
- 在线平台智能体
- OpenAI 兼容接口

建议重点做的模块：

- 基本对话和课程咨询。
- Spring AI 集成。
- 流式对话和停止生成。
- Redis 会话记忆。
- Tool Calling 查询课程、预下单。
- RAG 知识库和课程推荐。
- ES / Redis Vector 向量检索。
- 多智能体路由工作流。
- 在线平台智能体和插件集成。

配套视频资源：

| 用途 | 资源 |
|---|---|
| 项目主线 | [AI 版《天机学堂》Spring AI + 多智能体架构全栈实战项目](https://yun.itheima.com/course/1096.html) |
| 旧版业务参考 | [Java 项目实战《天机学堂》](https://yun.itheima.com/course/1077.html) |
| Spring AI 补充 | [SpringAI + DeepSeek 大模型应用开发实战](https://www.bilibili.com/video/BV1MtZnYtEB3/) |
| Redis 补充 | [黑马 Redis 入门到实战](https://www.bilibili.com/video/BV1cr4y1671t/) |
| Elasticsearch 补充 | [黑马 Elasticsearch](https://www.bilibili.com/video/BV1Gh411j7d6/) |

它替换哪个项目：

| 原计划项目 | 是否替换 | 原因 |
|---|---|---|
| 学成在线 | 建议替换 | 都是在线教育微服务，但天机学堂 AI 版额外覆盖 Spring AI、RAG、Tool Calling、多智能体，更贴近 2026 企业 AI 应用 |
| AI 课程资料问答系统 | 部分替换 | 天机学堂 AI 版可以作为课程带练版，后续再做一个更简洁的自研 RAG 系统作为作品沉淀 |
| 谷粒商城 / 尚品甄选 | 不直接替换 | 商城偏电商订单、库存、支付、秒杀；天机学堂偏教育 + AI，方向不同 |
| 黑马点评 | 不替换 | 黑马点评仍然是 Redis、高并发、分布式锁、秒杀训练场 |

学完后的复盘问题：

- 传统在线教育项目为什么适合接入 AI 助手？
- Spring AI 如何接入现有 Java 微服务？
- 流式对话和普通 HTTP 响应有什么区别？
- 对话记忆为什么可以放 Redis、MySQL、MongoDB，不同方案怎么取舍？
- Tool Calling 如何让 AI 调用课程查询、预下单等业务接口？
- RAG 为什么需要知识库和向量检索？
- 多智能体比单个聊天机器人强在哪里？

### 3. 学成在线（备选）

定位：微服务 + 在线教育业务。

项目价值：比普通后台管理系统更接近企业项目，有课程发布、媒资管理、搜索、认证、订单支付、选课学习等业务。后续非常适合衔接 AI 课程资料问答系统。

能学到的技术：

- Spring Boot
- Spring Cloud Alibaba
- Nacos 注册中心和配置中心
- OpenFeign 远程调用
- Gateway 网关
- MyBatis-Plus
- Redis
- RabbitMQ
- Elasticsearch
- MinIO / OSS
- Nginx
- Docker
- 认证授权
- 课程发布流程
- 媒资上传与处理
- 订单支付
- 前后端分离联调

建议重点做的模块：

- 课程管理。
- 课程发布。
- 媒资管理。
- 搜索服务。
- 认证授权。
- 选课和订单。

配套视频资源：

| 用途 | 资源 |
|---|---|
| 项目主线 | [黑马学成在线](https://www.bilibili.com/video/BV1j8411N7Bm/) |
| Spring Cloud 专题 | [黑马 Spring Cloud 微服务](https://www.bilibili.com/video/BV1kH4y1S7wz/) |
| RabbitMQ 专题 | [黑马 RabbitMQ 入门到实战](https://www.bilibili.com/video/BV1mN4y1Z7t9/) |
| Docker 专题 | [黑马 Docker](https://www.bilibili.com/video/BV1HP4118797/) |

学完后的复盘问题：

- 为什么在线教育适合拆成微服务？
- 课程发布为什么需要状态流转？
- 媒资处理为什么适合异步？
- 搜索服务为什么不用 MySQL 模糊查询硬做？
- Feign 调用失败如何处理？

### 4. 谷粒商城 / 尚品甄选

定位：电商、订单、支付、高并发、微服务。

项目价值：电商是 Java 后端最经典的复杂业务之一。商品、购物车、订单、库存、支付、优惠券、秒杀、搜索都能练到。

选择建议：如果你想走国内企业常见 Java 后端路线，优先选 `谷粒商城` 作为 Java 主项目；尚品甄选可以作为同类替代，不建议两个都完整做。

能学到的技术：

- Spring Cloud Alibaba
- Nacos
- Gateway
- OpenFeign
- Sentinel
- Seata 思想
- Redis 缓存
- 分布式锁
- Elasticsearch 商品搜索
- RabbitMQ / RocketMQ
- 订单状态机
- 支付流程
- 库存扣减
- 秒杀
- 分布式 Session
- Docker 部署

建议重点做的模块：

- 商品管理。
- 商品搜索。
- 购物车。
- 订单。
- 支付。
- 秒杀。
- 库存扣减。
- 为后续 AI 商品知识库 / AI 客服准备商品、订单、售后数据。

配套视频资源：

| 用途 | 资源 |
|---|---|
| 尚硅谷谷粒商城 | [谷粒商城 Java 微服务项目](https://www.bilibili.com/video/BV1np4y1C7Yf/) |
| 尚硅谷尚品甄选 | [尚品甄选 SpringBoot + SpringCloud 项目](https://www.bilibili.com/video/BV1NF411S7DS/) |
| 尚硅谷项目入口 | [尚硅谷项目实战页](https://www.atguigu.com/project/) |
| Redis 补充 | [黑马 Redis 入门到实战](https://www.bilibili.com/video/BV1cr4y1671t/) |

学完后的复盘问题：

- 订单状态为什么不能只用一个简单字段随便改？
- 库存扣减为什么容易出并发问题？
- 商品搜索为什么适合 ES？
- 支付回调为什么要做幂等？
- 分布式事务有哪些替代方案？

### 5. 小谷充电宝

定位：Java + 真实业务 + IoT + MQTT + AI。

项目价值：这个项目比传统电商更“新”，包含充电宝租借业务、设备通信、MQTT、Spring AI、DeepSeek、MongoDB、Redis、RabbitMQ。很适合补 2026 企业里越来越常见的“Java 后端连接设备、数据和 AI”的能力。

能学到的技术：

- Spring Boot
- Spring Cloud
- MyBatis-Plus
- Redis
- RabbitMQ
- MQTT
- EMQX
- MongoDB
- Spring AI
- DeepSeek API
- 订单统计分析
- 微信小程序端业务
- 设备租借和归还流程

配套视频资源：

| 用途 | 资源 |
|---|---|
| 项目主线 | [尚硅谷小谷充电宝](https://www.atguigu.com/video/327/) |
| 项目介绍 | [小谷充电宝核心技术案例](https://www.atguigu.com/project/java/xgcdb.shtml) |
| Spring AI 补充 | [尚硅谷 SpringAI](https://www.atguigu.com/video/336/) |
| Spring AI Alibaba 补充 | [尚硅谷 Spring AI Alibaba](https://www.atguigu.com/video/347/) |

学完后的复盘问题：

- MQTT 和 HTTP 有什么不同？
- 设备通信为什么不能全靠轮询？
- Java 后端如何接入 AI 做统计分析？
- MongoDB 适合存什么类型的数据？
- 真实设备业务如何处理异常归还、超时、状态不一致？

### 6. 黑马头条

定位：内容平台、审核、搜索、异步处理。

能学到的技术：

- 内容发布流程
- 文章审核
- Elasticsearch
- Redis 热点内容
- MQ 异步处理
- 定时任务
- 分布式 ID
- 内容推荐基础思想
- App 端接口设计

配套视频资源：

| 用途 | 资源 |
|---|---|
| 项目主线 | [黑马头条项目](https://www.bilibili.com/video/BV1Qs4y1v7x4/) |
| Elasticsearch 补充 | [黑马 Elasticsearch 教程](https://www.bilibili.com/video/BV1Gh411j7d6/) |
| RabbitMQ 补充 | [黑马 RabbitMQ 入门到实战](https://www.bilibili.com/video/BV1mN4y1Z7t9/) |

适合你在学完 Redis / MQ / ES 后再看，不建议排在最前面。

### 7. 苍穹外卖

定位：Spring Boot 业务流程补强。

你已经做过 Itlias，所以苍穹外卖里很多基础 CRUD 会重复。不建议完整从头敲，建议只看增量模块。

值得看的模块：

- Redis 店铺营业状态。
- Spring Cache。
- WebSocket 来单提醒和催单。
- Spring Task 定时任务。
- 订单状态流转。
- 微信支付。
- POI 导入导出。
- 销售数据统计。

配套视频资源：

| 用途 | 资源 |
|---|---|
| 项目主线 | [黑马苍穹外卖](https://www.bilibili.com/video/BV1TP411v7v6/) |
| 补充版本 | [苍穹外卖完整项目代码](https://www.bilibili.com/video/BV1Mh4y157AP) |
| Redis 补充 | [黑马 Redis 入门到实战](https://www.bilibili.com/video/BV1cr4y1671t/) |

### 8. RuoYi-Vue-Plus

定位：企业后台、权限、系统管理。

这个不是视频项目，更适合读源码。你可以用它补企业后台常见基础设施。

能学到的技术：

- RBAC 权限模型
- 用户、角色、菜单、部门、岗位
- 数据权限
- 字典管理
- 参数配置
- 操作日志
- 登录日志
- 代码生成
- 防重复提交
- XSS 防护
- Sa-Token
- MyBatis-Plus
- 多模块项目结构

配套资源：

| 用途 | 资源 |
|---|---|
| 项目源码 | [RuoYi-Vue-Plus GitHub](https://github.com/dromara/RuoYi-Vue-Plus) |
| Sa-Token 补充 | B 站搜索：`Sa-Token 权限认证 教程` |
| MyBatis-Plus 补充 | B 站搜索：`尚硅谷 MyBatis-Plus` 或 `黑马 MyBatis-Plus` |

### 9. JeecgBoot

定位：低代码、工作流、AI、知识库、MCP。

它适合看 2026 企业后台平台化趋势，不建议一开始深度二开。

能学到的技术：

- Spring Boot / Spring Cloud
- MyBatis-Plus
- Vue3 / Ant Design
- 代码生成器
- 低代码表单
- 工作流
- 大屏报表
- AI 聊天
- 企业知识库
- MCP
- 插件体系
- 多租户 / SaaS 思想

配套资源：

| 用途 | 资源 |
|---|---|
| 项目源码 | [JeecgBoot GitHub](https://github.com/jeecgboot/JeecgBoot) |
| 尚硅谷大模型路线 | [尚硅谷大模型生态视频教程](https://www.atguigu.com/video/llm/) |
| Spring AI Alibaba | [尚硅谷 Spring AI Alibaba](https://www.atguigu.com/video/347/) |

### 10. mall / mall-swarm

定位：开源电商项目结构、部署和中间件整合。

能学到的技术：

- Spring Boot
- Spring Security
- MyBatis
- Redis
- Elasticsearch
- MongoDB
- RabbitMQ
- Docker / Docker Compose
- Swagger / Knife4j 类接口文档
- 电商后台管理

配套资源：

| 用途 | 资源 |
|---|---|
| 项目源码 | [mall GitHub](https://github.com/macrozheng/mall) |
| Docker 补充 | [黑马 Docker](https://www.bilibili.com/video/BV1HP4118797/) |
| RabbitMQ 补充 | [黑马 RabbitMQ 入门到实战](https://www.bilibili.com/video/BV1mN4y1Z7t9/) |

## Python 项目清单

Python 的定位不是替代 Java，而是做数据处理、自动化、AI 服务、文档解析。你可以用小项目学，不需要一开始做巨大系统。

### 1. Excel 数据清洗和批量导入工具

项目目标：

做一个 Python 脚本或小工具，读取员工、学生、成绩、订单等 Excel，完成数据清洗、格式校验、错误行输出、标准模板生成。

能学到的技术：

- Python 基础语法
- pandas
- openpyxl
- 文件读写
- 数据清洗
- 异常处理
- 命令行参数
- 输出错误报告

配套视频资源：

| 用途 | 资源 |
|---|---|
| Python 基础 + AI 入门 | [黑马 Python + 人工智能入门到精通](https://www.bilibili.com/video/BV1oD4y1d7vb/) |
| Python 数据分析 | [尚硅谷大模型生态页中的 Python / 数据分析课程入口](https://www.atguigu.com/video/llm/) |
| pandas / openpyxl 补充 | B 站搜索：`pandas openpyxl Excel 自动化 项目` |

复盘问题：

- 为什么企业里经常需要 Excel 导入导出？
- 脏数据如何处理？
- 错误行应该直接丢弃还是生成报告？
- Python 脚本如何和 Java 后端配合？

### 2. 日志分析工具

项目目标：

读取 Java 后端日志，统计接口访问次数、错误率、慢接口、异常类型，并输出 CSV / Excel / 图表。

能学到的技术：

- Python 文件处理
- 正则表达式
- pandas 聚合统计
- matplotlib / pyecharts
- 日志格式分析
- 性能指标统计

配套视频资源：

| 用途 | 资源 |
|---|---|
| Python 基础 | [黑马 Python + 人工智能入门到精通](https://www.bilibili.com/video/BV1oD4y1d7vb/) |
| 数据可视化补充 | B 站搜索：`Python pyecharts 数据可视化 项目` |
| 日志分析补充 | B 站搜索：`Python 日志分析 项目 实战` |

复盘问题：

- 日志里哪些字段最有价值？
- 慢接口如何定义？
- 统计结果如何帮助排查线上问题？

### 3. FastAPI 小服务

项目目标：

做一个独立的 Python API 服务，提供文档解析、文本摘要、数据清洗、AI 调用等接口，让 Java 后端通过 HTTP 调用。

能学到的技术：

- FastAPI
- Pydantic
- 路由
- 依赖注入
- 异步接口
- SQLAlchemy / ORM
- 接口文档
- pytest
- Docker 部署
- Java 调用 Python HTTP 服务

配套视频资源：

| 用途 | 资源 |
|---|---|
| 黑马 FastAPI | [黑马 FastAPI 从入门到实战](https://www.bilibili.com/video/BV1zV2QBtE39/) |
| 2025 FastAPI 项目实战 | [FastAPI 项目实战教程](https://www.bilibili.com/video/BV1AB78zDEdJ/) |
| 官方文档 | [FastAPI Docs](https://fastapi.tiangolo.com/) |

复盘问题：

- 为什么 AI / 文档解析服务适合用 Python？
- Java 调 Python 是直接进程调用好，还是 HTTP API 好？
- FastAPI 的 Pydantic 有什么价值？
- Python 服务如何部署？

### 4. Python RAG 知识库

项目目标：

先用 Python 快速做一个本地 RAG：上传 PDF / Markdown / TXT，切片，Embedding，存向量库，最后用本地模型或在线模型问答。

能学到的技术：

- LangChain
- LlamaIndex
- Ollama
- Chroma / FAISS
- 文档加载
- 文本切片
- Embedding
- 向量检索
- RAG
- Streamlit / Gradio
- FastAPI 封装接口

配套视频资源：

| 用途 | 资源 |
|---|---|
| RAG / Agent 项目视频 | [B 站 RAG-Agent-AI 项目实战](https://www.bilibili.com/video/BV1z9XvYMEtA/) |
| LangChain 本地 RAG 教程 | [LangChain 本地 RAG 教程](https://python.langchain.ac.cn/docs/tutorials/local_rag/) |
| Dify 知识库参考 | [Dify 知识库文档](https://docs.dify.ai/zh/use-dify/knowledge/connect-external-knowledge-base) |
| Ollama + RAG 补充 | B 站搜索：`Ollama LangChain RAG Python 项目` |

复盘问题：

- RAG 为什么不是简单把文档塞进 Prompt？
- chunk size 和 overlap 如何影响效果？
- 向量检索为什么可能找不准？
- 如何给答案加引用来源？

## AI 项目清单

AI 这部分建议分两条线：Java AI 和 Python AI 都要接触。

- Java AI：更适合和你未来 Java 后端项目结合，做企业系统里的 AI 能力。
- Python AI：更适合快速实验 RAG、文档解析、数据处理、模型调用。

### 1. AI 商品知识库 / AI 客服

定位：最适合和谷粒商城衔接的 AI 扩展项目。它不是单独做一个聊天机器人，而是让 AI 基于商品、订单、售后、评价、活动规则回答问题，适合电商、SaaS、企业官网、客服后台等真实场景。

项目目标：

用户可以自然语言提问，比如“这款手机和另一款有什么区别”“我的订单为什么还没发货”“这个商品支持七天无理由吗”“根据预算推荐一台笔记本”。系统从商品库、订单库、售后规则、知识库中检索信息，再调用大模型生成答案。

能学到的技术：

- Spring AI / LangChain4j
- RAG
- 商品数据向量化
- 售后规则知识库
- Tool Calling 查询商品、订单、库存、优惠券
- SSE 流式输出
- 用户身份和订单权限校验
- Prompt 约束和结构化输出
- 敏感操作拦截
- 人工客服转接思想

建议实现顺序：

1. 商品详情普通问答。
2. 商品参数和卖点向量化。
3. 商品知识库 RAG 问答。
4. Tool Calling 查询商品价格、库存、优惠券。
5. 登录用户查询自己的订单状态。
6. 售后规则问答。
7. 流式输出和会话记忆。
8. 加入权限校验，防止查询别人的订单。
9. 输出推荐商品列表，前端可直接渲染。

复盘问题：

- 商品问答什么时候用 RAG，什么时候直接查数据库？
- AI 查询订单为什么必须做用户权限校验？
- Tool Calling 调业务接口时如何限制可调用范围？
- AI 客服回答错了怎么办，如何加引用来源和人工兜底？

### 2. Java AI 课程资料问答系统（自研扩展）

定位：最终主作品之一。如果已经学习天机学堂 AI 版，这个项目不需要完全从零照抄课程，而是作为自己的 RAG 扩展作品，用来把文档解析、知识库、权限隔离、引用来源、Python 服务协作这些能力真正沉淀下来。

项目目标：

用户上传课程资料，系统自动解析、切片、向量化。用户提问时，系统从知识库检索相关片段，再调用大模型生成答案，并给出引用来源。

能学到的技术：

- Spring Boot 3
- Spring AI
- Spring AI Alibaba
- LangChain4j
- DeepSeek / 通义千问 / OpenAI 类接口
- Prompt 模板
- 流式输出 SSE
- Embedding
- 向量数据库
- RAG
- 文档解析
- 文本切片
- 引用来源
- 会话记忆
- Tool Calling
- MCP 基础思想
- 权限隔离

配套视频资源：

| 用途 | 资源 |
|---|---|
| 尚硅谷 SpringAI | [尚硅谷 SpringAI](https://www.atguigu.com/video/336/) |
| 尚硅谷 Spring AI Alibaba | [尚硅谷 Spring AI Alibaba](https://www.atguigu.com/video/347/) |
| Java + AI 大模型教程 | [Java + AI / LangChain4j / Spring AI / RAG / MCP](https://www.bilibili.com/video/BV11MdAY8EpP/) |
| Java + AI 大模型应用开发 | [Java + AI 大模型应用开发教程](https://www.bilibili.com/video/BV1YqqFBmEkZ/) |
| LangChain4j 官方 | [LangChain4j GitHub](https://github.com/langchain4j) |
| Spring AI Alibaba 官方 | [Spring AI Alibaba](https://sca.aliyun.com/en/ai/) |

建议实现顺序：

1. 普通聊天接口。
2. 流式聊天接口。
3. 上传文档。
4. 文档解析。
5. 文本切片。
6. Embedding 向量化。
7. 向量入库。
8. 相似度检索。
9. RAG 问答。
10. 引用来源。
11. 用户资料隔离。
12. Tool Calling 调用业务接口。

复盘问题：

- RAG 的完整链路是什么？
- Embedding 和大模型聊天有什么区别？
- 为什么要做引用来源？
- Java 里选 Spring AI 还是 LangChain4j？
- Tool Calling 如何保证安全？

### 3. AI 企业知识库

定位：企业内部系统常见 AI 应用。

项目目标：

支持上传企业制度、项目文档、接口文档、产品手册，员工可以基于这些文档问答。

能学到的技术：

- 多格式文档解析
- 权限隔离
- 知识库管理
- 文档版本管理
- RAG
- 向量数据库
- 问答历史
- 反馈评价
- 答案引用来源
- 后台管理

配套视频资源：

| 用途 | 资源 |
|---|---|
| Dify 知识库参考 | [Dify 知识库文档](https://docs.dify.ai/zh/use-dify/knowledge/connect-external-knowledge-base) |
| 尚硅谷大模型生态 | [尚硅谷大模型技术路线](https://www.atguigu.com/video/llm/) |
| Spring AI Alibaba | [尚硅谷 Spring AI Alibaba](https://www.atguigu.com/video/347/) |
| Python RAG 补充 | [B 站 RAG-Agent-AI 项目实战](https://www.bilibili.com/video/BV1z9XvYMEtA/) |

### 4. AI 数据分析助手

定位：企业后台 + AI 的落地项目。

项目目标：

用户用自然语言问数据，比如“本月订单趋势如何”“哪个部门人员增长最快”“最近错误率最高的接口是什么”，系统调用工具查询数据库或统计结果，再生成解释。

能学到的技术：

- Tool Calling
- Function Calling
- Text-to-SQL 基础思想
- 数据权限
- SQL 安全校验
- 报表生成
- ECharts / 图表接口
- Prompt 约束
- JSON 结构化输出

配套视频资源：

| 用途 | 资源 |
|---|---|
| 小谷充电宝 AI 报表参考 | [尚硅谷小谷充电宝](https://www.atguigu.com/video/327/) |
| Spring AI | [尚硅谷 SpringAI](https://www.atguigu.com/video/336/) |
| Spring AI Alibaba | [尚硅谷 Spring AI Alibaba](https://www.atguigu.com/video/347/) |
| Java + AI 大模型教程 | [Java + AI / LangChain4j / Spring AI / RAG / MCP](https://www.bilibili.com/video/BV11MdAY8EpP/) |

复盘问题：

- 让 AI 直接生成 SQL 是否安全？
- Tool Calling 和普通聊天有什么区别？
- 结构化输出为什么重要？
- 数据权限如何控制？

### 5. AI 工作流 / 业务智能体

定位：企业系统里更接近“AI 助手帮人办事”的方向，不只是问答，而是根据用户意图调用多个业务工具完成流程。

项目目标：

用户说“帮我创建一个售后工单”“查询这个订单是否可以退款”“给这个客户生成一份跟进摘要”，系统识别意图，调用订单、客户、工单、通知等业务接口，最后返回执行结果。

能学到的技术：

- Agent 基础思想
- Tool Calling 多工具编排
- 意图识别
- 参数抽取
- 业务流程状态机
- 人工确认机制
- 操作审计日志
- 权限校验
- 失败回滚和兜底提示

适合接入的 Java 项目：

- 谷粒商城：订单查询、售后工单、优惠券推荐。
- RuoYi-Vue-Plus：审批、通知、用户管理、数据权限。
- 企业知识库：查询制度后生成待办或工单。

复盘问题：

- 哪些操作可以让 AI 自动执行，哪些必须人工确认？
- Tool Calling 多步执行失败时如何处理？
- AI 业务智能体如何做权限和审计？

### 6. AI 日志 / 运维分析助手

定位：Python 日志分析工具的 AI 升级版，适合体现工程化和线上问题排查能力。

项目目标：

系统读取 Java 服务日志、Nginx 日志、错误堆栈、慢接口统计，让 AI 总结异常原因、定位高频错误接口、生成排查建议，并输出可视化报表。

能学到的技术：

- Python 日志解析
- pandas 聚合统计
- 异常堆栈提取
- LLM 总结分析
- RAG 检索历史故障
- 报表生成
- 告警摘要
- FastAPI 封装分析接口

适合接入的 Java 项目：

- 谷粒商城：分析订单、支付、搜索接口日志。
- 黑马点评：分析秒杀和 Redis 异常日志。
- 企业后台：分析登录失败、权限异常、慢接口。

复盘问题：

- AI 分析日志时如何避免乱猜？
- 哪些指标应该先用程序统计，哪些适合交给大模型总结？
- 如何把日志分析结果变成可行动的排查建议？

## 不会某个知识点时看什么

上面已经列了每块基础知识要学什么；下面这张表只作为“项目做不动时临时查视频”的资源索引。不要为了看完视频而看视频，优先解决当前项目里卡住的问题。

| 项目里遇到的问题 | 先看这个资源 |
|---|---|
| Java 基础不稳 | [尚硅谷 Java 基础](https://www.atguigu.com/video/1/) |
| Spring Boot 不会整合 | B 站搜索：`黑马 SpringBoot 教程` 或 `尚硅谷 SpringBoot 教程` |
| MyBatis-Plus 不会 | B 站搜索：`尚硅谷 MyBatisPlus` 或 `黑马 MyBatisPlus` |
| MySQL 索引和事务不懂 | [黑马 MySQL](https://www.bilibili.com/video/BV1Kr4y1i7ru/) |
| Redis 不懂 | [黑马 Redis 入门到实战](https://www.bilibili.com/video/BV1cr4y1671t/) |
| 缓存和秒杀不会 | [黑马点评项目实战](https://www.bilibili.com/video/BV1NV411u7GE/) |
| RabbitMQ 不懂 | [黑马 RabbitMQ 入门到实战](https://www.bilibili.com/video/BV1mN4y1Z7t9/) |
| RocketMQ 不懂 | [黑马 RocketMQ](https://www.bilibili.com/video/BV1L4411y7mn/) |
| Elasticsearch 不懂 | [黑马 Elasticsearch](https://www.bilibili.com/video/BV1Gh411j7d6/) |
| Docker 不懂 | [黑马 Docker](https://www.bilibili.com/video/BV1HP4118797/) |
| 微服务不懂 | [黑马 Spring Cloud 微服务](https://www.bilibili.com/video/BV1kH4y1S7wz/) |
| Nginx 不懂 | [尚硅谷 Nginx](https://www.bilibili.com/video/BV1yS4y1N76R/) |
| Git 不熟 | [黑马 Git](https://www.bilibili.com/video/BV1MU4y1Y7h5/) |
| FastAPI 不懂 | [黑马 FastAPI](https://www.bilibili.com/video/BV1zV2QBtE39/) |
| Python 数据处理不会 | B 站搜索：`pandas openpyxl Excel 自动化 项目` |
| RAG 不懂 | [LangChain 本地 RAG 教程](https://python.langchain.ac.cn/docs/tutorials/local_rag/) |
| Java AI 不懂 | [尚硅谷 SpringAI](https://www.atguigu.com/video/336/) |
| Spring AI Alibaba 不懂 | [尚硅谷 Spring AI Alibaba](https://www.atguigu.com/video/347/) |
| LangChain4j 不懂 | [LangChain4j GitHub](https://github.com/langchain4j) |
| Dify / 知识库不懂 | [Dify 知识库文档](https://docs.dify.ai/zh/use-dify/knowledge/connect-external-knowledge-base) |

## 最推荐的学习顺序

### 第 1 阶段：Redis 和高并发

做：黑马点评。

目标：

- Redis 真正会用。
- 能讲缓存问题。
- 能讲分布式锁。
- 能讲秒杀流程。

不要只背八股，必须把登录、缓存、秒杀、Stream 写出来。

### 第 2 阶段：Java 微服务项目

主线选择：

- 优先：谷粒商城。
- 替代：尚品甄选。
- 教育方向备选：天机学堂 AI 版，学成在线只作参考。

目标：

- 会 Spring Cloud Alibaba。
- 会 Nacos、Feign、Gateway。
- 会 MQ、ES、Redis 在大型项目中的位置。
- 能讲清楚商品、购物车、订单、库存、支付、搜索这些复杂业务流程。
- 为后续 AI 商品知识库 / AI 客服准备真实业务数据。

### 第 3 阶段：Python 工程化

做三个小项目：

- Excel 数据清洗工具。
- 日志分析工具。
- FastAPI 文档解析服务。

目标：

- Python 能解决实际问题。
- 知道 Python 如何辅助 Java 后端。
- 为后面的 AI RAG 做文档处理准备。

### 第 4 阶段：AI / RAG 项目

优先做：

- AI 商品知识库 / AI 客服：和谷粒商城衔接。
- 企业知识库 / 课程资料问答系统：练 RAG、文档解析、权限隔离。
- AI 数据分析助手：练 Tool Calling、Text-to-SQL、报表解释。

进阶再做：

- AI 工作流 / 业务智能体。
- AI 日志 / 运维分析助手。

目标：

- 会 Spring AI 或 LangChain4j。
- 会 Python RAG 快速验证。
- 会文档解析、切片、Embedding、向量检索。
- 会流式问答和引用来源。
- 会 Tool Calling 调用业务接口。
- 会做用户权限隔离和数据安全限制。
- 能讲清楚企业 AI 应用怎么落地。

### 第 5 阶段：读开源项目

选择读：

- RuoYi-Vue-Plus：权限和企业后台。
- mall：电商后台和部署。
- JeecgBoot：低代码、工作流、AI、知识库。

目标：

- 看别人怎么组织项目。
- 学权限、日志、字典、代码生成、Docker。
- 不要陷入从零重写。

## 30 天执行计划

### 第 1 周：黑马点评入门

- Day 1：跑通项目，理解业务。
- Day 2：登录态和 Redis。
- Day 3：商户缓存、缓存穿透。
- Day 4：缓存击穿、互斥锁、逻辑过期。
- Day 5：优惠券秒杀。
- Day 6：分布式锁、一人一单。
- Day 7：复盘 Redis 缓存和秒杀。

### 第 2 周：黑马点评深入

- Day 8：Redis Stream。
- Day 9：异步秒杀下单。
- Day 10：Feed 流。
- Day 11：GEO 附近商铺。
- Day 12：BitMap 签到。
- Day 13：HyperLogLog UV。
- Day 14：整理项目笔记和面试表达。

### 第 3 周：谷粒商城主线

- 跑通环境。
- 看整体微服务架构。
- 做商品模块。
- 做商品搜索。
- 做购物车。
- 做订单。
- 看库存扣减、支付回调和秒杀。
- 整理哪些数据后续可以给 AI 商品知识库使用。

### 第 4 周：Python + AI 预热

- Day 22：Python Excel 工具。
- Day 23：Python 日志分析。
- Day 24：FastAPI 入门。
- Day 25：FastAPI 做文档解析接口。
- Day 26：了解 RAG。
- Day 27：Python 本地 RAG Demo。
- Day 28：Java Spring AI 普通聊天。
- Day 29：Java Spring AI 流式输出。
- Day 30：规划 AI 商品知识库 / AI 客服，把它接到谷粒商城。

## 最终作品组合

建议最后准备 4 到 5 个作品。Java 项目不用堆太多，AI 项目可以多准备几个小而完整的落地方向。

| 作品 | 技术关键词 | 证明什么能力 |
|---|---|---|
| 黑马点评或等价 Redis 项目 | Redis、分布式锁、秒杀、Stream、缓存一致性 | 高并发和缓存能力 |
| 谷粒商城 | Spring Cloud Alibaba、Nacos、Gateway、Feign、MQ、ES、Docker、订单、库存、支付 | 国内企业 Java 微服务能力 |
| FastAPI 文档解析 / AI 服务 | Python、FastAPI、Pydantic、文档解析、Embedding、Java 调 Python | Python 工程化和 AI 服务封装能力 |
| AI 商品知识库 / AI 客服 | Spring AI / LangChain4j、RAG、Tool Calling、商品检索、订单查询、SSE | AI 接入真实业务的能力 |
| 企业知识库 / AI 数据分析助手二选一 | RAG、向量数据库、权限隔离、Text-to-SQL、报表、结构化输出 | 企业 AI 应用落地能力 |

最推荐组合：

> 黑马点评 + 谷粒商城 + FastAPI 文档解析服务 + AI 商品知识库 / AI 客服 + 企业知识库或 AI 数据分析助手

原因：

- 黑马点评补 Redis 和高并发。
- 谷粒商城补国内企业最常见的 Java 微服务、电商业务和中间件整合。
- FastAPI 服务把 Python 能力放到工程里，不只是学语法。
- AI 商品知识库 / AI 客服可以直接吃谷粒商城的数据，作品更自然。
- 企业知识库或 AI 数据分析助手能体现 RAG、Tool Calling、数据权限这些 2026 更有区分度的能力。

## 一句话总结

不要再靠纯理论硬学，也不要继续重复普通 CRUD。先用黑马点评补 Redis 和高并发，再用谷粒商城补国内企业 Java 微服务能力，然后用 Python + Spring AI / LangChain4j 做 AI 商品知识库、企业知识库、AI 数据分析助手，把 Java 正常企业能力和 AI 时代的差异化能力串起来。

