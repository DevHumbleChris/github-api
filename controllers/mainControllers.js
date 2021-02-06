require("colors");
const axios = require("axios")

module.exports = {
    index: (req, res) => {
        res.render("index")
    },
    getUsername: async (req, res) => {

        const username = req.body.username

        try{

            const response = await axios.get(`https://api.github.com/users/${username}/repos`)
            const responseData = response.data

            res.render("index", {
                code: 200,
                results: responseData
            })
            console.log(responseData[0].owner.avatar_url)

        }catch(err){
            res.render("index", {
                code: 404,
                message: "Records Not Found"
            })
        }
    }
}