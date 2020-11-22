<template>
    <div>
        <div style = "display : flex; justify-content : space-between">
            <span style = "font-size : 28px; font-weight : bold">Trips</span>
            <div id="reportrange">
                <i class="fa fa-calendar"></i>
                <div style = ""></div>
                <i class="fa fa-caret-down"></i>
            </div>
        </div>
        <div class = "tripsStateCards">
            <div class = "card-wrap">
                <!--begin::Body-->
                <div class="card-title">TOTAL TRIPS</div>
                <div class="card-cnt">1233</div>
                <!--end::Stats-->
                <i class="fas fa-bicycle"></i>
                <!--end::Body-->
            </div>
            
            <div class = "card-wrap">
                <!--begin::Body-->
                <div class="card-title">ON TRIP</div>
                <div class="card-cnt">543</div>
                <!--end::Stats-->
                <i class="fas fa-money-bill-wave"></i>
                <!--end::Body-->
            </div>

            
            <div class = "card-wrap">
                <!--begin::Body-->
                <div class="card-title">TRIP COMPLETED</div>
                <div class="card-cnt">43</div>
                <!--end::Stats-->
                <i class="fas fa-road"></i>
                <!--end::Body-->
            </div>

            
            <div class = "card-wrap">
                <!--begin::Body-->
                <div class="card-title">TRIP CANCELED</div>
                <div class="card-cnt">43</div>
                <!--end::Stats-->
                <i class="fas fa-road"></i>
                <!--end::Body-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Trips",
    components : {
    },
    data: () => ({
    })
};
</script>

  
<style lang="scss" scoped>
#reportrange {
    cursor: pointer;
    padding: 5px 10px;
    display : flex;
    justify-content : space-between;
    align-items : center;
    i:first-child {
        margin-right : 15px;
        color : black;
        font-weight : bold;
    }
    i:last-child {
        margin-left : 30px;
        color : black;
        font-weight : bold;
    }
    div {
        display : flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        .rangeDate {
            color :#EEE;
            font-size : 20px;
            font-weight : bold;
        }
        .dayRange {
            color : #555;
            font-size : 15px;
        }
    }
}
.tripsStateCards {
    display : flex;
    flex-direction : row;
    margin-top : 20px;
    .card-wrap {
        position : relative;
        width : 190px;
        height : 70px;
        padding : 11px 13px;
        border-radius : 5px;
        margin-right : 10px;
    }
    .card-wrap:nth-child(1){
        background-color : #0078ff;
        .card-title {
            color: #ffffff;
            font-size: 15px;
            margin-bottom : 0px;
            font-weight : 100;
        }
        .card-cnt {
            font-size: 22px;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #ffffff;
        }
        i {
            right : 30px;
            top : 30px;
            position : absolute;
            font-size : 28px;
            color : white;
        }
    }
    .card-wrap:nth-child(2){
        background-color : #23c977;
        .card-title {
            color: #ffffff;
            font-size: 15px;
            margin-bottom : 0px;
            font-weight : 100;
        }
        .card-cnt {
            font-size: 22px;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #ffffff;
        }
        i {
            right : 15px;
            top : 30px;
            position : absolute;
            font-size : 28px;
            color : white;
        }
    }
    .card-wrap:nth-child(3){
        background-color : #4faafd;
        .card-title {
            color: #ffffff;
            font-size: 15px;
            margin-bottom : 0px;
            font-weight : 100;
        }
        .card-cnt {
            font-size: 22px;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #ffffff;
        }
        i {
            right : 15px;
            top : 30px;
            position : absolute;
            font-size : 28px;
            color : white;
        }
    }
    .card-wrap:nth-child(4){
        background-color : #fb1c1c;
        .card-title {
            color: #ffffff;
            font-size: 15px;
            margin-bottom : 0px;
            font-weight : 100;
        }
        .card-cnt {
            font-size: 22px;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #ffffff;
        }
        i {
            right : 15px;
            top : 30px;
            position : absolute;
            font-size : 28px;
            color : white;
        }
    }
}
</style>