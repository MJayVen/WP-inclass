<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { RouterLink } from "vue-router";
import { getProducts } from "../stores/products";

const products = reactive(getProducts());
const search = ref('');

const results = computed(() => {
  return products.filter((product) => {
    return product.title.toLowerCase().includes(search.value.toLowerCase());
  });
});

</script>

<template>
    <div>
        <div class="control">
            <input class="input" type="text" v-model="search" placeholder="Search">
        </div>
        <div class="products">
            <RouterLink class="product" v-for="product in resultsx  ``" :key="product.id" :to="`/product/${product.id}`">
                <div class="product-image">
                    <img :src="product.thumbnail" :alt="product.title">
                </div>
                <div class="product-info">
                    <h3>{{ product.title }}</h3>
                    <p>{{ product.description }}</p>
                    <p class="price">
                        <span class="currency">$</span>
                        <span class="amount">{{ product.price }}</span>
                    </p>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.products {
    display: flex;
    flex-wrap: wrap;
    background-color: aliceblue;
}

.product {
    flex-basis: 10em;
    margin: 1em;
    padding: 1em;
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
}

.product-info {
    font-size: small;
}

.price {
    display: flex;
    align-items: flex-start;
}
.amount{
    font-size: 1.5em;
    font-weight: bold;
}
.currency{
    font-size: x-small;
}
</style>