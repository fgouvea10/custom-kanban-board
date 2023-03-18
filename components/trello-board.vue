<script setup lang="ts">
import { nanoid } from 'nanoid'
import type { Column } from '~~/types';

const columns = ref<Column[]>([
  {
    id: nanoid(),
    title: 'Test',
    tasks: [
      { id: nanoid(), title: 'Create something', createdAt: new Date()}
    ]
  }
])
</script>

<template>
  <div>
    <div v-for="column in columns" :key="column.id">
      <header>
        {{ column.title }}
      </header>
      <p v-for="task in column.tasks" :key="task.id">
        {{ task.title }}
      </p>
    </div>
  </div>
</template>