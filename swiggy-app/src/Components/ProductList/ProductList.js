import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useParams } from "react-router-dom"; // import useParams for read `resId`
import { Link } from "react-router-dom";

import "./ProductList.css"
import SpinLoader from "../SpinLoader/SpinLoader";

const API_URL = `https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING`

const ProductList = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        getProducts();
    }, []);
    async function getProducts() {
        try {
            const response = await fetch(API_URL);
            setIsLoading(true)
            if (!response.ok) {
                setIsLoading(false)
                const err = response.status;
                throw new Error(err);
            } else {
                setIsLoading(false)
                const json = await response.json();
                console.log(json)
                function checkJsonData(jsonData) {
                    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
                        let checkData =
                            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                                ?.restaurants;

                        if (checkData !== undefined) {
                            return checkData;
                        }
                    }
                }

                const resData = checkJsonData(json);
                setAllRestaurants(resData);
            }

        }
        catch (err) {

            console.error(err);
        }
    }
    return (
        <>
            {allRestaurants ? <div className="productListContainer">
                {allRestaurants.map((restaurant) => {
                    return (<Link
                        to={"/restaurant/" + restaurant?.info?.id}
                        key={restaurant?.info?.id}
                    ><ProductCard key={restaurant?.info?.id} restaurant={restaurant?.info} /></Link>)
                })}
            </div> : <SpinLoader />}
        </>
    )
}

export default ProductList;