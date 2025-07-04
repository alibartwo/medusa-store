<template>
    <div class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
        @click="$emit('close')">
        <div class="relative w-full max-w-4xl aspect-video" @click.stop>
            <iframe class="w-full h-full rounded-xl border-none"
                src="https://www.youtube.com/embed/oNzHwI-RMnM?autoplay=1" title="YouTube video player" frameborder="0"
                allow="autoplay; encrypted-media" allowfullscreen />
            <button @click="$emit('close')" class="absolute top-4 right-4 text-white">
                <Icon name="uil:times" class="w-6 h-6 hover:scale-110 transition-transform" />
            </button>
        </div>
    </div>
</template>
