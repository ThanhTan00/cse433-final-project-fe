import { UserData, newProductData } from "../../../BLL/type";
import { useForm } from "react-hook-form";
import { addProduct } from "../../../DAL/productDataAccess";
import { addUser } from "../../../DAL/UserDataAccess";

export default function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<UserData>();

  async function handleSave(newUser: UserData) {
    console.log(newUser);
    const newPost = await addUser(newUser);
    console.log(newPost);
  }

  return (
    <>
      <div className="text-center">
        <h2>ADD NEW USER</h2>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col-md-6">
          <form
            noValidate
            onSubmit={handleSubmit(handleSave)}
            method="post"
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                {...register("username", { required: "User must have a name" })}
              />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  {...register("email", {
                    required: "Product must have a price",
                  })}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  {...register("password", {
                    required: "User must have  a password",
                  })}
                />
                
              </div>
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
