import { PRODUCT_URL } from "../constants";
import { apiSlice } from "./appSlices";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=> ({
        
        getProducts: builder.query({
            query: ()=>({
                url:PRODUCT_URL
            }),
            keepUnusedDataFor: 5
        }),
        getProductsDetails: builder.query({
            query:(productId)=>({
                url: `${PRODUCT_URL}/${productId}`,
            }),
            keepUnusedDataFor:5
        })
    }),
})

export const { useGetProductsQuery, useGetProductsDetailsQuery } = productApiSlice;