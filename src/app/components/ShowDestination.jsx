
import Image from "next/image";
import { Button } from "@heroui/react";
import { FiExternalLink } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import Link from "next/link";





const ShowDestinationPage = ({ data }) => {

    const {  country, destinationName, duration, imageUrl, price, _id } = data;


    return (
        <div className="h-full">
            
            <div className="border rounded-2xl ">
                <div className="h-100">
                    <Image
                    className="p-2 "
                    alt={destinationName}
                    src={imageUrl}
                    height={500}
                    width={500}
                />
                </div>

                <div className="p-2">
                    <div className="flex items-center gap-1">
                        <LuMapPin /> <span>{country}</span>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <div>
                                <h2 className="text-xl font-bold">{destinationName}</h2>
                            </div>
                            <div className="flex gap-1 items-center">
                                <FaRegCalendar /> {duration}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold">$ {price}</h3>
                        </div>
                    </div>
                    <Link href={`/destinations/${_id}`}><Button variant="ghost" className={'mt-1 text-cyan-500'}> <FiExternalLink /> Book Now</Button></Link>
                </div>
            </div>
           
        </div>
    );
};

export default ShowDestinationPage;