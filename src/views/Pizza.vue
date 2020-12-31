<template>
  <div class="about mt-5">
      <h4>Order Details</h4>
  <div class="container mt-5">
  
  <div class="row">
    <div class="col-12">
      <!-- Order List -->
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Customer Name</th>
            <th scope="col">No.of Items Ordered</th>
            <th scope="col"> Amount</th>
            <th scope="col">Status</th>
            <th>Click to change status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="index">
            <td>{{item.name}}</td>
            <td>{{item.items}}</td>
            <td>{{item.Amount}}</td>
            <td>{{item.status}}</td>
            <td>
              <button type="button" class="btn btn-primary btn-sm mr-2" size='sm' v-if="item.status_id!='1'" @click="item.status='Order Received'">Received</button>
              <button type="button" class="btn btn-success btn-sm mr-2" v-if="item.status_id!='2'"  @click="item.status='Preparing'">Preparing</button>
            <button type="button" class="btn btn-danger btn-sm mr-2" v-if="item.status_id!='3'"  @click="item.status='Ready to Serve'">Ready to serve</button>
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
  </div>
</div>
  </div>
</template>
<script>
import { mapState } from "vuex"; // to accss state from all the vuex file
import store from "@/store/index"; // vuex store fucntion
export default {
  // Dispatch before the page loads
  beforeRouteEnter (to, from, next) {
    store
      .dispatch(
        "pizza/fetchpizzaList"
      )
      .then(() => {
        next();
      });
  },
  // To get data from store
   computed: {
 ...mapState({
    list: (state) => state.pizza.list,
    total_amount: (state) => state.pizza.total_amount,
 })
   }
}
</script>
