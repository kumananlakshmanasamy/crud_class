import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    //   <h1 className="font-semibold">CODE BUILDERS</h1>
    //   <p className="text-2xl sm:text-3xl">Learning Management System</p>
    //   <button className="border border-gray-500 rounded px-8 py-2.5 hover:bg-gray-400 transition-all" onClick={()=>navigate('/login')}>Get Started</button>
    // </div>
    <div className="bg-gray-100 w-screen h-screen flex flex-col items-center justify-center">
        <div>
          <div className="relative w-full top-17 items-center justify-center flex">
            <div className="w-33 h-33 rounded-full bg-gray-200 flex items-center justify-center">
            <div className="w-30 h-30 rounded-full bg-gray-100">
              
              </div>
            </div>
          </div>
          <div className="bg-white sm:w-auto md:w-100 lg:w-150 mx-10 pt-20  p-10 rounded-2xl shadow items-center justify-center flex flex-column">
            <h6 className="font-extrabold">NAME HERE</h6>
            <p>CEO, Agency</p>
            <p className ="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quidem iste eligendi tenetur, molestiae ut, possimus nihil ipsum quod reprehenderit cumque voluptatibus libero voluptates natus ea hic cupiditate consequatur minus!
            Eligendi voluptas consequatur eius a, magni quam explicabo fuga natus vel dignissimos commodi provident praesentium, autem temporibus tempora. Perspiciatis iusto quas veniam commodi illum animi asperiores obcaecati temporibus voluptates aliquid.</p>
          </div>
        </div>


    </div>
  );
}
export default Home;