import {Link} from 'react-router-dom';
import { auth} from "../../firebase";
import {signOut} from "firebase/auth"
function Navbar2() {
    return (
        <>
        <div className="bg-violet-500">
       <nav className="border-gray-200 dark:bg-violet-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
    <Link to={'/'}>
        <p href="#" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">streaME</span>
        </p>
        </Link>
        <div className="flex items-center">
        <Link to={'/'}>
        <button className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={()=>signOut(auth)}>Logout</button>
      </Link>
        </div>
    </div>
</nav>
<nav className="bg-violet-900">
    <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                <Link to={'/'}>
                    <p href="#" className="text-white hover:underline" aria-current="page">Home</p>
                    </Link>
                </li>
                <li>
                <Link to={'/chatapp'}>
                    <p href="#" className="text-white hover:underline">App</p>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div>
        </>
    );
}
  
  export default Navbar2;
