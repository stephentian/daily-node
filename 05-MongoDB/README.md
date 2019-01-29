# MongoDB
> MongoDB 是一个基于分布式文件存储的开源数据库系统

文件存储：MongoDB 将数据存储为一个文档, 数据结构由键值对(key => value) 组成。文档类似于 JSON 对象。字段值可以包含其他文档，数据及文档数组。
分布式：数据可以存储在多个物理服务器上

## 目录

* [基本概念](#基本概念)
  - []()

## 基本概念

### ObjectId 构成

MySQL 等关系型数据库，主键是设置成自增的，但是在分布式环境下，这种方法就不可行了，会产生冲突。
为此, MongoDB 采用了一个称之为 ObjectId 的类型做主键。 ObbjectId 是一个 12 字节的 BSON 类型的字符串，
按字节顺序，依次代表：

* 4 字节： UNIX 时间戳
* 3 字节： 运行 MongoDB 的机器
* 2 字节： 生成此 _id 的进程
* 3 字节： 由一个随机数开始的计数器生成的值

### 插入文档

`db.collections.insert({})`
`db.collections.save({})`

save =  insert or update

###


## MongoDB 的基本操作