<template>
    <div class = "vehicle-wrapper">
        <div class = "wrapper-layer">
            <div class = "item-wrapper">
                <div class = "item-title">Trip ID</div>
                <div class = "item-label">#32334</div>
            </div>
            <div class = "item-wrapper">
                <div class = "item-title">Transaction ID</div>
                <div class = "item-label">#234234</div>
            </div>
            <div class = "item-wrapper">
                <div class = "item-title">Vehicle QR</div>
                <div class = "item-label">#515255</div>
            </div>
        </div>
        <div class = "wrapper-layer">
            <div class = "item-wrapper">
                <div class = "item-title">Report Content</div>
                <div class = "item-content">
                    <div class = "item-badges">
                        <div class = "item-names">Trottle</div>
                        <div class = "item-names">Handle</div>
                        <div class = "item-names">Wheel</div>
                    </div>
                    <div class = "item-content-text">
                        Lorem Ipsum is sipmly dummy text of the printing and typesetting industry.
                    </div>
                    <div class = "photos">
                        <div class = "photo">Photo 1</div>
                        <div class = "photo">Photo 2</div>
                    </div>
                </div>
            </div>
            <div class = "item-wrapper">
                <div class = "item-title">Report ID</div>
                <div class = "item-label">#533453</div>
            </div>
            <div class = "item-wrapper">
                <div class = "item-title">Trip Photo</div>
                <div class = "trip-photo" style = "background-image : url('./img/userManagement/Tripcost.png');"></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "TripVehicle",
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
.vehicle-wrapper{
    display :flex;
    flex-direction : column;
    padding : 30px 0px 0px 0px;
    .wrapper-layer{
        display :flex;
        flex-direction : row ;
        margin-bottom : 20px;
    }
    .wrapper-layer:last-child{
        margin-bottom : 0px;
    }
    .item-wrapper {
        width : 39%;
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
        .trip-photo {
            border-radius : 5px;
            margin-top : 10px;
            background-size : cover;
            width : 95px;
            height : 160px;
        }
    }
    .item-wrapper:nth-child(2) {
        width: 41%
    }
    .item-wrapper:nth-child(3) {
        width: 20%
    }

    .item-content {
        display : flex;
        flex-direction : column;
        .item-badges {
            margin-top : 7px;
            margin-bottom : 7px;
            display : flex;
            flex-direction : row;
            .item-names {
                border : 1px solid #777;
                border-radius : 5px;
                font-size : 12px;
                color : #777;
                padding : 3px 8px 3px 8px;
                margin-right : 10px;
            }
        }
        .item-content-text {
            color : #234231;
            font-size : 11.5px;
            padding-right : 15px;
        }
        .photos {
            margin-top : 8px;
            display : flex;
            flex-direction : row;
            .photo {
                background-color : #aaa;
                width : 60px;
                height : 60px;
                border-radius : 5px;
                margin-right : 6px;
                display : flex;
                flex-direction : row;
                justify-content : center;
                align-items : center;
            }
        }
    }
}



</style>