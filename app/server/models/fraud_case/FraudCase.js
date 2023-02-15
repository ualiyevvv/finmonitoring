const {Schema, model} = require('mongoose');

const log = require('../../logging/log');

const FraudCaseSchema = new Schema({
    caption: {
        type: String,
    },
    priority: {
        type: String,
    },
    investigators: [{
        type: String,
    }],
    mapgraphstate: [{
        type: String,
    }],
    status: {
        type: String,
    },

    file: {
        type: Schema.Types.ObjectId,
        ref: 'File'
    },

    createdDate: {
        type: Date,
        immutable: true,
        default: () => new Date(),
    },
    updatedDate: {
        type: Date,
        default: () => new Date(),
    }
});


FraudCaseSchema.plugin(require('mongoose-unique-validator'));
FraudCaseSchema.plugin(require('../updatedDate'))
FraudCaseSchema.plugin(require('../logPlugin'))

FraudCaseSchema.statics.publicFiles = function(){
    return ['logo'];
}

const handlers = require('../handlers');

FraudCaseSchema.methods.onCreate = async function({body, user}){
}

FraudCaseSchema.methods.deepDelete = async function (){
    await handlers.deleteModels(this, ['file']);

    await this.delete();

    return this;
}

module.exports = model('FraudCase', FraudCaseSchema);
