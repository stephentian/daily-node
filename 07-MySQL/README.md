# node 连接 MySQL


## 创建数据库

#### 1. 连接数据库

```
mysql -hlocalhost -uroot -p
```

#### 2. 创建数据库

```
CREATE DATABASE test;
```



## 连接数据库

#### node

```
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
})

connection.connect()
```

### express



### koa2
