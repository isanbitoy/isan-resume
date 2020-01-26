<template>
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div class="w-100">
            <h1 class="mb-0">Lisandro<span class="text-primary">Bitoy</span></h1>
            <div class="subheading mb-5">
                Tagum City, Davao del Norte · (+63) 995-108-5425 ·
                <a href="mailto:name@email.com">isanbitoy@gmail.com</a>
            </div>
            <p class="lead mb-5">
                I aim to pursue a career that will involve the application of my skills in research, development, and management. Having a bachelor degree in Information Technology from Ateneo de Davao University I desire to further my knowledge in the IT domain and emerging trends in the IT sector. Possess an ability to understand and test software, able to work in a fast-paced environment to set deadlines with efficient results, highly organize and detail oriented with a creative aptitude for project work.
            </p>
        </div>
    </section>
</template>

<style scoped>
.social-icons a {
    cursor: pointer;
    display: inline-block;
    height: 3.5rem;
    width: 3.5rem;
    background-color: var(--secondary);
    color: #fff !important;
    border-radius: 100%;
    text-align: center;
    font-size: 1.5rem;
    line-height: 3.5rem;
    margin-right: 1rem;

    @media (max-width: 380px) {
        margin-right: 0.5rem;
    }

    @media (max-width: 350px) {
        margin-right: 0.2rem;
    }
}

.social-icons a:last-child {
    margin-right: 0;
}

.social-icons a:hover {
    background-color: var(--primary);
}
</style>
