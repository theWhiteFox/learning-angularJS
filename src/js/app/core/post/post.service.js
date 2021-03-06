(function() {
  "use strict";

  angular.module("post").factory("Post", function($resource) {
    var url = "/json/post.json";
    return $resource(
      url,
      {},
      {
        query: {
          method: "GET",
          params: {},
          isArray: true,
          cache: false
          // transformResponse,
          // interceptor
        },
        get: {
          method: "GET",
          // params: {"id": @id},
          isArray: true,
          cache: false
        }
      }
    );
  });
})();
