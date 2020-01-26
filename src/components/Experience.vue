<template>
    <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div class="w-100">

            <h2 class="mb-5">Experience</h2>
            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
                v-for="info in jobInfo">
                <div class="resume-content">
                    <h3 class="mb-0">{{ info.job }}</h3>
                    <div class="subheading mb-3">{{ info.company }}</div>
                    <p>{{ info.description }}</p>
                </div>
                <div class="resume-date text-md-right">
                    <span class="text-primary">{{ info.year }}</span>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    data: () => {
        return {
            jobInfo: [
                {
                    job: 'Junior Web and Android developer',
                    company: 'Philippine Global Outsourcing',
                    description: 'work as a junior web and android developer as an intern',
                    year: '2013 - 2014'
                },
                {
                    job: 'CMS Maintenance, PC/laptop cleaning & repair services',
                    company: 'freelance',
                    description: 'recieved some freelance work after I  ',
                    year: '2014 - 2017'
                }
            ]
        }
    }
};
</script>
