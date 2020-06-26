<template>
    <div>

        <div>
            <div class="row">
                <router-link to="/employee" class="btn btn-primary">All Employee</router-link>
            </div>
        </div>


        <div class="row justify-content-center">
            <div class="col-xl-12 col-lg-12 col-md-9">
                <div class="card shadow-sm my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="login-form">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Add Employee</h1>
                                    </div>
                                    <form class="user" @submit.prevent="employeeInsert" enctype="multipart/form-data">
                                        <div class="form-group">

                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <input type="text" class="form-control" id="exampleInputFirstName" placeholder="Enter your full Name" v-model="form.name">
                                                    <small class="text-danger" v-if="errors.password">{{ errors.name[0] }}</small>
                                                </div>
                                                <div class="col-md-6">
                                                    <input type="text" class="form-control" id="exampleInputFirstName" placeholder="Enter your Email" v-model="form.email">
                                                    <small class="text-danger" v-if="errors.password">{{ errors.email[0] }}</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">

                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <input type="text" class="form-control" id="exampleInputFirstName" placeholder="Enter your Address" v-model="form.address">
                                                    <small class="text-danger" v-if="errors.password">{{ errors.address[0] }}</small>
                                                </div>
                                                <div class="col-md-6">
                                                    <input type="text" class="form-control" id="exampleInputFirstName" placeholder="Enter your Sallery" v-model="form.sallery">
                                                    <small class="text-danger" v-if="errors.password">{{ errors.sallery[0] }}</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">

                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <input type="date" class="form-control" id="exampleInputFirstName" placeholder="Enter your Joining date" v-model="form.joining_date">
                                                    <small class="text-danger" v-if="errors.password">{{ errors.joining_date[0] }}</small>
                                                </div>
                                                <div class="col-md-6">
                                                    <input type="text" class="form-control" id="exampleInputFirstName" placeholder="Enter your Nid" v-model="form.nid">
                                                    <small class="text-danger" v-if="errors.password">{{ errors.nid[0] }}</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">

                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <input type="text" class="form-control" id="exampleInputFirstName" placeholder="Enter your Phone" v-model="form.phone">
                                                    <small class="text-danger" v-if="errors.password">{{ errors.phone[0] }}</small>
                                                </div>
                                                <div class="col-md-6">

                                                </div>
                                            </div>
                                        </div>


                                        <div class="form-group">

                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <input type="file" class="custom-file-input" id="customFile" @change="onFileSelected">
                                                    <small class="text-danger" v-if="errors.password">{{ errors.photo[0] }}</small>
                                                    <label class="custom-file-label" for="customFile">Choose file</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <img src="form.photo" style="height: 40px; width: 40px;">

                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-block">Submit</button>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {

        created() {
            if (!User.loggedIn()){
                this.$router.push({ name: '/'})
            }
        },

        data() {
            return {
                form: {
                    name: null,
                    email: null,
                    phone: null,
                    sallery: null,
                    address: null,
                    photo: null,
                    nid: null,
                    joining_date: null
                },

                errors: {}
            }
        },

        methods: {
            onFileSelected(event){
                let file = event.target.files[0];
                if (file.size > 1048770){
                    Notification.image_validation();
                } else {
                    console.log(event);
                }
            },

            employeeInsert(){

            }
        }

    }


</script>


