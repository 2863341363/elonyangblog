---
title: "Java-Python-AI"
date: 2026-04-26 13:06:39
categories:
  - 学习路线
description: "2026 年后端学习路线：Java 后端 + Python 工程化 + AI 应用开发"
---

# Java + Python + AI 快速路线

目标：用尽量少的重复项目，完成从 JavaWeb 入门到企业级后端、微服务、Python 工程化、AI 应用开发的过渡。

当前进度：

- Java 基础、MySQL、JavaWeb / SpringBoot 入门已经完成。
- 已经学到黑马 JavaWeb + AI 最新版，并且在没有跟视频敲的情况下自己写过一遍 Itlias。
- 现在不建议继续完整跟苍穹外卖，因为它和 Itlias 在 Controller / Service / Mapper、分页、登录、文件上传、基础 CRUD 上重复度较高。

核心策略：

- 少做重复 CRUD，多补企业级场景。
- 把 Itlias 当作自己的主项目持续升级，而不是每学一个视频就从零跟一个类似项目。
- 后续学习重点放在 Redis、MQ、ES、Docker、微服务、AI / RAG 这些能拉开差距的能力上。

---

## 1. 已完成：JavaWeb / SpringBoot 入门

已经掌握：

- HTTP / RESTful API
- SpringBoot
- SpringMVC
- MyBatis
- Controller / Service / Mapper 分层
- JWT 登录认证
- 拦截器
- 统一返回结果
- 统一异常处理
- 分页查询
- 文件上传
- 接口调试

已完成项目：

| 项目 | 说明 |
|---|---|
| Itlias 教学管理系统 | JavaWeb 入门项目，已经自己独立写过一遍，说明基础 Web 开发已经过关 |

阶段结论：

- 不需要再通过苍穹外卖来证明自己会写 SpringBoot 基础业务。
- 如果特别想看苍穹外卖，可以只快进看 Redis、WebSocket、定时任务、订单状态流转等增量部分，不建议完整跟敲。

---

## 2. 下一步优先级最高：Redis + 黑马点评

推荐课程：

- [黑马程序员 Redis 入门到实战 + 黑马点评](https://www.bilibili.com/video/BV1cr4y1671t/)

为什么先学这个：

- 和 Itlias 重复度低。
- 能从普通 CRUD 进入高并发、缓存、分布式锁、秒杀等企业常见场景。
- 黑马点评是 Redis 实战里非常经典的项目，比继续做苍穹外卖更适合当前阶段。

重点学：

- Redis 常用数据结构
- SpringBoot 整合 Redis
- 缓存穿透、缓存击穿、缓存雪崩
- 缓存更新策略
- 分布式锁
- Redis 实现秒杀
- Redis Stream / 消息队列思想
- 共享 Session / 登录态保存
- Redis 主从、哨兵、集群的基本认识

配套练习：

| 练习 | 目标 |
|---|---|
| 给 Itlias 加 Redis 缓存 | 缓存部门列表、字典数据、热点查询 |
| 给 Itlias 加登录态缓存 | 用 Redis 保存 token 黑名单、验证码或登录状态 |
| 做黑马点评核心模块 | 重点做登录、商户缓存、优惠券秒杀、分布式锁 |

阶段产出：

- 一个 `Itlias + Redis` 改造版本。
- 一份 Redis 高频场景笔记：穿透、击穿、雪崩、分布式锁、秒杀。

---

## 3. 企业中间件：RabbitMQ / Elasticsearch / MinIO

这阶段不要追求“每个技术都做完整大项目”，而是用 Itlias 或一个小业务把技术接进去。

### 3.1 RabbitMQ

推荐课程：

- [黑马程序员 RabbitMQ 入门到实战教程](https://www.bilibili.com/video/BV1mN4y1Z7t9)

重点学：

- MQ 的作用：异步、削峰、解耦
- 交换机模型：Direct、Fanout、Topic
- 消息可靠投递
- 消费者确认
- 死信队列
- 延迟队列
- 重复消费与幂等

配套练习：

| 练习 | 目标 |
|---|---|
| Itlias 操作日志异步写入 | 用户新增、修改、删除后投递日志消息 |
| 文件导入异步处理 | 上传 Excel 后由消费者异步解析入库 |
| 延迟任务 Demo | 模拟任务超时关闭、通知提醒 |

### 3.2 Elasticsearch

推荐课程：

- [尚硅谷 Elasticsearch 入门到精通](https://www.bilibili.com/video/BV1hh411D7sb/)
- [黑马 ElasticSearch 教程](https://www.bilibili.com/video/BV1Gh411j7d6/)

重点学：

- 倒排索引
- 索引、映射、文档
- DSL 查询
- 分词
- 高亮搜索
- 聚合查询
- SpringBoot 整合 ES

配套练习：

| 练习 | 目标 |
|---|---|
| Itlias 课程资料搜索 | 把课程、员工、部门等信息同步到 ES，做全文检索 |
| 搜索高亮 | 搜索姓名、课程名、说明字段时高亮关键词 |

### 3.3 MinIO / OSS

重点学：

- 文件上传
- 文件预览
- 私有桶与临时访问链接
- SpringBoot 整合对象存储

配套练习：

| 练习 | 目标 |
|---|---|
| Itlias 附件管理 | 员工头像、课程资料、Excel 导入文件统一存储到 MinIO |

---

## 4. 部署和工程化：Docker / Nginx / Linux / 测试

推荐课程：

- [黑马 Docker](https://www.bilibili.com/video/BV1HP4118797/)
- [尚硅谷 Nginx 教程](https://www.bilibili.com/video/BV1yS4y1N76R/)
- [JUnit 5 官方文档](https://docs.junit.org/5.11.1/user-guide/index.html)

重点学：

- Linux 常用命令
- Dockerfile
- Docker Compose
- Nginx 反向代理
- 前后端分离部署
- 多环境配置
- 日志查看
- JUnit / SpringBootTest
- Spring Boot Actuator

配套练习：

| 练习 | 目标 |
|---|---|
| Itlias Docker 化 | 写 Dockerfile，打包 SpringBoot 项目 |
| Docker Compose 一键启动 | 一次启动 Java、MySQL、Redis、RabbitMQ、MinIO |
| Nginx 部署前端 | Nginx 托管前端静态资源，反向代理后端接口 |
| 核心接口测试 | 给登录、分页查询、新增、删除写基础测试 |

阶段产出：

- 一个可以一键启动的 Itlias 企业化版本。
- 简历上可以写：`Docker Compose 部署 SpringBoot + MySQL + Redis + RabbitMQ + MinIO`。

---

## 5. 微服务阶段：二选一，不要全都跟

如果想继续黑马体系：

- [黑马 学成在线](https://www.bilibili.com/video/BV1j8411N7Bm/)
- [黑马 黑马头条](https://www.bilibili.com/video/BV1Qs4y1v7x4/)

如果想走尚硅谷体系：

- [尚硅谷 2025 SpringCloud](https://www.bilibili.com/video/av113820458553104/)
- [尚硅谷 尚品甄选](https://www.bilibili.com/video/BV1NF411S7DS/)

推荐选择：

| 选择 | 适合情况 |
|---|---|
| 学成在线 | 想做在线教育业务，技术栈完整，适合后续接 AI 知识库 |
| 黑马头条 | 想练内容平台、推荐、审核、搜索、异步处理 |
| 尚品甄选 | 喜欢尚硅谷讲课风格，想做电商 / 微服务项目 |
| 只看 SpringCloud 2025 | 不想跟大项目，只想快速建立微服务知识框架 |

我自己的推荐：

- 第一选择：`学成在线`，因为它和后续 AI 课程资料问答系统最容易衔接。
- 第二选择：`尚品甄选`，如果你更喜欢尚硅谷的节奏。
- 不建议同时完整跟多个微服务大项目，容易陷入“视频敲代码循环”。

微服务重点学：

- Spring Cloud Alibaba
- Nacos 注册中心 / 配置中心
- OpenFeign 远程调用
- Gateway 网关
- Sentinel 限流熔断
- Seata 分布式事务的基本思想
- 微服务拆分原则
- 统一认证授权
- 服务间调用链路

阶段产出：

- 一个能讲清楚架构图、模块边界、技术选型的大项目。
- 一份项目面试稿：业务背景、技术架构、核心难点、问题排查。

---

## 6. Python 工程化

Python 不需要和 Java 抢主线，定位为 AI、数据处理、自动化脚本能力。

推荐课程：

- [黑马 Python 入门](https://www.bilibili.com/video/BV1o4411M71o/)
- [尚硅谷 Python 零基础](https://www.bilibili.com/video/BV1eZ421b7ag/)
- [FastAPI 官方文档](https://fastapi.org/)

重点学：

- Python 基础语法
- 文件读写
- requests
- pandas
- openpyxl
- FastAPI
- pytest

配套练习：

| 练习 | 目标 |
|---|---|
| Excel 成绩统计工具 | 用 pandas / openpyxl 处理表格 |
| 日志分析工具 | 分析接口耗时、错误日志、访问量 |
| FastAPI 小服务 | 给 Java 项目提供一个 Python API 服务 |

阶段产出：

- 一个 Python 自动化工具。
- 一个 FastAPI 小服务。

---

## 7. AI 应用开发：Java 优先，Python 辅助

推荐课程：

- [尚硅谷 Spring AI Alibaba](https://www.bilibili.com/video/BV1pvWGznEqh/)
- [尚硅谷 LangChain4J](https://www.bilibili.com/video/BV1mX3NzrEu6/)
- [小智医疗：Java 大模型应用项目 LangChain4J + RAG](https://www.bilibili.com/list/302417610?bvid=BV1cpLTz1EVp&oid=114373888641111)
- [黑马 AI + 若依](https://www.bilibili.com/video/BV1pf421B71v/)

重点学：

- Prompt 基础
- 大模型 API 调用
- 流式输出
- JSON 结构化输出
- Embedding
- 向量数据库
- RAG
- Function Calling / Tool Calling 思想
- 简单 Agent
- Java 调用 Python AI 服务

推荐项目方向：

| 项目 | 说明 |
|---|---|
| AI 课程资料问答系统 | 上传课程资料，基于 RAG 做问答，最适合和学成在线衔接 |
| AI Itlias 助手 | 给 Itlias 增加智能查询、智能报表、员工信息问答 |
| 企业文档知识库 | 文档上传、解析、向量化、检索、问答、引用来源 |

阶段产出：

- 一个真正区别于普通 CRUD 的 AI 项目。
- 简历关键词：`Spring AI / LangChain4J / RAG / Embedding / 向量检索 / 流式问答`。

---

## 8. 最终推荐作品

最终建议准备 3 个作品，不要贪多。

| 作品 | 证明能力 |
|---|---|
| Itlias 企业化改造版 | JavaWeb、SpringBoot、MyBatis、Redis、MQ、ES、MinIO、Docker 部署 |
| 学成在线 / 尚品甄选二选一 | 微服务、SpringCloud Alibaba、网关、远程调用、注册配置、复杂业务 |
| AI 课程资料问答系统 | Java + AI、RAG、向量数据库、文档解析、流式输出 |

简历组合建议：

- 主项目：AI 课程资料问答系统。
- 辅项目：Itlias 企业化改造版。
- 扩展项目：学成在线或尚品甄选。

这样组合比“管理系统 + 外卖系统 + 又一个 CRUD 系统”更有辨识度。

---

## 推荐执行顺序

最建议的路线：

1. 黑马 Redis + 黑马点评
2. 给 Itlias 加 Redis 缓存和登录态能力
3. RabbitMQ 入门到实战
4. 给 Itlias 加异步日志 / 异步导入
5. Elasticsearch 入门
6. 给 Itlias 加全文搜索
7. Docker + Nginx，把 Itlias 部署起来
8. 学成在线或尚品甄选二选一
9. Python + FastAPI 小服务
10. Spring AI / LangChain4J / RAG
11. 做 AI 课程资料问答系统

一句话版本：

> 现在不要继续刷重复项目，先用 Redis / MQ / ES / Docker 把 Itlias 升级成企业化项目，再选一个微服务项目建立架构能力，最后做 Java + AI 的 RAG 项目作为主作品。
