import { Request, Response } from "express";
import { T } from "../libs/types/common";
import BlogService from "../models/blog.service";

const blogService = new BlogService()
const blogController: T = {};

blogController.createNewBlog = async (req: Request, res:Response) => {
    try{
        console.log("Create Blog");
        const data = req.body;
        console.log(data);
        
        await blogService.createNewBlog(data);
        res.send(`<script>alert("Sucessfull creation")</script>; window.location.replace('/admin/product/all')`)

        
    }catch(err){
        console.log(err);
        
    }
}



blogController.getCreateBlog = (req: Request, res: Response) => {

    try {
        console.log("Create Blog");
        res.render('blog')

    } catch (err) {
        console.log(err);

    }
}

export default blogController