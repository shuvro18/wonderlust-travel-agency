import Image from "next/image";
import NavLink from "./NavLink";


const Navbar = () => {
    return (
        <div className="container mx-auto py-5">
            <div className="flex justify-between">


            <ol className="flex gap-4">
                <li> <NavLink href="/"> Home </NavLink> </li>
                <li> <NavLink href="/destination"> Destinations </NavLink> </li>
                <li> <NavLink href="/mybooking"> My Bookings </NavLink> </li>                
                <li> <NavLink href="/admin"> Admin </NavLink> </li>                
                <li> <NavLink href="/add-destination"> Add Destination </NavLink> </li>                
            </ol>


            <div className="">
                <Image src={"/assets/wanderlast.png"} alt="logo" width={150} height={150}></Image>
            </div>


            <ol className="flex gap-4">
                <li> <NavLink href="/profile"> Profile </NavLink> </li>
                <li> <NavLink href="/login"> Login </NavLink> </li>
                <li> <NavLink href="/signup"> Signup </NavLink> </li>              
            </ol>

        </div>
        </div>
    );
};

export default Navbar;