<template>
	<section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
		<div class="w-100">

			<h2 class="mb-5">Project Highlights</h2>
			<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-2"
	      		v-for="project in projects">
	      		<div class="resume-content">
	      			<h5 class="mb-0">{{ project.projectName }}</h5>
	      			<p>{{ project.description }}</p>
	      		</div>
	      	</div>
			
		</div>
	</section>
</template>

<script>
export default {
	data: () => {
		return {
			projects: [
				{
					projectName: 'Jose Rizal Academic Information System',
					description: 'Developed and deployed an academic information system aimed for Jose Rizal elementary school Davao city as presented in CS272/CS315 - software engineering project course.'
				},
				{
					projectName: 'A Single Sign-On System aimed for AdDU Systems Using Java-Based Authentication Platform',
					description: 'Led and designed an Information Technology dissertation project that can globally authenticate student credentials to all Ateneo de Davao University Academic Information System.'
				},
				{
					projectName: 'Pharmacy Finder',
					description: 'Led and designed a dynamic android application that navigates local pharmacies located within Davao city using Google Maps technology that query & display prices, brand, and the availability of a medical product.'
				},
				{
					projectName: 'Django Dynamic Scrapy',
					description: 'Developed and managed dynamic scraping website application used to crawl websites and extracting structured data as presented in IT Elective II(Open Source Project).'
				}
			]
		}
	}
};
</script>