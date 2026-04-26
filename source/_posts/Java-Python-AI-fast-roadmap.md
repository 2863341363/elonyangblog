---
title: "Java-Python-AI"
date: 2026-04-26 13:06:39
categories:
  - 学习路线
description: "这是2026年后端的路线"
---

# Java + Python + AI 企业需求学习路线

目标：**按学习阶段推进。每个阶段配学习视频和学习资料；能做项目的阶段，直接在该阶段下面放项目。**

---

## 1. Java 基础

要学：

- Java 语法
- 面向对象
- 集合
- 异常
- 泛型
- Maven
- Git

学习视频：

- [黑马程序员 Java 零基础](https://search.bilibili.com/all?keyword=%E9%BB%91%E9%A9%AC%E7%A8%8B%E5%BA%8F%E5%91%98%20Java%20%E9%9B%B6%E5%9F%BA%E7%A1%80)
- [尚硅谷 Java 零基础](https://search.bilibili.com/all?keyword=%E5%B0%9A%E7%A1%85%E8%B0%B7%20Java%20%E9%9B%B6%E5%9F%BA%E7%A1%80)

学习资料：

- [Oracle Java 文档](https://docs.oracle.com/en/java/)
- [Java Tutorials](https://docs.oracle.com/javase/tutorial/)

可做项目：

| 项目 | 简介 |
|---|---|
| 学生管理系统 | 控制台项目，练 Java 基础、集合、面向对象 |
| 图书管理系统 | 练增删改查、类设计、菜单交互 |

---

## 2. MySQL 数据库

要学：

- MySQL 基础
- 表设计
- 多表查询
- 索引
- 事务
- SQL 优化基础

学习视频：

- [黑马 MySQL 教程](https://search.bilibili.com/all?keyword=%E9%BB%91%E9%A9%AC%20MySQL%20%E6%95%99%E7%A8%8B)
- [尚硅谷 MySQL 教程](https://search.bilibili.com/all?keyword=%E5%B0%9A%E7%A1%85%E8%B0%B7%20MySQL%20%E6%95%99%E7%A8%8B)

学习资料：

- [MySQL 官方文档](https://dev.mysql.com/doc/)

可做项目：

| 项目 | 简介 |
|---|---|
| 学生信息数据库 | 练建表、主键、外键、增删改查 |
| 图书借阅数据库 | 练多表关系、连接查询、事务 |

---

## 3. JavaWeb / SpringBoot 入门

要学：

- HTTP
- RESTful API
- SpringBoot
- SpringMVC
- MyBatis
- Controller / Service / Mapper 分层
- JWT
- 拦截器
- 统一返回
- 统一异常处理
- 接口调试

学习视频：

- [黑马 JavaWeb + AI / Tlias](https://search.bilibili.com/all?keyword=%E9%BB%91%E9%A9%AC%E7%A8%8B%E5%BA%8F%E5%91%98%20AI%2BJavaWeb%20Tlias)
- [尚硅谷 SpringBoot3](https://www.bilibili.com/video/av996438904/)
- [尚硅谷 SpringMVC](https://www.bilibili.com/video/BV1Ry4y1574R/)
- [尚硅谷 MyBatis](https://www.bilibili.com/video/av894307478/)

学习资料：

- [Spring Boot 文档](https://docs.spring.io/spring-boot/documentation.html)
- [Spring Web MVC 文档](https://docs.spring.io/spring-framework/reference/web/webmvc.html)
- [MyBatis 文档](https://mybatis.org/mybatis-3/getting-started.html)

可做项目：

| 项目 | 简介 | 项目资料 |
|---|---|---|
| Tlias 教学管理系统 | JavaWeb 入门项目，练接口开发、MyBatis、登录校验、三层架构 | 课程配套资料一般在 B 站简介或黑马资料领取入口 |
| 校园后台管理系统 | 自己仿写的管理系统，适合练 CRUD、权限、分页、条件查询 | 可参考 Tlias 结构自行扩展 |

---

## 4. Java 企业业务开发

要学：

- 复杂业务流程
- 多角色系统
- DTO / VO / Entity
- 文件上传
- 定时任务
- WebSocket
- 接口文档
- 表设计
- 业务状态流转

学习视频：

- [黑马《苍穹外卖》](https://www.bilibili.com/video/BV1TP411v7v6/)
- [黑马《瑞吉外卖》](https://www.bilibili.com/video/BV13a411q753/)

学习资料：

- [sky-take-out 开源参考](https://github.com/shuhongfan/sky-take-out)
- [Spring Boot 文档](https://docs.spring.io/spring-boot/documentation.html)
- [Spring Boot Actuator](https://docs.spring.io/spring-boot/api/rest/actuator/index.html)

可做项目：

| 项目 | 简介 | 项目资料 |
|---|---|---|
| 苍穹外卖 | 企业级 SpringBoot 项目，练外卖业务、订单、套餐、Redis、文件上传、WebSocket | B 站课程简介通常有资料领取方式；可参考 sky-take-out |
| 瑞吉外卖 | 比苍穹外卖更轻一点，适合过渡 | B 站课程简介通常有资料领取方式 |
| 宿舍报修系统 | 校园业务项目，适合自己改造成简历项目 | 可参考苍穹外卖的分层和接口设计 |

---

## 5. 企业中间件

要学：

- Redis：缓存、验证码、分布式锁
- RabbitMQ：异步任务、消息队列、死信队列
- Elasticsearch：全文搜索
- MinIO / OSS：文件存储

学习视频：

- [黑马 Redis](https://www.bilibili.com/video/BV15C4y1b7RU/)
- [黑马 RabbitMQ](https://www.bilibili.com/video/av373477967/)
- [黑马 Elasticsearch](https://www.bilibili.com/video/BV1Gh411j7d6/)
- [MinIO/OSS 教程搜索](https://search.bilibili.com/all?keyword=SpringBoot%20MinIO%20OSS%20%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0)

学习资料：

- [Redis 文档](https://redis.io/docs/)
- [RabbitMQ Tutorials](https://www.rabbitmq.com/tutorials)
- [Elasticsearch Getting Started](https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html)
- [MinIO 文档](https://min.io/docs/minio/linux/index.html)

可做项目：

| 项目 | 简介 |
|---|---|
| 给苍穹外卖加 Redis 缓存 | 缓存菜品、套餐、店铺状态等热点数据 |
| 订单异步通知系统 | 用 RabbitMQ 处理订单通知、超时取消、消息重试 |
| 资料搜索系统 | 用 Elasticsearch 做全文搜索 |
| 文件管理系统 | 用 MinIO/OSS 做文件上传、下载、预览 |

---

## 6. 部署和工程化

要学：

- Linux 常用命令
- Docker
- Docker Compose
- Nginx
- 日志排查
- JUnit
- Spring Boot Actuator

学习视频：

- [Linux 教程搜索](https://search.bilibili.com/all?keyword=Linux%20%E9%9B%B6%E5%9F%BA%E7%A1%80%20%E9%BB%91%E9%A9%AC%20%E5%B0%9A%E7%A1%85%E8%B0%B7)
- [黑马 Docker](https://www.bilibili.com/video/BV1CJ411T7BK/)
- [黑马 Nginx](https://www.bilibili.com/video/BV1ov41187bq/)
- [JUnit 教程搜索](https://search.bilibili.com/all?keyword=JUnit5%20SpringBoot%20%E6%95%99%E7%A8%8B)

学习资料：

- [Docker Get Started](https://docs.docker.com/get-started/)
- [Nginx 文档](https://nginx.org/en/docs/)
- [JUnit 5 文档](https://docs.junit.org/5.11.1/user-guide/index.html)
- [Spring Boot Actuator](https://docs.spring.io/spring-boot/api/rest/actuator/index.html)

可做项目：

| 项目 | 简介 |
|---|---|
| Java 项目 Docker 化 | 给 SpringBoot 项目写 Dockerfile |
| Docker Compose 一键启动 | 一次启动 Java、MySQL、Redis、RabbitMQ 等服务 |
| Nginx 前后端部署 | 部署 Vue 前端，反向代理 SpringBoot 后端 |

---

## 7. Python 基础和工程化

要学：

- Python 基础
- 文件读写
- `requests`
- `pandas`
- `openpyxl`
- FastAPI
- pytest

学习视频：

- [黑马 Python 入门](https://www.bilibili.com/video/BV1o4411M71o/)
- [尚硅谷 Python 零基础](https://www.bilibili.com/video/BV1eZ421b7ag/)
- [FastAPI 项目教程搜索](https://search.bilibili.com/all?keyword=FastAPI%20%E9%A1%B9%E7%9B%AE%E5%AE%9E%E6%88%98)

学习资料：

- [Python 文档](https://docs.python.org/)
- [pandas 文档](https://pandas.pydata.org/docs/)
- [openpyxl 文档](https://openpyxl.readthedocs.io/en/stable/)
- [FastAPI 文档](https://fastapi.org/)
- [pytest 文档](https://docs.pytest.org/en/stable/)

可做项目：

| 项目 | 简介 |
|---|---|
| Excel 成绩统计工具 | 用 pandas/openpyxl 处理表格 |
| 日志分析工具 | 统计接口访问、错误日志、耗时 |
| FastAPI 小服务 | 提供简单 API，练 Python 服务化 |

---

## 8. AI 应用开发

要学：

- Prompt
- 大模型 API
- 流式输出
- JSON 输出
- Embedding
- RAG
- 向量数据库
- 简单 Agent

学习视频：

- [RAG + LangChain 教程搜索](https://search.bilibili.com/all?keyword=RAG%20LangChain%20%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91)
- [黑马 AI 大模型课程搜索](https://search.bilibili.com/all?keyword=%E9%BB%91%E9%A9%AC%E7%A8%8B%E5%BA%8F%E5%91%98%20AI%E5%A4%A7%E6%A8%A1%E5%9E%8B%20RAG)
- [Spring AI RAG 项目](https://www.bilibili.com/video/BV1SJisBVECA/)

学习资料：

- [OpenAI API Quickstart](https://platform.openai.com/docs/quickstart/quickstart)
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook)
- [LangChain RAG 文档](https://docs.langchain.com/oss/python/langchain/rag)
- [LangChain Retrieval 文档](https://docs.langchain.com/oss/python/langchain/retrieval)
- [Chroma 文档](https://docs.trychroma.com/docs/overview/getting-started)
- [Spring AI 文档](https://docs.spring.io/spring-ai/reference/)

可做项目：

| 项目 | 简介 | 项目资料 |
|---|---|---|
| AI 聊天 API | 用 FastAPI 封装大模型聊天接口 | OpenAI Quickstart / Cookbook |
| AI 简历优化助手 | 输入简历，输出优化建议 | OpenAI Cookbook |
| RAG 文档问答 Demo | 上传文档后基于内容问答 | [pixegami LangChain RAG 项目](https://github.com/pixegami/langchain-rag-tutorial) |

---

## 9. Java + AI 综合应用

要学：

- Java 调用 Python AI 服务
- 文件上传到 MinIO/OSS
- RabbitMQ 异步解析文档
- 向量入库
- RAG 问答
- Redis 缓存热门问答
- Elasticsearch 搜索资料
- Docker Compose 部署整套服务

学习视频：

- [黑马 AI + 若依](https://www.bilibili.com/video/BV1pf421B71v/)
- [Java 版 AI 大模型应用开发](https://www.bilibili.com/video/BV17MfPYcEbH/)
- [Spring AI RAG 项目](https://www.bilibili.com/video/BV1SJisBVECA/)

学习资料：

- [RuoYi 官方仓库](https://github.com/yangzongzhuan/RuoYi)
- [Spring AI 文档](https://docs.spring.io/spring-ai/reference/)
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook)
- [LangChain RAG 文档](https://docs.langchain.com/oss/python/langchain/rag)

可做项目：

| 项目 | 简介 |
|---|---|
| AI 课程资料问答系统 | 最推荐最终项目，贴近企业知识库、智能客服、内部文档问答 |
| AI + 后台管理系统 | 基于若依或自建后台，把 AI 问答、资料管理、用户权限整合起来 |
| 企业文档知识库 | 更偏企业场景，支持文档上传、检索、问答、引用来源 |

---

## 10. 微服务

建议放后面学。完成 JavaWeb、企业项目、中间件、部署、AI 综合项目后再学。

要学：

- Spring Cloud
- Spring Cloud Alibaba
- Nacos
- OpenFeign
- Gateway
- Sentinel
- Seata

学习视频：

- [尚硅谷 SpringCloud 2025](https://www.bilibili.com/video/av113820458553104/)
- [黑马 SpringCloud 微服务课程搜索](https://search.bilibili.com/all?keyword=%E9%BB%91%E9%A9%AC%E7%A8%8B%E5%BA%8F%E5%91%98%20SpringCloud%20%E5%BE%AE%E6%9C%8D%E5%8A%A1)

学习资料：

- [Spring Cloud 文档](https://docs.spring.io/spring-cloud/docs/current/reference/html/documentation-overview.html)
- [Spring Cloud 官网](https://spring.io/cloud/)

---

## 最终推荐作品

建议最终准备 3 个作品：

| 作品 | 证明能力 |
|---|---|
| 苍穹外卖 / 校园管理系统 | Java 后端、业务开发、数据库设计 |
| Python 数据处理工具 | Python 自动化、数据处理 |
| AI 课程资料问答系统 | Java + Python + AI + 中间件整合 |

