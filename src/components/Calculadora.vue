<template>
    <div>
        <input type="number" v-model="value1" @keyup="calcula">
        <select v-model="operacao" @change="calcula">
            <option value="adicao">+</option>
            <option value="subtracao">-</option>
            <option value="multiplicacao">*</option>
            <option value="divisao">/</option>
        </select>
        <input type="number" v-model="value2" @keyup="calcula">
        <p>{{ resultado }}</p>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
const value1 = ref(0);
const value2 = ref(0);
const operacao = ref('adicao');
const resultado = ref(0);

function calcula() {
    switch (operacao.value) {
        case 'adicao':
            resultado.value = value1.value + value2.value;
            break;
        case 'subtracao':
            resultado.value = value1.value - value2.value;
            break;
        case 'multiplicacao':
            resultado.value = value1.value * value2.value;
            break;
        case 'divisao':
            resultado.value = value1.value / value2.value;
            break;
        default:
            resultado.value = 0;
    }
}
</script>
  