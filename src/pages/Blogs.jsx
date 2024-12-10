import BlogsContent from "../components/Blogs/BlogsContent";
import BlogsHero from "../components/Blogs/BlogsHero";

export default function Blogs(){
    return(
        <div className="w-full h-fit">
            <BlogsHero />
            <BlogsContent />
        </div>
    )
}