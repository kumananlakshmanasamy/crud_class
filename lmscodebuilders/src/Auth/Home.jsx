import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="font-semibold">CODE BUILDERS</h1>
      <p className="text-2xl sm:text-3xl">Learning Management System</p>
      <button className="border border-gray-500 rounded px-8 py-2.5 hover:bg-gray-400 transition-all" onClick={()=>navigate('/login')}>Get Started</button>
    </div>
  );
}
export default Home;