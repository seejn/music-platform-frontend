<template>
    <section class="h-screen overflow-hidden">
        <div class="w-full">
            <Navbar />
        </div>
        <div class="w-full h-full  grid grid-cols-10" style="height: 92%;">
            <div class="h-full overflow-y-auto col-span-2">
                <Sidebar />
            </div>
            <div class="bg-black w-full h-full flex flex-col justify-between overflow-y-auto container col-span-8 ">
                <div class="px-4 pt-4 w-full">
                    <slot name="Main" />
                </div>
            
                <Footer />
            </div>
        </div>
    </section>
</template>