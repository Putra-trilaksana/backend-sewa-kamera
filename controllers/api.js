module.exports = class API {
    // fetch all post
    static async fetchAllPost(req, res){
        res.send("Hello From API");
    }

    // fetch post by ID
    static async fetchPostByID(req, res){
        res.send("Fetch By ID");
    }

    // create a post
    static async createPost(req, res){
        res.send("Create a Post");
    }

    // update a post
    static async updatePost(req, res){
        res.send("Update Post");
    }

    // delete a post
    static async deletePost(req, res){
        res.send("Delete a Post");
    }
};