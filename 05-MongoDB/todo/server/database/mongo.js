const mongo = require('mongodb')

class M {
    constructor() {
        this.getCollection = () => {
            return this.todoDB.collettion("todo")
        }
        this.m_open = async () => {
            const db = 'mongodb://localhost:27017'
            this.client = await mongo.MongoClient.connect(db, {
                useNewUrlParser: true
            })
            this.todoDB = this.client.db('todos')
        }
        this.template = async (cb) => {
            try {
                await this.m_open()
                return cb()
            } catch (err) {
                console.log(err)
            } finally {
                this.client.close()
            }
        }
        this.insertDoc = async (sub) => {
            return this.template(async () => {
                let res = await this.getCollection().insertOne({ subject: sub })
                return res.insertedId
            })
        }
        this.deleteDoc = async (id) => {
            return this.template(async () => {
                await this.getCollection().deleteMany({ _id: new mongo.ObjectID(id) })
            })
        }
        this.allDoc = async () => {
            return await this.template(async () => {
                let r = await this.getCollection().find().toArray()
                let ts = []
                for (let i = 0; i < r.length; i++) {
                    ts.push({ id: r[i]._id, subject: r[i].subject })
                }
                return ts
            })
        }
    }
}

module.exports = M