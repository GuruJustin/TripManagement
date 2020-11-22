<template>
    <div style="background-color:#ffffff!important;" class="Fleet">        
        <div class="row" >
          <v-card style="width: 100%">
            <div class="row Fleets" >
              <div class="btn btn-icon btn-lg mr-1 Fleets" style="justify-content: left; width: 200px" id="kt_quick_panel_toggle">
                  Fleets<b-button class="Rectangle-Copy-34" style="" pill variant="primary">+</b-button>
              </div>    
            </div>
            <v-card-title class="row">
              <div class="col-sm-3">
              <b-input-group>
                <span class="input-group-text" style="z-index: 1; left: 0px; top: 10px;"><i class="fa fa-search fa-lg"></i></span> 
                <b-form-input v-model="search" style="height:40px; padding-left: 40px;border-radius:5px;" size="lg" placeholder="Search">
                </b-form-input>
              </b-input-group>  
              </div>         
              <div class="col-sm-3">
                <v-select
                  v-model="enabled"
                  :items="slots"
                  label="Filter"
                  clearable
                ></v-select>
              </div>
              <div class="col-sm-4"></div>
              <div class="col-sm-2">
                <div class="export-icon" style="cursor:pointer">
                    <div class="upload-icon"><i class="flaticon-download"></i></div>
                    <div class="drop-icon">Export As</div>
                    <div class="angle-icon"><i class="fas fa-angle-down angle-icon"></i></div>
                </div>
              </div>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :search="search"
              item-key="id"
              :page.sync="page"
              :items-per-page="itemsPerPage"
              hide-default-footer
              class="elevation-1"
              @page-count="pageCount = $event"
            >
            <template v-slot:item.status="{ item }">
              <v-chip
                v-bind:style="{backgroundColor:getColor(item.status)}"
                style="text-align: center;color: white; width: 70px; height: 30px; border-radius: 5px"
    
              >
                {{ item.status }}
              </v-chip>
            </template>
              <template v-slot:item.action="{ item }">
                <v-icon
                  small
                  class="mr-2"
                  @click="editItem(item)"
                >
                  mdi-pencil
                </v-icon>
              
              </template>
            </v-data-table>

            <div class="text-end pt-2" style="display:block; padding-left: 10px;">
            <label style="float: left">Showing</label>
            <v-text-field
            :value="itemsPerPage"
            label=""
            type="number"
            min="-1"
            max="15"
            @input="itemsPerPage = parseInt($event, 10)"
            style="width: 30px; float:left; margin-left:20px;margin-top: -22px;"
            >
            
            </v-text-field>
            <label style="float: left">Entries</label>
            <v-pagination
              v-model="page"
              :length="pageCount"
              style="width:20%; float: right;"
            >
            </v-pagination>
          
        </div>
          </v-card>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Fleets',
    components: {
    },
    data () {
      return {
        page: 1,
        pageCount: 0,
        itemsPerPage: 10,
        enabled: null,
        search: '',
        slots: [
          'body',
          'top',
        ],
        headers: [
          {
            text: 'Fleet ID',
            align: 'start',
            sortable: true,
            value: 'id'
          },
          {
            text: 'Fleet Name', value: 'name'},
          { text: 'Location Name', value: 'location' },
          { text: 'Pricing', value: 'pricing' },
          { text: 'Visibility Status', value: 'status' },
          { text: 'Support Email', value: 'email' },
          { text: 'Date Created', value: 'date' },
          { text: 'Action', value: 'action', sortable: false },

        ],
        desserts: [
          {
            id: '1',
            name: 'Gulshan',
            location: '32/1 Gulshan 1',
            pricing: 'Freego-25',
            status: 'Public',
            email: 'mymail@yahoo.com',
            date: '22 January, 2020, 11:20 PM',
            action: '',
          },
          {
            id: '2',
            name: 'Basundhara',
            location: '2 Niketon',
            pricing: 'Freego-25',
            status: 'Public',
            email: 'mymail@yahoo.com',
            date: '22 January, 2020, 11:20 PM',
            action: '',
          },
          {
            id: '3',
            name: 'Jump Ride',
            location: 'Gulshan 1',
            pricing: 'Freego-25',
            status: 'Public',
            email: 'mymail@yahoo.com',
            date: '22 January, 2020, 11:20 PM',
            action: '',
          },{
            id: '4',
            name: 'Jump Ride',
            location: 'Gulshan 1',
            pricing: 'Freego-25',
            status: 'Private',
            email: 'mymail@yahoo.com',
            date: '22 January, 2020, 11:20 PM',
            action: '',
          },{
            id: '5',
            name: 'Jump Ride',
            location: 'Gulshan 1',
            pricing: 'Freego-25',
            status: 'Public',
            email: 'mymail@yahoo.com',
            date: '22 January, 2020, 11:20 PM',
            action: '',
          },{
            id: '6',
            name: 'Jump Ride',
            location: 'Gulshan 1',
            pricing: 'Freego-25',
            status: 'Private',
            email: 'mymail@yahoo.com',
            date: '22 January, 2020, 11:20 PM',
            action: '',
          },{
            id: '7',
            name: 'Jump Ride',
            location: 'Gulshan 1',
            pricing: 'Freego-25',
            status: 'Public',
            email: 'mymail@yahoo.com',
            date: '22 January, 2020, 11:20 PM',
            action: '',
          },{
            id: '8',
            name: 'Jump Ride',
            location: 'Gulshan 1',
            pricing: 'Freego-25',
            status: 'Public',
            email: 'mymail@yahoo.com',
            date: '22 January, 2020, 11:20 PM',
            action: '',
          },{
            id: '9',
            name: 'Jump Ride',
            location: 'Gulshan 1',
            pricing: 'Freego-25',
            status: 'Public',
            email: 'mymail@yahoo.com',
            date: '22 January, 2020, 11:20 PM',
            action: '',
          },
        ],
      }
    },
    mounted () {
      

    },
    methods: {
      getColor (status) {
        
        if (status == 'Public') 
        {
          return 'green';
        }
        else 
        {
          return 'orange';
        }
      },
    },
  }
</script>

<style>
.theme--light.v-pagination .v-pagination__item{
  background-color: #455964 !important;
}
.Fleet {
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #21212a;
}
.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
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
.Rectangle-Copy-34 {
  width: 30px;
  height: 30px;
  padding: 9px 9px 8px;
  border-radius: 27px;
  box-shadow: 0 3px 6px 0 rgba(61, 73, 82, 0.22);
  background-color: #2978ff;
  border-radius: 50% !important; 
  font-family: Roboto; 
  font-size: 25px; 
  font-stretch: normal; 
  font-style: normal; 
  line-height: normal; 
  padding: 0 !important;
  margin-left: 10px;
  
}
.Fleets {
  height: 37px;
  margin: 0 10px 40px 4px;
  font-family: Roboto;
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
</style>