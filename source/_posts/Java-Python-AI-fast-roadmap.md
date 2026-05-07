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
| Java 后端基础 | Spring Boot 3、RESTful API、参数校验、异常处理、接口文档、分层架构 | 苍穹外卖、尚品甄选、学成在线 |
| 数据库 | MySQL、索引、事务、慢 SQL、批量导入、读写一致性 | 电商、在线教育、企业后台 |
| 缓存与高并发 | Redis、缓存穿透、击穿、雪崩、分布式锁、限流、秒杀 | 黑马点评、谷粒商城 |
| 消息队列 | RabbitMQ、RocketMQ、Kafka、异步解耦、死信队列、幂等消费 | 学成在线、黑马头条、电商订单 |
| 搜索 | Elasticsearch、倒排索引、分词、高亮、数据同步 | 学成在线、黑马头条、电商搜索 |
| 文件与媒资 | MinIO / OSS、视频上传、文件预览、资料管理、异步处理 | 学成在线、AI 知识库 |
| 权限安全 | Spring Security、Sa-Token、JWT、RBAC、数据权限、接口防刷 | RuoYi-Vue-Plus、JeecgBoot |
| 微服务 | Spring Cloud Alibaba、Nacos、Gateway、OpenFeign、Sentinel、Seata | 学成在线、谷粒商城、尚品甄选 |
| 工程化 | Docker、Docker Compose、Nginx、CI/CD、日志、Actuator、监控 | mall、学成在线、小谷充电宝 |
| Python 工程化 | FastAPI、pandas、openpyxl、pytest、异步接口、脚本自动化 | FastAPI 服务、Excel 工具、日志分析 |
| AI 应用 | Spring AI、LangChain4j、RAG、Embedding、向量数据库、Tool Calling、MCP、Agent | AI 课程资料问答、企业知识库、AI 助手 |

## 总体项目选择

最终不建议你做十几个项目。建议用“主项目 + 专题项目 + AI 项目”的组合。

| 优先级 | 项目 | 主要学习价值 | 是否建议完整做 |
|---|---|---|---|
| S | 黑马点评 | Redis、高并发、缓存、分布式锁、秒杀 | Redis 阶段建议重点做 |
| S | 学成在线 | 微服务、在线教育、媒资、搜索、MQ、支付 | 微服务阶段优先 |
| S | AI 课程资料问答系统 | Java/Python + AI + RAG，2026 区分度强 | 最终主作品 |
| A | 尚品甄选 / 谷粒商城 | 电商、订单、支付、搜索、秒杀、微服务 | 和学成在线二选一 |
| A | 小谷充电宝 | Java + IoT + MQTT + Spring AI + DeepSeek | 想学新技术时很值得看 |
| B | 黑马头条 | 内容平台、审核、ES、MQ、推荐思想 | 可选 |
| B | 苍穹外卖 | Spring Boot 业务流程、WebSocket、定时任务 | 只看增量模块 |
| B | RuoYi-Vue-Plus | 权限、后台脚手架、企业管理系统基础设施 | 读源码，不一定完整二开 |
| B | JeecgBoot | 低代码、工作流、AI、知识库、MCP 趋势 | 读架构和思想 |
| B | mall / mall-swarm | 开源电商、Docker、权限、Redis、ES、MQ | 适合读源码和部署 |

## 推荐路线

### 路线一：Java 后端 + AI，最推荐

适合你现在的状态：已有 Spring Boot 基础，想学新技术，并且希望以后项目有差异化。

1. 黑马点评：学 Redis 和高并发基础。
2. 学成在线：学微服务、媒资、搜索、MQ、课程业务。
3. AI 课程资料问答系统：学 Java AI / Python AI / RAG。
4. 读 RuoYi-Vue-Plus 或 JeecgBoot：补权限、后台系统、低代码、AI 企业后台趋势。

最终作品组合：

- 在线教育微服务项目。
- AI 课程资料问答系统。
- 一个 Python 文档解析 / 数据处理服务。

### 路线二：Java 电商 + AI 客服

适合你想走电商、高并发、订单支付方向。

1. 黑马点评：Redis、秒杀、分布式锁。
2. 谷粒商城或尚品甄选：电商微服务。
3. AI 商品知识库 / AI 客服：RAG + 商品数据 + 售后问答。
4. mall 开源项目：读成熟电商代码和部署结构。

最终作品组合：

- 电商微服务项目。
- AI 商品知识库 / AI 客服。
- Python 商品数据清洗脚本。

### 路线三：企业后台 + AI 数据分析

适合你想走企业内部系统、SaaS、低代码、管理平台方向。

1. RuoYi-Vue-Plus：权限、系统管理、数据权限。
2. JeecgBoot：低代码、工作流、AI、MCP、知识库。
3. 小谷充电宝：真实业务 + IoT + Spring AI。
4. AI 报表助手：自然语言查数据、生成统计分析。

最终作品组合：

- 企业后台权限系统。
- AI 报表 / 数据分析助手。
- Python 日志分析和报表生成工具。

## Java 项目清单

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

### 2. 学成在线

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

### 3. 谷粒商城 / 尚品甄选

定位：电商、订单、支付、高并发、微服务。

项目价值：电商是 Java 后端最经典的复杂业务之一。商品、购物车、订单、库存、支付、优惠券、秒杀、搜索都能练到。

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

### 4. 小谷充电宝

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

### 5. 黑马头条

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

### 6. 苍穹外卖

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

### 7. RuoYi-Vue-Plus

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

### 8. JeecgBoot

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

### 9. mall / mall-swarm

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

### 1. Java AI 课程资料问答系统

定位：最终主作品之一。

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

### 2. AI 企业知识库

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

### 3. AI 数据分析助手

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

## 不会某个知识点时看什么

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

二选一：

- 教育方向：学成在线。
- 电商方向：谷粒商城 / 尚品甄选。

目标：

- 会 Spring Cloud Alibaba。
- 会 Nacos、Feign、Gateway。
- 会 MQ、ES、Redis 在大型项目中的位置。
- 能讲清楚一个复杂业务流程。

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

做：AI 课程资料问答系统。

目标：

- 会 Spring AI 或 LangChain4j。
- 会 Python RAG 快速验证。
- 会文档解析、切片、Embedding、向量检索。
- 会流式问答和引用来源。
- 能讲清楚企业 AI 应用怎么落地。

### 第 5 阶段：读开源项目

选择读：

- RuoYi-Vue-Plus：权限和企业后台。
- JeecgBoot：低代码、工作流、AI、知识库。
- mall：电商后台和部署。

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

### 第 3 周：选一个 Java 大项目

如果选学成在线：

- 跑通环境。
- 看项目架构。
- 做课程管理。
- 做媒资管理。
- 做搜索服务。
- 做认证授权。

如果选商城：

- 跑通环境。
- 看商品模块。
- 做搜索。
- 做购物车。
- 做订单。
- 看支付和秒杀。

### 第 4 周：Python + AI 预热

- Day 22：Python Excel 工具。
- Day 23：Python 日志分析。
- Day 24：FastAPI 入门。
- Day 25：FastAPI 做文档解析接口。
- Day 26：了解 RAG。
- Day 27：Python 本地 RAG Demo。
- Day 28：Java Spring AI 普通聊天。
- Day 29：Java Spring AI 流式输出。
- Day 30：规划 AI 课程资料问答系统。

## 最终作品组合

建议最后准备 3 个作品，不要贪多。

| 作品 | 技术关键词 | 证明什么能力 |
|---|---|---|
| 黑马点评或等价 Redis 项目 | Redis、分布式锁、秒杀、Stream、缓存一致性 | 高并发和缓存能力 |
| 学成在线 / 谷粒商城 / 尚品甄选二选一 | Spring Cloud Alibaba、Nacos、Gateway、Feign、MQ、ES、Docker | 微服务和复杂业务能力 |
| AI 课程资料问答系统 | Spring AI / LangChain4j、FastAPI、RAG、Embedding、向量数据库、SSE | 2026 Java + AI 应用能力 |

最推荐组合：

> 黑马点评 + 学成在线 + AI 课程资料问答系统

原因：

- 黑马点评补 Redis 和高并发。
- 学成在线补微服务和在线教育业务。
- AI 课程资料问答系统能和在线教育自然衔接，差异化最强。

## 一句话总结

不要再靠纯理论硬学，也不要继续重复普通 CRUD。先用黑马点评学 Redis 和高并发，再用学成在线或商城学微服务和复杂业务，最后用 Java + Python + AI 做一个 RAG 项目，把 2026 企业最关心的工程能力和 AI 应用能力串起来。

