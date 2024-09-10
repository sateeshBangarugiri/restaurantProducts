import { render, screen } from '@testing-library/react';
import ProductDetails from './ProductDetails';

const mockData = {
    "id": "74644",
    "name": "Burger King",
    "city": "Surat",
    "slugs": {
        "restaurant": "burger-king-vip-plaza-test_surat",
        "city": "surat"
    },
    "uniqueId": "e51e6528-4859-48c8-8fed-e84c17dc2d76",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_74644.JPG",
    "locality": "Vesu",
    "areaName": "Vesu",
    "costForTwo": "35000",
    "costForTwoMessage": "₹350 for two",
    "cuisines": [
        "Burgers",
        "American"
    ],
    "avgRating": 4.5,
    "feeDetails": {
        "restaurantId": "74644",
        "fees": [
            {
                "name": "TYPE_DISTANCE",
                "fee": 3000
            },
            {
                "name": "TYPE_TIME"
            }
        ],
        "totalFee": 3000,
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": "v1648635511/Delivery_fee_new_cjxumu",
        "message": "Order above 149 for discounted delivery fee"
    },
    "parentId": "166",
    "avgRatingString": "4.5",
    "totalRatingsString": "17K+ ratings",
    "sla": {
        "restaurantId": "74644",
        "deliveryTime": 27,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 30,
        "lastMileTravel": 5.9,
        "serviceability": "SERVICEABLE",
        "stressFactor": 1,
        "rainMode": "RAIN_MODE_NONE",
        "longDistance": "LONG_DISTANCE_NOT_LONG_DISTANCE",
        "zoneId": 505,
        "slaString": "25-30 MINS",
        "lastMileTravelString": "5.9 km",
        "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
        "nextCloseTime": "2024-09-11 03:00:00",
        "visibility": true,
        "opened": true,
        "restaurantClosedMeta": {}
    },
    "aggregatedDiscountInfo": {
        "header": "Get items under 99",
        "shortDescriptionList": [
            {
                "meta": "Get items under 99",
                "discountType": "FinalPrice",
                "operationType": "RESTAURANT"
            },
            {
                "meta": "60% off | Use STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
            }
        ],
        "descriptionList": [
            {
                "meta": "Get items under 99",
                "discountType": "FinalPrice",
                "operationType": "RESTAURANT"
            },
            {
                "meta": "60% off up to ₹120 | Use code STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
            }
        ],
        "visible": true
    },
    "badges": {},
    "slugString": "burger-king-vip-plaza-test_surat",
    "multiOutlet": true,
    "isOpen": true,
    "labels": [
        {
            "title": "Timings",
            "message": "null"
        },
        {
            "title": "Address",
            "message": "Burger King India PVT.LTD. G-16,U-19 And U-21,First Floor, Bhadani Era, T.P.13, FP26, VIP Road, ,Opp VIP Plaza,Surat -395007"
        },
        {
            "title": "Cuisines",
            "message": "Burgers,American"
        }
    ],
    "logo": "rng/md/carousel/production/pkcgpsd4df6i5ud3eyuk",
    "totalRatings": 17000,
    "aggregatedDiscountInfoV2": {
        "header": "Get items under 99",
        "shortDescriptionList": [
            {
                "meta": "Get items under 99",
                "discountType": "FinalPrice",
                "operationType": "RESTAURANT"
            },
            {
                "meta": "60% off | Use STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
            }
        ],
        "descriptionList": [
            {
                "meta": "Get items under 99",
                "discountType": "FinalPrice",
                "operationType": "RESTAURANT"
            },
            {
                "meta": "60% off up to ₹120 | Use code STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
            }
        ],
        "couponDetailsCta": "View coupon details"
    },
    "type": "F",
    "nudgeBanners": [
        {
            "priority": 3,
            "discountInfo": {
                "discountType": "FinalPrice",
                "value": 169
            },
            "unlockedMessage": "Deal of the Day unlocked!",
            "minItemCount": 1,
            "maxItemCount": 1,
            "type": "SILD",
            "nudgeTagInfo": {
                "title": "Deal of the Day",
                "fontName": "FONT_NAME_CONDENSED_BOLD"
            },
            "logoCtx": {}
        }
    ],
    "headerBanner": {
        "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/74644"
    },
    "expectationNotifiers": [
        {
            "text": "Order above 149 for discounted delivery fee",
            "icon": {
                "imageId": "v1648635511/Delivery_fee_new_cjxumu"
            },
            "popup": {
                "cta": {}
            },
            "type": "DISTANCE_FEE_NON_FOOD_LM",
            "enrichedText": "Order above 149 for discounted delivery fee",
            "halfCardPopup": {
                "halfCardPopupHeader": {}
            },
            "trailingIcon": {}
        }
    ],
    "generalPurposeInfoListV2": [
        {
            "cta": {
                "info": {
                    "recordings": {}
                },
                "linkCta": {}
            }
        }
    ],
    "ratingSlab": "RATING_SLAB_5",
    "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
    },
    "hasBestsellerItems": true,
    "cartOrderabilityNudgeBanner": {
        "parameters": {},
        "presentation": {}
    },
    "latLong": "21.14438024598079,72.79658859689647",
    "backgroundImageOverlayInfo": {}
}
test('renders ProductDetails', () => {
    render(<ProductDetails {...mockData} />);
});
