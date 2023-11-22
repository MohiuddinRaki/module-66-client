import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, recipe, price, _id } = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with image url:
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      //   const meniRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      const meniRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(meniRes.data);
      if (meniRes.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${data.name} updated to menu Successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image uel", res.data);
  };
  return (
    <div>
      <SectionTitle
        heading="Update an Item"
        subHeading="Refresh item"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              {...register("name", { required: true })}
              defaultValue={name}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex w-full gap-3">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Recipe Category*</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="deserts">Deserts</option>
                <option value="drinks">Drinks</option>
                <option value="soups">Soups</option>
              </select>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="text"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
              defaultValue={recipe}
            ></textarea>
          </div>
          <div>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input max-w-xs"
            />
          </div>
          <div>
            {/* <input
              className="text-white bg-yellow-500 btn btn-lg"
              type="submit"
              value="Add Items"
            /> */}
            <button className="text-white bg-yellow-500 btn btn-lg">
              Update Item
              <span className="mr-2">
                <FaUtensils></FaUtensils>
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateItem;
