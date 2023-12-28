<script setup lang="ts">
interface Props {
  modelValue?: Number
  value?: string
  name?: string
  id: number
  active: boolean
  title: string
  subtitle: string
  setModelValue: Function
}

defineProps<Props>()
</script>

<template>
  <div
    class="max-w-md flex flex-row shadow-md rounded-sm mb-4 content-center p-4 cursor-pointer"
    :class="active ? 'bg-amber-50' : 'hover:bg-slate-50'"
    @click="setModelValue(id)"
  >
    <div class="w-6 mr-2">
      <input
        :value="id"
        :name="name"
        type="radio"
        class="input-radio border-red-800 border-2"
        :checked="active"
      />
    </div>
    <div class="w-full grid content-center text-sm">
      <h3 class="font-bold">{{ title }}</h3>
      <span class="text-xs text-slate-500">{{ subtitle }}</span>
      <div v-if="active" class="text-xs text-slate-700 border-t-2 mt-4 pt-4">
        <div class="flex flex-row justify-between mb-4">
          <p>Create a listing now</p>
          <div class="arrow-right"></div>
        </div>
        <div class="flex flex-row justify-between">
          <p>Explore active listings in your area</p>
          <div class="arrow-right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-radio:checked {
  background-image: url('../assets/checked.svg');
  background-size: 8px 8px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  border: 2px solid #b17583;
}

.arrow-right {
  width: 15px;
  height: 15px;
  background-image: url('../assets/arrow-right.svg');
  background-size: 15px 15px;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
