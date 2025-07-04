<template>
    <Teleport to="body">
        <div class="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-start justify-end pt-20" @click.self="$emit('close')">
            <div class="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden w-80 mr-6">
                <div class="px-4 pt-4 pb-2 border-b border-gray-100 flex justify-between items-center">
                    <slot name="title" />
                    <button class="text-gray-400 hover:text-gray-600" @click="$emit('close')">
                        &times;
                    </button>
                </div>
                <div class="p-4">
                    <slot />
                </div>
            </div>
        </div>
    </Teleport>
</template>