import {
  newProductData,
  productData,
  updateProductData,
} from "../../../BLL/type";
import { useForm } from "react-hook-form";
import { ValidationError } from "./ValidationError";
import {
  addProduct,
  getProductById,
  updateProduct,
} from "../../../DAL/productDataAccess";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export default function EditProduct() {
  const { id } = useParams();

  const initialState = {
    id: 0,
    name: "",
    category: "",
    price: 0,
    image: "",
    description: "",
  };

  const [product, setProduct] = useState<productData>(initialState);

  useEffect(() => {
    getProductById(id).then((data) => {
      setProduct(data);
    });
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<productData>();

  async function handleUpdate(updateProductData: productData) {
    console.log(updateProductData);
    const newPost = await updateProduct(updateProductData);
    console.log(newPost);
  }
  return (
    <>
      <div className="text-center">
        <h2>EDIT PRODUCT</h2>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col-md-4">
          <img src={product.image} alt="pic" className="img-fluid" />{" "}
        </div>
        <div className="col-md-4">
          <form noValidate onSubmit={handleSubmit(handleUpdate)} method="post">
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                Product ID:
              </label>
              <input
                id="id"
                type="number"
                className="form-control"
                value={product.id}
                readOnly
                {...register("id")}
                autoFocus
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image:
              </label>
              <input
                className="form-control"
                id="image"
                type="text"
                value={product.image}
                {...register("image")}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Product Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                defaultValue={product.name}
                placeholder="Rename this product"
                {...register("name", { required: "Product must have a name" })}
              />
              <ValidationError fieldError={errors.name}></ValidationError>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="price" className="form-label">
                  Price: {product.price}
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  defaultValue={product.price}
                  {...register("price", {
                    required: "Product must have a price",
                  })}
                />
                <ValidationError fieldError={errors.price}></ValidationError>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="category" className="form-label">
                  Category: {product.category}
                </label>
                <select
                  id="category"
                  className="form-control"
                  aria-label="Category"
                  {...register("category")}
                  defaultValue={product.category}
                >
                  <option value="women">Women</option>
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
                defaultValue={product.description}
                {...register("description")}
              ></textarea>
              <ValidationError
                fieldError={errors.description}
              ></ValidationError>
            </div>
            {/* <div className="mb-3">
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
            </div> */}
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">
                UPDATE
              </button>
              <NavLink
                to={"/admin/product-management"}
                className="btn btn-secondary"
              >
                Cancel
              </NavLink>
            </div>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
}
