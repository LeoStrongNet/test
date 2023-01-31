<script>
  export default {
    data() {
      return {
        items: [],
        symbol: '',
        shares: null,
      }
    },
    methods: {
      addItem() {
        this.items.push({
          id: this.items.length + 1,
          symbol: this.symbol,
          total: this.shares,
        })
        this.symbol = ''
        this.shares = null
      }
    }
  }
</script>

<script setup>
import {STOCK_API, STOCK_API_KEY} from '../resources/stock-api'
</script>

<template>
    <div>
      <h1>Your stocks</h1>
      <div class="input">
        <input v-model="symbol" placeholder="Stock symbol" />
        <input v-model="shares" type="number" placeholder="# Shares" />
        <button @click="addItem">Add</button>
        <Text>{{STOCK_API}}</Text>
      </div>
      <ul class="list">
        <li v-for="item in items" :key="item.id">{{ item.symbol + " $" + item.total }}</li>
      </ul>
    </div>
</template>

<style scoped>

.input {
  top: 10px;
}

.total Text {
    font-weight: 20;
    font-size: 1rem;
    top: 10px;
}

.list {
  top: 10px;
}

h1 {
  font-weight: 50;
  font-size: 2rem;
  top: 10px;
}
</style>