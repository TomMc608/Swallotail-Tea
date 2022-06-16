const router = require("express").Router()
let tea_controller = require("../controllers/tea")

router.get("/", tea_controller.index)

module.exports = router