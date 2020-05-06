const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient; //
const ObjectId = mongodb.ObjectId;

function _connect() {
    return new Promise((reslove, reject) => {
        mongoClient.connect("mongodb://127.0.0.1:27017", { useUnifiedTopology: true }, (err, client) => {
            if (err) reject("数据库连接失败")
            else reslove(client.db("juooo"))
        })
    })

}
module.exports = {
    async insertOne(collName, insertObj) {
        const db = await _connect()
        return new Promise((reslove, reject) => {
            db.collection(collName).insertOne(insertObj, (err, results) => {
                if (err) reject("插入失败")
                else reslove("插入成功")
            })
        })

    },
    async find(collName, obj = {}) {
        const { skip = 0, limit = 0, sort = {}, whereObj = {} } = obj;
        const db = await _connect()
        return new Promise((reslove, reject) => {
            db.collection(collName).find(whereObj).limit(limit).skip(skip).sort(sort).toArray((err, results) => {
                if (err) reject("查找失败")
                else reslove(results)
            })
        })
    },
    async findOne(collName, whereObj) {
        const db = await _connect()
        return new Promise((reslove, reject) => {
            db.collection(collName).findOne(whereObj, (err, results) => {
                if (err) reject("查找失败")
                else reslove(results)
            })
        })
    },
    async findOneById(collName, id) {
        const db = await _connect()
        return new Promise((reslove, reject) => {
            db.collection(collName).findOne({ _id: ObjectId(id) }, (err, results) => {
                if (err) reject("查找失败")
                else reslove(results)
            })
        })
    },
    async count(collName, whereObj = {}) {
        const db = await _connect()
        return new Promise((reslove, reject) => {
            db.collection(collName).countDocuments(whereObj).then(count => reslove(count))
        })
    },
    async deleteOneById(collName, id) {
        const db = await _connect()
        return new Promise((reslove, reject) => {
            db.collection(collName).deleteOne({ _id: ObjectId(id) }, (err, results) => {
                if (err) reject("删除失败")
                else reslove("删除成功")
            })
        })
    },
    async updateOne(collName, whereObj, upObj) {
        const db = await _connect()
        return new Promise((reslove, reject) => {
            db.collection(collName).updateOne(whereObj, upObj, (err, results) => {
                if (err) reject("更新失败")
                else reslove("更新成功")
            })
        })
    },
    async upDateOneById(collName, id, upObj) {
        const db = await _connect()
        return new Promise((reslove, reject) => {
            db.collection(collName).updateOne({ _id: ObjectId(id) }, upObj, (err, results) => {
                if (err) reject("更新失败")
                else reslove("更新成功")
            })
        })
    },
    async page(collName, { whereObj = {}, pageIndex = 1, sort = {}, limit = 5 } = {}) {
        let pageSum = 1;
        const count = await this.count(collName, whereObj);
        pageSum = Math.ceil(count / limit);
        if (pageSum < 1) pageSum = 1;
        if (pageIndex < 1) pageIndex = 1;
        if (pageIndex > pageSum) pageIndex = pageSum;
        const result = await this.find(collName, {
            whereObj,
            sort,
            limit,
            skip: (pageIndex - 1) * limit
        })
        return {
            ok: 1,
            msg: "数据查找成功",
            [collName]: result,
            pageIndex,
            pageSum
        }
    }


}