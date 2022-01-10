const data = {
    products: [
        {
            id: 1,
            brand: 'Samsung',
            model: 'Galaxy S20',
            price: 1000,
            image: 'https://images.samsung.com/is/image/samsung/p5/rs/smartphones/galaxy-s20/s20-fe-buy/carousel-kv/009_sku_kv/mo/S20-FE_Navy_SKUimage.jpg'
        },
        {
            id: 2,
            brand: 'Apple',
            model: 'Iphone XR',
            price: 1100,
            image: 'https://static.tehnomanija.rs/UserFiles/products/2018/004/large/134088.webp'
        },
        {
            id: 3,
            brand: 'Huawei',
            model: 'P30 Pro',
            price: 600,
            image: 'https://www.mobilplanet.net/wp-content/uploads/2019/07/huawei-p30-pro-128gb-4g-dual-sim-black.jpg'
        },
        {
            id: 4,
            brand: 'Xiaomi',
            model: 'Mi Note 10 Lite',
            price: 300,
            image: 'https://www.pakmobizone.pk/wp-content/uploads/2020/08/Xiaomi-Mi-Note-10-Lite-Midnight-Black-2.jpg'
        },
        {
            id: 5,
            brand: 'Honor',
            model: '50',
            price: 500,
            image: 'https://www.hihonor.com/content/dam/honor/rs/product-list/smartphone/honor50lite/honor50lite-listimage-blue1.png'
        },
        {
            id: 6,
            brand: 'Samsung',
            model: 'A20',
            price: 400,
            image: 'https://phone4u.rs/wp-content/uploads/2019/08/zvucnik-za-samusng-galaxy-a20-2.jpg'
        }
    ],
    idCart: 0,
    cart: [], 
    findProduct: function(id){
        for(let i = 0; i < this.products.length; i++){
            if(this.products[i].id === +id){
                return this.products[i];
            }
        }
    }
}

export default data;