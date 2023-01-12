import styles from "../../style";
import {Link} from 'react-router-dom';
import { arrowUp } from "../../assets";

const GetStarted = () => (
  <Link to="/register">
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] cursor-pointer `}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px] ">
          <span className="btnstart">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="btnstart">Started</span>
      </p>
    </div>
  </div>
  </Link>
);

export default GetStarted;