(function() {
  $(function() {
    var body, close_modal, menu_toggle, modal, modal_engaged;

    modal_engaged = false;
    modal = $(".modal");
    body = $('body');
    menu_toggle = $('.header-menu-icon, .cover-logo-img');
    menu_toggle.bind("click", function(e) {
      body.toggleClass("menu-open");
      menu_toggle.toggleClass("icon-menu icon-close");
      if (body.hasClass("menu-open")) {
        window.scrollTo(0, 0);
      }
      return false;
    });
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        body.removeClass("menu-open");
        menu_toggle.removeClass("icon-close");
        menu_toggle.addClass("icon-menu");
        return close_modal();
      }
    });
    $(".js-photo-detail").bind("click", function(e) {
      var data, output;

      if (modal_engaged) {
        return false;
      }
      body.addClass("noscroll");
      modal_engaged = true;
      modal.html(null);
      modal.addClass("modal-visible");
      data = {
        src: $(this).attr("href")
      };
      output = Mustache.render($("#photo-detail-contents").html(), data);
      modal.html(output);
      setTimeout(function() {
        return $(".modal-photo-card", modal).addClass("modal-photo-card-visible");
      }, 50);
      return false;
    });
    $(".whos-who-toggle").bind("click", function(e) {
      var curr_c, curr_t, self, target;

      self = $(this);
      target = $(self.attr('href'));
      if (self.hasClass('whos-who-toggle-active')) {
        return false;
      }
      curr_t = $('.whos-who-toggle-active');
      curr_c = $('.whos-who-section-active');
      curr_t.removeClass('whos-who-toggle-active');
      curr_c.removeClass('whos-who-section-active');
      self.addClass('whos-who-toggle-active');
      target.addClass('whos-who-section-active');
      return false;
    });
    $(document).mouseup(function(e) {
      var target;

      target = $(e.target);
      if (!target.hasClass("modal-photo-card-img")) {
        return close_modal();
      }
    });
    close_modal = function() {
      if (!modal_engaged) {
        return;
      }
      modal.removeClass("modal-visible");
      modal_engaged = false;
      body.removeClass("noscroll");
      return false;
    };
    return modal.on("click.fiesta-focus", ".icon-close", close_modal);
  });

}).call(this);
