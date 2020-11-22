<template>
    <div style="background-color:#ffffff!important;padding-top:31px;">
        <div class="row Organization-List">
            Organization List
        </div>
        <div class="row">
            <div class="col-sm-8">
                <div class="org-search" style="width: 198px;height: 35px;margin: 20px 182px 17px 0;">
                    <KTSearchDefault></KTSearchDefault>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="export-icon" style="cursor:pointer">
                    <div class="upload-icon"><i class="flaticon-download"></i></div>
                    <div class="drop-icon">Export As</div>
                    <div class="angle-icon"><i class="fas fa-angle-down angle-icon"></i></div>
                </div>
            </div>
            <div class="col-sm-1">
                <AddModal></AddModal>
            </div>
        </div>
        <div>
            <b-table striped hover :items="items" :fields="fields" responsive="sm">
                 <template #cell(Action)="row">               
                    <div><i class="fas fa-pencil-alt"></i></div>
                </template>
                <template #cell(Active_Status)="row">
                    <button size="sm" class="btn btn-warning">
                        Active
                    </button>
                </template>
            </b-table>
        </div>
        <div>
            <b-modal id="modal-1" title="BootstrapVue" class="modal fade right">
                <h1>Add Organization</h1>
            </b-modal>
        </div>
        
    </div>
</template>

<script>
// import { mdbIcon,mdbFormInline } from 'mdbvue';
// import { mapGetters } from "vuex";
import KTSearchDefault from "@/view/layout/extras/dropdown/SearchDefault1.vue";
import AddModal from "@/view/layout/extras/offcanvas/AddModal.vue";
export default {
    name: "OrganizationalList",
    components: {
        KTSearchDefault,
        AddModal
    },
    data() {
        return {
            fields: ['Organiztion_ID', 'Name', 'Created_Date', 'Country', 'Active_Status', 'Action'],
            items: [
                { Organiztion_ID: 1, Name: 'Jump Ride', Created_Date: '27 June,2019 ', Country:'Bangulaesh' ,Active_Status: '', Action: '' },
                { Organiztion_ID: 2, Name: 'Drop Bike', Created_Date: '26 May, 2019',Country:'United States' ,Active_Status: '',Action: ''  },
                { Organiztion_ID: 3, Name: 'Glide', Created_Date: '23 April, 2018 ',Country:'AUE' ,Active_Status: '',Action: ''  },
                { Organiztion_ID: 4, Name: 'OtoRide', Created_Date: '21 January, 2019',Country:'Australia' ,Active_Status: '',Action: ''  },
            ]
        }
    },
    computed: {
        
    },
    mounted() {
        // this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
        AddModal.init(this.$refs["organ-modal-show"]);
    },
    methods: {
        
    }
};
</script>
<style scoped>
.Organization-List {
  width: 216px;
  height: 37px;
  /* margin: 0 162px 35px 2px; */
  margin-left: 18px;
  font-family: Roboto;
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.export-icon{
    width: 130px;
    height: 35px;
    margin: 35px 12px 17px 13px;
    padding: 10px 12px 9px 11px;
    border-radius: 2px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.27);
    background-color: #ffffff;
}
.drop-icon{
    width: 59px;
    height: 16px;
    margin: -11px 20px 0 30px;
    font-family: HelveticaNeue;
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #575762;
}
.upload-icon{
    width: 11px;
    height: 12px;
    margin: -1px 11px 2px 0;
}
.angle-icon{
    width: 6px;
    height: 3px;
    margin: -16px 0 7px 44px;
}    
</style>