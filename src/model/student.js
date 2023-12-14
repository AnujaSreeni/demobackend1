const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://Anuja:Anuja@cluster0.l0ibnjk.mongodb.net/db1?retryWrites=true&w=majority")
    .then(() => { console.log("DB connected") })
    .catch(err => console.log(err));

let pl = mongoose.Schema;
const plantschema = new pl({
    pid: String,
    pname: String,
    ptype: String,
    clr: String,
    size: String,
    pri: Number,
    des: String,
    stk: Number
});

var plantmodel = mongoose.model("Plant", plantschema)
module.exports = plantmodel;