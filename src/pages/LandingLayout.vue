<template>
    <section class="h-screen overflow-hidden">
        <div class="w-full">
            <Navbar />
        </div>
        <div class="w-full h-full" style="height: 92%;">
            
            <div class="bg-black w-full h-full flex flex-col justify-between overflow-y-auto container">
                <div class="px-4 pt-4 w-full">
                    <slot name="Main" />
                </div>
            
                <Footer />
            </div>
        </div>
    </section>
</template>