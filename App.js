import img from './img-1.jpg'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const head={logo:'LOGO',home:'Home',about:'About',class:'Class',blog:'Blog',contact:'Contact',img};

export default function nav(){
  function prevButton(){
    alert("its prev button");
  }
  function nextButton(){
    alert("its next button");
  }
  return(
    <>
      <div className='h-[11vh] w-[100%] flex justify-center items-center bg-black text-[#ABC502] fixed'>
        <div className='h-[11vh] w-[30%] flex justify-center items-center'>
          <h1 className='text-[2.5vw] font-bold'>{head.logo}</h1>
        </div>
        <div className='h-[11vh] w-[70%] flex justify-center items-center'>
          <div className='h-[11vh] w-[13%] flex justify-center items-center'>
            <h1 className='text-[1.5vw]'>{head.home}</h1>
          </div>
          <div className='h-[11vh] w-[13%] flex justify-center items-center'>
            <h1 className='text-[1.5vw]'>{head.about}</h1>
          </div>
          <div className='h-[11vh] w-[13%] flex justify-center items-center'>
            <h1 className='text-[1.5vw]'>{head.class}</h1>
          </div>
          <div className='h-[11vh] w-[13%] flex justify-center items-center'>
            <h1 className='text-[1.5vw]'>{head.blog}</h1>
          </div>
          <div className='h-[11vh] w-[13%] flex justify-center items-center'>
            <h1 className='text-[1.5vw]'>{head.contact}</h1>
          </div>
        </div>
      </div>
      <div className='h-[80vh] w-[100%]'>
        <img className='img' alt='' src={head.img} height={600} width={1366}/>
      </div>
      <div className='h-[100vh] w-[100%] bg-slate-600 mt-[60vh]'>
        <button onClick={prevButton} className='h-[5vh] w-[3vw]'><FaAngleLeft className='text-black'/></button>
        <button onClick={nextButton} className='h-[5vh] w-[3vw]'><FaAngleRight className='text-black'/></button>
        <div id='button'></div>
      </div>
    </>
  );
}

