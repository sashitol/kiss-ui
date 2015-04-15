(function() {

	angular
			.module('kissApp')
			.service(
					'AddressService',
					function($http, $q) {

						this.getInstallationsOnAddress = function(cusNo) {
							var d = $q.defer();
							$http
									.get(
											'/kiss-rest/installations/'+cusNo)
									.success(function(response) {
										d.resolve(response);
									}).error(function() {
										d.reject();
									});

							return d.promise;
						};
						this.addInstallationsOnAddress = function(cusNo) {
							var d = $q.defer();
							$http.get(
									'/kiss-rest/cableunit/cu/'
											+ cusNo).success(
									function(response) {
										d.resolve(response);
									}).error(function() {
								d.reject();
							});

							return d.promise;
						};

						this.searchAddress = function(postData,page) {
							var d = $q.defer();

					        $http.post('/kiss-rest/ams/addresses/search/?pageNo='+page, postData).
					        success(function(data, status, headers, config) {
					          // this callback will be called asynchronously
					          // when the response is available
					        	d.resolve(data);
					        	console.log(data);
					        }).
					        error(function(data, status, headers, config) {
					          // called asynchronously if an error occurs
					          // or server returns response with an error status.
					        	d.reject();
					        });
					        return d.promise;
						};
					});

})();