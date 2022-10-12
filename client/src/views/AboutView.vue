<script setup lang="ts">
  const items = [
    { name: 'Shoes', cost: 30, qty : 2 },
    { name: 'Shirt', cost: 20, qty : 1 },
    { name: 'Pants', cost: 50, qty : 1 },
  ]

  const cart = [
    { name: 'Shoes', cost: 30,  qty:2 },
    { name: 'Shirt', cost: 20, qty:1}
  ]
  function addtoCart(item: any) {
    cart.push({ ...item, qty: 1 })
  }
</script>

<template>
  <div class="about">
    <h1 class="title">This is an about page</h1>

    <ul>
      <li v-for="item in items" :key="item.name" @click="addtoCart(item)">
        <h3>{{ item.name }}</h3>
        <em>{{ item.cost }}</em>
      </li>
    </ul>

    <h2>Cart</h2>
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Cost</th>
      </tr>
      <tr v-for="item in cart" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.cost }}</td>
        <td><input v-model="item.qty" /></td>
        <td>{{ item.cost * item.qty }}</td>
      </tr>
      <tr>
        <td colspan="3">Total</td>
        <td>{{ cart.reduce((total, item) => total + item.cost * item.qty, 0) }}</td>
      </tr>
    </table>


  </div>
</template>

<style lang="scss">
  ul {
    display: flex;
    li {
      width: 300px;
      padding: 5px;
      margin: 5px;
    }
  }
</style>
