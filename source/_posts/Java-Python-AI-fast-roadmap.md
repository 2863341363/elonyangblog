---
title: "Java-python-AI"
date: 2026-04-26 11:50:27
categories:
  - 学习路线
description: "这篇文章包括了从基础入门到技术飞跃的路线，跟着这套路线，成为代码之神吧。"
---

# Java + Python + AI 企业向最快学习路线图（学生版）

目标：**6 个月内做出 1 个能放简历的 AI + Java 后端项目，并补齐企业常用技术。**

核心思路：

> Java 做主后端，Python 做 AI/自动化，AI 做项目亮点，中间件和部署补企业能力。

---

## 总路线

| 阶段 | 时间 | 学什么 | 产出 |
|---|---:|---|---|
| 1 | 2-4 周 | Java 基础 + MySQL + Git | 简单管理系统 |
| 2 | 4-6 周 | JavaWeb + SpringBoot + MyBatis | Tlias / 苍穹外卖 |
| 3 | 4-6 周 | Redis + Linux + Docker + Nginx | 可部署的 Java 项目 |
| 4 | 2-4 周 | MQ + ES + 对象存储 + 安全 | 企业功能增强版项目 |
| 5 | 2-3 周 | Python 基础 + FastAPI | Python 小服务/工具 |
| 6 | 3-5 周 | AI API + RAG + 向量库 | AI 问答 Demo |
| 7 | 4-8 周 | 综合项目 | AI 课程资料问答系统 |

---

## 第 1 阶段：Java 基础

### 要学

- Java 语法、面向对象、集合、异常、泛型
- Maven
- MySQL：增删改查、多表查询、索引、事务
- Git：提交、分支、远程仓库

### 视频资料

- [黑马程序员 Java 零基础教程](https://search.bilibili.com/all?keyword=%E9%BB%91%E9%A9%AC%E7%A8%8B%E5%BA%8F%E5%91%98%20Java%20%E9%9B%B6%E5%9F%BA%E7%A1%80)
- [尚硅谷 Java 零基础教程](https://search.bilibili.com/all?keyword=%E5%B0%9A%E7%A1%85%E8%B0%B7%20Java%20%E9%9B%B6%E5%9F%BA%E7%A1%80)

### 学习文档

- [Oracle Java 文档](https://docs.oracle.com/en/java/)
- [Java Tutorials](https://docs.oracle.com/javase/tutorial/)

### 产出

- 学生管理系统
- 图书管理系统
- 记账系统

---

## 第 2 阶段：JavaWeb + SpringBoot

### 要学

- HTTP、RESTful API
- SpringBoot、SpringMVC、MyBatis
- Controller / Service / Mapper 分层
- 登录校验、JWT、拦截器
- 统一返回、统一异常处理
- 接口文档和接口调试

### 视频资料

先学入门项目：

- [黑马程序员 JavaWeb + AI / Tlias 项目](https://search.bilibili.com/all?keyword=%E9%BB%91%E9%A9%AC%E7%A8%8B%E5%BA%8F%E5%91%98%20AI%2BJavaWeb%20Tlias)

再学企业项目：

- [黑马程序员《苍穹外卖》](https://www.bilibili.com/video/BV1TP411v7v6/)

补原理：

- [尚硅谷 SpringBoot3](https://www.bilibili.com/video/av996438904/)
- [尚硅谷 SpringMVC](https://www.bilibili.com/video/BV1Ry4y1574R/)
- [尚硅谷 MyBatis](https://www.bilibili.com/video/av894307478/)

### 学习文档

- [Spring Boot 官方文档](https://docs.spring.io/spring-boot/documentation.html)
- [Spring Web MVC 官方文档](https://docs.spring.io/spring-framework/reference/web/webmvc.html)
- [MyBatis 官方入门文档](https://mybatis.org/mybatis-3/getting-started.html)

### 产出

1. 跟完 Tlias。
2. 不看视频复刻 Tlias 核心功能。
3. 学苍穹外卖。
4. 自己加 2-3 个功能。

---

## 第 3 阶段：企业必备中间件和部署

### 必学优先级

| 技术 | 为什么企业需要 | 你要掌握到什么程度 |
|---|---|---|
| Redis | 缓存、验证码、登录状态、热点数据 | 会用、会缓存、懂过期、懂常见问题 |
| Linux | 服务器基本环境 | 会部署、查日志、管理进程 |
| Docker | 环境一致、快速部署 | 会写 Dockerfile、会 Docker Compose |
| Nginx | 反向代理、静态资源、负载均衡 | 会部署前端、代理后端接口 |

### 视频资料

- [黑马程序员 Redis 教程](https://www.bilibili.com/video/BV15C4y1b7RU/)
- [黑马程序员 Docker 教程](https://www.bilibili.com/video/BV1CJ411T7BK/)
- [黑马程序员 Nginx 教程](https://www.bilibili.com/video/BV1ov41187bq/)
- [B 站 Linux 教程搜索](https://search.bilibili.com/all?keyword=Linux%20%E9%9B%B6%E5%9F%BA%E7%A1%80%20%E9%BB%91%E9%A9%AC%20%E5%B0%9A%E7%A1%85%E8%B0%B7)

### 学习文档

- [Redis 官方文档](https://redis.io/docs/)
- [Redis Quick Start](https://redis.io/learn/howtos/quick-start)
- [Docker Get Started](https://docs.docker.com/get-started/)
- [Nginx 官方文档](https://nginx.org/en/docs/)
- [Linux man-pages](https://www.kernel.org/doc/man-pages/)

### 产出

把苍穹外卖或自己的 Java 项目部署起来：

- 后端用 Docker 跑
- MySQL / Redis 用 Docker Compose 跑
- 前端用 Nginx 部署
- 能在浏览器访问完整项目

---

## 第 4 阶段：企业进阶组件

### 要学

| 技术 | 典型场景 | 学到什么程度 |
|---|---|---|
| RabbitMQ | 异步通知、订单超时、削峰 | 会生产/消费消息，会重试和死信 |
| Elasticsearch | 商品搜索、全文检索 | 会建索引、写查询、接 SpringBoot |
| MinIO / OSS | 图片、文件上传 | 会上传、下载、访问控制 |
| Spring Security | 认证、授权、权限控制 | 会登录认证、接口权限 |
| JUnit / 测试 | 企业开发基本要求 | 会写 Service/Controller 测试 |
| Actuator | 健康检查、监控入口 | 会看健康状态和应用信息 |

### 视频资料

- [黑马程序员 RabbitMQ 教程](https://www.bilibili.com/video/av373477967/)
- [黑马 Java Elasticsearch 教程](https://www.bilibili.com/video/BV1Gh411j7d6/)
- [B 站 Spring Security 教程搜索](https://search.bilibili.com/all?keyword=Spring%20Security%20SpringBoot%20%E6%95%99%E7%A8%8B)
- [B 站 MinIO/OSS 教程搜索](https://search.bilibili.com/all?keyword=SpringBoot%20MinIO%20OSS%20%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0)

### 学习文档

- [RabbitMQ Tutorials](https://www.rabbitmq.com/tutorials)
- [Elasticsearch Getting Started](https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html)
- [MinIO Python Quickstart](https://min.io/docs/minio/linux/developers/python/minio-py.html)
- [Spring Security 官方文档](https://docs.spring.io/spring-security/reference/)
- [Spring Security 入门指南](https://spring.io/guides/gs/securing-web)
- [JUnit 5 User Guide](https://docs.junit.org/5.11.1/user-guide/index.html)
- [Spring Boot Actuator API](https://docs.spring.io/spring-boot/api/rest/actuator/index.html)

### 产出

在项目里加企业功能：

- Redis 缓存首页/菜品/课程资料
- RabbitMQ 处理异步任务
- ES 做搜索
- MinIO/OSS 做文件上传
- Spring Security 做权限控制
- JUnit 写核心业务测试

---

## 第 5 阶段：Python 工程能力

### 要学

- Python 基础语法
- 文件读写
- `requests`
- `pandas`
- `FastAPI`
- `pytest`
- 虚拟环境
- 环境变量管理

### 视频资料

- [尚硅谷 Python 零基础](https://www.bilibili.com/video/BV1eZ421b7ag/)
- [黑马程序员 Python 入门](https://www.bilibili.com/video/BV1o4411M71o/)

### 学习文档

- [Python 官方文档](https://docs.python.org/)
- [FastAPI 官方文档](https://fastapi.org/)
- [pytest 官方文档](https://docs.pytest.org/en/stable/)

### 产出

做 1-2 个小工具：

- Excel 成绩统计工具
- 批量整理课程资料工具
- 简历关键词分析工具

再做一个 Python API 服务：

- FastAPI 提供 `/chat`
- Java 后端调用 Python AI 服务

---

## 第 6 阶段：AI 应用开发

### 要学

- Prompt
- 大模型 API
- 流式输出
- JSON 输出
- Function calling / Tool calling
- Embedding
- RAG
- 向量数据库
- 简单 Agent

### 视频资料

- [黑马程序员 AI 大模型课程搜索](https://search.bilibili.com/all?keyword=%E9%BB%91%E9%A9%AC%E7%A8%8B%E5%BA%8F%E5%91%98%20AI%E5%A4%A7%E6%A8%A1%E5%9E%8B%20RAG)
- [B 站 RAG + LangChain 教程搜索](https://search.bilibili.com/all?keyword=RAG%20LangChain%20%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91)

### 学习文档

- [OpenAI API Quickstart](https://platform.openai.com/docs/quickstart/quickstart)
- [LangChain RAG 文档](https://docs.langchain.com/oss/python/langchain/rag)
- [LangChain Retrieval 文档](https://docs.langchain.com/oss/python/langchain/retrieval)
- [Chroma Getting Started](https://docs.trychroma.com/docs/overview/getting-started)

### 产出

先做一个：

- AI 聊天机器人
- AI 简历优化助手
- AI 课程资料问答 Demo

---

## 第 7 阶段：综合项目

### 最推荐项目

**AI 课程资料问答系统**

这个项目适合学生，也能覆盖企业常用技术。

### 技术栈

| 模块 | 技术 |
|---|---|
| 前端 | Vue3 |
| 后端 | Java + SpringBoot |
| 数据库 | MySQL |
| ORM | MyBatis |
| 缓存 | Redis |
| 搜索 | Elasticsearch |
| 消息队列 | RabbitMQ |
| 文件存储 | MinIO / OSS |
| AI 服务 | Python + FastAPI |
| 大模型 | OpenAI API 或兼容 API |
| 知识库 | RAG |
| 向量库 | Chroma / Milvus / pgvector |
| 部署 | Linux + Docker + Nginx |

### 功能

基础版：

- 用户登录
- 上传课程资料
- 文档解析
- AI 问答
- 历史记录

企业增强版：

- Redis 缓存热门问答
- RabbitMQ 异步解析文档
- ES 搜索资料
- MinIO 存储文件
- Spring Security 权限控制
- Docker Compose 一键启动
- Nginx 反向代理
- Actuator 健康检查
- JUnit / pytest 测试

---

## 微服务要不要学

要学，但建议放后面。

### 什么时候学

等你完成：

1. JavaWeb / Tlias
2. 苍穹外卖
3. Redis + Docker + Nginx
4. RabbitMQ + ES
5. 一个完整综合项目

再学微服务。

### 要学什么

- Spring Cloud
- Spring Cloud Alibaba
- Nacos
- OpenFeign
- Gateway
- Sentinel
- Seata

### 学习资料

- [Spring Cloud 官方文档](https://docs.spring.io/spring-cloud/docs/current/reference/html/documentation-overview.html)
- [Spring Cloud 官网](https://spring.io/cloud/)
- [尚硅谷 SpringCloud 2025](https://www.bilibili.com/video/av113820458553104/)
- [B 站黑马微服务课程搜索](https://search.bilibili.com/all?keyword=%E9%BB%91%E9%A9%AC%E7%A8%8B%E5%BA%8F%E5%91%98%20SpringCloud%20%E5%BE%AE%E6%9C%8D%E5%8A%A1)

---

## 最短执行顺序

1. 黑马 JavaWeb / Tlias
2. 不看视频复刻 Tlias
3. 苍穹外卖
4. Redis
5. Linux + Docker + Nginx
6. RabbitMQ
7. Elasticsearch
8. MinIO / OSS
9. Spring Security + JUnit
10. Python 基础 + FastAPI
11. AI API
12. RAG + 向量库
13. AI 课程资料问答系统
14. 部署、写 README、放简历

---

## 每天怎么学

每天 2 小时：

- 60 分钟看课
- 45 分钟写代码
- 15 分钟总结

每天 4 小时：

- 90 分钟看课
- 90 分钟写代码
- 40 分钟自己改功能
- 20 分钟提交 Git 和写笔记

---

## 最终作品组合

你最终至少要有：

1. **Java 后端项目**：苍穹外卖 / 校园系统
2. **Python 小工具**：自动化处理文件/表格/简历
3. **AI 综合项目**：AI 课程资料问答系统

企业面试时重点讲：

- 为什么用 Redis
- 为什么用 MQ
- 为什么用 ES
- 项目怎么部署
- Java 服务怎么调用 Python AI 服务
- RAG 怎么减少大模型幻觉
- 出错时怎么查日志和定位问题

---

## 不要一开始学太深

这些放后面：

- Kubernetes
- 大模型训练
- Transformer 论文精读
- JVM 调优全套
- Spring 源码全套
- 高并发秒杀系统

先把项目做出来，再补深度。

