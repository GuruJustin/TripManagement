<template>
    <div class="card card-custom gutter-b" style = "margin-bottom:0px">
        <div class="card-body" style = "padding-bottom : 1px">
            <!--begin::Details-->
            <div class="d-flex mb-9">
                <!--begin: Pic-->
                <div class="flex-shrink-0 mr-7 mt-lg-0 mt-3">
                    <div class="symbol">
                        <img src="/media/users/user5.jpg" alt="image" style = "border-radius : 100%; height : 104px; max-width:103px; width : 103px;">
                    </div>
                </div>
                <!--end::Pic-->
                <!--begin::Info-->
                <div class="flex-grow-1" style = "display : flex; flex-direction : column; justify-content : center; margin-top : -15px">
                    <!--begin::Title-->
                    <div class="d-flex justify-content-between flex-wrap mt-1">
                        <div class="d-flex mr-3">
                            <a href="#" class="text-dark-75 text-hover-primary font-size-h5 font-weight-bold mr-3">Jason Muller</a>
                            <a href="#">
                                <span class="label label-inline mr-2" style = "font-size : 13px">student</span>
                            </a>
                        </div>
                    </div>
                    <!--end::Title-->
                    <!--begin::Content-->
                    <div class="d-flex flex-wrap justify-content-between mt-1">
                        <div class="d-flex flex-column flex-grow-1 pr-8">
                            <div class="d-flex flex-wrap mb-4">
                                <a href="#" class="text-dark-50 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                <i class="flaticon2-new-email mr-2 font-size-lg"></i>jason@siastudio.com</a>
                                <a href="#" class="text-dark-50 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                <i class="flaticon2-phone mr-2 font-size-lg"></i>01822736352</a>
                            </div>
                        </div>
                    </div>
                    <!--end::Content-->
                </div>
                <!--end::Info-->
            </div>
            <ul class="nav nav-tabs nav-tabs-line nav-tabs-primary" style = "margin : 0px">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#kt_tab_pane_1"> SIC INFO</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#kt_tab_pane_2">TRIP HISTORY</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#kt_tab_pane_2">TRANSACTION</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#kt_tab_pane_2">PAYMENT METHOD</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#kt_tab_pane_2">REFERAL</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#kt_tab_pane_2">POINTS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#kt_tab_pane_2">PASS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#kt_tab_pane_2">REPORTS</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: "TripNavHeader",
}
</script>
<style lang="scss" scoped>
.nav .nav-link:hover:not(.disabled), .nav .nav-link.active {
    color: black;
    font-weight : bold;
}

.nav.nav-tabs.nav-tabs-line .nav-link.active{
    border-bottom : 1px solid black;
}

.nav.nav-tabs.nav-tabs-line .nav-link:hover:not(.disabled) {
    border-bottom : 1px solid black;
}

</style>