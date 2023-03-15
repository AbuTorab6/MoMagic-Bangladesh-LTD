import {createSlice} from '@reduxjs/toolkit'

var productState = createSlice(
    {
        name:"productState",
        initialState:{
            allProduct:[],
            productByCategory:[],
            productDetailById:{}
        },
        reducers:{
            allProductFunc:(p1,data)=>
            {
                p1.allProduct=data.payload;
            },
            productByCategoryFunc:(p1,data)=>
            {
                p1.productByCategory=data.payload;
            },
            productDetailByIdFunc:(p1,data)=>
            {
                p1.productDetailById=data.payload;
            },
        }
    }
)

export const {allProductFunc,productByCategoryFunc,productDetailByIdFunc} = productState.actions;
export default productState.reducer;