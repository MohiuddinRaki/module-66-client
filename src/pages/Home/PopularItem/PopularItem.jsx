import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularItem = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch("menu.json")
        .then(res => res.json())
        .then(data => {
            const popularitems = data.filter(item => item.category === 'popular') 
            setMenu(popularitems)
        })
    },[])
    return (
        <section className="mb-24">
            <SectionTitle subHeading={'Popular Items'} heading={'FROM OUR MENU'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            
        </section>
    );
};

export default PopularItem;