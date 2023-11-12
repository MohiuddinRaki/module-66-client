import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-10">
      <SectionTitle
        subHeading={"check it out"}
        heading={"featured item"}
      ></SectionTitle>
      <div
        className="md:flex justify-center items-center pb-20 pt-12 px-32 gap-10 bg-opacity-40 bg-slate-600">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p className="text-lg font-medium">Aug 20, 2029 </p>
          <p className="uppercase text-2xl font-bold">Where can i get some?</p>
          <p className="my-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            velit eaque alias harum quisquam inventore! Voluptatum temporibus
            iure minima, placeat rem libero fugiat beatae blanditiis.
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
