'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Post Schema
 */
var PostSchema = new Schema({
    title: {
        type: String,
        default: '',
        required: 'Please fill Post name',
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    body: {
        type: String,
        default: '',
        trim: true,
        required: 'Please fill post body.'
    },
    tags: {
        type: String,
        default: '',
        trim: true
    },
    category: {
        type: String,
        default: '',
        trim: true
    },
    /*comments: [{
        type: Schema.ObjectId,
        ref: 'Comments'
    }],*/
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Post', PostSchema);
