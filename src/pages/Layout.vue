<template>
    <section class="h-screen overflow-hidden">
        <div class="w-full" style="height: 8%;">
            <Navbar />
        </div>
        <div class="w-full h-full  flex" style="height: 92%;">
            <div class="w-80 h-full overflow-y-auto">
                <Sidebar />
            </div>
            <div class="w-full h-full overflow-y-auto container mx-auto px-4 pt-4">
                <slot name="Main" />
                <Footer />
            </div>
        </div>
    </section>
</template>