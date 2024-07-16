import BlogModel from "../schema/Blog.model";

class BlogService {

    private readonly blogModel;

    constructor(){
        this.blogModel = BlogModel
    }


    public async createNewBlog (input: any): Promise<any>{
        try{
            return await this.blogModel.create(input)
        }catch(err){
            console.log(err);
            
        }
    }
}

export default BlogService