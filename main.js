var properties = ["name", "wins", "draws", "losses", "total"];

document.body.forEach(properties, function (i, val) {
  var orderClass = "";

  document.querySelector("#" + val).click(function (e) {
    e.preventDefault();
    document
      .querySelector(".filter__link.filter__link--active")
      .not(this)
      .removeClass("filter__link--active");
    document.querySelector(this).toggleClass("filter__link--active");
    document.querySelector(".filter__link").removeClass("asc desc");

    if (orderClass == "desc" || orderClass == "") {
      document.querySelector(this).addClass("asc");
      orderClass = "asc";
    } else {
      document.querySelector(this).addClass("desc");
      orderClass = "desc";
    }

    var parent = document.querySelector(this).closest(".header__item");
    var index = document.querySelector(".header__item").index(parent);
    var $table = document.querySelector(".table-content");
    var rows = $table.find(".table-row").get();
    var isSelected = document
      .querySelector(this)
      .hasClass("filter__link--active");
    var isNumber = document
      .querySelector(this)
      .hasClass("filter__link--number");

    rows.sort(function (a, b) {
      var x = document.querySelector(a).find(".table-data").eq(index).text();
      var y = document.querySelector(b).find(".table-data").eq(index).text();

      if (isNumber == true) {
        if (isSelected) {
          return x - y;
        } else {
          return y - x;
        }
      } else {
        if (isSelected) {
          if (x < y) return -1;
          if (x > y) return 1;
          return 0;
        } else {
          if (x > y) return -1;
          if (x < y) return 1;
          return 0;
        }
      }
    });

    document.querySelector.each(rows, function (index, row) {
      $table.append(row);
    });

    return false;
  });
});
