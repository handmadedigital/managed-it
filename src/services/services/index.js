export default {
  getService(serviceTitle){
    // Here you would make a request to your server

    // return ctx.$http.get('http://yourserver.com/api', function (data, status, request) {
    //       return data;
    //   }).error(function (data, status, request) {

    console.log(serviceTitle);
    var baseURL = 'https://managed-it-services.firebaseio.com/';
    var ref = new Firebase(baseURL);
    var allServices = new Firebase(baseURL+'services/'+ serviceTitle);
    var service = {
      bulletPoints: [],
      imgSection: '',
      mainDescription: '',
      parallaxSection: '',
      title: ''
    };


    // Attach an asynchronous callback to read the data at our posts reference
    allServices.on("value", function(snapshot) {
      var item = snapshot.val();
      console.log('here you go boss man');
      console.log(item);

      service.bulletPoints = item.bulletPoints;
      service.imgSection = item.imgSection;
      service.mainDescription = item.mainDescription;
      service.title = item.title;
      service.parallaxSection = item.parallaxSection;

    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });

    return {
      service : service
    }

  },
  getAllServices(serviceTitle){
    // Here you would make a request to your server

    // return ctx.$http.get('http://yourserver.com/api', function (data, status, request) {
    //       return data;
    //   }).error(function (data, status, request) {

    console.log(serviceTitle);
    var baseURL = 'https://managed-it-services.firebaseio.com/';
    var ref = new Firebase(baseURL);
    var allServices = new Firebase(baseURL+'services/'+ serviceTitle);
    var services = [];


    // Attach an asynchronous callback to read the data at our posts reference
    allServices.on("value", function(snapshot) {
      var item = snapshot.val();

      services.push(item);

    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });

    return {
      services : services
    }

  }
}
