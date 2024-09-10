import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

const mockData = {
    "id": "74644",
    "name": "Burger King",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_74644.JPG",
    "locality": "Vesu",
    "areaName": "Vesu",
    "costForTwo": "₹350 for two",
    "cuisines": [
        "Burgers",
        "American"
    ],
    "avgRating": 4.5,
    "parentId": "166",
    "avgRatingString": "4.5",
    "totalRatingsString": "17K+",
    "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 5.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "5.9 km",
        "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
        "nextCloseTime": "2024-09-11 03:00:00",
        "opened": true
    },
    "badges": {
        "imageBadges": [
            {
                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                "description": "Delivery!"
            },
            {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
            }
        ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
        "entityBadges": {
            "imageBased": {
                "badgeObject": [
                    {
                        "attributes": {
                            "description": "Delivery!",
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                        }
                    },
                    {
                        "attributes": {
                            "description": "Delivery!",
                            "imageId": "Rxawards/_CATEGORY-Burger.png"
                        }
                    }
                ]
            },
            "textBased": {},
            "textExtendedBadges": {}
        }
    },
    "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
    },
    "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
        }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
        "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "2.8K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
}
test('renders ProductCard', () => {
    render(<ProductCard {...mockData} />);
});
