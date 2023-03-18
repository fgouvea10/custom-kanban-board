<script setup lang="ts">
import { nanoid } from 'nanoid'
import type { Column } from '~~/types';

const columns = ref<Column[]>([
  {
    id: nanoid(),
    title: 'Test',
    tasks: [
      { id: nanoid(), title: 'Create something', createdAt: new Date()},
      { id: nanoid(), title: 'Create something', createdAt: new Date()},
      { id: nanoid(), title: 'Create something', createdAt: new Date()}
    ]
  }
])
</script>

<template>
  <div class="flex gap-4 overflow-x-auto items-start">
    <div v-for="column in columns" :key="column.id" class="bg-gray-200 column p-5 rounded min-w-[250px]">
      <header class="font-bold mb-4">
        {{ column.title }}
      </header>
      <TrelloBoardTask v-for="task in column.tasks" :task="task" />
      <footer>
        <button type="button" class="text-gray-500 mt-2 p-1 hover:bg-gray-300 rounded transition-colors">+ Add a card</button>
      </footer>
    </div>
  </div>
</template>