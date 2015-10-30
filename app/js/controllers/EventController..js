/* global eventsApp */
'use strict';

eventsApp.controller('EventController',
	function EventController($scope) {
		
		$scope.orderProp = '-upVoteCount';
		
		$scope.event = {
			name: "Angular Boot Camp",
			date: "1/1/2013",
			time: "10:30 am",
			location: {
				address: 'Rua Ana Soares',
				city: 'Guarulhos',
				state: 'São Paulo' 
			},
			imageUrl: '/img/angularjs-logo.png',
			sessions:[{
				name:'Directives Masterclass',
				creatorName: 'Lucas Araújo',
				duration: '1 hr',
				level: 'Advanced',
				abstract: '-',
				upVoteCount: 0
			},
			{
				name:'Scopes for Fun and Profit',
				creatorName: 'John Doe',
				duration: '30 mins',
				level: 'Introductory',
				abstract: '-',
				upVoteCount: 0
			},
			{
				name: 'Hell Behaved Controllers',
				creatorName: 'Jane Doe',
				duration: '2 hours',
				level: 'Intermediate',
				abstract: '-',
				upVoteCount: 0
			}]
		};
		$scope.upVoteSession = function(session){
			session.upVoteCount++;
		};
		$scope.downVoteSession = function(session){
			session.upVoteCount--;
		};
		$scope.changeValue =function(){
				$scope.show = !$scope.show;
		};
	}
);