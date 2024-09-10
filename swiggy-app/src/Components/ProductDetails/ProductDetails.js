import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css"
import SpinLoader from "../SpinLoader/SpinLoader";

const FOODFIRE_MENU_API_URL = `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=`
const MENU_ITEM_TYPE_KEY =
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
const RESTAURANT_TYPE_KEY =
    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
const IMG_CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`;
const ITEM_IMG_CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/`;

const ProductDetails = () => {
    const { resId } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        getProductInfo();
    }, []);
    async function getProductInfo() {
        try {
            const response = await fetch(FOODFIRE_MENU_API_URL + resId);
            if (!response.ok) {
                const err = response.status;
                throw new Error(err);
            } else {
                const json = await response.json();
                console.log(json)
                const restaurantData =
                    json?.data?.cards
                        ?.map((x) => x.card)
                        ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
                        ?.info || null;
                setRestaurant(restaurantData);

                // Set menu item data
                const menuItemsData =
                    json?.data?.cards
                        .find((x) => x.groupedCard)
                        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
                            (x) => x.card?.card
                        )
                        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
                        ?.map((x) => x.itemCards)
                        .flat()
                        .map((x) => x.card?.info) || [];

                const uniqueMenuItems = [];
                menuItemsData.forEach((item) => {
                    if (!uniqueMenuItems.find((x) => x.id === item.id)) {
                        uniqueMenuItems.push(item);
                    }
                });
                setMenuItems(uniqueMenuItems);
            }
        }
        catch (err) {

            console.error(err);
        }
    }

    return (<div className="restaurant-menu">
        {restaurant ? <div className="restaurant-summary">
            <img
                className="restaurant-img"
                src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
                alt={restaurant?.name}
            />
            <div className="restaurant-summary-details">
                <h2 className="restaurant-title">{restaurant?.name}</h2>
                <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
                <div className="restaurant-details">
                    <div
                        className="restaurant-rating"
                        style={
                            restaurant?.avgRating < 4
                                ? { backgroundColor: "var(--light-red)" }
                                : restaurant?.avgRating === "--"
                                    ? { backgroundColor: "white", color: "black" }
                                    : { color: "white" }
                        }
                    >
                        <i className="fa-solid fa-star"></i>
                        <span>{restaurant?.avgRating}</span>
                    </div>
                    <div className="restaurant-rating-slash">|</div>
                    <div>{restaurant?.sla?.slaString}</div>
                    <div className="restaurant-rating-slash">|</div>
                    <div>{restaurant?.costForTwoMessage}</div>
                </div>
            </div>
        </div> : <SpinLoader />}
    </div>);
}
export default ProductDetails;