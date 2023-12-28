<script setup lang="ts">
import RadioAccordion from './components/RadioAccordion.vue'
import { ref, watch, getCurrentInstance } from 'vue'

const accordionsData = [
  {
    id: 1,
    title: "I'm looking to sell a property I own",
    subtitle: 'Awesome, we can get your listing published right now',
    name: 'sell',
    value: '1'
  },
  {
    id: 2,
    title: "I'm looking for a good deal to buy",
    subtitle: "Great! We're so glad you're here. Start browsing and happy hunting",
    name: 'buy',
    value: '2'
  },
  {
    id: 3,
    title: "I'm just exploring",
    subtitle: "No problem, we'd love to help you learn about Aloha My Home",
    name: 'explore',
    value: '3'
  }
]

const modelValue = ref<Number>(1)
const setModelValue = (id: number) => {
  modelValue.value = id
}
</script>

<template>
  <main>
    <div class="w-full h-max flex justify-center content-center">
      <div class="max-w-108 mt-32 mx-4">
        <p class="mb-4 text-sm text-slate-500 font-semibold">What are you looking to do?</p>
        <div v-for="{ id, name, title, subtitle, value } in accordionsData" :key="id">
          <RadioAccordion
            :modelValue="modelValue"
            :value="value"
            :name="name"
            :id="id"
            :active="id === modelValue"
            :title="title"
            :subtitle="subtitle"
            :setModelValue="setModelValue"
          />
        </div>
      </div>
    </div>
  </main>
</template>
