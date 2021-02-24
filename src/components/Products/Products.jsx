import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles';

// const products = [
//     {id:"1", name: "pizda", description: "huy", price: "9", image: "https://media.wired.com/photos/5f401ecca25385db776c0c46/master/pass/Gear-How-to-Apple-ios-13-home-screen-iphone-xs-06032019_big_large_2x.jpg"},
//     {id:"2", name: "pizda", description: "huy",  price: "9" , image: "https://cdn.mos.cms.futurecdn.net/EBjm29EwwgBe2mZnh5dGaZ.jpg"},
//     {id:"3", name: "pizda", description: "huy",  price: "9",  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYVpwDtYZxgCYjwSBbe79awofroeiCoVmfdg&usqp=CAU"},
// ]

function Prodacts({products, onAddToCart}) {
    const classes = useStyles()
    return (
      
        <main className={classes.content}>
            <div  className={classes.toolbar} />
            <Grid container justify='center' spacing ={4}>
                {
                    products.map((product) => (
                        <Grid item key = {product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} onAddToCart={onAddToCart} /> 
                        </Grid>
                    ))
                }
            </Grid>
            
        </main>
    )
}

export default Prodacts
