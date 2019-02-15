/**
 * author: stephentian
 * email: stephentian@foxmail.com
 * day: 2019/2/13
 **/

import axios from 'axios'

export function httpadd(subject, cb) {
    axios({
            method: 'POST',
            url: '/api/todo',
            headers: [{ 'Content-Type': 'application/json' }],
            data: { id: 6, subject: 's6' }
        })
        .then(res => {
            cb(res)
            console.log(res.data)
        })
        .catch(err => console.error(err))
}

export function httpremove(id, cb) {
    axios({
            method: 'DELETE',
            url: 'api/todo/' + id
        })
        .then(res => {
            cb(res)
            console.log(res.data)
        })
        .catch(err => console.log(err))
}

export function httpreload(cb) {
    axios({
            method: 'get',
            url: 'api/todos'
        })
        .then(res => {
            cb(res.data)
            // console.log(res.data)
        })
        .catch(err => console.log(err))
}