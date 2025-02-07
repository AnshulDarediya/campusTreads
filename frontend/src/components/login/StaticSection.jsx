import img from './2.jpg'

export default function StaticSection(){
    return(
        <div className="flex flex-col justify-center items-center w-3/5 text-black p-8">
            <img src={img} alt="Campus Threads Logo" className="w-32 h-32 mb-4" />
            <h1 className=" text-5xl font-bold text-blue-500 font-londrina-sketch !important">Welcome to Campus Threads</h1>
            <p className="text-center mt-2">A place to connect and share ideas with your campus community.</p>
        </div>
    );
}