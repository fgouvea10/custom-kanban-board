<script setup lang="ts">
import { nanoid } from 'nanoid'
import draggable from 'vuedraggable'

import type { Column } from '~~/types';

const columns = ref<Column[]>([
  {
    id: nanoid(),
    title: 'To Do',
    tasks: [
      { id: nanoid(), title: 'Create something', createdAt: new Date() },
      { id: nanoid(), title: 'Create something', createdAt: new Date() },
      { id: nanoid(), title: 'Create something', createdAt: new Date() }
    ]
  },
  {
    id: nanoid(),
    title: 'In Progress',
    tasks: []
  }
])
</script>

<template>
  <div>
    <draggable v-model="columns" group="columns" item-key="id" :animation="150" handle=".drag-handle" class="flex gap-4 overflow-x-auto items-start">
      <template #item="{ element: column }: { element: Column }">
        <div class="bg-gray-200 column p-5 rounded min-w-[250px]">
          <header class="font-bold mb-4">
            <drag-handle />
            {{ column.title }}
          </header>
          <TrelloBoardTask v-for="task in column.tasks" :task="task" />
          <footer>
            <button type="button" class="text-gray-500 mt-2 p-1 hover:bg-gray-300 rounded transition-colors">+ Add a
              card</button>
          </footer>
        </div>
      </template>
    </draggable>

  </div>
</template>