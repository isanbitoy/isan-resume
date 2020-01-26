<template>
	<section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="events">
	    <div class="w-100">

	      	<h2 class="mb-5">Events &amp; Conferences</h2>

	      	<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-2">
	      		<div class="resume-content">
	      			<div class="title-content">
	      				<h5 class="mb-0">{{ topic_a }}</h5>
	      				<a @click="openClick_A">
					      	<span class="fa-span">
					      		<font-awesome class="text-warning" :icon="[icon, symbol]"/>
					      	</span>	  
				      		<span class="text-primary">{{ role }}</span>
			      		</a>	
			      		<figure id="modal_a" class="modal">
			      			<span class="close" @click="closeClick_A">&times;</span>
			      			<g-image :src="award_a" class="modal-content" />
			      		</figure>
	      			</div>
	      			<div class="subheading-b mb-3">
			      		{{ venue }}
			      	</div>
	      		</div>
	      		<div class="resume-date text-md-right">
	                <span class="text-primary">{{ date }}</span>
	            </div>
	      	</div>

	      	<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-2">
	      		<div class="resume-content">
	      			<div class="title-content">
	      				<h5 class="mb-0">{{ topic_b }}</h5>
	      				<a @click="openClick_B">
					      	<span class="fa-span">
					      		<font-awesome class="text-warning" :icon="[icon, symbol]"/>
					      	</span>	  
				      		<span class="text-primary">{{ role }}</span>
			      		</a>	
			      		<figure id="modal_b" class="modal">
			      			<span class="close" @click="closeClick_B">&times;</span>
			      			<g-image :src="award_b" class="modal-content" />
			      		</figure>
	      			</div>
	      			<div class="subheading-b mb-3">
			      		{{ venue }}
			      	</div>
	      		</div>
	      		<div class="resume-date text-md-right">
	                <span class="text-primary">{{ date }}</span>
	            </div>
	      	</div>
	      	
	      	<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-2"
	      		v-for="(info, index) in infos" :key="index">
		      	<div class="resume-content">
		      		<div class="title-content">
				      	<h5 class="mb-0">{{ info.topic }}</h5>
			      	</div>
			      	<div class="subheading-b mb-3">
			      		{{ info.venue }}
			      	</div>
		      	</div>
		      	<div class="resume-date text-md-right">
	                <span class="text-primary">{{ info.date }}</span>
	            </div>
	        </div>

	    </div>
	</section>
</template>

<script>
export default {
	data: () => {
		return {
			icon: 'fas',
			symbol: 'award',
			role: 'speaker/proponent',
			venue: '6th Floor - Finster Hall, Ateneo de Davao University, Davao City',
			date: 'February 2014',

			topic_a: 'Advanced Topics Meets Open Source Presentations Here (ATMOSPHERE)',
			award_a: '/img/award_a.png',

			topic_b: 'Conference in Computing Research and Software Engineering Project',
			award_b: '/img/award_b.png',

			infos: [
				{
					topic: 'Ateneo Campus DevCon',
					venue: 'F213 - Finster Bldg. Ateneo de Davao University, Davao City',
					date: 'January 2014',
				},
				{
					topic: 'Google Developers Group DevFest',
					venue: 'Apo View Hotel, Davao City',
					date: 'August 2013',
				},
				{
					topic: 'Software Freedom Day',
					venue: 'Finster Bldg. Ateneo de Davao University, Davao City',
					date: 'July 2011',
				},
				{
					topic: 'Orange & Bronze Software Labs Inc.',
					venue: 'Finster Bldg. Ateneo de Davao University, Davao City',
					date: 'February 2011',
				}
			]
		}
	},
	methods: {
		openClick_A: function() {
			document.querySelector('#modal_a').style.display = 'block'
		},
		closeClick_A: function() {
			document.querySelector('#modal_a').style.display = 'none'
		},
		openClick_B: function() {
			document.querySelector('#modal_b').style.display = 'block'
		},
		closeClick_B: function() {
			document.querySelector('#modal_b').style.display = 'none'
		}
	}
};
</script>

<style scoped>
a {
	cursor: pointer;
}
a:hover span:last-child {
	text-decoration: underline;
}
.modal {
	display: none;
  	position: fixed;
  	z-index: 1;
  	left: 0;
  	top: 0;
  	width: 100%;
  	height: 100%;
  	overflow: auto; /* Enable scroll if needed */
  	background-color: rgb(0,0,0);
  	background-color: rgba(0,0,0,0.7);
}
.modal-content {
	margin: 0 auto;
  	display: block;
  	width: 80%;
  	max-width: 700px;
  	position: absolute;
  	top: 50%;
  	left: 50%;
  	transform: translate(-50%, -50%);
}
.modal-content, .close {
	-webkit-animation-name: zoom;
  	animation-name: zoom;
  	-webkit-animation-duration: 1s;
  	animation-duration: 1s;
}
@-webkit-keyframes zoom {
  	from { 
  		opacity: 0; 
  	}
  	to { 
  		opacity: 1; 
  	}
}
@keyframes zoom {
  	from { 
  		opacity: 0;
  	}
  	to { 
  		opacity: 1;
  	}
}
.close{
  	position: absolute;
  	top: 15px;
  	right: 35px;
  	color: #f1f1f1;
  	font-size: 40px;
  	font-weight: bold;
  	transition: 0.3s;
}
.close:hover,
.close:focus{
  	color: #bbb;
  	text-decoration: none;
  	cursor: pointer;
}
.title-content {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
.fa-span {
	padding: 0 0.5rem 0 0;
}
@media (min-width: 768px) {
	.fa-span {
		padding: 0 0.5rem 0 0.5rem;
	}
}
</style>
