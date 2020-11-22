<template>
    <div class="card card-custom" style = "margin-top : 10px">
        <div class="card-body" style = "padding : 0px; height : 326px;" >
            <div class = "trip-point-cost">
                <span class = "price">{{tripPoint.total - tripPoint.parked[1] - tripPoint.bike[1]}}</span>
                <div class = "price-label">Point&nbsp;Earned</div>
            </div>
            <ul class = "trip-point-list">
                <li class = "trip-point-item" >
                    <span >Trip Completed</span>
                    <span >+{{tripPoint.total}}</span>
                </li>
                <li class = "trip-point-item" >
                    <span >Report Illigally</span>
                    <span >Report ID {{tripPoint.bike[0]}}</span>
                    <span >-{{tripPoint.parked[1]}}</span>
                </li>
                <li class = "trip-point-item" >
                    <span >Damaged Bike</span>
                    <span >Report ID {{tripPoint.bike[0]}}</span>
                    <span >-{{tripPoint.bike[1]}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: "TripPointer",
    components : {
    },
    data : () => ({
        tripPoint : {
            'total' : 7,
            'parked' : ['#533434', 1],
            'bike' : ['#533434', 1]
        }
    })
}
</script>
<style lang="scss" scoped>
.trip-point-cost {
    height: 134px;
    background-size:cover;
    display:flex;
    justify-content: center;
    flex-direction : column;
    align-items: center;
    background-color : #76ffe8;
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

.trip-point-list {
    list-style : none;
    display : flex;
    flex-direction : column;
    .trip-point-item {
        height : 57px;
        display : flex;
        flex-direction : row;
        align-items: center ;
        justify-content : space-between;
        padding-right : 40px;
        padding-left : 40px;
        font-weight : bold;
        font-size : 15px;
        span:nth-child(2) {
            color : #6d6d75;
            font-style: underline;
            font-size : 14px;
        }
    }
}
</style>