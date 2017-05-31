app.controller("CameraCtrl", function($cordovaCamera, $scope){

	var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
	  correctOrientation:true
    };


    $scope.tirarFoto = function(){
    	$cordovaCamera.getPicture(options).then(function(imageData) {
	      var image = document.getElementById('minhaImagem');
        image.src = "data:image/jpeg;base64," + imageData;

	    }, function(err) {
	      // error
	    });
    }
});