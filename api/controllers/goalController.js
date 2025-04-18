const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (req, res) => {
    res.json({ message: 'Get goals' })
})

const addGoal = asyncHandler(async (req, res) => {
    if (! req.body.title) {
        res.status(400)
        throw new Error('Please write a goal')
    }

    res.json({ message: 'Add goal' })
})

const updateGoal = asyncHandler(async (req, res) => {
    res.json({ message: `Update goal ${req.params.id}` })
})

const deleteGoal = asyncHandler(async (req, res) => {
    res.json({ message: `Delete goal ${req.params.id}` })
})

module.exports = {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal
}
