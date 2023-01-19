import {Link} from 'react-router-dom';
import { auth} from "../../firebase";
import {signOut} from "firebase/auth"
function Navbar2() {
    return (
        <>
        <div className="bruin">
       <nav className="border-gray-200 dark:bg-violet-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
    <Link to={'/'}>
        <p href="#" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">streaME</span>
        </p>
        </Link>
        <Link to={"/chatapp"}>
        <h1 className='text-white'>
            Go to APP
        </h1>
        </Link>
        <div className="flex items-center">
        <Link to={'/'}>
        <button className="text-sm font-medium text-white dark:text-blue-500 hover:underline" onClick={()=>signOut(auth)}>Logout</button>
      </Link>
        </div>
    </div>
</nav>
</div>
        </>
    );
}
  
  export default Navbar2;
