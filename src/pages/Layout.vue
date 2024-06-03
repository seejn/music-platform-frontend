<template>
    <section class="h-screen overflow-hidden">
        <div class="w-full">
            <Navbar />
        </div>
        <div class="w-full h-full  grid grid-cols-10" style="height: 92%;">
            <div class="h-full overflow-y-auto col-span-2">
                <Sidebar />
            </div>
            <div class="w-full h-full overflow-y-auto container col-span-8 px-4 pt-4">
                <slot name="Main" />
                <Footer />
            </div>
        </div>
    </section>
</template>