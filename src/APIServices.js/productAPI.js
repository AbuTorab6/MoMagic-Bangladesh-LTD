import axios from 'axios';










var getAllProduct = ()=>
{
    return axios.get("https://fakestoreapi.com/products").then
    (
        (res)=>
        {
            if(res.status===200)
            {
                return res.data;
            }
            else
            {
                console.log("Something is wrong!");
                return false
            }
            
        }
    ).catch
    (
        (err)=>
        {
            console.log("Something is wrong:"+err.message);
            return false;
        }
    )
}

var getProductByCategory = (category)=>
{
    return axios.get("https://fakestoreapi.com/products/category/"+category).then
    (
        (res)=>
        {
            if(res.status===200)
            {
                return res.data;
            }
            else
            {
                console.log("Something is wrong!");
                return false
            }
            
        }
    ).catch
    (
        (err)=>
        {
            console.log("Something is wrong:"+err.message);
            return false;
        }
    )
}


var getProductDetailById = (id)=>
{
    return axios.get("https://fakestoreapi.com/products/"+id).then
    (
        (res)=>
        {
            if(res.status===200)
            {
                return res.data;
            }
            else
            {
                console.log("Something is wrong!");
                return false
            }
            
        }
    ).catch
    (
        (err)=>
        {
            console.log("Something is wrong:"+err.message);
            return false;
        }
    )
}




export {getAllProduct,getProductByCategory,getProductDetailById}