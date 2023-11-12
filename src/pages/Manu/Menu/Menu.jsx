import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertsImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"


const Menu = () => {
  const [menu] = useMenu();
  const deserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      <div className="mb-24">
        <SectionTitle
          subHeading={"Dont Miss"}
          heading={"Todays Offer"}
        ></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
        <MenuCategory items={deserts} title={"dessert"} img={dessertsImg}></MenuCategory>
        <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
        <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
        <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>

      </div>
    </div>
  );
};

export default Menu;
