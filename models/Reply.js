const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReplySchema = new Schema({
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Reply = mongoose.model("Reply", ReplySchema);

module.exports = Reply;