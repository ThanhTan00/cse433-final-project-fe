export default function EditProduct() {
  return (
    <>
      <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div className="wrapper wrapper--w960">
          <div className="card card-2">
            <div className="card-heading"></div>
            <div className="card-body">
              <h2 className="title">Registration Info</h2>
              <form method="POST">
                <div className="input-group">
                  <input
                    className="input--style-2"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group">
                      <input
                        className="input--style-2 js-datepicker"
                        type="text"
                        placeholder="Birthdate"
                        name="birthday"
                      />
                      <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="input-group">
                      <div className="rs-select2 js-select-simple select--no-search">
                        <select name="gender">
                          <option disabled selected>
                            Gender
                          </option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                        <div className="select-dropdown"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-group">
                  <div className="rs-select2 js-select-simple select--no-search">
                    <select name="className">
                      <option disabled selected>
                        className
                      </option>
                      <option>className 1</option>
                      <option>className 2</option>
                      <option>className 3</option>
                    </select>
                    <div className="select-dropdown"></div>
                  </div>
                </div>
                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group">
                      <input
                        className="input--style-2"
                        type="text"
                        placeholder="Registration Code"
                        name="res_code"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-t-30">
                  <button className="btn btn--radius btn--green" type="submit">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
