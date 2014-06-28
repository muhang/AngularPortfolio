(function(){
	var app = angular.module('pfolio', []);
	
	app.controller("WorkController", function($scope){
		this.works = projects;
	});

	var projects = [
		{
			name: "International Women's Health Coalition (IWHC)",
			url: "http://iwhc.org",
			image: 'iwhc-screenshot.png',
			platform: 'WordPress, Pagelines',
			description: 'I came into IWHC late in the development process. My role focused on UX design and tweaking, social media API integration, ongoing maintanence and updating, custom theme development, custom plugin tweaking, and general style updates and tweaks.',
			tools: 'HTML5, CSS3, PHP, Javascript, jQuery, WordPress Core, Custom CMS',
			featured: 'true',
		},
		{
			name: "Poughkeepsie Plenty",
			url: "http://poughkeepsieplenty.org",
			image: 'pp-screenshot.png',
			platform: 'WordPress, BuddyPress, Local',
			description: 'The first WordPress site that I built from start to finish. Development began with a local build from a photoshop composition created by an in-house designer, which I built into a custom WordPress theme (after adding hover and transition effects). The build was then integrated with BuddyPress, and supports full forum functionality.',
			tools: 'HTML5, CSS3, PHP, Javascript, jQuery, WordPress Core, BuddyPress, Photoshop',
			featured: 'true',
		},
		{
			name: "Match Link",
			url: "http://magicmuhan.com/matchlink",
			image: 'cc-screenshot.png',
			platform: 'Local, Custom, Game',
			description: 'A simple tile matching game made as a three day assignment for Uken Games. Built on Javascript and jQuery, all animations and transitions are done using CSS3, creating a streamlined experience on any desktop device. The game makes use of a sleek, minimal UI and simple, elegant code (viewable on Github).',
			tools: 'HTML5, CSS3, Javascript, jQuery',
			featured: 'true',
		},
		{
			name: "Federation of American Scientists (FAS)",
			url: "http://fas.org",
			image: 'cc-screenshot.png',
			platform: 'WordPress, Headway',
			description: 'Full build in WordPress using Headway Themes (from in-house photoshop composition). I also implemented and helped design advanced UI features across the site. Additional responsibilities included importing of extensive WordPress multi-site blog data, the coding and implementation of custom PHP hooks, and plugin customization and tweaking.',
			tools: 'HTML5, CSS3, PHP, jQuery, Javascript, WordPress Core, Custom CMS',
			featured: 'true',
		},
		{
			name: "Race Forward",
			url: "http://raceforward.org",
			image: 'rf-screenshot.png',
			platform: 'Drupal, Local',
			description: 'Created template for use with Drupal by an external developer. Supplied with a photoshop composition, I created Race Forward in a local build, with full CSS3 and Ajax functionality, and created my own hover and transition effects.',
			tools: 'HTML5, CSS3, Ajax, Javascript, jQuery',
			featured: 'false',
		},
		{
			name: "coinconnect",
			url: "http://coinconnect.com",
			image: 'cc-screenshot.png',
			platform: 'WordPress',
			description: 'A probono site for the start-up company "coinconnect." Created in close collaboration with the company founders, this is a simple splash page for their business built directly in a WordPress child theme, and complete with a custom mail form.',
			tools: 'HTML5, CSS3, jQuery, WordPress Core',
			featured: 'false',
		}, 
		{
			name: "Julia Meyer Dance",
			url: "http://jemdances.com",
			image: 'cc-screenshot.png',
			platform: 'Local, Custom',
			description: 'Designed and built for modern dancer and choreographer Julia Meyer. This site was built using a local LAMP stack then was then deployed to an external host. Simple and sleek, JEM Dances makes use of a mix of advanced UI functionality (such as parallax) without sacrificing usability and speed.',
			tools: 'HTML5, CSS3, jQuery',
			featured: 'false',
		},
	];

	app.directive("aboutPage", function(){
		return {
			restrict: 'E',
			templateUrl: 'about.html'
		};
	});

	app.directive("pastWork", function(){
		return {
			restrict: 'E',
			templateUrl: 'pastwork.html'
		};
	});

	app.directive("contactOverlay", function(){
		return {
			restrict: 'E',
			templateUrl: 'contact.html'
		};
	});

	app.directive("welcomePage", function(){
		return {
			restrict: 'E',
			templateUrl: 'welcome.html'
		};
	});
})();
