const express = require('express');

const router = express.Router();

const { getReviews, setReviews, updateReviews, deleteReviews } = require('../controllers/reviewController');

router.route('/').get(getReviews).post(setReviews);
router.route('/:id').delete(deleteReviews).put(updateReviews);

router.get('/api/reviews', getReviews);
router.post('/api/', setReviews);
router.put('/api/:id', updateReviews);
router.delete('/api/:id', deleteReviews);

module.exports = router;
 
