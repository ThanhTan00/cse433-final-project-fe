import { newProductData } from "../../../BLL/type";
import { useForm } from "react-hook-form";
import { ValidationError } from "./ValidationError";
import { addProduct } from "../../../DAL/productDataAccess";

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<newProductData>();

  async function handleSave(newProductData: newProductData) {
    console.log(newProductData);
    const newPost = await addProduct(newProductData);
    console.log(newPost);
  }

  return (
    <>
      <div className="text-center">
        <h2>ADD NEW PRODUCT</h2>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col-md-6">
          <form
            noValidate
            onSubmit={handleSubmit(handleSave)}
            encType="multipart/form-data"
            method="post"
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                {...register("name", { required: "Product must have a name" })}
              />
              <ValidationError fieldError={errors.name}></ValidationError>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="price" className="form-label">
                  Price $
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  {...register("price", {
                    required: "Product must have a price",
                  })}
                />
                <ValidationError fieldError={errors.price}></ValidationError>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  id="category"
                  className="form-control"
                  aria-label="Category"
                  {...register("category")}
                >
                  <option value="women" selected>
                    Women
                  </option>
                  <option value="men">Men</option>
                  <option value="bag">Bag</option>
                  <option value="shoes">Shoes</option>
                  <option value="watch">Watch</option>
                  <option value="other">other</option>
                </select>
                <ValidationError fieldError={errors.category}></ValidationError>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                {...register("description", {
                  required: "Product must have a description",
                })}
              ></textarea>
              <ValidationError
                fieldError={errors.description}
              ></ValidationError>
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                className="form-control"
                type="file"
                id="image"
                {...register("imageData", {
                  required: "Product must have an image",
                })}
              />
              <ValidationError fieldError={errors.imageData}></ValidationError>
            </div>

            <button type="submit" className="btn btn-primary">
              ADD
            </button>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
}
