<template>
    <div class="card-body" style = "padding : 0px; height : 897px;" >
        <div class = "trip-cost" style ="background-image : url('./img/userManagement/Tripcost.png');">
            <span class = "price">$ {{price}}</span>
            <div class = "price-label">Trip&nbsp;Cost</div>
        </div>
        <div class = "trip-detail">
            <div class = "item">
                <i class = "fa fa-star" style = "color: #ffe737"></i>
                <div class = "item-wrapper">
                    <div class = "item-title">{{trip.rate}}</div>
                    <div class = "item-label">Rated</div>
                </div>
            </div>
            <div class = "item">
                <i class = "fa fa-clock" style = "color: #149cff"></i>
                <div class = "item-wrapper">
                    <div class = "item-title">{{trip.duration}}&nbsp;min</div>
                    <div class = "item-label">Trip Duration</div>
                </div>
            </div>
        </div>
        <ul class = "trip-charge-list">
            <li v-for="(key, amount, index) in trip.items" v-bind:key="(key, amount)" class = "trip-charge-item" >
                <span v-if="index != 3">{{amount}}</span>
                <span v-else style = "color : green">{{amount}}</span>

                <span v-if="index != 3">{{key}}$</span>
                <span v-else style = "color : green">{{key}}$</span>
            </li>

            <li class = "trip-charge-item trip-payment" >
                <span><i class = "fa fa-clock" style = "color: black"></i> Payment</span>
                <span>{{trip.Payment}}</span>
            </li>
        </ul>

        <div class = "trip-state">
            <span>VICTORY2020</span>
            <span>Promo Code Applied</span>
        </div>

        <div class="state-alert" role="alert">
            <div class="alert-text">65% off next 3 rides. Max Discount $3. Valid Till 3 August, 2020</div>
        </div>
    </div>
</template>

<script>

export default {
    name: "TripPrice",
    components : {
    },
    data : () => ({
        price : "12.83",
        trip : {
            'duration' : 10,
            'rate' : 4.5,
            'items' : {
                UnlockCharge : 2,
                Tripcost : 8,
                Reservation : 0,
                Discount : 0,
            },
            'Payment' : 'Oto Wallet'
        }
    })
}
</script>
<style lang="scss" scoped>
.trip-cost {
    height: 238px;
    background-size:cover;
    display:flex;
    justify-content: center;
    flex-direction : column;
    align-items: center;
    .price {
        font-weight : bold;
        font-size : 46px;
        color : black;
    }
    .price-label {
        font-size : 18px;
        color : black;
        text-align : center;
    }
}
.trip-detail{
    height : 96px;
    display : flex;
    flex-direction : row;
    justify-content : space-around;
    align-items : center;
    .item {
        display : flex;
        flex-direction : row;
        align-items: center;
        i {
            font-size : 20px;
        }
        .item-wrapper {
            display : flex;
            flex-direction : column;
            margin-left : 10px;
            .item-title{
                font-weight: bold;
                color : #2e2e39;
                font-size: 17px;
            }
            .item-label{
                color : #808090;
                font-size: 12px;
            }
        }
    }
}
.trip-charge-list {
    list-style : none;
    display : flex;
    flex-direction : column;
    .trip-charge-item {
        height : 69px;
        display : flex;
        flex-direction : row;
        align-items: center ;
        justify-content : space-between;
        padding-right : 40px;
        padding-left : 40px;
        font-weight : bold;
        font-size : 18px;
    }
}

.trip-state{
    display:flex;
    flex-direction : column; 
    align-items : center ;
    justify-content: center;
    
    span:first-child{
        color: #8e29ff;
        font-size : 20px;
        font-weight : bold;
    }
    span:last-child{
        color: #6d6d75;
        font-size : 13px;
    }
    height : 115px;
}

.state-alert{
    border-radius : 3px;
    border : 1px solid #12ad00;
    border-left : 20px solid #3ebc30;
    display:flex;
    align-items : center ;
    justify-content: center;
    height : 70px;
    margin-right:21px;
    margin-left :21px;
}

</style>