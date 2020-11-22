<template>
    <div>
        <div class = "page-header">
            <div class = "page-title">
                <span>User Management / </span>
                <span>  Details(#234234)</span>
            </div>
            <button class="btn-sample btn-verify">
                <div class = "btn-verified">
                    <div class="btn-profile">Profile&nbsp;Status</div>
                    <div class="btn-verify-text">Verified</div>
                </div>
                <div class="angle-icon"><i class="fas fa-angle-down angle-icon"></i></div>
            </button>
        </div>
        
        <TripNavHeader />
     
        <div class = "SubTitle-tools">
            <div class = "SubTitle-title">
                TRIP DETAILS (ID: 32334)
            </div>
            <div class = "SubTitle-Btns">
                <button class="btn-sample" style="cursor:pointer">
                    <div class="upload-icon"><i class="flaticon-download"></i></div>
                    <div class="drop-icon">Download&nbsp;Invoice&nbsp;As</div>
                    <div class="angle-icon"><i class="fas fa-angle-down angle-icon"></i></div>
                </button>
                <button class="btn-sample" style="cursor:pointer">
                    <div class="upload-icon"><i class="flaticon-download"></i></div>
                    <div class="drop-icon">Export&nbsp;As</div>
                    <div class="angle-icon"><i class="fas fa-angle-down angle-icon"></i></div>
                </button>
                <button class="btn-sample btn-sample-activate" style="cursor:pointer">
                    <div class="drop-icon">Trip&nbsp;Completed</div>
                    <div class="angle-icon"><i class="fas fa-angle-down angle-icon"></i></div>
                </button>
            </div>
        </div>
        
        <div class = "row">
            <div class = "col-lg-7">
                <div class="card card-custom">
                    <div  class="card-body" style = "padding : 0px;  height : 897px;">
                        <google-map />
                    </div>
                </div>
                <div class="card card-custom" style = "margin-top:10px">
                    <div  class="card-body" style = "padding-bottom : 1px;  height : 326px;">
                        <TripVehicle />
                    </div>
                </div>
            </div>
            <div class = "col-lg-5">
                <div class="card card-custom">
                    <TripPrice ></TripPrice>
                </div>
                <TripPointer />
            </div>
        </div>
        <div class="card card-custom gutter-b" style = "margin-top:10px">
            <div class="card-body" style = "padding-bottom : 1px">
                <TripTimeline v-bind:timeline="timeline"/>
            </div>
        </div>
    </div>
</template>

<script>
import GoogleMap from "@/view/custom/OrgUserManagement/UserManagement/GoogleMap";
import TripPrice from "@/view/custom/OrgUserManagement/UserManagement/TripPrice";
import TripVehicle from "@/view/custom/OrgUserManagement/UserManagement/TripVehicle";
import TripTimeline from "@/view/custom/OrgUserManagement/UserManagement/TripTimeline";
import TripNavHeader from "@/view/custom/OrgUserManagement/UserManagement/TripNavHeader";
import TripPointer from "@/view/custom/OrgUserManagement/UserManagement/TripPointer";

export default {
    name: "TripHistory",
    components : {
        GoogleMap, TripPrice,TripVehicle, TripTimeline,TripNavHeader, TripPointer
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
        },
        timeline : [
            {
                date : "27/08/2020",
                time : "7:56 23 PM",
                Jasim : "Trip Enabled",
                Location : "Rd 8,156/A, GulShan 2 Dhaka",
                Status : "Success",
                Battery : "35"
            },
            {
                date : "27/08/2020",
                time : "7:56 23 PM",
                Jasim : "Trip Enabled",
                Location : "Rd 8,156/A, GulShan 2 Dhaka",
                Status : "Success",
                Battery : "50"
            },
            {
                date : "27/08/2020",
                time : "7:56 23 PM",
                Jasim : "Trip Enabled",
                Location : "Rd 8,156/A, GulShan 2 Dhaka",
                Status : "Success",
                Battery : "60"
            },
            {
                date : "27/08/2020",
                time : "7:56 23 PM",
                Jasim : "Trip Enabled",
                Location : "Rd 8,156/A, GulShan 2 Dhaka",
                Status : "Success",
                Battery : "70"
            },
            {
                date : "27/08/2020",
                time : "7:56 23 PM",
                Jasim : "Trip Enabled",
                Location : "Rd 8,156/A, GulShan 2 Dhaka",
                Status : "Success",
                Battery : 80
            }
        ]
    })
}
</script>