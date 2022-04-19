const asyncHandler = require('express-async-handler');
//desc GetReviews
//@route GetReviews
//@access private
const getReviews = asyncHandler(async(req, res) => {
    res.status(200).json({ message: 'Get goals' });
});
//desc setReviews
//@route GetReviews
//@access private
const setReviews = asyncHandler(async(req, res) => {
    if (!req.body.text) {
        res.status(404).json({ message: 'please add text field' });
    }
    res.status(200).json({ message: 'set goals' });
});
//desc setReviews
//@route GetReviews
//@access private
const updateReviews = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `update goals ${req.params.id}` });
});
//desc GetReviews
//@route GetReviews
//@access private
const deleteReviews = asyncHandler(async(req, res) => {
    res.status(200).json({ message:  `delete goals ${req.params.id}` });
});

module.exports = {
    getReviews,
    setReviews,
    updateReviews,
    deleteReviews,

};