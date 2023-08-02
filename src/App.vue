<script setup>
import { reactive } from 'vue';
const estado = reactive({
  value1: 0,
  value2: 0,
  operacao: 'adicao',
  resultado: 0,
});

function calcula() {
  const { value1, value2, operacao } = estado;
  switch (operacao) {
    case '+':
      estado.resultado = value1 + value2;
      break;
    case '-':
      estado.resultado = value1 - value2;
      break;
    case '*':
      estado.resultado = value1 * value2;
      break;
    case '/':
      estado.resultado = value1 / value2;
      break;
    default:
      estado.resultado = 0;
  }
}
</script>

<template>
  <input type="number" v-model="estado.value1" @keyup="calcula" />
  <select v-model="estado.operacao" @change="calcula">
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
  </select>
  <input type="number" v-model="estado.value2" @keyup="calcula" />
  <p>{{ estado.resultado }}</p>
</template>
