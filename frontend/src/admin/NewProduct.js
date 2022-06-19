import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
//import "./dashboard.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProduct } from "../actions/productAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SideBar from "./Sidebar";
import { NEW_PRODUCT_RESET } from "../constants/productConstants";

const NewProduct = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newProduct);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [amazon_link, setamazon_link] = useState(""); 
  const [brand, setbrand] = useState(""); 
  const [colour, setcolour] = useState(""); 
  const [weight, setweight] = useState(""); 
  const [material, setmaterial] = useState(""); 
  const [itemdimensions, setitemdimensions] = useState(""); 
  const [point1, setpoint1] = useState(""); 
  const [point2, setpoint2] = useState(""); 
  const [point3, setpoint3] = useState(""); 
  const [point4, setpoint4] = useState(""); 
  const [point5, setpoint5] = useState(""); 
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

 const categories = [
  "Formal Shoe",
  "Casual Shoe",
  "Sport Shoe",
  "Boot",
  "Slippers",
  "Sandals",
  "Loafers"
  ];

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Product Created Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("amazon_link", amazon_link); 
    myForm.set("brand", brand); 
    myForm.set("colour", colour); 
    myForm.set("weight", weight); 
    myForm.set("itemdimensions", itemdimensions); 
    myForm.set("material", material); 
    myForm.set("point1", point1); 
    myForm.set("point2", point2); 
    myForm.set("point3", point3); 
    myForm.set("point4", point4); 
    myForm.set("point5", point5); 
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", Stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createProduct(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title="Create Product" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h1>Create Product</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Product Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="number"
                placeholder="Price"
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
             <div>
              <AttachMoneyIcon />
              <input
                type="string"
                placeholder="link"
                required
                onChange={(e) => setamazon_link(e.target.value)}
              />
            </div> 

            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Brand"
                value={brand}
                onChange={(e) => setbrand(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>
            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Colour"
                value={colour}
                onChange={(e) => setcolour(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>
            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Material"
                value={material}
                onChange={(e) => setmaterial(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>
            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Weight"
                value={weight}
                onChange={(e) => setweight(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>
            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Item Dimensions"
                value={itemdimensions}
                onChange={(e) => setitemdimensions(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>
            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Point 1"
                value={point1}
                onChange={(e) => setpoint1(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>
            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Point 2"
                value={point2}
                onChange={(e) => setpoint2(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>
            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Point 3"
                value={point3}
                onChange={(e) => setpoint3(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>
            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Point 4"
                value={point4}
                onChange={(e) => setpoint4(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>
            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Point 5"
                value={point5}
                onChange={(e) => setpoint5(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>
            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <AccountTreeIcon />
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <StorageIcon />
              <input
                type="number"
                placeholder="Stock"
                required
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

            <div id="createProductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createProductImagesChange}
                multiple
              />
            </div>

            <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;