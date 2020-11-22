<template>
    <div>
        <div class = "timeline-title">
            <span>Trip Timeline</span>

            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-success active">
                    <input type="radio" name="options" id="option1" checked="checked"/> Vehicle
                </label>
                <label class="btn btn-success btn btn-light btn-text-success btn-hover-text-success">
                    <input type="radio" name="options" id="option2"/> User
                </label>
            </div>
        </div>
        <table class="table table-borderless">
            <thead class="thead-light">
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Hasan Jasin</th>
                    <th scope="col">Location</th>
                    <th scope="col">Status</th>
                    <th scope="col">Battery</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{date, time, Jasim, Location, Status, Battery} in timeline" v-bind:key = "(date, time)">
                    <th scope="row">
                        <div class = "item-wrapper">
                            <div class = "item-title">{{date}}</div>
                            <div class = "item-label">{{time}}</div>
                        </div>
                    </th>
                    <td>
                        <div class = "jasim-wrapper">
                            <div class = "jasim-icon">
                                <i class = "fas fa-shuttle-van"></i>
                            </div>
                            <div class= "jasim-title">{{Jasim}}</div>
                        </div>
                    </td>


                    <td class = "item-location">{{Location}}</td>
                    <td v-if="Status=='Success'" class="status-success">{{Status}}</td>
                    <td v-else  class="status-fail">{{Status}} </td>
                    <td>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style = "width:70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                            </div>
                            <span>{{Battery}}</span>
                        </div>
                    </td>
                </tr>
                
            </tbody>
        </table>
    </div>
    
</template>

<script>

export default {
    name: "TripTimeline",
    components : {
    },
    data : ()=>({
        randcol : '#234124'
    }),
    props : ['timeline'],
    methods: {
      generator: function(){
        return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      }
    },
    mounted() {
        let eles = document.getElementsByClassName("jasim-icon");
        for (let ele of eles) 
            ele.childNodes[0].style.color = this.generator();
    }
}
</script>
<style lang="scss" scoped>
.timeline-title{
    position : relative;
    display : flex;
    flex-direction:row;
    justify-content : center;
    span {
        position : absolute;
        left : 20px;
        font-weight: bold;
        color : #2e2e39;
        font-size: 17px;
    }
    .btn-group {
        label {
            width : 80px;
            border-radius : 4px;
            flex-direction: row;
            display :flex;
            justify-content : center;
            align-items : center;
        }
        height : 30px;
    }
    margin-bottom : 20px;

}
table{
    tr th{
        font-weight: bold;
        color : #2e2e39;
        font-size: 17px;
    }
    .progress {
        position : relative;
        color : #2e2e39;
        font-size: 15px;
        display : flex;
        flex-direction : row;
        justify-content : space-between;
        width : 120px;
        .progress-bar {
            width : 70px;
            margin-right : 20px;
        }
        span{
            position : absolute;
            right: -0px;
            top : 6px;
            z-index : 999999;
        }
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
    .item-location{
        color : #808090;
        font-size: 12px;
    }

    .status-success{
        color : #208080;
        font-size: 12px;
        font-weight:bold;
    }
    .status-fail{
        color : #808020;
        font-weight:bold;
        font-size: 12px;
    }
    .jasim-wrapper {
        display : flex;
        flex-direction : row;
        align-items : center;
        .jasim-icon {
            display : flex;
            flex-direction : row;
            align-items : center;
            justify-content : center;
            border-radius : 100%;
            box-shadow: 0px 2px 4px 0 rgba(170,180,184,0.51);
            width : 30px;
            height : 30px;
            font-size : 20px;
        }
        .jasim-title {
            color : #808090;
            font-size: 12px;
        }
    }
}
</style>