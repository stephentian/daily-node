# MongoDB
> MongoDB 是一个基于分布式文件存储的开源数据库系统

**文件存储**：MongoDB 将数据存储为一个文档, 数据结构由键值对(key => value) 组成。文档类似于 JSON 对象。字段值可以包含其他文档，数据及文档数组。
**分布式**：数据可以存储在多个物理服务器上

---

## 目录

* [基本概念](#基本概念)
  - [ObjectId 构成](#objectid-构成)
* [基本操作](#基本操作)
  - [数据库操作](#数据库操作)
  - [集合操作](#集合操作)
  - [插入文档](#插入文档)
    - insert
    - save
  - [更新文档](#更新文档)
    - update
    - save
  - [删除文档](#删除文档)
    - remove
    - delete
  - [查询文档](#查询文档)
    - find

---

## 基本概念

### ObjectId 构成

MySQL 等关系型数据库，主键是设置成自增的，但是在分布式环境下，这种方法就不可行了，会产生冲突。
为此, MongoDB 采用了一个称之为 ObjectId 的类型做主键。 ObbjectId 是一个 12 字节的 BSON 类型的字符串，
按字节顺序，依次代表：

* 4 字节： UNIX 时间戳
* 3 字节： 运行 MongoDB 的机器
* 2 字节： 生成此 _id 的进程
* 3 字节： 由一个随机数开始的计数器生成的值

## 基本操作

### 数据库操作

`use database`

`show dbs`

`db.dropDatabase()`

### 集合操作

`db.createCollection(name, {options})`

`db.collection.insert({})`

`show collections`

`db.collection.drop()`

### 插入文档

#### insert

`db.collection.insert({})`

#### save

`db.collection.save({})`

save =  insert or update  


---

### 更新文档

#### update
```
db.collection.update(
  {}, // query 查询条件，类似 sql update 查询中 where 后面的
  {}, // update 的对象和一些更新的操作符, 理解为 sql update 查询中 set 后面的
  {
    upsert: boolean, // 可选, 如果不存在 update 的记录，是否插入 objNew
    multi: boolean, // 可选, 默认为 false， 只更新找到的第一条记录， true 为更新条件找出的所有记录
    writeConcern: document // 可选，抛出异常的级别
  }
)
```

#### save
```
db.collection.save(
   <document>, // document : 文档数据
   {
     writeConcern: <document> // 可选，抛出异常的级别
   }
)
```

---
### 删除文档

> 在执行remove()函数前先执行find()命令来判断执行的条件是否正确，这是一个好的习惯!

#### remove
```
db.collection.remove(
   <query>, // (可选)删除的文档的条件
   {
     justOne: <boolean>, // (可选)如果设为 true 或 1，则只删除一个文档，如果不设置该参数，或使用默认值 false，则删除所有匹配条件的文档
     writeConcern: <document> // (可选)抛出异常的级别
   }
)
```

#### delete

`db.colletion.deleteMany({})`

删除 status 等于 A 的全部文档
`db.inventory.deleteMany({ status : "A" })`

删除一个 status 为 B 的文档
`db.colletion.deleteOne({ status: 'B'})`

---
### 查询文档

#### find

`db.collection.find(query, projection)`
query ：可选，使用查询操作符指定查询条件
projection ：可选，使用投影操作符指定返回的键。查询时返回文档中所有键值， 只需省略该参数即可(默认省略)


`db.col.find().pretty()`
以易读的方式来读取数据