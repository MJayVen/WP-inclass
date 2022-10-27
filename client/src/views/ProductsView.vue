<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue";
import { RouterLink } from "vue-router";
import { getProducts, type Product } from "../stores/products";

const products = reactive(getProducts());
const search = ref('');

/* METHOD 1 - functional programming (always equal to value of function)*/
// const results = computed(() => {
//   return products.filter((product) => {
//     return product.title.toLowerCase().includes(search.value.toLowerCase());
//   });
// });

/* METHOD 2 - imperative programming (on change, do something) */
const results = ref(products);
function searchProducts() { // called on @input change
    results.value = products.filter((product) => {
        return product.title.toLowerCase().includes(search.value.toLowerCase());
    });
}
// METHOD 3: */
watch(search, searchProducts); // without @input

</script>

<template>
    <div>
        <div class="control">
            <input class="input" type="text" v-model="search" placeholder="Search">
        </div>
        <div class="products">
            <RouterLink class="product" v-for="product in results" 
                        :key="product.id" :to="`/product/${product.id}`"
                        v-show="product.title.toLowerCase().includes(search.toLowerCase())">
                        <!-- METHOD 4 ^^^ - delcarative -->
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

.amount {
    font-size: 1.5em;
    font-weight: bold;
}

.currency {
    font-size: x-small;
}
</style>