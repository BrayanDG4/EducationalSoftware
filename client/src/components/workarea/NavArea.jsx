import { ButtonRightNow } from "../buttons/ButtonRightNow";
import { MdAccountCircle,MdExitToApp,MdDescription } from "react-icons/md";


export const NavArea = () => {
  return (
    <>
  
      <div className="container sm:mx-auto flex  justify-center items-center space-between ">

        <div className="ml-2">
          <h1 className="text-3xl font-bold">
            <a href="#">APP</a>
          </h1>
        </div>

        <nav className="md:flex md:space-x-10 md:items-center">

        <MdAccountCircle className="h-16 w-16"></MdAccountCircle>

        <MdExitToApp className="h-16 w-16"></MdExitToApp>

        <MdDescription  className="h-16 w-16"></MdDescription>


        </nav> 

       
      </div>
      
    <hr/>
    <hr/>
    <hr/>
    <hr/>

    </>
  );
};
