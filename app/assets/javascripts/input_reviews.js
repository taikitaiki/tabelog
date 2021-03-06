$(function() {
  $("#datepicker").datepicker();

  $(".input-text").on("keyup", function(){
    var charNum = String($(this).val().length);
    $(".js-text-count-num").text(charNum);
  });

  $("#star-rating-total").rateYo({
    ratedFill: "#ff9600",
    starWidth: "35px",
    onChange: function (rating, rateYoInstance) {
     $(this).next().text(rating);
   }
  })
    .on("rateyo.set", function (e, data) {
      $(this).on("click", function(){
        $("#review_rate").stop(true).text(data.rating);
      });
    });
  $("#star-rating-total").rateYo({
  });


  $("#star-rating-dish").rateYo({
    ratedFill: "#ff9600",
    starWidth: "25px",
    onChange: function (rating, rateYoInstance) {
     $(this).next().text(rating);
   }
  })
    .on("rateyo.set", function (e, data) {
      $(this).on("click", function(){
        $("#review_food_rate").stop(true).text(data.rating);
      });
    });
  $("#star-rating-dish").rateYo({
  });

  $("#star-rating-cp").rateYo({
    ratedFill: "#ff9600",
    starWidth: "25px",
    onChange: function (rating, rateYoInstance) {
     $(this).next().text(rating);
   }
  })
    .on("rateyo.set", function (e, data) {
      $(this).on("click", function(){
        $("#review_cp_rate").stop(true).text(data.rating);
      });
    });
  $("#star-rating-cp").rateYo({
  });

  $("#star-rating-service").rateYo({
    ratedFill: "#ff9600",
    starWidth: "25px",
    onChange: function (rating, rateYoInstance) {
     $(this).next().text(rating);
   }
  })
    .on("rateyo.set", function (e, data) {
      $(this).on("click", function(){
        $("#review_service_rate").stop(true).text(data.rating);
      });
    });
  $("#star-rating-service").rateYo({
  });

  $("#star-rating-drink").rateYo({
    ratedFill: "#ff9600",
    starWidth: "25px",
    onChange: function (rating, rateYoInstance) {
     $(this).next().text(rating);
   }
  })
    .on("rateyo.set", function (e, data) {
      $(this).on("click", function(){
        $("#review_drink_rate").stop(true).text(data.rating);
      });
    });
  $("#star-rating-drink").rateYo({
  });

  $("#star-rating-atmosphere").rateYo({
    ratedFill: "#ff9600",
    starWidth: "25px",
    onChange: function (rating, rateYoInstance) {
     $(this).next().text(rating);
   }
  })
    .on("rateyo.set", function (e, data) {
      $(this).on("click", function(){
        $("#review_atmosphere").stop(true).text(data.rating);
      });
    });
  $("#star-rating-atmosphere").rateYo({
  });


  $('#review_pic1').after('<span></span>');
    // アップロードするファイルを選択
  $('#review_pic1').change(function(e) {
    var file = $(this).prop('files')[0];

    // 画像以外は処理を停止
    if (! file.type.match('image.*')) {
      // クリア
      $(this).val('');
      $('span').html('');
      return;
    }
        // 画像表示
    var reader = new FileReader();
    reader.onload = function() {
      var img_src = $('<img class= avatar_review, width= >').attr('src', reader.result);
      $(e.target).next().html(img_src);
    }
    reader.readAsDataURL(file);
  });

  $('#review_pic2').after('<span></span>');
  $('#review_pic2').change(function(e) {
    var file = $(this).prop('files')[0];

    if (! file.type.match('image.*')) {
      $(this).val('');
      $('span').html('');
      return;
    }
    var reader = new FileReader();
    reader.onload = function() {
      var img_src = $('<img class= avatar_review, width= >').attr('src', reader.result);
      $(e.target).next().html(img_src);
    }
    reader.readAsDataURL(file);
  });

  $('#review_pic3').after('<span></span>');
  $('#review_pic3').change(function(e) {
    var file = $(this).prop('files')[0];

    if (! file.type.match('image.*')) {
      $(this).val('');
      $('span').html('');
      return;
    }
    var reader = new FileReader();
    reader.onload = function() {
      var img_src = $('<img class= avatar_review, width= >').attr('src', reader.result);
      $(e.target).next().html(img_src);
    }
    reader.readAsDataURL(file);
  });

  $('#review_pic4').after('<span></span>');
  $('#review_pic4').change(function(e) {
    var file = $(this).prop('files')[0];

    if (! file.type.match('image.*')) {
      $(this).val('');
      $('span').html('');
      return;
    }
    var reader = new FileReader();
    reader.onload = function() {
      var img_src = $('<img class= avatar_review, width= >').attr('src', reader.result);
      $(e.target).next().html(img_src);
    }
    reader.readAsDataURL(file);
  });

  $('#review_pic5').after('<span></span>');
  $('#review_pic5').change(function(e) {
    var file = $(this).prop('files')[0];

    if (! file.type.match('image.*')) {
      $(this).val('');
      $('span').html('');
      return;
    }
    var reader = new FileReader();
    reader.onload = function() {
      var img_src = $('<img class= avatar_review, width= >').attr('src', reader.result);
      $(e.target).next().html(img_src);
    }
    reader.readAsDataURL(file);
  });
});

