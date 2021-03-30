const AdminBro = require("admin-bro")
const AdminBroExpress = require("@admin-bro/express")


const adminBro = new AdminBro({ 
    database: [],
    rootPath: "/admin",
})

const router = AdminBroExpress.buildRouter(adminBro)

const express = require("express")
const app = express()

app
    .use(adminBro.options.rootPath, router)
    .listen(5500, () => console.log("Server is running"))



