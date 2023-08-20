import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { getUserProductWishlist } from "../features/user/userSlice";
import { addToWishlist } from "../features/product/productSlice";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistState = useSelector((state) => state?.auth?.user?.wishlist);

  useEffect(() => {
    dispatch(getUserProductWishlist());
  }, [dispatch]);

  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
  };

  return (
    <>
      <Meta title="Wishlist" />
      <BreadCrumb title="Wishlist" />
      <div className="all-views">
        <div className="wishlist-wrapper home-wrapper-2 py-3">
          <div className="row mx-1">
            {wishlistState && wishlistState?.length === 0 && (
              <div className="text-center">
                <h3>Empty list</h3>
              </div>
            )}
            {wishlistState &&
              wishlistState.map((item) => (
                <div className="col-md-3 col-sm-6 mb-3" key={item._id}>
                  <div className="wishlist-card position-relative">
                    <img
                      onClick={() => removeFromWishlist(item._id)}
                      src="images/cross.svg"
                      className="cross position-absolute img-fluid"
                      alt="cross"
                    />
                    <div className="wishlist-card-image">
                      <img
                        src={item.images[0].url}
                        className="img-fluid w-100"
                        alt="productImage"
                      />
                    </div>
                  </div>
                  <div className="py-3">
                    <h5 className="title">{item.title}</h5>
                    <h6 className="price">₦{item.price}</h6>
                    <Link to={"/product/" + item?._id} className="button">
                      View
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
