<template>
    <div>
        <div class="org-ma-detail">
            <div class="org-ma-title">Organization Management /</div>
            <div class="org-detail-title">Details(#234234)</div>
            <div class="profile-status">
                <div class="profile-status-title">Profile Status</div>
                <div class="status">Active</div>
            </div>
        </div>
        <div class="org-menu">
            <div class="org-menu-logo"></div>
            <div class="org-menu-title">
                E:Skoot<div class="org-area">United Kindom</div>
            </div>
            <div class="d-flex flex-wrap justify-content-between mt-1" style="margin-left:124px;">
                <div class="d-flex flex-column flex-grow-1 pr-8">
                    <div class="d-flex flex-wrap mb-4">
                        <a href="#" class="text-dark-50 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                        <i class="flaticon2-new-email mr-2 font-size-lg"></i>jason@siastudio.com</a>
                        <a href="#" class="text-dark-50 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                        <i class="flaticon2-phone mr-2 font-size-lg"></i>01822736352</a>
                        <a href="#" class="text-dark-50 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                        <i class="fas fa-baseball-ball mr-2 font-size-lg"></i>www.eskoot.com</a>
                    </div>
                </div>
            </div>
            <ul class="nav nav-tabs nav-tabs-line nav-tabs-black" style = "margin : 30px 0px 0px 10px">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#kt_tab_pane_1">SUMMARY</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#kt_tab_pane_2">BASIC PROFILE</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#kt_tab_pane_2">ASSIGNED FLEETS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#kt_tab_pane_2">VEHICLES LISTS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#kt_tab_pane_2">PAYOUT</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#kt_tab_pane_2">OPERATIONAL AREAS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#kt_tab_pane_2">TASKS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#kt_tab_pane_2">USER</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#kt_tab_pane_2">REVENU</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#kt_tab_pane_2">RIDER</a>
                </li>
            </ul>
        </div>
        <div class="org-content">
            <div class="org-content-title">Summary
                <div class="org-content-select">All Fleets</div>
            </div>
            <div style="margin-left:900px; margin-top:-30px;">
                <div id="reportrange">
                    <i class="fa fa-calendar"></i>
                    <div style = ""></div>
                    <i class="fa fa-caret-down"></i>
                </div>
            </div>
            <div class="line"></div>
            <div class="user-para">
                
            </div>         
        </div>        
    </div>
</template>

<script>

export default {
    name: "Dashboard",
};
</script>
<script type="text/javascript">
    $(function() {
        var start = moment().subtract(29, 'days');
        var end = moment();
        function cb(start, end) {
            $('#reportrange div').html(
                `<span class = "rangeDate">` + start.format('MM D') + ' - ' + end.format('MM D') + `</span><span class = "dayRange">` + "29 DAYS REPORT" + `</span>`
            );
        }
        $('#reportrange').daterangepicker({
            startDate: start,
            endDate: end,
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);
        cb(start, end);
    });
</script>
<style scoped>
.org-ma-detail{
    width: 1173px;
    height: 94px;
    margin: 10px 12px 2px 5px;
    padding: 23px 37px 17px 25px;
    border-radius: 5px;
    background-color: #ffffff;
}
.org-ma-title{
    width: 232px;
    height: 24px;
    margin: 18px 14px 12px 0;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #9393a2;
}
.org-detail-title{
    width: 227px;
    height: 37px;
    margin: -45px 240px;
    font-family: Roboto;
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #2e2e39;
}
.profile-status{
    width: 222px;
    height: 54px;
    margin: 0px 0px 0px 900px;
    padding: 9px 26px 8px 17px;
    border-radius: 4px;
    box-shadow: 0 3px 6px 0 rgba(61, 73, 82, 0.22);
    border: solid 1px #f5f5f5;
    background-color: #ffffff;
}
.profile-status-title{
    width: 80px;
    height: 18px;
    margin: 0 90px 1px 0;
    opacity: 0.79;
    font-family: Roboto;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #15151b;
}
.status{
    width: 43px;
    height: 20px;
    font-family: Roboto;
    font-size: 15px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #05b32b;
}
.org-menu{
    width: 1173px;
    height: 196px;
    margin: 2px 11px 3px 6px;
    padding: 24px 63px 0 29px;
    border-radius: 5px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
}
.org-menu-logo{
    width: 104px;
    height: 104px;
    margin: 0 21px 30px 0;
    background-color: red;
    border-radius: 50px;
}
.org-menu-title{
    width: 228px;
    height: 27px;
    margin: -120px 0px 10px 40px;
    padding: 3px 32px 2px 82px;
    font-family: Roboto;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #2e2e39;
}
.org-area{
    width: 114px;
    height: 22px;
    padding: 3px 12px 1px 10px;
    border-radius: 11px;
    background-color: #ededed;
    font-family: Roboto;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #6d6d75;
    margin:-22px 0px 0px 85px;
}
.org-content{
    width: 1173px;
    height: 416px;
    margin: 3px 11px 7px 6px;
    padding: 19px 38px 23px 34px;
    border-radius: 5px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
}
.org-content-title{
    width: 202px;
    height: 26px;
    margin: 4px 108px 39px 0;
    font-family: Roboto;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #2e2e39;
}
.org-content-select{
    width: 199px;
    height: 34px;
    margin: -28px 0px 0px 120px;
    padding: 8px 27px 3px 20px;
    border-radius: 30px;
    background-color: #f3f3f3;
    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #2e2e39;
}
.line{
    width: 146px;
    height: 1px;
    margin: 0 0 9px;
    border-radius: 2px;
    background-color: #000000;
}
</style>