export default function Posts(){
    return (

        <div className=" w-full h-[60px] flex items-center justify-around shadow">
            <div>
                <img className="w-[50px] h-[50px]" src="https://png.pngtree.com/element_our/md/20180515/md_5afb099d307d3.jpg" alt="" />
            </div>
            <div>
            <a href="/">Home</a>
            <a className="px-3" href="/posts">Posts</a>
            </div>
        </div>

      )
}