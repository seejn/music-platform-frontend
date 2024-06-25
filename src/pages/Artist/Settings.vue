<template>
    <Layout>
        <template #Main>

            <div class="mb-8" id="profile">
                <h2 class="text-2xl font-semibold mb-6">Profile Information</h2>
                <div class="bg-white rounded-lg shadow-lg mb-6">
                    <form action="/update-profile" method="POST" enctype="multipart/form-data">


                        <div class="mb-6 flex items-center">
                            <div class="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
                                <img src="/src/assets/profile/PngItem_307416.png" alt="Profile Image"
                                    class="w-full h-full object-cover">
                            </div>
                            <div class="ml-4">
                                <input type="file" id="profile-image" name="profile_image" accept="image/*"
                                    class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
                            </div>
                        </div>


                        <div class="mb-4">
                            <label for="email" class="block text-lg font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" id="email" name="email"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Email" required>
                        </div>


                        <div class="mb-4">
                            <label for="dob" class="block text-lg font-medium text-gray-700 mb-2">Date of Birth</label>
                            <input type="date" id="dob" name="dob"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md" required>
                        </div>

                 
                        <div class="mb-4">
                            <label class="block text-lg font-medium text-gray-700 mb-2">Gender</label>
                            <div class="flex items-center space-x-4">
                                <label class="flex items-center">
                                    <input type="radio" name="gender" value="male" class="form-radio" required>
                                    <span class="ml-2">Male</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="radio" name="gender" value="female" class="form-radio">
                                    <span class="ml-2">Female</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="radio" name="gender" value="other" class="form-radio">
                                    <span class="ml-2">Other</span>
                                </label>
                            </div>
                        </div>

                    
                        <div class="mt-6">
                            <button type="submit" class="w-full bg-blue-600 text-white px-4 py-2 rounded-md">Update
                                Profile</button>
                        </div>
                    </form>
                </div>
            </div>

   
            <div>
                <h2 class="text-2xl font-semibold mb-6" id="password">Change Password</h2>
                <div class="bg-white rounded-lg shadow-lg mb-6">
                    <form action="/change-password" method="POST">

                        <div class="mb-4">
                            <label for="old-password" class="block text-lg font-medium text-gray-700 mb-2">Old
                                Password</label>
                            <input type="password" id="old-password" name="old_password"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Old Password"
                                required>
                        </div>

                        
                        <div class="mb-4">
                            <label for="new-password" class="block text-lg font-medium text-gray-700 mb-2">New
                                Password</label>
                            <input type="password" id="new-password" name="new_password"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="New Password"
                                required>
                        </div>

                        <div class="mb-6">
                            <label for="confirm-password" class="block text-lg font-medium text-gray-700 mb-2">Confirm
                                New Password</label>
                            <input type="password" id="confirm-password" name="confirm_password"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md"
                                placeholder="Confirm New Password" required>
                        </div>

                        <div class="mt-6">
                            <button type="submit" class="w-full bg-blue-600 text-white px-4 py-2 rounded-md">Change
                                Password</button>
                        </div>
                    </form>
                </div>
            </div>


           
            <div class="mb-8" id="artist">
                <h2 class="text-2xl font-semibold mb-6">Artist Information</h2>
                <div class="bg-white rounded-lg shadow-lg mb-6">
                    <form action="/update-artist-info" method="POST">

                     
                        <div class="mb-4">
                            <label for="stage-name" class="block text-lg font-medium text-gray-700 mb-2">Stage
                                Name</label>
                            <input type="text" id="stage-name" name="stage_name"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Stage Name"
                                required>
                        </div>

                        <div class="mb-4">
                            <label for="biography"
                                class="block text-lg font-medium text-gray-700 mb-2">Biography</label>
                            <textarea id="biography" name="biography"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md" rows="4"
                                placeholder="Biography" required></textarea>
                        </div>

                    
                        <div class="mb-4">
                            <label for="nationality"
                                class="block text-lg font-medium text-gray-700 mb-2">Nationality</label>
                            <input type="text" id="nationality" name="nationality"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Nationality"
                                required>
                        </div>

                      
                        <div class="mb-4">
                            <label for="social-links" class="block text-lg font-medium text-gray-700 mb-2">Social Media
                                Links</label>
                            <input type="text" id="social-links" name="social_links"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md"
                                placeholder="Social Media Links" required>
                        </div>

                     
                        <div class="mt-6">
                            <button type="submit" class="w-full bg-blue-600 text-white px-4 py-2 rounded-md">Update
                                Artist Info</button>
                        </div>
                    </form>
                </div>
            </div>
        </template>
    </Layout>
</template>