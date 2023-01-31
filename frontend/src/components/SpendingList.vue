<template>
    <div>
      <h1>Your spendings</h1>
      <div class="input">
        <input v-model="item" placeholder="Item" />
        <input v-model="price" type="number" placeholder="Price" />
        <button @click="addItem">Add</button>
      </div>
      <div class="total">
        <Text>Total: ${{ total }}</Text>
      </div>
      <ul class="list">
        <li v-for="item in items" :key="item.id">{{ item.item + " $" + item.price }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [],
        price: null,
        item: '',
        total: 0,
      }
    },
    methods: {
      addItem() {
        this.items.push({
          id: this.items.length + 1,
          price: this.price,
          item: this.item
        })
        this.total += parseInt(this.price) 
        this.item = ''
        this.price = null
      }
    }
  }
  </script>

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
  