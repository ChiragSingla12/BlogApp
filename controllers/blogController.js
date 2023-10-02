// const express = require('express');
const Blog = require('../models/form');

exports.addBlog = (req, res) => {
    // const {title, author, content} = req.body;
    const title = req.body.title;
    const author = req.body.author;
    const content = req.body.content;

    const data = Blog.create(
        {
            Title: title,
            Author: author,
            Content: content
        });
    // const data = await User.create({ name, phone, email });
    console.log(data);
    res.status(201).json({ newUserDetail: data });

}