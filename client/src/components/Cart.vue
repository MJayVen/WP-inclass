<script setup lang="ts">
    import FlyoutPanel from './FlyoutPanel.vue';

    const { isOpen } = defineProps<{
        isOpen: boolean;
    }>();

    const cart = [
        {
            id: 1,
            name: 'Product 1',
            price: 9.99,
            image: 'https://picsum.photos/200/300',
        },
        {
            id: 2,
            name: 'Product 2',
            price: 19.99,
            image: 'https://picsum.photos/200/300',
        },
        {
            id: 3,
            name: 'Product 3',
            price: 29.99,
            image: 'https://picsum.photos/200/300',
        }
    ];

    function closeCart () {
        // isActive = false;
    }
    function checkout() {
    }
</script>

<template>
    <FlyoutPanel :is-open="isOpen">
        <template #header>
            <h3 class="title">Cart</h3>
            <button class="button is-danger" @click="closeCart">Close</button>
        </template>
        <div>
            <div class="fly-out-body">
                <div v-if="!cart">
                    <p>Your cart is empty</p>
                </div>
                <div v-else>
                    <div v-for="item in cart" :key="item.id">
                        <div class="columns">
                            <div class="column is-4">
                                <img :src="item.image" :alt="item.name" />
                            </div>
                            <div class="column is-8">
                                <p>{{ item.name }}</p>
                                <p>{{ item.price }}</p>
                            </div>
                        </div>
                    </div>
                    <button class="button is-success">Checkout</button>
                </div>
            </div> 
        </div>
    </FlyoutPanel>
</template>

<style scoped>
    
</style>