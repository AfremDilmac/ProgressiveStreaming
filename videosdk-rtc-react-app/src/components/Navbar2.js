import {Link} from 'react-router-dom';
import { auth} from "./firebase";
import {signOut} from "firebase/auth"
function Navbar2() {
    return (
        <>
       <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
    <Link to={'/'}>
        <a href="#" class="flex items-center">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">streaME</span>
        </a>
        </Link>
        <div class="flex items-center">
        <Link to={'/'}>
        <button className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={()=>signOut(auth)}>Logout</button>
      </Link>
        </div>
    </div>
</nav>
<nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div class="flex items-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                <Link to={'/'}>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                    </Link>
                </li>
                <li>
                <Link to={'/about'}>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">About us</a>
                    </Link>
                </li>
                <li>
                <Link to={'/app'}>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">App</a>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
        </>
    );
}
  
  export default Navbar2;
